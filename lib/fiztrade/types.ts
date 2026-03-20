// Actual flat response from GET /FizServices/GetSpotPriceData/:token
export interface FizSpotPriceResponse {
  timestamp: string
  spotTime: string
  areStale: number
  activeFeed: string
  goldAsk: number
  goldBid: number
  goldChange: number
  goldChangePercent: number
  silverAsk: number
  silverBid: number
  silverChange: number
  silverChangePercent: number
  platinumAsk: number
  platinumBid: number
  platinumChange: number
  platinumChangePercent: number
  palladiumAsk: number
  palladiumBid: number
  palladiumChange: number
  palladiumChangePercent: number
}

// Normalized display model
export interface SpotPrice {
  metal: 'gold' | 'silver' | 'platinum' | 'palladium'
  bid: number
  ask: number
  change: number
  changePercent: number
  direction: 'up' | 'down' | 'flat'
}

// ─── Product catalog types ────────────────────────────────────────────────────

export interface FizProductImage {
  imgType: string   // 'default' | 'obverse' | 'reverse' | 'small' | 'obv250' | 'obv190' | 'obv100' | 'rev250' | etc.
  imgPath: string
  imgCode: string
}

/** Response from POST /FizServices/GetProductCatalog */
export interface FizCatalogProduct {
  code: string
  description: string
  family: string
  metalType?: string
  purity: string
  weight: string
  origin: string
  copy?: string
  isActiveBuy?: string
  isActiveSell?: string
  images: FizProductImage[]
}

/** Single tier pricing */
export interface FizPriceTier {
  ask: number
  bid: number
  askPercise: number
  bidPercise: number
  spread: number
}

/** Response from POST /FizServices/GetPricesForProducts */
export interface FizProductPrice {
  code: string
  availability: string
  isActiveBuy: string
  isActiveSell: string
  metalType: number   // 1=Gold 2=Silver 3=Platinum 4=Palladium
  tiers: Record<string, FizPriceTier>
  images?: FizProductImage[]
  year?: string
  country?: string
}

/** Merged catalog + price — used by the shop page */
export interface ShopProduct {
  code: string
  name: string          // formatted display name
  family: string
  metal: 'gold' | 'silver' | 'platinum' | 'palladium'
  category: string
  weight: string        // e.g. "1 oz"
  weightOzt: number     // parsed decimal troy oz
  purity: string
  origin: string
  availability: string
  isActiveSell: boolean
  isActiveBuy: boolean
  ask: number           // tier-1 retail ask
  bid: number           // tier-1 retail bid
  imageUrl: string | null   // best available image URL
  thumbUrl: string | null   // thumbnail URL
}
