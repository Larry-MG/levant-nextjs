import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import StatsStrip from '@/components/what-we-buy/StatsStrip'
import WhatWeBuyFAQ from '@/components/what-we-buy/WhatWeBuyFAQ'

export const metadata: Metadata = {
  title: 'What We Buy | Gold, Silver & Precious Metals — Best Prices in Southern California',
  description:
    'Levant Gold & Silver pays top dollar for gold, silver, platinum, palladium & rhodium in any form — jewelry, coins, bars, scrap, dental gold, flatware, estate pieces. Free XRF testing at our Orange, Pomona, San Bernardino & Walnut locations. Same-day cash.',
  keywords: [
    'what we buy gold silver', 'sell gold jewelry Southern California',
    'sell gold coins Southern California', 'sell silver coins Southern California',
    'sell platinum Southern California', 'sell palladium Southern California',
    'sell scrap gold California', 'sell dental gold', 'sell sterling silverware',
    'estate jewelry buyer Southern California', 'gold bullion buyer California',
    'sell gold Orange CA', 'sell gold Pomona', 'sell gold San Bernardino',
  ],
  alternates: { canonical: '/what-we-buy' },
  openGraph: {
    title: 'What We Buy | Gold, Silver & Precious Metals — Best Prices in Southern California',
    description:
      'Top dollar for gold, silver, platinum, palladium & rhodium — jewelry, coins, bars, scrap, estate pieces. Free XRF testing, immediate payment at 4 SoCal locations.',
    url: '/what-we-buy',
  },
  twitter: {
    title: 'What We Buy | Top Dollar for Precious Metals in Southern California',
    description: 'Gold, silver, platinum, coins, bars, jewelry — free XRF testing, same-day cash. 4 SoCal locations.',
  },
}

const categories = [
  {
    metal: 'Gold',
    accent: '#C9A84C',
    bgFrom: 'from-[#C9A84C]/8',
    label: 'GOLD',
    description:
      'We buy all forms of gold — from fine jewelry to industrial scrap. Purity is tested on-site with our XRF machine, so you get paid for exactly what you have.',
    items: [
      { name: 'Jewelry', detail: 'Rings, necklaces, bracelets, earrings, chains — broken or whole, 10K through 24K' },
      { name: 'Coins & Bullion', detail: 'American Gold Eagles, Krugerrands, Maple Leafs, Pandas, bars, and rounds' },
      { name: 'Scrap & Dental', detail: 'Crowns, bridges, nuggets, filings, and any weight-based gold' },
      { name: 'Watches & Collectibles', detail: 'Gold-filled or solid gold watch cases, lighters, pens, and estate pieces' },
    ],
  },
  {
    metal: 'Silver',
    accent: '#9A9A9A',
    bgFrom: 'from-[#C0C0C0]/8',
    label: 'SILVER',
    description:
      'Silver prices move fast — bring yours in and get a live offer based on current spot. We buy everything from junk silver to investment-grade bullion.',
    items: [
      { name: 'Jewelry', detail: 'Sterling silver rings, necklaces, bracelets, and earrings in any condition' },
      { name: 'Coins & Bullion', detail: 'Morgan dollars, Peace dollars, American Silver Eagles, foreign coins, bars, and rounds' },
      { name: 'Flatware & Hollowware', detail: 'Sterling silver cutlery sets, tea services, platters, and candlesticks' },
      { name: 'Scrap & Dental', detail: 'Sterling scrap, dental silver, and any weight-based silver items' },
    ],
  },
  {
    metal: 'Platinum',
    accent: '#7878B8',
    bgFrom: 'from-[#C0C0E0]/8',
    label: 'PLATINUM',
    description:
      'Platinum is rarer than gold and commands premium prices. Our XRF machine distinguishes platinum from white gold in seconds — no guesswork.',
    items: [
      { name: 'Jewelry', detail: 'Platinum rings, wedding bands, necklaces, and bracelets of any purity' },
      { name: 'Coins & Bullion', detail: 'American Platinum Eagles, Canadian Maple Leafs, bars, and investment rounds' },
      { name: 'Industrial & Catalytic Scrap', detail: 'Platinum scrap by weight, including industrial and laboratory items' },
      { name: 'Watches & Collectibles', detail: 'Solid platinum watch cases, pens, lighters, and estate collectibles' },
    ],
  },
  {
    metal: 'Palladium',
    accent: '#8878B0',
    bgFrom: 'from-[#C0B8D8]/8',
    label: 'PALLADIUM',
    description:
      'Palladium prices have soared in recent years. Whether you have a palladium ring, bullion, or industrial material — we offer competitive market rates.',
    items: [
      { name: 'Bullion & Coins', detail: 'Palladium coins, bars, and rounds from any mint' },
      { name: 'Jewelry', detail: 'Palladium rings, bands, and other jewelry of any purity' },
      { name: 'Industrial Scrap', detail: 'Catalytic converters, lab equipment, and other palladium-containing materials' },
    ],
  },
  {
    metal: 'Rhodium',
    accent: '#8A7F72',
    bgFrom: 'from-[#E8E8F0]/50',
    label: 'RHODIUM',
    description:
      'One of the most valuable metals on earth. We buy rhodium bullion bars, solutions, and plating scrap at competitive prices.',
    items: [
      { name: 'Bullion Bars', detail: 'Rhodium bars from major refiners in any size' },
      { name: 'Solutions & Plating Scrap', detail: 'Rhodium plating solutions, anode scrap, and residues' },
      { name: 'Other Forms', detail: 'Any rhodium-containing material priced by assay' },
    ],
  },
]

