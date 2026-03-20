import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'

export const metadata: Metadata = {
  title: 'Buy & Sell Rare Gold & Silver Coins | Levant Gold & Silver',
  description:
    'Sell gold, silver, and platinum coins at Levant Gold & Silver in Southern California. We buy bullion coins, junk silver, rare numismatic pieces, and PCGS/NGC graded coins with maximum value guaranteed.',
  alternates: { canonical: '/what-we-buy/coins' },
  openGraph: {
    title: 'Buy & Sell Rare Gold & Silver Coins | Levant Gold & Silver',
    description: 'Get maximum value for your coin collection. We buy gold, silver & platinum coins including rare numismatic pieces. Live spot pricing.',
    url: '/what-we-buy/coins',
  },
  keywords: ['sell gold coins', 'sell silver coins Southern California', 'coin buyer Orange CA', 'numismatic coins', 'junk silver buyer', 'American Gold Eagle buyer'],
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

      {/* ── Why Sell ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[360px]">
              <Image
                src="/images/store/DSC03302.jpg"
                alt="Coin collection at Levant Gold & Silver"
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

      {/* ── Testimonial ── */}
      <section className="py-14 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <blockquote className="bg-white border border-border rounded-2xl p-8 sm:p-10 text-center">
              <p className="text-gold text-2xl mb-4">&ldquo;</p>
              <p className="text-charcoal text-lg leading-relaxed font-medium mb-5">
                I sold a few silver coins I had lying around at a fair price. The staff was
                friendly and professional.
              </p>
              <footer className="text-muted text-sm font-semibold">— M.R., Southern California</footer>
            </blockquote>
          </FadeIn>
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
              <Link href="/contact" className="bg-charcoal hover:bg-charcoal/80 text-cream font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm">
                Get a Free Quote
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
