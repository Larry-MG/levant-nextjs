import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'
import StatsStrip from '@/components/what-we-buy/StatsStrip'

export const metadata: Metadata = {
  title: 'Sell Gold & Silver Bars | Best Bullion Prices in Southern California',
  description:
    'Sell your gold, silver, platinum & palladium bars at top dollar at Levant Gold & Silver. 1 gram to kilo bars — all brands, all conditions. Free XRF testing, live spot pricing, same-day cash at 4 SoCal locations.',
  alternates: { canonical: '/what-we-buy/bars' },
  keywords: [
    'sell gold bars Southern California', 'sell silver bars near me',
    'gold bullion buyer Orange CA', 'gold bar buyer Pomona',
    'sell PAMP Suisse bar', 'sell Credit Suisse bar', 'sell Valcambi bar',
    'sell Perth Mint bar', 'gold kilo bar buyer California',
    'bullion buyer near me', 'sell gold bar near me',
    '1 oz gold bar buyer', 'sell silver bar 10 oz',
  ],
  openGraph: {
    title: 'Sell Gold & Silver Bars | Best Bullion Prices in Southern California',
    description:
      '1g to kilo bars, all brands. PAMP, Credit Suisse, Valcambi, Perth Mint and more. Free XRF testing, same-day cash at 4 SoCal locations.',
    url: '/what-we-buy/bars',
  },
  twitter: {
    title: 'Sell Gold & Silver Bars | Best Prices in Southern California',
    description: '1g to kilo, all brands. Free XRF testing, same-day cash. 4 SoCal locations.',
  },
}

const categories = [
  {
    metal: 'Gold Bars',
    accent: '#C9A84C',
    sizes: '1g · 2.5g · 5g · 10g · 1 oz · 10 oz · 1 kg',
    brands: 'Credit Suisse, PAMP Suisse, Perth Mint, Valcambi, Johnson Matthey',
    purity: '.999+ Fine Gold',
    detail: 'Sealed in assay card, loose, or damaged — all accepted after XRF testing. We accommodate large transactions and bulk bullion orders.',
  },
  {
    metal: 'Silver Bars',
    accent: '#C0C0C0',
    sizes: '1 oz · 5 oz · 10 oz · 100 oz and larger',
    brands: 'Engelhard, Johnson Matthey, Sunshine Mint, PAMP Suisse',
    purity: '.999 Fine Silver',
    detail: 'Competitive rates for all common hallmarks. Rounds are also welcome. Large 100 oz and 1,000 oz commercial bars handled with care.',
  },
  {
    metal: 'Platinum Bars',
    accent: '#C0C0E0',
    sizes: '1 oz · 10 oz and larger',
    brands: 'PAMP Suisse, Credit Suisse, Baird & Co.',
    purity: '.9995 Fine Platinum',
    detail: 'Rare and large-format platinum bars handled with expertise and priced at current market. Both sealed and circulated bars accepted.',
  },
  {
    metal: 'Palladium & Other Bars',
    accent: '#C0B8D8',
    sizes: '1 oz and larger',
    brands: 'Credit Suisse, Baird & Co., any refiner',
    purity: '.9995 Fine Palladium',
    detail: 'Palladium bars and rare rhodium bars or ingots. Real-time quotes based on live spot pricing for each metal.',
  },
  {
    metal: 'Scrap or Unmarked Bars',
    accent: '#8A7F72',
    sizes: 'Any weight',
    brands: 'No hallmark required',
    purity: 'XRF tested on-site',
    detail: 'No stamp? No problem. Our XRF analyzer determines exact metal content regardless of markings — you get paid for what\'s actually in the bar.',
  },
]

const evaluation = [
  { step: '01', title: 'Inspection & Testing', body: 'We verify authenticity using our XRF analyzer. Bars without hallmarks are tested to determine exact metal composition before any offer.' },
  { step: '02', title: 'Weighing', body: 'Every bar is weighed on certified, calibrated scales for a precise measurement down to fractions of a gram or troy ounce.' },
  { step: '03', title: 'Valuing', body: 'Your offer is calculated at the current spot price for that specific metal, with full transparency — we show you the math.' },
]

