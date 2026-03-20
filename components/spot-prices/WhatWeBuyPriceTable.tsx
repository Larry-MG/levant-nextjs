'use client'
import { useEffect, useState, useCallback } from 'react'

const OZ_PER_GRAM = 1 / 31.1035

const GOLD_KARATS = [
  { label: '24k', purity: 24 / 24 },
  { label: '23k', purity: 23 / 24 },
  { label: '22k', purity: 22 / 24 },
  { label: '21.6k', purity: 21.6 / 24 },
  { label: '21k', purity: 21 / 24 },
  { label: '18k', purity: 18 / 24 },
  { label: '16k', purity: 16 / 24 },
  { label: '14k', purity: 14 / 24 },
  { label: '12k', purity: 12 / 24 },
  { label: '10k', purity: 10 / 24 },
  { label: '9k', purity: 9 / 24 },
]

const SILVER_GRADES = [
  { label: '.999 Fine Silver', purity: 0.999 },
  { label: '.925 Sterling Silver', purity: 0.925 },
  { label: '.900 Coin Silver', purity: 0.9 },
  { label: '.800 Silver', purity: 0.8 },
]

const PLATINUM_GRADES = [
  { label: '950 Platinum', purity: 0.95 },
  { label: '900 Platinum', purity: 0.9 },
  { label: '850 Platinum', purity: 0.85 },
]

interface SpotPrice { metal: string; ask: number }

function PriceCell({ value }: { value: number | null }) {
  if (value === null) return <span className="animate-pulse inline-block w-16 h-4 bg-border rounded" />
  return <span>{value.toFixed(2)}</span>
}

function MetalTable({
  title,
  accentColor,
  headerBg,
  rows,
  spotPerGram,
}: {
  title: string
  accentColor: string
  headerBg: string
  rows: { label: string; purity: number }[]
  spotPerGram: number | null
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
      {/* Table header */}
      <div className={`${headerBg} flex justify-between items-center px-6 py-3.5`}>
        <span className="font-bold text-charcoal text-base">{title}</span>
        <span className="font-bold text-charcoal text-sm">Price Per Gram</span>
      </div>

      {/* Rows */}
      {rows.map((row, i) => {
        const pricePerGram = spotPerGram !== null ? spotPerGram * row.purity : null
        return (
          <div
            key={row.label}
            className={`flex justify-between items-center px-6 py-3.5 border-b border-border last:border-b-0 ${
              i % 2 === 0 ? 'bg-white' : 'bg-cream/50'
            }`}
          >
            <span className="text-charcoal text-sm font-medium">{row.label}</span>
            <span className={`font-mono font-semibold text-sm ${accentColor}`}>
              <PriceCell value={pricePerGram} />
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default function WhatWeBuyPriceTable() {
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
    const iv = setInterval(() => fetchPrices(ctrl.signal), 30_000)
    return () => { ctrl.abort(); clearInterval(iv) }
  }, [fetchPrices])

  const goldSpot = prices.find(p => p.metal === 'gold')?.ask ?? null
  const silverSpot = prices.find(p => p.metal === 'silver')?.ask ?? null
  const platinumSpot = prices.find(p => p.metal === 'platinum')?.ask ?? null

  const goldPerGram = goldSpot !== null ? goldSpot * OZ_PER_GRAM : null
  const silverPerGram = silverSpot !== null ? silverSpot * OZ_PER_GRAM : null
  const platinumPerGram = platinumSpot !== null ? platinumSpot * OZ_PER_GRAM : null

  return (
    <section className="py-20 bg-cream-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Live Buy Prices
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
            What We Buy
          </h2>
          <p className="text-muted text-sm mt-3">
            Prices calculated from live spot · updated every 30 seconds
          </p>
        </div>

        <div className="space-y-6">
          <MetalTable
            title="Gold"
            accentColor="text-[#A07830]"
            headerBg="bg-[#E8C878]/60"
            rows={GOLD_KARATS}
            spotPerGram={goldPerGram}
          />
          <MetalTable
            title="Silver"
            accentColor="text-[#6b7280]"
            headerBg="bg-[#C0C0C0]/40"
            rows={SILVER_GRADES}
            spotPerGram={silverPerGram}
          />
          <MetalTable
            title="Platinum"
            accentColor="text-[#6366f1]"
            headerBg="bg-[#C0C0E0]/40"
            rows={PLATINUM_GRADES}
            spotPerGram={platinumPerGram}
          />
        </div>

        <p className="text-center text-muted/60 text-xs mt-8">
          These are indicative buy prices. Final prices are confirmed at time of transaction using live spot data and XRF testing results.
        </p>
      </div>
    </section>
  )
}
