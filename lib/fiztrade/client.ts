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

async function fetchWithTimeout(input: RequestInfo, init: RequestInit & { next?: { revalidate?: number } } = {}): Promise<Response> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('FizTrade request timed out')), 5000)
  )
  return Promise.race([fetch(input, init), timeout])
}

const REVALIDATE_PRICES  = 300         // 5 min — live prices
const REVALIDATE_CATALOG = 60 * 60 * 24 // 24 h  — product info / images rarely change

export async function getSpotPrices(): Promise<SpotPrice[]> {
  if (!API_TOKEN) {
    throw new Error('FIZCONNECT_API_TOKEN env var is required')
  }

  const res = await fetchWithTimeout(`${BASE_URL}/FizServices/GetSpotPriceData/${API_TOKEN}`, {
    next: { revalidate: REVALIDATE_PRICES },
  })

  if (!res.ok) {
    throw new Error(`FizTrade spot price fetch failed: ${res.status}`)
  }

  // API returns a flat object: { goldAsk, goldBid, goldChange, ... }
  const d: FizSpotPriceResponse = await res.json()

  const dir = (change: number): SpotPrice['direction'] =>
    change > 0 ? 'up' : change < 0 ? 'down' : 'flat'

  return [
    { metal: 'gold',      bid: d.goldBid,      ask: d.goldAsk,      change: d.goldChange,      changePercent: d.goldChangePercent,      direction: dir(d.goldChange) },
    { metal: 'silver',    bid: d.silverBid,    ask: d.silverAsk,    change: d.silverChange,    changePercent: d.silverChangePercent,    direction: dir(d.silverChange) },
    { metal: 'platinum',  bid: d.platinumBid,  ask: d.platinumAsk,  change: d.platinumChange,  changePercent: d.platinumChangePercent,  direction: dir(d.platinumChange) },
    { metal: 'palladium', bid: d.palladiumBid, ask: d.palladiumAsk, change: d.palladiumChange, changePercent: d.palladiumChangePercent, direction: dir(d.palladiumChange) },
  ]
}

// ─── Product catalog ──────────────────────────────────────────────────────────

/** Fetch catalog details (description, purity, family, images) for a list of product codes. */
export async function getProductCatalog(codes: string[]): Promise<FizCatalogProduct[]> {
  if (!API_TOKEN) throw new Error('FIZCONNECT_API_TOKEN env var is required')
  const res = await fetchWithTimeout(`${BASE_URL}/FizServices/GetProductCatalog/${API_TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: codes }),
    next: { revalidate: REVALIDATE_CATALOG },
  })
  if (!res.ok) throw new Error(`GetProductCatalog failed: ${res.status}`)
  const data = await res.json()
  if (data.error) throw new Error(`GetProductCatalog error: ${data.error}`)
  return data as FizCatalogProduct[]
}

/** Fetch live bid/ask prices (all tiers) for a list of product codes. */
export async function getProductPrices(codes: string[]): Promise<FizProductPrice[]> {
  if (!API_TOKEN) throw new Error('FIZCONNECT_API_TOKEN env var is required')
  const res = await fetchWithTimeout(`${BASE_URL}/FizServices/GetPricesForProducts/${API_TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(codes),
    next: { revalidate: REVALIDATE_PRICES },
  })
  if (!res.ok) throw new Error(`GetPricesForProducts failed: ${res.status}`)
  const data = await res.json()
  if (data.error) throw new Error(`GetPricesForProducts error: ${data.error}`)
  return data as FizProductPrice[]
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const METAL_MAP: Record<number, ShopProduct['metal']> = {
  1: 'gold', 2: 'silver', 3: 'platinum', 4: 'palladium',
}

/** Parse FizTrade weight strings ("1 oz", "1/2 oz", "10 oz", "100 oz") to decimal troy oz. */
export function parseWeightOzt(weight: string): number {
  const s = weight.trim().replace(/\s*oz.*$/i, '')
  if (s.includes('/')) {
    const [num, den] = s.split('/').map(Number)
    return num / den
  }
  return parseFloat(s) || 1
}

/** Pick the best image URL from a FizTrade images array. */
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
      ask:          tier1.ask,
      bid:          tier1.bid,
      imageUrl:     pickImage(item.images, ['obv250', 'obverse', 'default']),
      thumbUrl:     pickImage(item.images, ['small', 'obv100', 'default']),
    }]
  })
}
