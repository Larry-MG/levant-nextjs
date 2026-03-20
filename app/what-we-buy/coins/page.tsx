import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'
import StatsStrip from '@/components/what-we-buy/StatsStrip'

export const metadata: Metadata = {
  title: 'Sell Gold & Silver Coins | Bullion, Junk Silver & Numismatic — Southern California',
  description:
    'Get maximum value for your coins at Levant Gold & Silver. We buy bullion coins, junk silver, rare numismatic pieces, and PCGS/NGC graded collections. Free XRF testing, live spot pricing at 4 locations: Orange, Pomona, San Bernardino & Walnut.',
  alternates: { canonical: '/what-we-buy/coins' },
  keywords: [
    'sell gold coins Southern California', 'sell silver coins near me',
    'coin buyer Orange CA', 'coin buyer Pomona', 'numismatic coin buyer',
    'junk silver buyer Southern California', 'sell American Gold Eagle',
    'sell Morgan dollar', 'sell Peace dollar', 'sell pre-1965 silver coins',
    'PCGS graded coin buyer', 'NGC graded coin buyer',
    'gold coin buyer Inland Empire', 'rare coin buyer California',
  ],
  openGraph: {
    title: 'Sell Gold & Silver Coins | Best Prices in Southern California',
    description:
      'Maximum value for bullion coins, junk silver, and numismatic pieces. PCGS/NGC graded collections welcome. Free XRF testing at 4 SoCal locations.',
    url: '/what-we-buy/coins',
  },
  twitter: {
    title: 'Sell Gold & Silver Coins | Best Prices in Southern California',
    description: 'Bullion, junk silver, numismatic. PCGS/NGC welcome. Free XRF testing, same-day cash.',
  },
}

const categories = [
  {
    name: 'Gold Coins',
    accent: '#C9A84C',
    coins: [
      'American Gold Eagle', 'American Gold Buffalo', 'Canadian Gold Maple Leaf',
      'South African Krugerrand', 'Austrian Gold Philharmonic', 'Chinese Gold Panda',
      'Australian Gold Kangaroo', 'British Gold Britannia', '$20 Double Eagle',
      'European Gold Sovereigns',
    ],
    detail: 'Investment-grade and numismatic gold coins are both welcome. PCGS/NGC-graded rarities receive premium valuations above melt — condition and grade are factored into every offer.',
  },
  {
    name: 'Silver Coins',
    accent: '#C0C0C0',
    coins: [
      'American Silver Eagle', 'Canadian Silver Maple Leaf', 'Morgan Dollar',
      'Peace Dollar', 'British Britannia', 'Mexican Libertad',
      'Pre-1965 U.S. Junk Silver',
    ],
    detail: 'We evaluate both metal content and collector value. High-grade and key-date coins frequently command significant premiums above melt. Junk silver bags purchased by face value or weight.',
  },
  {
    name: 'Platinum & Palladium Coins',
    accent: '#C0C0E0',
    coins: [
      'American Platinum Eagle', 'Canadian Platinum Maple Leaf',
      'Isle of Man Platinum Noble', 'Canadian Palladium Maple Leaf',
    ],
    detail: 'Platinum and palladium coins evaluated for both purity and collector appeal. Rarity and grade are factored in alongside current spot prices.',
  },
  {
    name: 'Other Coins & Bullion Rounds',
    accent: '#8A7F72',
    coins: [
      'World Coins', 'Commemorative Sets', 'Proof Sets',
      'Non-Coin Bullion Rounds', 'Specialty Coins',
    ],
    detail: 'Any coin with precious metal content is welcome. We\'ll test it and make a fair offer based on what\'s actually inside.',
  },
]

const evaluation = [
  { title: 'Metal Content', body: 'We weigh every coin on certified scales and verify metal content using our XRF machine or published mint specifications for known issues.' },
  { title: 'Grade & Condition', body: 'We assess wear, luster, and strike quality. Key-date and high-grade coins often command significant premiums above melt value.' },
  { title: 'Numismatic Value', body: 'For collector coins, we reference standard catalogs and grading standards. PCGS/NGC slabbed coins are evaluated for registry value.' },
  { title: 'Live Spot Pricing', body: 'All metal content is calculated at the current gold, silver, or platinum spot price at the moment of your visit — shown to you openly.' },
]