const whySell = [
  { title: 'Top Market Payouts', body: 'All offers are based directly on live spot prices with no arbitrary deductions. What the market says your bars are worth is what you receive.' },
  { title: 'Expertise in Bullion', body: 'Our team knows every major mint, refiner, and bar format. We can evaluate any bar you bring in, marked or not.' },
  { title: 'Trusted Reputation', body: 'Hundreds of 5-star reviews across our four Southern California locations. We\'ve been serving the region\'s bullion market for years.' },
  { title: 'Bulk Capability', body: 'From a single 1 oz bar to multi-kilogram commercial bullion — we handle it all with the same efficient, professional process.' },
  { title: 'Secure & Confidential', body: 'Large bullion transactions are handled with complete discretion. Your privacy is respected at every step.' },
]

const barsShowcase = [
  {
    label: 'Gold Bars',
    sub: '1g — 1kg, all major refiners',
    img: '/images/store/DSC03344.jpg',
    alt: 'PAMP Suisse gold bars at Levant Gold & Silver',
    type: 'photo',
  },
  {
    label: 'Silver Bars',
    sub: '1 oz — 100 oz kilo bars',
    img: '/images/store/DSC03360.jpg',
    alt: 'Gold and silver bars angled display',
    type: 'photo',
  },
  {
    label: 'Platinum Bars',
    sub: 'All assay cards accepted',
    img: '/images/products/platinum-bar.png',
    alt: 'Platinum bar on dark background',
    type: 'contain',
  },
]

const testimonials = [
  {
    quote: 'I had a small collection of PAMP Suisse gold bars. They verified the assay cards, tested the bars, and paid top dollar. Seamless transaction.',
    name: 'James P.',
    location: 'Orange',
  },
  {
    quote: 'Sold 10 oz of silver bars to them. Good prices, honest process. Will definitely come back with more.',
    name: 'Barbara T.',
    location: 'Pomona',
  },
  {
    quote: 'I had a platinum bar from an old investment account. They tested it, explained the spot price math, and paid same day. Very professional.',
    name: 'Michael R.',
    location: 'Walnut',
  },
]

const refiners = [
  'PAMP Suisse / Credit Suisse',
  'Perth Mint / Valcambi',
  'Johnson Matthey / Engelhard',
  'Royal Canadian Mint / Others',
]

