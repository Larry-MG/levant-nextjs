import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ALL_PRODUCT_CODES } from '@/lib/constants/products'
import { getSpotPrices, getProductCatalog, getProductPrices, mergeShopProducts } from '@/lib/fiztrade/client'
import { formatUSD } from '@/lib/utils/currency'
import AddToCartButton from '@/components/shop/AddToCartButton'
import type { ShopProduct, SpotPrice } from '@/lib/fiztrade/types'

export const revalidate = 300

export function generateStaticParams() {
  return ALL_PRODUCT_CODES.map(code => ({ code }))
}

async function loadProduct(code: string): Promise<{ product: ShopProduct | null; spot: SpotPrice | null }> {
  const [spotPrices, catalog, prices] = await Promise.all([
    getSpotPrices().catch(() => []),
    getProductCatalog(ALL_PRODUCT_CODES).catch(() => []),
    getProductPrices(ALL_PRODUCT_CODES).catch(() => []),
  ])
  const products = mergeShopProducts(catalog, prices)
  const product = products.find(p => p.code === code) ?? null
  const spot = product ? (spotPrices.find(s => s.metal === product.metal) ?? null) : null
  return { product, spot }
}

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params
  const { product } = await loadProduct(code)
  if (!product) return { title: 'Product Not Found — Levant Gold & Silver' }
  return {
    title: `${product.name} — Levant Gold & Silver`,
    description: `Buy ${product.name} at live market price. ${product.weight}${product.purity ? ` · ${product.purity}` : ''}.`,
  }
}

const METAL_THEME = {
  gold:      { badge: 'bg-gold text-charcoal',       accent: 'text-gold',       border: 'border-gold/20',        bg: 'bg-gold/8',       dot: 'bg-gold'       },
  silver:    { badge: 'bg-[#B8B8B8] text-charcoal',  accent: 'text-[#888]',     border: 'border-[#C0C0C0]/25',   bg: 'bg-[#C0C0C0]/8',  dot: 'bg-[#C0C0C0]'  },
  platinum:  { badge: 'bg-[#D8D8F0] text-[#4040A0]', accent: 'text-[#8888CC]',  border: 'border-[#C0C0E0]/25',   bg: 'bg-[#C0C0E0]/8',  dot: 'bg-[#C0C0E0]'  },
  palladium: { badge: 'bg-[#D0C8E0] text-[#503080]', accent: 'text-[#9080B8]',  border: 'border-[#C0B8D8]/25',   bg: 'bg-[#C0B8D8]/8',  dot: 'bg-[#C0B8D8]'  },
} as const

const AVAILABILITY_COLOR: Record<string, string> = {
  'Live':              'text-emerald-600',
  'Limited Quantity':  'text-amber-600',
  '1-5 Days':          'text-amber-600',
  '6-15 Days':         'text-orange-500',
  '16-30 Days':        'text-red-500',
  'Not Available':     'text-red-500',
}

export default async function ProductPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const { product, spot } = await loadProduct(code)

  if (!product) notFound()

  const theme = METAL_THEME[product.metal] ?? METAL_THEME.gold
  const availColor = AVAILABILITY_COLOR[product.availability] ?? 'text-muted'

  const isBar   = /bar/i.test(product.family)
  const isRound = /round/i.test(product.family)
  const catLabel = isBar ? 'Bar' : isRound ? 'Round' : 'Coin'

  return (
    <div className="bg-[#F4F1EB] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-charcoal transition-colors mb-10 group"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Shop
        </Link>

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Image panel ── */}
          <div className={`rounded-2xl border ${theme.border} overflow-hidden bg-gradient-to-br from-[#F5F0E8] via-[#EDE8DE] to-[#E0D8C8] aspect-square flex items-center justify-center max-w-md mx-auto lg:mx-0 w-full`}>
            {product.imageUrl ? (
              <div className="relative w-3/5 h-3/5">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.15)]"
                  sizes="(max-width: 1024px) 70vw, 420px"
                  priority
                  unoptimized={false}
                />
              </div>
            ) : (
              <span className="text-[10rem] text-charcoal/10">
                {product.metal === 'gold' ? '◈' : product.metal === 'silver' ? '◇' : '◆'}
              </span>
            )}
          </div>

          {/* ── Info panel ── */}
          <div className="flex flex-col gap-5">

            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${theme.badge}`}>
                {product.metal}
              </span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-charcoal/8 text-charcoal/50">
                {catLabel}
              </span>
            </div>

            {/* Name + specs */}
            <div>
              <h1 className="font-heading font-bold text-charcoal text-3xl sm:text-4xl leading-tight mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 flex-wrap text-sm text-muted">
                <span>{product.weight}</span>
                {product.purity && <><span className="text-border">·</span><span>{product.purity}</span></>}
                {product.origin && <><span className="text-border">·</span><span>{product.origin}</span></>}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-1.5">
              {product.availability === 'Live' && (
                <span className={`w-2 h-2 rounded-full animate-pulse ${theme.dot}`} />
              )}
              <span className={`text-sm font-semibold ${availColor}`}>
                {product.availability}
              </span>
            </div>

            {/* Price block */}
            <div className={`rounded-2xl p-5 border ${theme.border} ${theme.bg}`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[10px] text-muted/60 uppercase tracking-wider font-semibold mb-1">Ask Price</p>
                  <p className="font-mono font-extrabold text-4xl text-charcoal tracking-tight leading-none">
                    {formatUSD(product.ask)}
                  </p>
                  {spot && (
                    <p className={`text-xs mt-1.5 font-mono ${theme.accent}`}>
                      Spot {formatUSD(spot.ask)}/oz
                    </p>
                  )}
                </div>
                {spot && (
                  <span className={`text-sm font-bold px-3 py-1 rounded-lg font-mono ${
                    spot.direction === 'up'   ? 'text-emerald-700 bg-emerald-100' :
                    spot.direction === 'down' ? 'text-red-700 bg-red-100'         :
                    'text-muted bg-white/60'
                  }`}>
                    {spot.direction === 'up' ? '▲' : spot.direction === 'down' ? '▼' : '—'}
                    {' '}{Math.abs(spot.changePercent).toFixed(2)}%
                  </span>
                )}
              </div>

              <div className="border-t border-black/6 pt-4 flex justify-between items-center">
                <span className="text-xs text-muted/60 uppercase tracking-wider font-semibold">We Buy</span>
                <span className="font-mono font-semibold text-base text-muted">{formatUSD(product.bid)}</span>
              </div>
            </div>

            {/* Add to cart */}
            <AddToCartButton
              product={{
                id:            product.code,
                name:          product.name,
                metal:         product.metal,
                category:      catLabel.toLowerCase() as 'coins' | 'bars' | 'rounds',
                weightOzt:     product.weightOzt,
                priceSnapshot: product.ask,
                image:         product.thumbUrl ?? product.imageUrl ?? '',
              }}
            />

            {/* Payment note */}
            <p className="text-xs text-muted/60 leading-relaxed">
              Payment by wire transfer or direct deposit only. Final price confirmed at time of payment by our team.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
