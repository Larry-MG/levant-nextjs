import Image from 'next/image'
import { formatUSD } from '@/lib/utils/currency'
import type { ShopProduct, SpotPrice } from '@/lib/fiztrade/types'
import AddToCartButton from './AddToCartButton'

const METAL_THEME = {
  gold: {
    badge:   'bg-gold text-charcoal',
    accent:  'text-gold',
    border:  'border-gold/20 hover:border-gold/60',
    bg:      'bg-gold/10',
    dot:     'bg-gold',
    change:  { up: 'text-emerald-700 bg-emerald-100', down: 'text-red-700 bg-red-100' },
  },
  silver: {
    badge:   'bg-[#B8B8B8] text-charcoal',
    accent:  'text-[#888]',
    border:  'border-[#C0C0C0]/25 hover:border-[#C0C0C0]/60',
    bg:      'bg-[#C0C0C0]/10',
    dot:     'bg-[#C0C0C0]',
    change:  { up: 'text-emerald-700 bg-emerald-100', down: 'text-red-700 bg-red-100' },
  },
  platinum: {
    badge:   'bg-[#D8D8F0] text-[#4040A0]',
    accent:  'text-[#8888CC]',
    border:  'border-[#C0C0E0]/25 hover:border-[#C0C0E0]/60',
    bg:      'bg-[#C0C0E0]/10',
    dot:     'bg-[#C0C0E0]',
    change:  { up: 'text-emerald-700 bg-emerald-100', down: 'text-red-700 bg-red-100' },
  },
  palladium: {
    badge:   'bg-[#D0C8E0] text-[#503080]',
    accent:  'text-[#9080B8]',
    border:  'border-[#C0B8D8]/25 hover:border-[#C0B8D8]/60',
    bg:      'bg-[#C0B8D8]/10',
    dot:     'bg-[#C0B8D8]',
    change:  { up: 'text-emerald-700 bg-emerald-100', down: 'text-red-700 bg-red-100' },
  },
} as const

const AVAILABILITY_COLOR: Record<string, string> = {
  'Live':              'text-emerald-600',
  'Limited Quantity':  'text-amber-600',
  '1-5 Days':          'text-amber-600',
  '6-15 Days':         'text-orange-500',
  '16-30 Days':        'text-red-500',
  'Not Available':     'text-red-500',
}

interface Props {
  product: ShopProduct
  spot: SpotPrice | undefined
}

export default function ProductCard({ product, spot }: Props) {
  const theme = METAL_THEME[product.metal] ?? METAL_THEME.gold
  const availColor = AVAILABILITY_COLOR[product.availability] ?? 'text-muted'

  // Category label: derive from family/weight
  const isBar   = /bar/i.test(product.family)
  const isRound = /round/i.test(product.family)
  const catLabel = isBar ? 'Bar' : isRound ? 'Round' : 'Coin'

  return (
    <article
      className={`bg-white border ${theme.border} rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group`}
    >
      {/* ── Image ── */}
      <div className="relative h-52 bg-gradient-to-br from-[#F5F0E8] via-[#EDE8DE] to-[#E0D8C8] flex items-center justify-center overflow-hidden">
        {product.imageUrl ? (
          <div className="relative w-40 h-40 group-hover:scale-[1.06] transition-transform duration-500 ease-out">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              sizes="160px"
              unoptimized={false}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-20">
            <span className="text-7xl text-charcoal">
              {product.metal === 'gold' ? '◈' : product.metal === 'silver' ? '◇' : '◆'}
            </span>
          </div>
        )}

        {/* Metal badge */}
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${theme.badge}`}>
          {product.metal}
        </span>

        {/* Category */}
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-charcoal/75 text-cream/80">
          {catLabel}
        </span>

        {/* Live pulse */}
        {product.availability === 'Live' && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme.dot}`} />
            <span className="text-[10px] text-muted/60 font-medium">Live</span>
          </span>
        )}
      </div>

      {/* ── Info ── */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Name + purity */}
        <div>
          <h3 className="font-heading font-bold text-charcoal text-[15px] leading-snug mb-1 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] text-muted/70 font-medium">{product.weight}</span>
            {product.purity && (
              <>
                <span className="text-border text-[10px]">·</span>
                <span className="text-[11px] text-muted/70">{product.purity}</span>
              </>
            )}
          </div>
        </div>

        {/* Availability */}
        <p className={`text-[11px] font-semibold ${availColor}`}>
          {product.availability}
        </p>

        {/* Price block */}
        <div className={`mt-auto rounded-xl p-3.5 ${theme.bg}`}>
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="text-[10px] text-muted/60 uppercase tracking-wider font-semibold mb-0.5">
                Ask Price
              </p>
              <p className="font-mono font-extrabold text-2xl text-charcoal tracking-tight leading-none">
                {formatUSD(product.ask)}
              </p>
              {spot && (
                <p className={`text-[10px] mt-1 font-mono ${theme.accent}`}>
                  Spot {formatUSD(spot.ask)}/oz
                </p>
              )}
            </div>
            {spot && (
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md font-mono ${
                spot.direction === 'up'   ? theme.change.up   :
                spot.direction === 'down' ? theme.change.down :
                'text-muted bg-white/60'
              }`}>
                {spot.direction === 'up' ? '▲' : spot.direction === 'down' ? '▼' : '—'}
                {' '}{Math.abs(spot.changePercent).toFixed(2)}%
              </span>
            )}
          </div>

          {/* Bid row */}
          <div className="mt-2 pt-2 border-t border-black/5 flex justify-between items-center">
            <span className="text-[10px] text-muted/50 uppercase tracking-wider">We Buy</span>
            <span className="font-mono font-semibold text-sm text-muted">
              {formatUSD(product.bid)}
            </span>
          </div>
        </div>

        {/* Add to cart */}
        <AddToCartButton
          product={{
            id:             product.code,
            name:           product.name,
            metal:          product.metal,
            category:       catLabel.toLowerCase() as 'coins' | 'bars' | 'rounds',
            weightOzt:      product.weightOzt,
            priceSnapshot:  product.ask,
            image:          product.thumbUrl ?? product.imageUrl ?? '',
          }}
        />
      </div>
    </article>
  )
}