const whySell = [
  { title: 'Top-Dollar Payouts', body: 'We pay both melt value and numismatic premium where applicable — you get the full value of what you have.' },
  { title: 'Expertise in Coin Valuation', body: 'Our buyers understand the difference between a common date and a key date, and price accordingly.' },
  { title: 'Convenient for Any Quantity', body: 'Single coins or complete collections — same professional evaluation process, any volume.' },
  { title: 'Secure, Private Deals', body: 'Large coin transactions are handled with complete discretion at our established Southern California locations.' },
]

const steps = [
  { step: '01', title: 'Visit Our Store', body: 'Walk in to any location with your coins. No appointment needed for single pieces or entire collections.' },
  { step: '02', title: 'Free Evaluation', body: 'We assess metal content, grade, and numismatic value. Known bullion coins are checked against spot; collector pieces are graded carefully.' },
  { step: '03', title: 'Get Paid On the Spot', body: 'Accept the offer and receive payment immediately — cash, check, wire, Zelle, or CashApp.' },
]

const coinShowcase = [
  {
    image: '/images/products/gold-eagle-1oz.png',
    name: 'American Gold Eagle',
    descriptor: '1 oz | ¼ oz | ½ oz sizes',
  },
  {
    image: '/images/products/silver-morgan.png',
    name: 'Morgan Silver Dollar',
    descriptor: 'Pre-1921 key dates get premium',
  },
  {
    image: '/images/products/silver-buffalo.png',
    name: 'Silver Buffalo Round',
    descriptor: '.999 fine silver',
  },
  {
    image: '/images/products/gold-eagle-quarter.png',
    name: 'Gold Eagle Quarter Oz',
    descriptor: 'Fractional gold coins',
  },
]

const testimonials = [
  {
    quote: 'I brought in a large collection of Morgan dollars and Peace dollars. They identified several key dates and paid numismatic value, not just melt price. Outstanding.',
    author: 'M.R., Southern California',
  },
  {
    quote: 'Excellent process — they weighed my junk silver, calculated at live spot, and paid cash immediately. No drama, no waiting.',
    author: 'Kevin T., Walnut',
  },
  {
    quote: 'I had mixed coins from three generations of family collecting. They sorted, evaluated, and explained every piece. I left with fair value and full confidence.',
    author: 'Sandra H., Riverside',
  },
]

