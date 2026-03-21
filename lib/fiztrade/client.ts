import 'server-only'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import type {
  FizSpotPriceResponse,
  SpotPrice,
  FizCatalogProduct,
  FizProductImage,
  FizProductPrice,
  ShopProduct,
} from './types'

const BASE_URL = process.env.FIZCONNECT_URL ?? 'https://stage-connect.fiztrade.com'
const API_TOKEN = process.env.FIZCONNECT_API_TOKEN

/** Retail margins applied to product sell pricing, by metal. */
const MARGIN: Record<string, number> = {
  gold:      1.05,
  silver:    1.10,
  platinum:  1.10,
  palladium: 1.10,
}

const TTL_PRICES = 5 * 60 * 1000          // 5 min
const TTL_CATALOG = 24 * 60 * 60 * 1000   // 24 h
const FETCH_TIMEOUT = 5000                 // 5 s — abort if the API doesn't respond
const DISK_CACHE_FILE = path.join(os.tmpdir(), 'levant-fiztrade-cache.json')

// ─── In-memory cache (survives across requests in the same Node process) ──────

interface TimedCacheEntry<T> {
  data: T
  expiresAt: number
  updatedAt: number
}

interface DiskCacheShape {
  spotPrices: TimedCacheEntry<SpotPrice[]> | null
  catalog: Record<string, TimedCacheEntry<FizCatalogProduct[]>>
  productPrices: Record<string, TimedCacheEntry<FizProductPrice[]>>
}

let spotPricesCache: TimedCacheEntry<SpotPrice[]> | null = null
const catalogCache = new Map<string, TimedCacheEntry<FizCatalogProduct[]>>()
const productPricesCache = new Map<string, TimedCacheEntry<FizProductPrice[]>>()

let diskCachePromise: Promise<void> | null = null
let persistCachePromise: Promise<void> = Promise.resolve()

function isFresh<T>(entry: TimedCacheEntry<T> | null | undefined): entry is TimedCacheEntry<T> {
  return !!entry && Date.now() < entry.expiresAt
}

function normalizeCodes(codes: string[]): string[] {
  return [...new Set(codes.map(code => code.trim()).filter(Boolean))].sort()
}

function getCodesCacheKey(codes: string[]): string {
  return normalizeCodes(codes).join('|')
}

function toTimedCacheEntry<T>(data: T, ttl: number): TimedCacheEntry<T> {
  const now = Date.now()
  return {
    data,
    updatedAt: now,
    expiresAt: now + ttl,
  }
}

function getCachedData<T>(entry: TimedCacheEntry<T> | null | undefined): T | null {
  return entry ? entry.data : null
}

function mergeByCode<T extends { code: string }>(primary: T[], fallback: T[]): T[] {
  const merged = new Map<string, T>()

  for (const item of fallback) merged.set(item.code, item)
  for (const item of primary) merged.set(item.code, item)

  return [...merged.values()]
}

function filterByRequestedCodes<T extends { code: string }>(items: T[], codes: string[]): T[] {
  const wanted = new Set(normalizeCodes(codes))
  return items.filter(item => wanted.has(item.code))
}

function buildBestEffortFallback<T extends { code: string }>(
  store: Map<string, TimedCacheEntry<T[]>>,
  codes: string[],
): T[] {
  const wanted = normalizeCodes(codes)
  const wantedSet = new Set(wanted)
  const merged = new Map<string, T>()

  const entries = [...store.values()].sort((a, b) => b.updatedAt - a.updatedAt)
  for (const entry of entries) {
    for (const item of entry.data) {
      if (wantedSet.has(item.code) && !merged.has(item.code)) {
        merged.set(item.code, item)
      }
    }
  }

  return wanted
    .map(code => merged.get(code))
    .filter((item): item is T => !!item)
}

