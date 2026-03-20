import type { Metadata } from 'next'
import { PRODUCT_GROUPS, ALL_PRODUCT_CODES } from '@/lib/constants/products'
import { getSpotPrices, getProductCatalog, getProductPrices, mergeShopProducts } from '@/lib/fiztrade/client'
import { formatUSD } from '@/lib/utils/currency'
import type { ShopProduct } from '@/lib/fiztrade/types'
import ProductCard from '@/components/shop/ProductCard'

// Prices: 5-min cache. Catalog: 24-h cache (controlled inside client.ts)
export const revalidate = 300

export const metadata: Metadata = {
  title: 'Shop Precious Metals — Live Prices',
  description:
    'Buy gold, silver, platinum, and palladium bullion at live market prices. ' +
    'Coins, bars, and rounds from top mints — priced off the FizTrade spot feed.',
}

const SPOT_BAR_THEME = {
  gold:      { dot: 'bg-gold',       label: 'text-gold' },
  silver:    { dot: 'bg-[#C0C0C0]', label: 'text-[#A8A8A8]' },
  platinum:  { dot: 'bg-[#C0C0E0]', label: 'text-[#9090C0]' },
  palladium: { dot: 'bg-[#C0B8D8]', label: 'text-[#9080B8]' },
}

async function loadShopData() {
  // Run spot prices, catalog, and prices in parallel — each has a 5s abort timeout inside fetchWithTimeout
  const [spotPrices, catalog, prices] = await Promise.all([
    getSpotPrices().catch(() => []),
    getProductCatalog(ALL_PRODUCT_CODES).catch(() => []),
    getProductPrices(ALL_PRODUCT_CODES).catch(() => []),
  ])
  const products = mergeShopProducts(catalog, prices)
  return { spotPrices, products }
}

export default async function ShopPage() {
  const { spotPrices, products } = await loadShopData()
  const spotMap = Object.fromEntries(spotPrices.map(p => [p.metal, p]))

  // Group products by metal in the order defined in PRODUCT_GROUPS
  const grouped = PRODUCT_GROUPS.map(group => ({
    ...group,
    items: group.codes
      .map(code => products.find(p => p.code === code))
      .filter((p): p is ShopProduct => !!p && p.isActiveSell && p.availability !== 'Not Available' && p.ask > 0),
  })).filter(g => g.items.length > 0)

  return (
    <>
      {/* ── Hero + spot bar ── */}
      <section className="bg-charcoal border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Live FizTrade Pricing &mdash; Refreshes Every 5 Minutes
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-cream mb-3">
            Precious Metals Shop
          </h1>
          <p className="text-cream/45 text-base max-w-xl">
            Authentic bullion from top mints — priced live off the FizTrade spot feed.
            All prices shown are retail (1–49 qty) ask prices.
          </p>
        </div>

        {/* Live spot bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {spotPrices.map(p => {
                const theme = SPOT_BAR_THEME[p.metal] ?? SPOT_BAR_THEME.gold
                return (
                  <div key={p.metal} className="px-5 py-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${theme.label}`}>
                        {p.metal}
                      </p>
                    </div>
                    <p className="font-mono font-bold text-xl text-cream leading-none">
                      {formatUSD(p.ask)}
                    </p>
                    <p className={`text-xs font-mono mt-1 ${
                      p.direction === 'up'   ? 'text-emerald-400' :
                      p.direction === 'down' ? 'text-red-400'     : 'text-cream/30'
                    }`}>
                      {p.direction === 'up' ? '▲' : p.direction === 'down' ? '▼' : '—'}{' '}
                      {p.change >= 0 ? '+' : ''}{formatUSD(Math.abs(p.change))}{' '}
                      <span className="opacity-70">
                        ({p.changePercent >= 0 ? '+' : ''}{p.changePercent.toFixed(2)}%)
                      </span>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product sections ── */}
      <div className="bg-[#F4F1EB] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-18">

          {grouped.length === 0 && (
            <div className="py-20 text-center text-muted">
              <p className="text-lg font-heading font-semibold mb-2">Products loading…</p>
              <p className="text-sm">Live pricing data is being fetched from FizTrade.</p>
            </div>
          )}

          {grouped.map(({ metal, label, items }) => {
            const spot = spotMap[metal]
            return (
              <div key={metal} className="space-y-7">
                {/* Section header */}
                <div className="flex items-center gap-5">
                  <div className="min-w-0">
                    {spot && (
                      <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-0.5">
                        Spot: {formatUSD(spot.ask)}{' '}
                        <span className={
                          spot.direction === 'up'   ? 'text-emerald-600' :
                          spot.direction === 'down' ? 'text-red-500'     : 'text-muted'
                        }>
                          {spot.direction === 'up' ? '▲' : spot.direction === 'down' ? '▼' : '—'}
                          {' '}{spot.changePercent >= 0 ? '+' : ''}{spot.changePercent.toFixed(2)}%
                        </span>
                      </p>
                    )}
                    <h2 className="text-2xl font-heading font-bold text-charcoal">{label} Bullion</h2>
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted whitespace-nowrap">
                    {items.length} product{items.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {items.map(product => (
                    <ProductCard key={product.code} product={product} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="border-t border-border">
          <p className="text-center text-xs text-muted py-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Prices are live from the FizTrade/Dillon Gage platform, refreshing every 5 minutes.
            Retail ask prices shown (1–49 qty tier). Final price confirmed at time of purchase.
            All products subject to availability. Call or visit any location for larger orders.
          </p>
        </div>
      </div>
    </>
  )
}
