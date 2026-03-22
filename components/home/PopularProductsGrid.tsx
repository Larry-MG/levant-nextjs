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
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const items = products.length > 0 ? products.slice(0, 12) : []
  const cardWidth = 256 // w-60 (240) + gap (16)
  const totalWidth = items.length * cardWidth

  // Touch/drag handling for manual scroll
  const dragState = useRef({ startX: 0, scrollLeft: 0, dragging: false })

  const handleInteractionStart = useCallback(() => {
    setPaused(true)
    if (pauseTimer.current) clearTimeout(pauseTimer.current)
  }, [])

  const handleInteractionEnd = useCallback(() => {
    if (pauseTimer.current) clearTimeout(pauseTimer.current)
    pauseTimer.current = setTimeout(() => setPaused(false), 5000)
  }, [])

  // Touch events for mobile swipe
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    handleInteractionStart()
    const el = wrapperRef.current
    if (!el) return
    dragState.current.startX = e.touches[0].clientX
    dragState.current.scrollLeft = el.scrollLeft
  }, [handleInteractionStart])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const el = wrapperRef.current
    if (!el) return
    const dx = e.touches[0].clientX - dragState.current.startX
    el.scrollLeft = dragState.current.scrollLeft - dx
  }, [])

  const onTouchEnd = useCallback(() => {
    handleInteractionEnd()
  }, [handleInteractionEnd])

  // Mouse drag for desktop
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    handleInteractionStart()
    const el = wrapperRef.current
    if (!el) return
    dragState.current = { startX: e.clientX, scrollLeft: el.scrollLeft, dragging: true }
    el.style.cursor = 'grabbing'
  }, [handleInteractionStart])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState.current.dragging) return
    const el = wrapperRef.current
    if (!el) return
    e.preventDefault()
    const dx = e.clientX - dragState.current.startX
    el.scrollLeft = dragState.current.scrollLeft - dx
  }, [])

  const onMouseUp = useCallback(() => {
    dragState.current.dragging = false
    const el = wrapperRef.current
    if (el) el.style.cursor = 'grab'
    handleInteractionEnd()
  }, [handleInteractionEnd])

  // Auto-scroll via requestAnimationFrame
  useEffect(() => {
    if (items.length === 0) return
    const el = wrapperRef.current
    if (!el) return

    let raf: number
    let prev = 0
    const pxPerSec = 30 // slow, smooth drift

    const tick = (ts: number) => {
      if (!paused && el) {
        const dt = prev ? Math.min(ts - prev, 50) : 16
        prev = ts
        el.scrollLeft += pxPerSec * (dt / 1000)

        // Seamless loop: jump back when past the first copy
        if (el.scrollLeft >= totalWidth) {
          el.scrollLeft -= totalWidth
        }
      } else {
        prev = 0
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [items.length, paused, totalWidth])

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

      {/* Scrollable + auto-scrolling track */}
      <div
        ref={wrapperRef}
        className="flex gap-4 pb-2 -mb-2 overflow-x-scroll snap-x snap-mandatory scrollbar-none"
        style={{
          WebkitOverflowScrolling: 'touch',
          cursor: 'grab',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
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
