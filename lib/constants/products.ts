/**
 * Curated product codes to display in the shop.
 * Details, images, and live prices are fetched dynamically via the live pricing API.
 *
 * To add a product: look up its code in the Product Catalog,
 * then add it to the appropriate group below.
 *
 * Swap in GetCustomProducts/sell when the live dealer token is configured —
 * that will return exactly the products the dealer has custom premiums set for.
 */

export type MetalType = 'gold' | 'silver' | 'platinum' | 'palladium'

export interface ProductGroup {
  metal: MetalType
  label: string
  codes: string[]
}

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    metal: 'gold',
    label: 'Gold',
    codes: [
      '1EAGLE',     // American Gold Eagle 1 oz
      '.25EAGLE',   // American Gold Eagle 1/4 oz
      '.1EAGLE',    // American Gold Eagle 1/10 oz
      '1B',         // American Gold Buffalo 1 oz
      '1MAP',       // Canadian Gold Maple Leaf 1 oz
      '.5MAP',      // Canadian Gold Maple Leaf 1/2 oz
      '1G',         // Gold Bar 1 oz (generic)
      '10G',        // Gold Bar 10 oz (generic)
      '1PERTH',     // Gold Bar 1 oz Perth
      '1VALG',      // Gold Bar 1 oz Valcambi
    ],
  },
  {
    metal: 'silver',
    label: 'Silver',
    codes: [
      'SE',         // American Silver Eagle 1 oz
      '1AGMAP',     // Canadian Silver Maple Leaf 1 oz
      '10AG',       // Silver Bar 10 oz
      '100AG',      // Silver Bar 100 oz
      '1SRD',       // Silver Round 1 oz (generic)
      '1SRDBUFF',   // Silver Round 1 oz Buffalo
      '1SRDBUFFHM', // Silver Round 1 oz Buffalo Highland Mint
    ],
  },
  {
    metal: 'platinum',
    label: 'Platinum',
    codes: [
      '1PE',        // American Platinum Eagle 1 oz
      '1PLAT',      // Platinum Bar 1 oz (generic)
      '1PTMAP',     // Canadian Platinum Maple Leaf 1 oz
      '1PTPH',      // Austrian Platinum Philharmonic 1 oz
    ],
  },
  {
    metal: 'palladium',
    label: 'Palladium',
    codes: [
      '1PAL',       // Palladium Bar 1 oz
      '1PDMAP',     // Canadian Palladium Maple Leaf 1 oz
    ],
  },
]

/** Flat array of all configured product codes */
export const ALL_PRODUCT_CODES = PRODUCT_GROUPS.flatMap(g => g.codes)
