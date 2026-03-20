import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'

export const metadata: Metadata = {
  title: 'Sell Gold Jewelry, Coins & Bullion | Best Prices in Southern California',
  description:
    'Get the best price for your gold jewelry, coins, and bullion bars at Levant Gold & Silver. Free XRF testing, live spot pricing, same-day cash. 4 locations: Orange, Pomona, San Bernardino & Walnut, CA.',
  alternates: { canonical: '/what-we-buy/gold' },
  keywords: [
    'sell gold Southern California', 'sell gold jewelry Orange CA',
    'sell gold coins Pomona', 'sell gold San Bernardino', 'sell gold Walnut CA',
    'best gold prices Orange County', 'best gold prices Inland Empire',
    'gold bullion buyer California', 'sell American Gold Eagle',
    'sell gold Krugerrand', 'gold jewelry buyer near me',
    'cash for gold near me', '14k gold buyer', '18k gold buyer',
    'sell scrap gold Southern California',
  ],
  openGraph: {
    title: 'Sell Gold Jewelry, Coins & Bullion | Best Prices in Southern California',
    description:
      'Top-rated gold buyer in Southern California. Free XRF testing, live spot pricing, immediate cash. 4 locations — Orange, Pomona, San Bernardino & Walnut.',
    url: '/what-we-buy/gold',
  },
  twitter: {
    title: 'Sell Your Gold | Best Prices in Southern California',
    description: 'Free XRF testing, same-day cash. Jewelry, coins, bullion. 4 SoCal locations.',
  },
}

const items = [
  {
    name: 'Gold Jewelry',
    detail:
      'Rings, necklaces, bracelets, earrings, chains, pendants, wedding bands, engagement rings, cufflinks, and medals — any karat (10K through 24K). Broken, bent, or mismatched pieces are all welcome. We pay for gold content, not cosmetic condition.',
  },
  {
    name: 'Gold Coins',
    detail:
      'American Gold Eagles, Buffalo coins, Canadian Maple Leafs, South African Krugerrands, Austrian Philharmonics, Chinese Pandas, Australian Kangaroos, British Britannias, $20 Double Eagles, and European sovereigns. PCGS/NGC-graded numismatic pieces receive premium valuations.',
  },
  {
    name: 'Gold Bullion & Bars',
    detail:
      '1-gram pieces through kilogram bars from Credit Suisse, PAMP Suisse, Perth Mint, Valcambi, and other major refiners. Sealed, loose, or even damaged bars accepted — we test everything. We accommodate large transactions and bulk orders.',
  },
  {
    name: 'Other Gold Items',
    detail:
      'Gold nuggets, flakes, dental crowns and bridges, gold pocket watches, scrap gold, gold-filled items. If it contains gold, we\'ll test it with our XRF machine and make a fair offer based on the exact purity reading.',
  },
]

const whySell = [
  { title: 'Highest Payouts', body: 'We offer the highest payouts in the region, calculated directly from live gold spot prices with no hidden deductions.' },
  { title: 'Safe & Secure', body: 'Every transaction is handled in a professional, welcoming environment at one of our four established Southern California locations.' },
  { title: 'Expert Buyers', body: 'Our team has deep knowledge of gold jewelry, coins, and bullion — including numismatic value for collector pieces.' },
  { title: 'Immediate Payment', body: 'Accept our offer and receive cash, check, wire transfer, Zelle, or CashApp the same visit. No waiting period.' },
  { title: 'Trusted by Customers', body: 'Hundreds of 5-star reviews across our Southern California locations. Transparent process from testing to payment.' },
]

const steps = [
  { step: '01', title: 'Visit Our Store', body: 'Walk in to any of our four Southern California locations — no appointment needed. Bring your gold items, however many you have.' },
  { step: '02', title: 'Free Evaluation', body: 'We test every item with our XRF machine, weigh on certified scales, and calculate your offer at live spot pricing — all in front of you.' },
  { step: '03', title: 'Get Paid On the Spot', body: 'Accept the offer and choose your payment method: cash, check, wire transfer, Zelle, or CashApp. Done in minutes.' },
]

