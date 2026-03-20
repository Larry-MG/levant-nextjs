import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'

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
    icon: '⬡',
    description:
      'We buy all forms of gold — from fine jewelry to industrial scrap. Purity is tested on-site with our XRF machine, so you get paid for exactly what you have.',
    items: [
      {
        name: 'Jewelry',
        detail: 'Rings, necklaces, bracelets, earrings, chains — broken or whole, 10K through 24K',
      },
      {
        name: 'Coins & Bullion',
        detail: 'American Gold Eagles, Krugerrands, Maple Leafs, Pandas, bars, and rounds',
      },
      {
        name: 'Scrap & Dental',
        detail: 'Crowns, bridges, nuggets, filings, and any weight-based gold',
      },
      {
        name: 'Watches & Collectibles',
        detail: 'Gold-filled or solid gold watch cases, lighters, pens, and estate pieces',
      },
    ],
  },
  {
    metal: 'Silver',
    accent: '#C0C0C0',
    icon: '◈',
    description:
      'Silver prices move fast — bring yours in and get a live offer based on current spot. We buy everything from junk silver to investment-grade bullion.',
    items: [
      {
        name: 'Jewelry',
        detail: 'Sterling silver rings, necklaces, bracelets, and earrings in any condition',
      },
      {
        name: 'Coins & Bullion',
        detail: 'Morgan dollars, Peace dollars, American Silver Eagles, foreign coins, bars, and rounds',
      },
      {
        name: 'Flatware & Hollowware',
        detail: 'Sterling silver cutlery sets, tea services, platters, and candlesticks',
      },
      {
        name: 'Scrap & Dental',
        detail: 'Sterling scrap, dental silver, and any weight-based silver items',
      },
    ],
  },
  {
    metal: 'Platinum',
    accent: '#C0C0E0',
    icon: '◇',
    description:
      'Platinum is rarer than gold and commands premium prices. Our XRF machine distinguishes platinum from white gold in seconds — no guesswork.',
    items: [
      {
        name: 'Jewelry',
        detail: 'Platinum rings, wedding bands, necklaces, and bracelets of any purity',
      },
      {
        name: 'Coins & Bullion',
        detail: 'American Platinum Eagles, Canadian Maple Leafs, bars, and investment rounds',
      },
      {
        name: 'Industrial & Catalytic Scrap',
        detail: 'Platinum scrap by weight, including industrial and laboratory items',
      },
      {
        name: 'Watches & Collectibles',
        detail: 'Solid platinum watch cases, pens, lighters, and estate collectibles',
      },
    ],
  },
  {
    metal: 'Palladium',
    accent: '#C0B8D8',
    icon: '◆',
    description:
      'Palladium prices have soared in recent years. Whether you have a palladium ring, bullion, or industrial material — we offer competitive market rates.',
    items: [
      {
        name: 'Bullion & Coins',
        detail: 'Palladium coins, bars, and rounds from any mint',
      },
      {
        name: 'Jewelry',
        detail: 'Palladium rings, bands, and other jewelry of any purity',
      },
      {
        name: 'Industrial Scrap',
        detail: 'Catalytic converters, lab equipment, and other palladium-containing materials',
      },
    ],
  },
  {
    metal: 'Rhodium',
    accent: '#E8E8F0',
    icon: '◉',
    description:
      'One of the most valuable metals on earth. We buy rhodium bullion bars, solutions, and plating scrap at competitive prices.',
    items: [
      {
        name: 'Bullion Bars',
        detail: 'Rhodium bars from major refiners in any size',
      },
      {
        name: 'Solutions & Plating Scrap',
        detail: 'Rhodium plating solutions, anode scrap, and residues',
      },
      {
        name: 'Other Forms',
        detail: 'Any rhodium-containing material priced by assay',
      },
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
      <section className="bg-charcoal py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Top Dollar Paid — Southern California
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight max-w-3xl">
              What We Buy
            </h1>
            <p className="mt-6 text-cream/70 max-w-2xl text-lg leading-relaxed">
              We buy gold, silver, platinum, palladium, and rhodium in any form — jewelry, coins,
              bars, scrap, and estate pieces. Every item is tested on-site with our XRF machine and
              priced at live spot rates.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/locations"
                className="border border-white/20 hover:border-white/40 text-cream font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Find a Location
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-charcoal text-sm font-semibold">
            {['No Appointment Needed', 'Free XRF Testing', 'Immediate Payment', 'No Pressure Offers', '4 SoCal Locations'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-charcoal/60">&#10003;</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Metals We Accept
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              We Buy All Precious Metals
            </h2>
            <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
              From a single ring to a full estate collection — we handle it all with the same
              professional evaluation process.
            </p>
          </FadeIn>

          <div className="space-y-10">
            {categories.map((cat, i) => (
              <FadeIn key={cat.metal} delay={i * 0.05}>
                <div className="bg-white border border-border rounded-2xl overflow-hidden">
                  {/* Category header */}
                  <div className="flex items-center gap-4 px-6 sm:px-8 py-5 border-b border-border">
                    <span
                      className="text-2xl font-mono font-bold w-10 text-center flex-shrink-0"
                      style={{ color: cat.accent }}
                    >
                      {cat.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-charcoal">{cat.metal}</h3>
                      <p className="text-sm text-muted mt-0.5 leading-snug">{cat.description}</p>
                    </div>
                  </div>

                  {/* Item grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                    {cat.items.map((item) => (
                      <div key={item.name} className="px-6 py-5 bg-white">
                        <p
                          className="text-xs font-bold tracking-[0.15em] uppercase mb-2"
                          style={{ color: cat.accent === '#E8E8F0' ? '#8A7F72' : cat.accent }}
                        >
                          {item.name}
                        </p>
                        <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
              The Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream">
              How Selling Works
            </h2>
            <p className="mt-4 text-cream/60 max-w-lg mx-auto">
              Fast, transparent, and pressure-free. Most transactions take less than 15 minutes.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                  <p className="text-5xl font-heading font-bold text-white/8 leading-none mb-4 select-none">
                    {s.step}
                  </p>
                  <h3 className="font-heading font-bold text-cream text-lg mb-2">{s.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── XRF Callout ── */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Scientific Accuracy
            </p>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-5">
              Every Item Tested with XRF Technology
            </h2>
            <p className="text-muted leading-relaxed mb-6 max-w-2xl mx-auto">
              Our X-Ray Fluorescence machine identifies the exact elemental composition of your
              metal — the same equipment used by professional mints and refineries worldwide.
              Results in seconds, performed in front of you, with zero damage to your items.
              No acid tests. No guesswork.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted mb-8">
              {[
                'Results in under 30 seconds',
                'Non-destructive testing',
                'Accurate to fractions of a percent',
                'Performed in front of you',
              ].map((pt) => (
                <span key={pt} className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span>
                  {pt}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-block text-gold hover:text-gold-dark font-semibold text-sm transition-colors underline underline-offset-4"
            >
              Learn more about our technology →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-heading font-bold text-charcoal">Common Questions</h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: 'Do I need an appointment?',
                a: 'No — walk in any time during business hours at any of our four locations. Our team will evaluate your items immediately.',
              },
              {
                q: 'How do you determine the value of my items?',
                a: 'We test purity with our XRF machine, weigh your items on a certified scale, and calculate your offer using the live spot price for that metal at the time of your visit.',
              },
              {
                q: 'What condition do items need to be in?',
                a: 'Condition doesn\'t affect the metal value. Broken jewelry, bent coins, and worn pieces are all welcome — we pay for the metal content, not the aesthetics.',
              },
              {
                q: 'What forms of payment do you offer?',
                a: 'We pay cash or check on the spot. There is no waiting period or processing time.',
              },
              {
                q: 'Do you buy items without hallmarks or stamps?',
                a: 'Yes. Our XRF machine determines purity directly from the metal itself, so stamps or hallmarks are not required.',
              },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white border border-border rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-charcoal mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream mb-4">
              Ready to sell?
            </h2>
            <p className="text-cream/60 mb-8 leading-relaxed">
              Walk in to any of our four Southern California locations for a free, no-pressure
              appraisal — or reach out online and we&apos;ll get back to you quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
              >
                Request a Quote Online
              </Link>
              <Link
                href="/locations"
                className="border border-white/20 hover:border-white/40 text-cream font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
              >
                Find a Location
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