export default function CoinsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center min-h-[520px]">
            <FadeIn direction="right" className="py-20 lg:py-28">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                What We Buy — Coins
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Get Maximum Value<br />for Your Coin Collection.
              </h1>
              <p className="mt-5 text-cream/70 text-lg leading-relaxed max-w-lg">
                We Buy Gold, Silver &amp; Platinum Coins — Including Rare &amp; Numismatic Pieces.
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
                  src="/images/what-we-buy/Group-1000008359-2.webp"
                  alt="Gold and silver coins we buy — Eagles, Maple Leafs, Morgan dollars"
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

      {/* ── Coin Showcase Grid ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Popular Coins</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream">
              Coins We Buy Every Day
            </h2>
            <p className="mt-4 text-cream/60 max-w-2xl mx-auto leading-relaxed text-sm">
              From classic American Eagles to vintage Morgan dollars — we know exactly what your
              coins are worth and pay accordingly.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {coinShowcase.map((coin, i) => (
              <FadeIn key={coin.name} delay={i * 0.08}>
                <div className="bg-charcoal-soft rounded-2xl p-5 flex flex-col items-center text-center group hover:border hover:border-gold/40 border border-white/0 transition-all duration-300">
                  <div className="mb-4 w-[140px] h-[140px] relative flex items-center justify-center">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={140}
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{coin.name}</p>
                  <p className="text-muted text-xs">{coin.descriptor}</p>
                </div>
              </FadeIn>
            ))}
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

      {/* ── Coin Categories ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Coins We Accept</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              What Coin Items We Buy
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">
              We specialize in buying coins of all kinds — from common bullion to rare collectibles —
              with a transparent process and immediate cash payment.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <FadeIn key={cat.name} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-xl p-6 h-full">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: cat.accent }}>
                    {cat.name}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.coins.map((coin) => (
                      <span key={coin} className="text-xs bg-cream border border-border rounded-full px-2.5 py-1 text-charcoal/70">
                        {coin}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{cat.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Numismatic Value — Photo Split ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[420px]">
              <Image
                src="/images/store/DSC03302.jpg"
                alt="Coins, bars, and slabs in a display case at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Collector Coins</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                We Pay for Numismatic Value,<br />Not Just Melt
              </h2>
              <p className="text-muted leading-relaxed mb-6 text-sm">
                A PCGS or NGC graded Morgan dollar can be worth far more than its silver content.
                Our team recognizes key dates, mint marks, and condition grades — so you always get
                the full value of collectible coins.
              </p>
              <ul className="space-y-3">
                {[
                  'PCGS & NGC certified coins evaluated at grade',
                  'Key dates (1895-O, 1893-S, etc.) get special attention',
                  'Pre-1933 U.S. gold coins assessed for collector premium',
                  'Foreign rarities and error coins welcome',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-charcoal">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── How We Evaluate ── */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Approach</p>
            <h2 className="text-3xl font-heading font-bold text-cream">How We Evaluate Your Coins</h2>
            <p className="mt-4 text-cream/60 max-w-lg mx-auto text-sm">
              Our coin evaluation is professional, transparent, and tailored to both bullion and
              numismatic aspects.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {evaluation.map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                  <h3 className="font-heading font-bold text-cream mb-2">{e.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{e.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <StatsStrip />

      {/* ── Why Sell ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[360px]">
              <Image
                src="/images/store/DSC03344.jpg"
                alt="PAMP Suisse gold bars and coins at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Why Choose Levant</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Why Sell Coins to<br />Levant Gold &amp; Silver?
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

      {/* ── Testimonials ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Verified Reviews</p>
            <h2 className="text-3xl font-heading font-bold text-cream">
              What Coin Sellers Say
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                  <p className="text-gold text-3xl leading-none mb-4">&ldquo;</p>
                  <p className="text-cream/80 text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>
                  <footer className="text-muted text-xs font-semibold">— {t.author}</footer>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gold Calculator ── */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Estimate Your Payout</p>
            <h2 className="text-3xl font-heading font-bold text-cream">Gold Calculator</h2>
            <p className="mt-3 text-cream/60 text-sm max-w-md mx-auto">
              Estimate coin melt value based on live spot prices. Numismatic premiums may apply on top.
            </p>
          </FadeIn>
          <GoldCalculator compact />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Simple Process</p>
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

      {/* ── Large Collection — Photo Split ── */}
      <section className="bg-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 order-2 lg:order-1">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Bulk &amp; Estate Coins</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Selling a Coin Collection?
              </h2>
              <p className="text-muted leading-relaxed mb-7 text-sm">
                We buy complete coin sets, estate lots, rolls, boxes, and entire collections. No
                need to sort or grade beforehand — bring everything in and our team will evaluate
                it all in a single visit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="tel:7142134785"
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 8.25V5.999A3 3 0 0 1 1.5 4.5z" clipRule="evenodd" />
                  </svg>
                  Call Now
                </Link>
                <Link
                  href="/contact"
                  className="border border-charcoal/20 hover:border-charcoal/50 text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Request a Quote
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="relative min-h-[400px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03302.jpg"
                alt="Large coin collection, bars, and slabs at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
                We use XRF (X-Ray Fluorescence) technology — the newest advancement in the industry
                — to accurately assess the metal content of every coin. This non-destructive test
                identifies exact elemental composition in seconds, with results displayed right in
                front of you.
              </p>
              <Link href="/about" className="self-start text-gold hover:text-gold-dark font-semibold text-sm transition-colors underline underline-offset-4">
                Learn more about our technology →
              </Link>
            </FadeIn>
            <FadeIn direction="right" className="relative min-h-[400px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03411.jpg"
                alt="XRF machine testing coins at Levant Gold & Silver"
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
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">Ready to Sell?</h2>
            <p className="text-charcoal/70 mb-8">
              Walk in to any of our four Southern California locations with your coins — single
              pieces or full collections — for a free, no-pressure evaluation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="tel:7142134785" className="bg-charcoal hover:bg-charcoal/80 text-cream font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 8.25V5.999A3 3 0 0 1 1.5 4.5z" clipRule="evenodd" />
                </svg>
                Call Now
              </Link>
              <Link href="/locations" className="border border-charcoal/30 hover:border-charcoal text-charcoal font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm">
                Find a Location
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
