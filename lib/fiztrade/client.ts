import 'server-only'
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

/** Retail margins applied on top of Fiztrade bid/ask prices, by metal. */
const MARGIN: Record<string, number> = {
  gold:      1.05,
  silver:    1.10,
  platinum:  1.10,
  palladium: 1.10,
}

const TTL_PRICES  = 5 * 60 * 1000          // 5 min
const TTL_CATALOG = 24 * 60 * 60 * 1000    // 24 h
const FETCH_TIMEOUT = 5000                  // 5 s — abort if the API doesn't respond

// ─── In-memory cache (survives across requests in the same Node process) ──────

interface CacheEntry<T> {
  data: T
  expiresAt: number
}

const cache = {
  spotPrices:    null as CacheEntry<SpotPrice[]>        | null,
  catalog:       null as CacheEntry<FizCatalogProduct[]>| null,
  productPrices: null as CacheEntry<FizProductPrice[]>  | null,
}

function isFresh<T>(entry: CacheEntry<T> | null): entry is CacheEntry<T> {
  return entry !== null && Date.now() < entry.expiresAt
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

export async function getSpotPrices(): Promise<SpotPrice[]> {
  if (isFresh(cache.spotPrices)) return cache.spotPrices.data

  if (!API_TOKEN) throw new Error('FIZCONNECT_API_TOKEN env var is required')

  const res = await fetchWithTimeout(`${BASE_URL}/FizServices/GetSpotPriceData/${API_TOKEN}`)

  if (!res.ok) throw new Error(`Spot price fetch failed: ${res.status}`)

  const d: FizSpotPriceResponse = await res.json()

  const dir = (change: number): SpotPrice['direction'] =>
    change > 0 ? 'up' : change < 0 ? 'down' : 'flat'

  const data: SpotPrice[] = [
    { metal: 'gold',      bid: d.goldBid,      ask: d.goldAsk      * MARGIN.gold,      change: d.goldChange,      changePercent: d.goldChangePercent,      direction: dir(d.goldChange) },
    { metal: 'silver',    bid: d.silverBid,    ask: d.silverAsk    * MARGIN.silver,    change: d.silverChange,    changePercent: d.silverChangePercent,    direction: dir(d.silverChange) },
    { metal: 'platinum',  bid: d.platinumBid,  ask: d.platinumAsk  * MARGIN.platinum,  change: d.platinumChange,  changePercent: d.platinumChangePercent,  direction: dir(d.platinumChange) },
    { metal: 'palladium', bid: d.palladiumBid, ask: d.palladiumAsk * MARGIN.palladium, change: d.palladiumChange, changePercent: d.palladiumChangePercent, direction: dir(d.palladiumChange) },
  ]

  cache.spotPrices = { data, expiresAt: Date.now() + TTL_PRICES }
  return data
}

// ─── Product catalog ──────────────────────────────────────────────────────────

/** Fetch catalog details (description, purity, family, images) for a list of product codes. */
export async function getProductCatalog(codes: string[]): Promise<FizCatalogProduct[]> {
  if (isFresh(cache.catalog)) return cache.catalog.data

  if (!API_TOKEN) throw new Error('FIZCONNECT_API_TOKEN env var is required')
  const res = await fetchWithTimeout(`${BASE_URL}/FizServices/GetProductCatalog/${API_TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: codes }),
  })
  if (!res.ok) throw new Error(`GetProductCatalog failed: ${res.status}`)
  const data = await res.json()
  if (data.error) throw new Error(`GetProductCatalog error: ${data.error}`)

  cache.catalog = { data: data as FizCatalogProduct[], expiresAt: Date.now() + TTL_CATALOG }
  return cache.catalog.data
}

/** Fetch live bid/ask prices (all tiers) for a list of product codes. */
export async function getProductPrices(codes: string[]): Promise<FizProductPrice[]> {
  if (isFresh(cache.productPrices)) return cache.productPrices.data

  if (!API_TOKEN) throw new Error('FIZCONNECT_API_TOKEN env var is required')
  const res = await fetchWithTimeout(`${BASE_URL}/FizServices/GetPricesForProducts/${API_TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(codes),
  })
  if (!res.ok) throw new Error(`GetPricesForProducts failed: ${res.status}`)
  const data = await res.json()
  if (data.error) throw new Error(`GetPricesForProducts error: ${data.error}`)

  cache.productPrices = { data: data as FizProductPrice[], expiresAt: Date.now() + TTL_PRICES }
  return cache.productPrices.data
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
    const desc   = item.description ?? ''
    const name   = family && !desc.toLowerCase().includes(family.toLowerCase())
      ? `${family} — ${desc}`
      : desc || family

    return [{
      code:         item.code,
      name,
      family:       item.family ?? '',
      metal,
      category:     item.code.includes('BAR') || item.family?.includes('BAR') ? 'bars' : 'coins',
      weight:       item.weight ?? '',
      weightOzt:    parseWeightOzt(item.weight ?? '1 oz'),
      purity:       item.purity ?? '',
      origin:       item.origin ?? '',
      availability: price.availability,
      isActiveSell: price.isActiveSell === 'Y',
      isActiveBuy:  price.isActiveBuy  === 'Y',
      ask:          tier1.ask * (MARGIN[metal] ?? 1.10),
      bid:          tier1.bid,
      imageUrl:     pickImage(item.images, ['obv250', 'obverse', 'default']),
      thumbUrl:     pickImage(item.images, ['small', 'obv100', 'default']),
    }]
  })
}
