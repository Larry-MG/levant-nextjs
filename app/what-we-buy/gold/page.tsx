import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import StaggerChildren from '@/components/ui/StaggerChildren'
import MotionItem from '@/components/ui/MotionItem'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'
import StatsStrip from '@/components/what-we-buy/StatsStrip'

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

const karats = [
  { karat: '10K', purity: '41.7%' },
  { karat: '14K', purity: '58.3%' },
  { karat: '18K', purity: '75.0%' },
  { karat: '22K', purity: '91.7%' },
  { karat: '24K', purity: '99.9%' },
]

const testimonials = [
  {
    quote: 'I brought in some old gold jewelry and walked out with $500 in minutes. The team was professional and honest about pricing.',
    author: 'Jane D., Orange CA',
  },
  {
    quote: 'Best gold prices I found in all of Orange County. They explained everything clearly and paid me on the spot.',
    author: 'Robert K., Anaheim CA',
  },
  {
    quote: "I was nervous selling my grandmother's jewelry but they made the process comfortable and transparent. Fair offer, no pressure.",
    author: 'Maria L., Pomona CA',
  },
]

const showcaseCards = [
  {
    src: '/images/store/gold-rand-refinery.jpg',
    alt: 'Rand Refinery gold bars and gold coins at Levant Gold & Silver',
    label: 'Bullion & Bars',
    objectFit: 'object-cover',
  },
  {
    src: '/images/store/DSC03392.jpg',
    alt: 'Gold coins and jewelry on velvet tray at Levant Gold & Silver',
    label: 'Gold Coins',
    objectFit: 'object-cover',
  },
  {
    src: '/images/store/DSC03395.jpg',
    alt: 'Gold jewelry on velvet tray at Levant Gold & Silver',
    label: 'Gold Jewelry',
    objectFit: 'object-cover',
  },
]

export default function GoldPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/home-banner.webp"
          alt=""
          fill
          className="object-cover object-center opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/78 to-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.32),transparent_36%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  href="tel:7142134785"
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 8.25V5.999A3 3 0 0 1 1.5 4.5z" clipRule="evenodd" />
                  </svg>
                  Call Now
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

      {/* ── Product Showcase ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
              What We Accept
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream">
              Gold We Purchase Every Day
            </h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-3 gap-5" staggerDelay={0.12}>
            {showcaseCards.map((card) => (
              <MotionItem
                key={card.label}
                className="relative overflow-hidden rounded-2xl h-72 group cursor-default"
              >
                {/* dark bg for coin so object-contain looks clean */}
                <div className="absolute inset-0 bg-charcoal-mid" />
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className={`${card.objectFit} transition-transform duration-500 group-hover:scale-105`}
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                  <p className="text-gold text-xs font-bold tracking-[0.18em] uppercase mb-1">{card.label}</p>
                </div>
              </MotionItem>
            ))}
          </StaggerChildren>
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

      {/* ── Photo Mosaic Row ── */}
      <section className="bg-cream-dark py-3 px-3 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-2 h-[320px] sm:h-[420px]">
            {/* Left — tall */}
            <div className="col-span-1 row-span-2 relative overflow-hidden rounded-xl">
              <Image
                src="/images/store/DSC03360.jpg"
                alt="Gold bars angled display at Levant Gold & Silver"
                fill
                sizes="(max-width: 768px) 33vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Top right */}
            <div className="col-span-2 relative overflow-hidden rounded-xl">
              <Image
                src="/images/store/DSC03344.jpg"
                alt="PAMP Suisse gold bars collection"
                fill
                sizes="(max-width: 768px) 66vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Bottom right */}
            <div className="col-span-2 relative overflow-hidden rounded-xl">
              <Image
                src="/images/store/DSC03302.jpg"
                alt="Mixed gold coins, bars, and slabs"
                fill
                sizes="(max-width: 768px) 66vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
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

      {/* ── Karats Split Panel ── */}
      <section className="bg-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" delay={0.1} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 order-2 lg:order-1">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Purity &amp; Value</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-4 leading-tight">
                We Buy All Karats —<br />10K to 24K
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-7 max-w-md">
                From everyday 10K and 14K jewelry to high-purity 18K, 22K, and 24K investment pieces — every karat has value. Our XRF machine reads exact purity in seconds, so you&rsquo;re always paid for exactly what you bring in, not an estimate.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {karats.map((k) => (
                  <div key={k.karat} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-sm font-semibold text-charcoal w-10">{k.karat}</span>
                    <span className="text-sm text-muted">{k.purity} pure gold</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" className="relative min-h-[380px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03395.jpg"
                alt="Gold jewelry on velvet tray showing various karats"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <StatsStrip />

      {/* ── Testimonials ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">5-Star Reviews</p>
            <h2 className="text-3xl font-heading font-bold text-cream">What Our Customers Say</h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-3 gap-6" staggerDelay={0.12}>
            {testimonials.map((t) => (
              <MotionItem
                key={t.author}
                className="bg-charcoal-soft border border-white/10 rounded-2xl p-7 flex flex-col gap-5"
              >
                <p className="text-gold text-3xl leading-none">&ldquo;</p>
                <p className="text-cream/80 text-sm leading-relaxed flex-1">{t.quote}</p>
                <footer className="text-muted text-xs font-semibold">— {t.author}</footer>
              </MotionItem>
            ))}
          </StaggerChildren>
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

      {/* ── Large Collection Split ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[380px]">
              <Image
                src="/images/store/DSC03302.jpg"
                alt="Mixed coins, bars, and slabs — large gold collection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Large Collections Welcome</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-4 leading-tight">
                Selling a Large<br />Gold Collection?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-7 max-w-md">
                We specialize in estate lots, inherited collections, and bulk transactions. Whether you have 5 pieces or 500, our team handles everything with discretion and efficiency — all in a single visit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="tel:7142134785"
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Call Us First
                </Link>
                <Link
                  href="/contact"
                  className="border border-charcoal/25 hover:border-charcoal/60 text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Request a Quote
                </Link>
              </div>
            </FadeIn>
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
