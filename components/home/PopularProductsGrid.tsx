'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect, useCallback } from 'react'
import { formatUSD } from '@/lib/utils/currency'

interface Product {
  code: string
  name: string
  metal: string
  ask: number
  imageUrl?: string | null
}

interface PopularProductsGridProps {
  products: Product[]
  fallbackCodes: string[]
}

const METAL_ACCENT: Record<string, { badge: string; glow: string; label: string }> = {
  gold:      { badge: 'bg-gold text-charcoal',           glow: 'rgba(201,168,76,0.25)',  label: 'Gold'      },
  silver:    { badge: 'bg-[#C0C0C0] text-charcoal',      glow: 'rgba(192,192,192,0.20)', label: 'Silver'    },
  platinum:  { badge: 'bg-[#D8D8F0] text-[#4040A0]',    glow: 'rgba(192,192,224,0.20)', label: 'Platinum'  },
  palladium: { badge: 'bg-[#D0C8E0] text-[#503080]',    glow: 'rgba(192,184,216,0.20)', label: 'Palladium' },
}

function SkeletonCard() {
  return (
    <div className="flex-none w-52 sm:w-60 snap-start">
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="h-44 bg-white/5 animate-pulse" />
        <div className="p-4 space-y-2">
          <div className="h-2.5 w-16 bg-white/5 rounded animate-pulse" />
          <div className="h-3.5 w-full bg-white/5 rounded animate-pulse" />
          <div className="h-3.5 w-3/4 bg-white/5 rounded animate-pulse" />
          <div className="h-5 w-20 bg-white/5 rounded animate-pulse mt-3" />
        </div>
      </div>
    </div>
  )
}

export default function PopularProductsGrid({ products, fallbackCodes }: PopularProductsGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    return () => { el.removeEventListener('scroll', updateScrollState); ro.disconnect() }
  }, [updateScrollState, products])

  function scroll(dir: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' })
  }

  const items = products.length > 0 ? products : []

  return (
    <div className="relative">
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(to right, #1C1917, transparent)',
          opacity: canScrollLeft ? 1 : 0,
        }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(to left, #1C1917, transparent)',
          opacity: canScrollRight ? 1 : 0,
        }}
      />

      {/* Arrow buttons */}
      <button
        onClick={() => scroll('left')}
        aria-label="Scroll left"
        className={`hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold/20 border border-white/15 hover:border-gold/40 text-cream hover:text-gold transition-all duration-200 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={() => scroll('right')}
        aria-label="Scroll right"
        className={`hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold/20 border border-white/15 hover:border-gold/40 text-cream hover:text-gold transition-all duration-200 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Scroll track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.length === 0
          ? fallbackCodes.map((code) => <SkeletonCard key={code} />)
          : items.slice(0, 8).map((p) => {
              const accent = METAL_ACCENT[p.metal] ?? METAL_ACCENT.gold
              return (
                <div key={p.code} className="flex-none w-52 sm:w-60 snap-start">
                  <Link
                    href={`/shop/${p.code}`}
                    className="group block bg-white/5 hover:bg-white/8 border border-white/10 hover:border-gold/30 rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    {/* Image area */}
                    <div
                      className="relative h-44 flex items-center justify-center"
                      style={{
                        background: `radial-gradient(ellipse at center, ${accent.glow} 0%, transparent 70%), #111110`,
                      }}
                    >
                      {p.imageUrl ? (
                        <div className="relative w-28 h-28 group-hover:scale-[1.07] transition-transform duration-500 ease-out">
                          <Image
                            src={p.imageUrl}
                            alt={p.name}
                            fill
                            className="object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)]"
                            sizes="112px"
                            unoptimized={false}
                          />
                        </div>
                      ) : (
                        <span className="text-5xl text-white/10">
                          {p.metal === 'gold' ? '◈' : p.metal === 'silver' ? '◇' : '◆'}
                        </span>
                      )}

                      {/* Metal badge */}
                      <span className={`absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${accent.badge}`}>
                        {accent.label}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="px-4 pt-3.5 pb-4">
                      <p className="text-cream/80 text-[13px] font-semibold leading-snug line-clamp-2 group-hover:text-cream transition-colors mb-2.5 h-9">
                        {p.name}
                      </p>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-[9px] text-cream/30 uppercase tracking-widest font-semibold mb-0.5">Ask</p>
                          <p className="font-mono font-bold text-lg text-gold leading-none">
                            {formatUSD(p.ask)}
                          </p>
                        </div>
                        <span className="text-[10px] text-cream/30 group-hover:text-gold/60 transition-colors font-medium">
                          View →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
      </div>
    </div>
  )
}