export default function GoldPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center min-h-[520px]">
            <FadeIn direction="right" className="py-20 lg:py-28">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                What We Buy — Gold
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Get the Best Price<br />for Your Gold.
              </h1>
              <p className="mt-5 text-cream/70 text-lg leading-relaxed max-w-lg">
                Jewelry, Coins, and Gold Bullion — We Buy All Gold, No Amount Too Small or Large.
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
            <FadeIn direction="left" delay={0.15} className="hidden lg:flex justify-center items-end pt-10">
              <div className="relative w-full max-w-[520px] h-[460px]">
                <Image
                  src="/images/what-we-buy/Group-1000008359-1.webp"
                  alt="Gold jewelry, coins, and bullion bars we buy at Levant Gold & Silver"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="520px"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Live Prices ── */}
      <div>
        <div className="bg-charcoal pt-4 pb-2">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase text-center">
            Live Gold, Silver, &amp; Platinum Prices
          </p>
        </div>
        <SpotPriceTicker />
      </div>

      {/* ── What Gold Items We Buy ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Gold Items We Accept
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              What Gold Items We Buy
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">
              Levant Gold &amp; Silver helps you get the best price for your gold, offering the
              highest payouts in the region — whether it&rsquo;s old jewelry, gold coins, or
              bullion bars.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-xl p-6 h-full">
                  <p className="text-gold text-xs font-bold tracking-[0.15em] uppercase mb-2">{item.name}</p>
                  <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Store Photo + Why Sell ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[360px]">
              <Image
                src="/images/store/DSC03344.jpg"
                alt="PAMP Suisse gold bars at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Community &amp; Reputation</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-4 leading-tight">
                Why Sell Gold to<br />Levant Gold &amp; Silver?
              </h2>
              <div className="space-y-3">
                {whySell.map((w) => (
                  <div key={w.title} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0">&#10003;</span>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">{w.title}</p>
                      <p className="text-xs text-muted leading-relaxed">{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-14 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <blockquote className="bg-white border border-border rounded-2xl p-8 sm:p-10 text-center">
              <p className="text-gold text-2xl mb-4">&ldquo;</p>
              <p className="text-charcoal text-lg leading-relaxed font-medium mb-5">
                I brought in some old gold jewelry and walked out with $500 in minutes. The team
                was professional and honest about pricing.
              </p>
              <footer className="text-muted text-sm font-semibold">— Jane D., Orange CA</footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ── Gold Calculator ── */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
              How Much Your Gold Is Worth
            </p>
            <h2 className="text-3xl font-heading font-bold text-cream">Gold Calculator</h2>
            <p className="mt-3 text-cream/60 text-sm max-w-md mx-auto">
              Estimate the value of your gold based on live spot prices. Your actual offer may vary
              slightly by karat confirmation and condition.
            </p>
          </FadeIn>
          <GoldCalculator compact />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">The Process</p>
            <h2 className="text-3xl font-heading font-bold text-charcoal">How It Works</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-xl p-7 h-full text-center">
                  <p className="text-5xl font-heading font-bold text-charcoal/8 leading-none mb-4 select-none">{s.step}</p>
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-2">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── XRF Machine ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 order-2 lg:order-1">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Technology</p>
              <h2 className="text-3xl font-heading font-bold text-cream mb-4 leading-tight">
                Our State-of-the-Art<br />X-Ray Machine
              </h2>
              <p className="text-cream/60 leading-relaxed mb-5 text-sm">
                We use XRF (X-Ray Fluorescence) technology to accurately assess the value of your
                gold, silver, and other precious metals. This is the newest advancement in the
                industry — the same equipment used by professional refineries worldwide.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Non-destructive — no damage to your items',
                  'Results in seconds, performed in front of you',
                  'Accurate to fractions of a percent',
                  'Identifies all metals — gold, silver, platinum, and more',
                  'Far more accurate than acid tests',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0">&#10003;</span>
                    <span className="text-cream/70 text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" className="relative min-h-[400px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03411.jpg"
                alt="XRF X-Ray Fluorescence machine at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
              Ready to Sell Your Gold?
            </h2>
            <p className="text-charcoal/70 mb-8">
              Walk in to any of our four Southern California locations — or request a quote online
              and we&rsquo;ll get back to you quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-charcoal hover:bg-charcoal/80 text-cream font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
              >
                Sell Your Gold Today
              </Link>
              <Link
                href="/locations"
                className="border border-charcoal/30 hover:border-charcoal text-charcoal font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
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
