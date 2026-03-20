'use client'
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { formatUSD, formatChange, formatChangePercent } from '@/lib/utils/currency'
import type { SpotPrice } from '@/lib/fiztrade/types'
import StaggerChildren, { itemVariants } from '@/components/ui/StaggerChildren'

const metalLabels: Record<string, string> = {
  gold: 'Gold',
  silver: 'Silver',
  platinum: 'Platinum',
  palladium: 'Palladium',
}

const metalImages: Record<string, string> = {
  gold: '/images/metal-gold.webp',
  silver: '/images/metal-silver.webp',
  platinum: '/images/metal-platinum.webp',
}

// Troy oz per gram
const OZ_PER_GRAM = 1 / 31.1035

// ─── Slim top bar (used everywhere as a live feed strip) ──────────────────────
export function SpotPriceBar() {
  const [prices, setPrices] = useState<SpotPrice[]>([])

  const fetchPrices = useCallback(async (signal?: AbortSignal) => {
    try {
      const res = await fetch('/api/spot-prices', { signal })
      if (!res.ok) return
      const data = await res.json()
      setPrices(data.prices ?? [])
    } catch { /* ignore aborts */ }
  }, [])

  useEffect(() => {
    const ctrl = new AbortController()
    fetchPrices(ctrl.signal)
    const iv = setInterval(() => fetchPrices(ctrl.signal), 5 * 60_000)
    return () => { ctrl.abort(); clearInterval(iv) }
  }, [fetchPrices])

  if (!prices.length) {
    return (
      <div className="bg-charcoal-soft border-b border-white/5 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 animate-pulse">
          {[1, 2, 3, 4].map((i) => <div key={i} className="h-3.5 w-28 bg-white/10 rounded" />)}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-charcoal-soft border-b border-white/5 py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] sm:flex sm:w-full sm:min-w-0 sm:flex-wrap sm:items-center sm:gap-x-6 sm:text-xs">
          {prices.map((p) => (
            <div key={p.metal} className="flex min-w-0 items-center gap-1.5 sm:gap-2 sm:flex-shrink-0">
              <span className="shrink-0 text-gold font-semibold uppercase tracking-[0.18em] sm:tracking-wider">
                {metalLabels[p.metal]}
              </span>
              <span className="min-w-0 truncate font-mono text-cream/90">{formatUSD(p.ask)}</span>
              <span className={`font-mono ${p.direction === 'up' ? 'text-green-400' : p.direction === 'down' ? 'text-red-400' : 'text-cream/30'}`}>
                {p.direction === 'up' ? '▲' : p.direction === 'down' ? '▼' : '—'}{' '}
                {formatChange(p.change)}
              </span>
            </div>
          ))}
          <span className="col-span-2 text-center text-[10px] text-cream/20 sm:ml-auto sm:block sm:flex-shrink-0 sm:text-left">
            Live · 30s
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── Featured price cards section (used on home & shop pages) ─────────────────
export default function SpotPriceTicker() {
  const [prices, setPrices] = useState<SpotPrice[]>([])
  const [loading, setLoading] = useState(true)
  const [inGrams, setInGrams] = useState(false)

  const fetchPrices = useCallback(async (signal?: AbortSignal) => {
    try {
      const res = await fetch('/api/spot-prices', { signal })
      if (!res.ok) return
      const data = await res.json()
      setPrices(data.prices ?? [])
      setLoading(false)
    } catch { /* ignore aborts */ }
  }, [])

  useEffect(() => {
    const ctrl = new AbortController()
    fetchPrices(ctrl.signal)
    const iv = setInterval(() => fetchPrices(ctrl.signal), 5 * 60_000)
    return () => { ctrl.abort(); clearInterval(iv) }
  }, [fetchPrices])

  const featured = prices.filter((p) => ['gold', 'silver', 'platinum'].includes(p.metal))

  const displayPrice = (ask: number) =>
    inGrams ? formatUSD(ask * OZ_PER_GRAM) : formatUSD(ask)

  // Card gradient styles
  const cardStyle: Record<string, React.CSSProperties> = {
    gold: {
      background: 'linear-gradient(135deg, #f0c040 0%, #c8900a 55%, #8b6000 100%)',
    },
    silver: {
      background: 'linear-gradient(135deg, #a8a8a8 0%, #6e6e6e 55%, #3d3d3d 100%)',
    },
    platinum: {
      background: 'linear-gradient(135deg, #d8d8d8 0%, #a0a0a0 55%, #6a6a6a 100%)',
    },
  }

  return (
    <section className="py-14 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Unit toggle */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className={`text-sm font-medium transition-colors ${inGrams ? 'text-cream' : 'text-cream/40'}`}>
            Price in Grams
          </span>
          <button
            onClick={() => setInGrams((v) => !v)}
            aria-label="Toggle unit"
            className={`relative inline-flex h-6 w-11 rounded-full transition-colors focus:outline-none ${
              inGrams ? 'bg-gold' : 'bg-gold'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                !inGrams ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${inGrams ? 'text-cream' : 'text-cream/40'}`}>
            Price in Ounces
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => <div key={i} className="animate-pulse rounded-2xl h-48 bg-white/10" />)}
          </div>
        ) : (
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featured.map((p) => {
              const imgSrc = metalImages[p.metal]
              return (
                <motion.div
                  key={p.metal}
                  variants={itemVariants}
                  style={cardStyle[p.metal]}
                  className="relative rounded-2xl overflow-hidden flex items-center gap-4 pl-0 pr-5 py-6 shadow-xl"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {/* Metal image */}
                  {imgSrc && (
                    <div className="flex-shrink-0 relative w-32 h-32 drop-shadow-2xl self-end">
                      <Image
                        src={imgSrc}
                        alt={metalLabels[p.metal]}
                        fill
                        className="object-contain object-left-bottom"
                        sizes="128px"
                      />
                    </div>
                  )}

                  {/* Text content */}
                  <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                    <p className="font-black text-xl tracking-widest text-white/90 uppercase leading-none">
                      {metalLabels[p.metal].toUpperCase()}
                    </p>

                    {/* Price badge */}
                    <div className="bg-black/50 rounded-full px-4 py-1 mt-1">
                      <span className="font-mono font-bold text-white text-lg leading-none">
                        {displayPrice(p.ask)}
                      </span>
                    </div>

                    {/* Change */}
                    <p className={`text-sm font-mono font-semibold ${
                      p.direction === 'up' ? 'text-green-300' :
                      p.direction === 'down' ? 'text-red-300' :
                      'text-white/40'
                    }`}>
                      ({formatChangePercent(p.changePercent)})
                    </p>

                    <p className="text-white/80 text-sm font-medium">
                      Live {metalLabels[p.metal]} Price
                    </p>

                    <Link
                      href="/shop"
                      className="mt-2 text-sm font-bold text-white hover:text-yellow-200 transition-colors"
                    >
                      Shop Now &gt;
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </StaggerChildren>
        )}

        <p className="text-center text-cream/20 text-xs mt-6">
          Prices update every 5 minutes &middot; USD per troy oz
        </p>
      </div>
    </section>
  )
}