async function ensureDiskCacheLoaded(): Promise<void> {
  if (diskCachePromise) return diskCachePromise

  diskCachePromise = (async () => {
    try {
      const raw = await fs.readFile(DISK_CACHE_FILE, 'utf8')
      const parsed = JSON.parse(raw) as Partial<DiskCacheShape>

      if (!spotPricesCache && parsed.spotPrices) {
        spotPricesCache = parsed.spotPrices
      }

      for (const [key, entry] of Object.entries(parsed.catalog ?? {})) {
        if (!catalogCache.has(key)) catalogCache.set(key, entry)
      }

      for (const [key, entry] of Object.entries(parsed.productPrices ?? {})) {
        if (!productPricesCache.has(key)) productPricesCache.set(key, entry)
      }
    } catch (error) {
      const err = error as NodeJS.ErrnoException
      if (err.code !== 'ENOENT') {
        console.warn('Unable to load Fiztrade disk cache:', error)
      }
    }
  })()

  return diskCachePromise
}

function persistCacheToDisk(): Promise<void> {
  persistCachePromise = persistCachePromise.then(async () => {
    try {
      const payload: DiskCacheShape = {
        spotPrices: spotPricesCache,
        catalog: Object.fromEntries(catalogCache),
        productPrices: Object.fromEntries(productPricesCache),
      }
      const tempFile = `${DISK_CACHE_FILE}.${process.pid}.tmp`
      await fs.writeFile(tempFile, JSON.stringify(payload), 'utf8')
      await fs.rename(tempFile, DISK_CACHE_FILE)
    } catch (error) {
      console.warn('Unable to persist Fiztrade disk cache:', error)
    }
  })

  return persistCachePromise
}

// ─── Fetch with real abort ─────────────────────────────────────────────────────

async function fetchWithTimeout(input: RequestInfo, init: RequestInit = {}): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT)
  try {
    return await fetch(input, { ...init, signal: controller.signal })
  } finally {
    clearTimeout(timeoutId)
  }
}

// ─── Spot prices ──────────────────────────────────────────────────────────────

function normalizeChangePercent(ask: number, change: number, changePercent: number): number {
  if (Number.isFinite(change) && change === 0) return 0

  const needsFallback =
    !Number.isFinite(changePercent) ||
    (changePercent === 0 && Number.isFinite(change) && change !== 0)

  if (!needsFallback) return changePercent
  if (!Number.isFinite(ask) || !Number.isFinite(change)) return 0

  const previous = ask - change
  if (!Number.isFinite(previous) || previous === 0) return 0

  const normalized = (change / previous) * 100
  return Number.isFinite(normalized) ? normalized : 0
}

