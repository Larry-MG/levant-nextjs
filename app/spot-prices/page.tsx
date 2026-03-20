import type { Metadata } from 'next'
import Link from 'next/link'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'
import WhatWeBuyPriceTable from '@/components/spot-prices/WhatWeBuyPriceTable'

export const metadata: Metadata = {
  title: 'Live Gold & Silver Spot Prices Today | Current Buy Prices | Levant Gold & Silver',
  description:
    'Live gold, silver, platinum & palladium spot prices updated every 30 seconds. See current buy prices by karat and purity — 10K, 14K, 18K, 24K gold and .999 silver. Use our calculator to estimate the value of your items.',
  keywords: [
    'live gold price today', 'gold spot price', 'silver spot price today',
    'platinum spot price', 'palladium price',
    'gold price per gram', 'gold price per ounce California',
    '14k gold price today', '18k gold price today', '10k gold price',
    'how much is my gold worth', 'gold calculator Southern California',
    'current gold buy price Orange County', 'silver buy price Inland Empire',
  ],
  alternates: { canonical: '/spot-prices' },
  openGraph: {
    title: 'Live Gold & Silver Spot Prices Today | Levant Gold & Silver',
    description:
      'Real-time gold, silver, platinum & palladium prices updated every 30 seconds. Calculate the value of your gold by karat at our 4 Southern California locations.',
    url: '/spot-prices',
  },
  twitter: {
    title: 'Live Gold & Silver Spot Prices | Updated Every 30 Seconds',
    description: 'Real-time precious metal prices. Calculate your gold value by karat. 4 SoCal locations.',
  },
}

export default function SpotPricesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal pt-16 pb-0 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block border border-gold/60 text-gold text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded mb-6">
            Live Spot Price
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white leading-tight mb-3">
            Live Gold, Silver,<br className="hidden sm:block" /> &amp; Platinum Prices
          </h1>
          <p className="text-cream/50 text-sm max-w-lg mx-auto">
            Real-time precious metal spot prices — refreshed every 30 seconds.
            Use the calculator below to estimate the value of your items.
          </p>
        </div>
      </section>

      {/* ── Price Cards (SpotPriceTicker has its own bg-charcoal section) ── */}
      <SpotPriceTicker />

      {/* ── What We Buy — live karat price tables ── */}
      <WhatWeBuyPriceTable />

      {/* ── Calculator ── */}
      <GoldCalculator />

      {/* ── CTA strip ── */}
      <section className="bg-charcoal py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Ready to Sell?
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
            Bring Your Items In — Same-Day Offers
          </h2>
          <p className="text-cream/50 text-sm mb-8 leading-relaxed">
            Walk into any of our 4 Southern California locations for a free, no-obligation
            evaluation using our XRF machine. We pay fair prices based on live spot data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/locations"
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              Find a Location
            </Link>
            <Link
              href="tel:7142134785"
              className="border border-white/20 hover:border-gold text-cream hover:text-gold font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-sm flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 8.25V5.999A3 3 0 0 1 1.5 4.5z" clipRule="evenodd" />
              </svg>
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
