'use client'
import { useEffect, useState, useCallback } from 'react'

const UNIT_MULTIPLIERS: Record<string, number> = {
  oz: 1,
  g: 0.032151,
  dwt: 0.05,
  kg: 32.151,
}

const PURITY_VALUES: Record<string, number> = {
  '24k': 1.0,
  '22k': 0.9167,
  '18k': 0.75,
  '14k': 0.5833,
  '10k': 0.4167,
  '999': 0.999,
  '925': 0.925,
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  CAD: 'C$',
}

export default function GoldCalculator({ compact = false }: { compact?: boolean }) {
  const [spotPrice, setSpotPrice] = useState<number>(0)
  const [spotLoaded, setSpotLoaded] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [quantity, setQuantity] = useState('1')
  const [unit, setUnit] = useState('oz')
  const [purity, setPurity] = useState('24k')
  const [result, setResult] = useState<number | null>(null)
  const [calculated, setCalculated] = useState(false)

  const fetchSpot = useCallback(async () => {
    try {
      const res = await fetch('/api/spot-prices')
      if (!res.ok) return
      const data = await res.json()
      const gold = (data.prices ?? []).find((p: { metal: string }) => p.metal === 'gold')
      if (gold) {
        setSpotPrice(gold.ask)
        setSpotLoaded(true)
      }
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    fetchSpot()
  }, [fetchSpot])

  function calculate() {
    const qty = parseFloat(quantity)
    if (isNaN(qty) || qty <= 0 || spotPrice <= 0) return
    const value = spotPrice * qty * UNIT_MULTIPLIERS[unit] * PURITY_VALUES[purity]
    setResult(value)
    setCalculated(true)
  }

  const symbol = CURRENCY_SYMBOLS[currency] ?? '$'

  const card = (
    <div className="bg-charcoal rounded-2xl p-8 shadow-xl">
      <h2 className="text-xl font-heading font-bold text-gold text-center mb-1">
        How Much Your Gold is Worth
      </h2>
      <div className="border-t border-gold/30 mt-3 mb-6" />

      <p className="text-cream/70 text-sm font-semibold mb-5">Enter Your Amounts</p>

      {/* Row 1: Spot Price + Currency */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-cream/60 text-xs mb-1.5">Spot Price (per oz)</label>
          <input
            type="number"
            value={spotLoaded ? spotPrice.toFixed(2) : ''}
            onChange={(e) => setSpotPrice(parseFloat(e.target.value) || 0)}
            placeholder={spotLoaded ? undefined : 'Loading…'}
            className="w-full bg-white/8 border border-white/12 text-cream rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/60 placeholder:text-cream/30"
          />
        </div>
        <div>
          <label className="block text-cream/60 text-xs mb-1.5">Currency</label>
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full appearance-none bg-white/8 border border-white/12 text-cream rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/60 cursor-pointer"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 text-xs">▾</span>
          </div>
        </div>
      </div>

      {/* Row 2: Quantity + Unit + Purity */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div>
          <label className="block text-cream/60 text-xs mb-1.5">Quantity</label>
          <input
            type="number"
            min="0"
            step="any"
            value={quantity}
            onChange={(e) => { setQuantity(e.target.value); setCalculated(false) }}
            className="w-full bg-white/8 border border-white/12 text-cream rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/60"
          />
        </div>
        <div>
          <label className="block text-cream/60 text-xs mb-1.5">Unit</label>
          <div className="relative">
            <select
              value={unit}
              onChange={(e) => { setUnit(e.target.value); setCalculated(false) }}
              className="w-full appearance-none bg-white/8 border border-white/12 text-cream rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/60 cursor-pointer"
            >
              <option value="oz">Ounces</option>
              <option value="g">Grams</option>
              <option value="dwt">Pennyweight</option>
              <option value="kg">Kilograms</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 text-xs">▾</span>
          </div>
        </div>
        <div>
          <label className="block text-cream/60 text-xs mb-1.5">Purity</label>
          <div className="relative">
            <select
              value={purity}
              onChange={(e) => { setPurity(e.target.value); setCalculated(false) }}
              className="w-full appearance-none bg-white/8 border border-white/12 text-cream rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/60 cursor-pointer"
            >
              <option value="24k">24k</option>
              <option value="22k">22k</option>
              <option value="18k">18k</option>
              <option value="14k">14k</option>
              <option value="10k">10k</option>
              <option value="999">.999 Fine</option>
              <option value="925">.925 Silver</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 text-xs">▾</span>
          </div>
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-gold hover:bg-gold-dark text-charcoal font-bold py-3.5 rounded-xl transition-colors text-sm tracking-wide"
      >
        Calculate Value
      </button>

      {calculated && result !== null && (
        <div className="mt-5 bg-gold/10 border border-gold/25 rounded-xl px-5 py-4 text-center">
          <p className="text-cream/60 text-xs uppercase tracking-widest mb-1">Estimated Value</p>
          <p className="text-gold font-mono font-bold text-2xl">
            {symbol}{result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <p className="text-cream/40 text-xs mt-1.5">Based on live spot · actual offer may vary</p>
        </div>
      )}
    </div>
  )

  if (compact) {
    return card
  }

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {card}

          {/* Explainer */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">Gold Calculator</h2>
            <p className="text-muted leading-relaxed mb-4">
              The gold spot price is typically listed in troy ounces, but it can be converted into any
              unit of measure you want to buy or sell. Some markets list the live spot price of gold
              in a variety of currencies, but many gold markets use live data listed in USD.
            </p>
            <p className="text-muted leading-relaxed">
              Need to determine the gold spot price in your currency? Use this gold calculator to
              convert this to one of four currencies of your choice. Calculate based on quantity,
              the unit of measurement, and purity to make the best purchasing decision available.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