export async function getSpotPrices(): Promise<SpotPrice[]> {
  await ensureDiskCacheLoaded()

  const cachedSpotPrices: TimedCacheEntry<SpotPrice[]> | null = spotPricesCache
  const cachedSpotData = getCachedData(cachedSpotPrices)
  if (isFresh(cachedSpotPrices)) return cachedSpotPrices.data

  if (!API_TOKEN) {
    if (cachedSpotData?.length) return cachedSpotData
    throw new Error('FIZCONNECT_API_TOKEN env var is required')
  }

  try {
    const res = await fetchWithTimeout(`${BASE_URL}/FizServices/GetSpotPriceData/${API_TOKEN}`)

    if (!res.ok) throw new Error(`Spot price fetch failed: ${res.status}`)

    const d: Partial<FizSpotPriceResponse> & { error?: string } = await res.json()

    if (d.error) throw new Error(`Spot price fetch error: ${d.error}`)

    const requiredFields: Array<keyof FizSpotPriceResponse> = [
      'goldAsk', 'goldBid', 'goldChange', 'goldChangePercent',
      'silverAsk', 'silverBid', 'silverChange', 'silverChangePercent',
      'platinumAsk', 'platinumBid', 'platinumChange', 'platinumChangePercent',
      'palladiumAsk', 'palladiumBid', 'palladiumChange', 'palladiumChangePercent',
    ]

    for (const field of requiredFields) {
      if (typeof d[field] !== 'number') {
        throw new Error(`Spot price fetch returned invalid payload for ${field}`)
      }
    }

    const spotPayload = d as FizSpotPriceResponse

    const dir = (change: number): SpotPrice['direction'] =>
      change > 0 ? 'up' : change < 0 ? 'down' : 'flat'

    const data: SpotPrice[] = [
      { metal: 'gold',      bid: spotPayload.goldBid,      ask: spotPayload.goldAsk,      change: spotPayload.goldChange,      changePercent: normalizeChangePercent(spotPayload.goldAsk, spotPayload.goldChange, spotPayload.goldChangePercent),      direction: dir(spotPayload.goldChange) },
      { metal: 'silver',    bid: spotPayload.silverBid,    ask: spotPayload.silverAsk,    change: spotPayload.silverChange,    changePercent: normalizeChangePercent(spotPayload.silverAsk, spotPayload.silverChange, spotPayload.silverChangePercent),    direction: dir(spotPayload.silverChange) },
      { metal: 'platinum',  bid: spotPayload.platinumBid,  ask: spotPayload.platinumAsk,  change: spotPayload.platinumChange,  changePercent: normalizeChangePercent(spotPayload.platinumAsk, spotPayload.platinumChange, spotPayload.platinumChangePercent),  direction: dir(spotPayload.platinumChange) },
      { metal: 'palladium', bid: spotPayload.palladiumBid, ask: spotPayload.palladiumAsk, change: spotPayload.palladiumChange, changePercent: normalizeChangePercent(spotPayload.palladiumAsk, spotPayload.palladiumChange, spotPayload.palladiumChangePercent), direction: dir(spotPayload.palladiumChange) },
    ]

    spotPricesCache = toTimedCacheEntry(data, TTL_PRICES)
    void persistCacheToDisk()
    return data
  } catch (error) {
    const fallbackSpotData = getCachedData(spotPricesCache)
    if (fallbackSpotData?.length) {
      console.warn('Using cached spot prices after live fetch failure:', error)
      return fallbackSpotData
    }
    throw error
  }
}

// ─── Product catalog ──────────────────────────────────────────────────────────

