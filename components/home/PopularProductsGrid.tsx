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
  labelOverrides?: Record<string, string>
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

function ProductCard({ p, labelOverrides }: { p: Product; labelOverrides?: Record<string, string> }) {
  const accent = METAL_ACCENT[p.metal] ?? METAL_ACCENT.gold
  const displayName = labelOverrides?.[p.code] ?? p.name
  return (
    <div className="flex-none w-52 sm:w-60 snap-start">
      <Link
        href={`/shop/${p.code}`}
        className="group block bg-white/5 hover:bg-white/8 border border-white/10 hover:border-gold/30 rounded-2xl overflow-hidden transition-all duration-300"
      >
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
                alt={displayName}
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
          <span className={`absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${accent.badge}`}>
            {accent.label}
          </span>
        </div>
        <div className="px-4 pt-3.5 pb-4">
          <p className="text-cream/80 text-[13px] font-semibold leading-snug line-clamp-2 group-hover:text-cream transition-colors mb-2.5 h-9">
            {displayName}
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
}

export default function PopularProductsGrid({ products, fallbackCodes, labelOverrides }: PopularProductsGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [userInteracting, setUserInteracting] = useState(false)
  const interactionTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const items = products.length > 0 ? products.slice(0, 12) : []

  // Auto-scroll: slowly advance the scroll position
  useEffect(() => {
    if (items.length === 0) return
    const el = scrollRef.current
    if (!el) return

    let raf: number
    let lastTime = 0
    const speed = 0.5 // px per frame at 60fps

    const tick = (time: number) => {
      if (!userInteracting && el) {
        const dt = lastTime ? (time - lastTime) : 16
        lastTime = time
        el.scrollLeft += speed * (dt / 16)

        // Loop: when we've scrolled past the first set, jump back
        const halfWidth = el.scrollWidth / 2
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth
        }
      } else {
        lastTime = 0
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [items.length, userInteracting])

  const pauseAutoScroll = useCallback(() => {
    setUserInteracting(true)
    if (interactionTimer.current) clearTimeout(interactionTimer.current)
    // Resume auto-scroll after 4 seconds of no interaction
    interactionTimer.current = setTimeout(() => setUserInteracting(false), 4000)
  }, [])

  return (
    <div className="relative">
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10"
        style={{ background: 'linear-gradient(to right, #1C1917, transparent)' }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10"
        style={{ background: 'linear-gradient(to left, #1C1917, transparent)' }}
      />

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-4 pb-2 -mb-2 overflow-x-auto snap-x snap-mandatory scrollbar-none"
        style={{ WebkitOverflowScrolling: 'touch' }}
        onTouchStart={pauseAutoScroll}
        onTouchMove={pauseAutoScroll}
        onMouseDown={pauseAutoScroll}
        onWheel={pauseAutoScroll}
        onMouseEnter={() => setUserInteracting(true)}
        onMouseLeave={() => {
          if (interactionTimer.current) clearTimeout(interactionTimer.current)
          interactionTimer.current = setTimeout(() => setUserInteracting(false), 2000)
        }}
      >
        {items.length === 0
          ? [...fallbackCodes, ...fallbackCodes].map((code, i) => <SkeletonCard key={`${code}-${i}`} />)
          : [...items, ...items].map((p, i) => (
              <ProductCard key={`${p.code}-${i}`} p={p} labelOverrides={labelOverrides} />
            ))}
      </div>
    </div>
  )
}