export default function BarsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center min-h-[520px]">
            <FadeIn direction="right" className="py-20 lg:py-28">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                What We Buy — Bars
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Get Maximum Value for<br />Your Gold, Silver,<br />and Platinum Bars
              </h1>
              <p className="mt-5 text-cream/70 text-lg leading-relaxed max-w-lg">
                We buy bullion from 1 gram to kilo in any condition with competitive payouts.
                Sell your bars with confidence.
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
                  src="/images/what-we-buy/Group-1000008367.webp"
                  alt="Gold, silver, and platinum bullion bars we buy at Levant Gold & Silver"
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

      {/* ── Bars Showcase ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">In Stock Daily</p>
            <h2 className="text-3xl font-heading font-bold text-cream">Bars We Buy Daily</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {barsShowcase.map((card, i) => (
              <FadeIn key={card.label} delay={i * 0.1}>
                <div className="relative rounded-2xl overflow-hidden h-72 group cursor-default transition-transform duration-300 hover:scale-[1.02]">
                  {card.type === 'photo' ? (
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-charcoal-soft flex items-center justify-center">
                      <Image
                        src={card.img}
                        alt={card.alt}
                        width={220}
                        height={160}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-heading font-bold text-white text-xl mb-1">{card.label}</p>
                    <p className="text-white/70 text-sm">{card.sub}</p>
                  </div>
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

      {/* ── What We Buy ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Bars We Accept</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">What We Buy</h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">
              Looking to sell your precious metal bars? Levant Gold &amp; Silver is your trusted
              destination in Southern California for turning gold, silver, platinum, and other
              bullion bars into immediate cash.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <FadeIn key={cat.metal} delay={i * 0.07}>
                <div className="bg-white border border-border rounded-xl p-6 h-full">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase mb-1" style={{ color: cat.accent }}>
                    {cat.metal}
                  </p>
                  <p className="text-xs font-mono text-charcoal/50 mb-1">{cat.purity}</p>
                  <p className="text-xs text-muted mb-1">{cat.sizes}</p>
                  <p className="text-xs text-muted/70 italic mb-3">{cat.brands}</p>
                  <p className="text-muted text-sm leading-relaxed">{cat.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Major Refinery Brands Photo Split ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[440px]">
              <Image
                src="/images/store/DSC03344.jpg"
                alt="PAMP Suisse gold bars — major refinery brands accepted at Levant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 bg-cream-dark">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Major Refinery Brands</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                We Accept All Major<br />Refinery Brands
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                PAMP Suisse, Credit Suisse, Perth Mint, Valcambi, Scotiabank, Johnson Matthey,
                Engelhard, Royal Canadian Mint — if it came from a reputable refinery, we&apos;ll buy
                it at full melt value. Assay cards, serial numbers, and sealed packaging all verified.
              </p>
              <ul className="space-y-2">
                {refiners.map((r) => (
                  <li key={r} className="flex items-center gap-3">
                    <span className="text-gold flex-shrink-0">&#10003;</span>
                    <span className="text-sm font-semibold text-charcoal">{r}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <StatsStrip />

      {/* ── Evaluation Process ── */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Transparent &amp; Accurate</p>
            <h2 className="text-3xl font-heading font-bold text-cream">How We Evaluate Your Bars</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {evaluation.map((e, i) => (
              <FadeIn key={e.step} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-7 h-full text-center">
                  <p className="text-5xl font-heading font-bold text-white/8 leading-none mb-4 select-none">{e.step}</p>
                  <h3 className="font-heading font-bold text-cream text-lg mb-2">{e.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{e.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Customer Stories</p>
            <h2 className="text-3xl font-heading font-bold text-cream">What Our Customers Say</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-cream/75 text-sm leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <p className="text-cream font-semibold text-sm">{t.name}</p>
                    <p className="text-muted text-xs">{t.location}</p>
                  </div>
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
            <FadeIn direction="right" className="relative min-h-[400px]">
              <Image
                src="/images/store/DSC03344.jpg"
                alt="PAMP Suisse gold bars at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Why Choose Levant</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Why Sell Bars to<br />Levant Gold &amp; Silver?
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

      {/* ── Gold Calculator ── */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Estimate Your Payout</p>
            <h2 className="text-3xl font-heading font-bold text-cream">Gold Calculator</h2>
            <p className="mt-3 text-cream/60 text-sm max-w-md mx-auto">
              Calculate the approximate melt value of your bullion based on live spot prices.
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
            {[
              { step: '01', title: 'Visit Our Store', body: 'Walk in to any of our four locations — no appointment needed. Bring your bars, however many you have.' },
              { step: '02', title: 'Free Evaluation', body: 'We test, weigh, and value your bars at current spot prices — all transparent, all in front of you.' },
              { step: '03', title: 'Get Paid On the Spot', body: 'Accept the offer and walk out with payment the same visit. Cash, check, wire, Zelle, or CashApp.' },
            ].map((s, i) => (
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

      {/* ── Bulk & Large Transactions Split ── */}
      <section className="bg-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 order-2 lg:order-1">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Bulk &amp; Large Transactions</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Buying or Selling<br />Large Quantities?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                We handle large bar transactions — from investors liquidating positions to estate sales
                involving multiple kilobars. Discreet, efficient, and competitively priced on all
                large orders.
              </p>
              <div className="flex flex-wrap gap-4">
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
                  href="/contact"
                  className="border border-charcoal/20 hover:border-charcoal/40 text-charcoal font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Request a Quote
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="relative min-h-[400px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03360.jpg"
                alt="Gold and silver bars — bulk bar transactions at Levant Gold & Silver"
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
                For bars without hallmarks or bars you want independently verified, our XRF
                (X-Ray Fluorescence) machine determines the exact metal composition in seconds —
                non-destructive, with results displayed in front of you. No sending off to a
                third-party assayer. No waiting.
              </p>
              <Link href="/about" className="self-start text-gold hover:text-gold-dark font-semibold text-sm transition-colors underline underline-offset-4">
                Learn more about our technology →
              </Link>
            </FadeIn>
            <FadeIn direction="right" className="relative min-h-[400px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03411.jpg"
                alt="XRF machine verifying bullion bars at Levant Gold & Silver"
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
              Ready to Sell Your Bars?
            </h2>
            <p className="text-charcoal/70 mb-8">
              Walk in to any location or contact us in advance for large transactions requiring
              secure arrangements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-charcoal hover:bg-charcoal/80 text-cream font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm">
                Schedule a Free Appointment
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