/** Fetch catalog details (description, purity, family, images) for a list of product codes. */
export async function getProductCatalog(codes: string[]): Promise<FizCatalogProduct[]> {
  await ensureDiskCacheLoaded()

  const normalizedCodes = normalizeCodes(codes)
  const cacheKey = getCodesCacheKey(normalizedCodes)
  const cached = catalogCache.get(cacheKey)
  const cachedCatalog = getCachedData(cached)

  if (isFresh(cached)) return cached.data

  const fallback = cachedCatalog?.length
    ? cachedCatalog
    : buildBestEffortFallback(catalogCache, normalizedCodes)

  if (!API_TOKEN) {
    if (fallback.length) return fallback
    throw new Error('FIZCONNECT_API_TOKEN env var is required')
  }

  try {
    const res = await fetchWithTimeout(`${BASE_URL}/FizServices/GetProductCatalog/${API_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: normalizedCodes }),
    })

    if (!res.ok) throw new Error(`GetProductCatalog failed: ${res.status}`)

    const data = await res.json()
    if (data.error) throw new Error(`GetProductCatalog error: ${data.error}`)

    const liveItems = filterByRequestedCodes(data as FizCatalogProduct[], normalizedCodes)
    const merged = mergeByCode(liveItems, fallback)

    catalogCache.set(cacheKey, toTimedCacheEntry(merged, TTL_CATALOG))
    void persistCacheToDisk()
    return merged
  } catch (error) {
    if (fallback.length) {
      console.warn(`Using cached product catalog for ${normalizedCodes.length} codes after live fetch failure:`, error)
      return fallback
    }
    throw error
  }
}

/** Fetch live bid/ask prices (all tiers) for a list of product codes. */
export async function getProductPrices(codes: string[]): Promise<FizProductPrice[]> {
  await ensureDiskCacheLoaded()

  const normalizedCodes = normalizeCodes(codes)
  const cacheKey = getCodesCacheKey(normalizedCodes)
  const cached = productPricesCache.get(cacheKey)
  const cachedPrices = getCachedData(cached)

  if (isFresh(cached)) return cached.data

  const fallback = cachedPrices?.length
    ? cachedPrices
    : buildBestEffortFallback(productPricesCache, normalizedCodes)

  if (!API_TOKEN) {
    if (fallback.length) return fallback
    throw new Error('FIZCONNECT_API_TOKEN env var is required')
  }

  try {
    const res = await fetchWithTimeout(`${BASE_URL}/FizServices/GetPricesForProducts/${API_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(normalizedCodes),
    })

    if (!res.ok) throw new Error(`GetPricesForProducts failed: ${res.status}`)

    const data = await res.json()
    if (data.error) throw new Error(`GetPricesForProducts error: ${data.error}`)

    const liveItems = filterByRequestedCodes(data as FizProductPrice[], normalizedCodes)
    const merged = mergeByCode(liveItems, fallback)

    productPricesCache.set(cacheKey, toTimedCacheEntry(merged, TTL_PRICES))
    void persistCacheToDisk()
    return merged
  } catch (error) {
    if (fallback.length) {
      console.warn(`Using cached product prices for ${normalizedCodes.length} codes after live fetch failure:`, error)
      return fallback
    }
    throw error
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const METAL_MAP: Record<number, ShopProduct['metal']> = {
  1: 'gold', 2: 'silver', 3: 'platinum', 4: 'palladium',
}

/** Parse weight strings ("1 oz", "1/2 oz", "10 oz", "100 oz") to decimal troy oz. */
export function parseWeightOzt(weight: string): number {
  const s = weight.trim().replace(/\s*oz.*$/i, '')
  if (s.includes('/')) {
    const [num, den] = s.split('/').map(Number)
    return num / den
  }
  return parseFloat(s) || 1
}

/** Pick the best image URL from a product images array. */
function pickImage(images: FizProductImage[], preferred: string[]): string | null {
  for (const type of preferred) {
    const img = images.find(i => i.imgType === type)
    if (img?.imgPath) return img.imgPath
  }
  return images[0]?.imgPath ?? null
}

/**
 * Merge catalog + price data into a flat ShopProduct list.
 * Uses tier-1 ask (retail, 1–49 qty) as the display price.
 */
export function mergeShopProducts(
  catalog: FizCatalogProduct[],
  prices: FizProductPrice[],
): ShopProduct[] {
  const priceMap = new Map(prices.map(p => [p.code, p]))

  return catalog.flatMap((item): ShopProduct[] => {
    const price = priceMap.get(item.code)
    if (!price) return []

    const tier1 = price.tiers['1']
    if (!tier1) return []

    const metalNum = price.metalType
    const metal = METAL_MAP[metalNum] ?? 'gold'

    // Derive a clean display name: "<family> <description>"
    const family = item.family ?? ''
    const desc = item.description ?? ''
    const name = family && !desc.toLowerCase().includes(family.toLowerCase())
      ? `${family} — ${desc}`
      : desc || family

    return [{
      code: item.code,
      name,
      family: item.family ?? '',
      metal,
      category: item.code.includes('BAR') || item.family?.includes('BAR') ? 'bars' : 'coins',
      weight: item.weight ?? '',
      weightOzt: parseWeightOzt(item.weight ?? '1 oz'),
      purity: item.purity ?? '',
      origin: item.origin ?? '',
      availability: price.availability,
      isActiveSell: price.isActiveSell === 'Y',
      isActiveBuy: price.isActiveBuy === 'Y',
      ask: tier1.ask * (MARGIN[metal] ?? 1.10),
      bid: tier1.bid,
      imageUrl: pickImage(item.images, ['obv250', 'obverse', 'default']),
      thumbUrl: pickImage(item.images, ['small', 'obv100', 'default']),
    }]
  })
}