const steps = [
  {
    step: '01',
    title: 'Bring Your Items In',
    body: 'Walk in to any of our four Southern California locations — no appointment needed. Our team will greet you and take a look at what you have.',
  },
  {
    step: '02',
    title: 'Free XRF Appraisal',
    body: "We test every item with our XRF (X-Ray Fluorescence) machine — the same technology professional refineries use. You'll see the exact purity reading in seconds.",
  },
  {
    step: '03',
    title: 'Transparent Offer',
    body: 'We calculate your offer using live spot prices and show you the math. No pressure, no mystery — just a fair number based on what your metal is actually worth.',
  },
  {
    step: '04',
    title: 'Immediate Payment',
    body: "Accept the offer and get paid on the spot. We pay cash or check, whichever you prefer. The whole process typically takes under 15 minutes.",
  },
]

export default function WhatWeBuyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[600px] sm:min-h-[680px] flex items-center overflow-hidden">
        <Image
          src="/images/store/DSC03344.jpg"
          alt="PAMP Suisse gold bars at Levant Gold & Silver"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Rich gradient: dark on left, fades right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
        {/* Subtle bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <FadeIn direction="up">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold inline-block" />
              Top Dollar Paid — Southern California
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.04] max-w-2xl mb-6">
              We Buy Every&nbsp;Form of Precious&nbsp;Metal
            </h1>
            <p className="text-white/65 max-w-lg text-lg leading-relaxed mb-10">
              Gold, silver, platinum, palladium, and rhodium — jewelry, coins, bars, scrap,
              estate pieces. Free XRF testing on-site. Same-day cash or check.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="tel:7142134785"
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm flex items-center gap-2 shadow-lg shadow-gold/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 8.25V5.999A3 3 0 0 1 1.5 4.5z" clipRule="evenodd" />
                </svg>
                Call Now — Free Appraisal
              </Link>
              <Link
                href="/locations"
                className="border border-white/25 hover:border-gold/60 hover:bg-gold/5 text-cream font-semibold px-7 py-3.5 rounded-lg transition-all text-sm"
              >
                Find a Location
              </Link>
            </div>

            {/* Trust micro-badges */}
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2">
              {['No Appointment Needed', 'Free XRF Testing', 'Same-Day Payment', '4 SoCal Locations'].map((t) => (
                <span key={t} className="flex items-center gap-2 text-white/50 text-xs font-medium tracking-wide">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Metal Categories ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-gold inline-block" />
              Metals We Accept
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal max-w-xl leading-tight">
              We Buy All Precious Metals — In Any Form, Any Condition
            </h2>
          </FadeIn>

          <div className="space-y-5">
            {categories.map((cat, i) => (
              <FadeIn key={cat.metal} delay={i * 0.07}>
                <div
                  className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${cat.bgFrom} to-white`}
                  style={{ borderLeftWidth: '4px', borderLeftColor: cat.accent }}
                >
                  {/* Watermark metal name */}
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-[7rem] sm:text-[10rem] font-heading font-bold leading-none select-none pointer-events-none opacity-[0.04]"
                    style={{ color: cat.accent }}
                    aria-hidden
                  >
                    {cat.label}
                  </span>

                  <div className="relative grid lg:grid-cols-[280px_1fr] gap-0">
                    {/* Left: metal header */}
                    <div className="px-7 py-7 lg:border-r border-border flex flex-col justify-center">
                      <h3
                        className="text-2xl font-heading font-bold mb-2"
                        style={{ color: cat.accent === '#8A7F72' ? '#6b6157' : cat.accent }}
                      >
                        {cat.metal}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">{cat.description}</p>
                    </div>

                    {/* Right: items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
                      {cat.items.map((item) => (
                        <div key={item.name} className="px-6 py-6">
                          <p
                            className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1.5"
                            style={{ color: cat.accent === '#8A7F72' ? '#8A7F72' : cat.accent }}
                          >
                            {item.name}
                          </p>
                          <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        {/* Decorative gradient blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-gold inline-block" />
              The Process
              <span className="w-6 h-px bg-gold inline-block" />
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream">
              Four Steps. Under 15 Minutes.
            </h2>
            <p className="mt-3 text-cream/50 max-w-md mx-auto text-sm">
              Fast, transparent, and pressure-free — from walk-in to payment.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="relative group">
                  {/* Connector line (desktop only, not on last) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gradient-to-r from-white/10 to-transparent z-10" />
                  )}

                  <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-7 h-full group-hover:bg-white/[0.07] group-hover:border-gold/20 transition-all duration-300">
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold text-xs font-bold font-mono shrink-0 group-hover:bg-gold/10 transition-colors">
                        {s.step}
                      </span>
                      <div className="h-px flex-1 bg-white/8" />
                    </div>
                    <h3 className="font-heading font-bold text-cream text-lg mb-2.5">{s.title}</h3>
                    <p className="text-cream/55 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Mosaic ── */}
      <section className="bg-charcoal pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 grid-rows-2 gap-2 h-72 sm:h-96">
            {/* Large left */}
            <div className="col-span-5 row-span-2 relative rounded-xl overflow-hidden">
              <Image src="/images/store/DSC03392.jpg" alt="Levant Gold & Silver store interior" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="40vw" />
            </div>
            {/* Top middle */}
            <div className="col-span-4 row-span-1 relative rounded-xl overflow-hidden">
              <Image src="/images/store/DSC03302.jpg" alt="Coins and bars at Levant" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="33vw" />
            </div>
            {/* Bottom middle */}
            <div className="col-span-4 row-span-1 relative rounded-xl overflow-hidden">
              <Image src="/images/store/DSC03395.jpg" alt="Jewelry on velvet tray" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="33vw" />
            </div>
            {/* Right tall */}
            <div className="col-span-3 row-span-2 relative rounded-xl overflow-hidden">
              <Image src="/images/store/DSC03344.jpg" alt="PAMP Suisse gold bars" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── XRF Split Section ── */}
      <section className="bg-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[360px] lg:min-h-[500px]">
              <Image
                src="/images/store/DSC03411.jpg"
                alt="XRF testing machine at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream-dark/20 hidden lg:block" />
            </div>

            {/* Content */}
            <div className="px-8 py-16 lg:px-14 lg:py-20 flex flex-col justify-center">
              <FadeIn direction="left">
                <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                  <span className="w-6 h-px bg-gold inline-block" />
                  Scientific Accuracy
                </p>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-5 leading-tight">
                  Every Item Tested with XRF Technology
                </h2>
                <p className="text-muted leading-relaxed mb-8 text-sm">
                  Our X-Ray Fluorescence machine identifies the exact elemental composition of your
                  metal — the same equipment used by professional mints and refineries worldwide.
                  Results in seconds, performed in front of you, with zero damage to your items.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Results in', value: '<30 sec' },
                    { label: 'Accuracy', value: '±0.01%' },
                    { label: 'Damage', value: 'None' },
                    { label: 'Tested by', value: 'You Watch' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-border rounded-xl p-4">
                      <p className="text-[10px] uppercase tracking-widest text-muted mb-1">{stat.label}</p>
                      <p className="font-heading font-bold text-charcoal text-lg">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold text-sm transition-colors"
                >
                  Learn more about our technology
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <StatsStrip />

      {/* ── FAQ ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-gold inline-block" />
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal leading-tight">
              Common Questions
            </h2>
            <p className="mt-3 text-muted text-sm max-w-sm">
              Everything you need to know before you walk in.
            </p>
          </FadeIn>

          <WhatWeBuyFAQ />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/store/DSC03307.jpg"
          alt="Silver dollars and coins at Levant Gold & Silver"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal/88" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-gold inline-block" />
              Walk In Today
              <span className="w-6 h-px bg-gold inline-block" />
            </p>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-cream mb-4 leading-tight">
              Ready to Sell?
            </h2>
            <p className="text-cream/60 mb-10 leading-relaxed max-w-lg mx-auto">
              Walk in to any of our four Southern California locations for a free,
              no-pressure appraisal. No appointment needed, paid on the spot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="tel:7142134785"
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm flex items-center gap-2 shadow-lg shadow-gold/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 8.25V5.999A3 3 0 0 1 1.5 4.5z" clipRule="evenodd" />
                </svg>
                Call Now
              </Link>
              <Link
                href="/locations"
                className="border border-white/20 hover:border-gold/50 hover:bg-gold/5 text-cream font-semibold px-8 py-3.5 rounded-lg transition-all text-sm"
              >
                Find a Location
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 hover:border-gold/50 hover:bg-gold/5 text-cream font-semibold px-8 py-3.5 rounded-lg transition-all text-sm"
              >
                Request a Quote Online
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
