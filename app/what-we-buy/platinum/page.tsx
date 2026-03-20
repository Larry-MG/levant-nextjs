import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'
import StatsStrip from '@/components/what-we-buy/StatsStrip'

export const metadata: Metadata = {
  title: 'Sell Platinum, Palladium & Rhodium | Best Prices in Southern California',
  description:
    'Get top dollar for platinum, palladium & rhodium at Levant Gold & Silver — jewelry, coins, bars, and industrial scrap. XRF-tested purity, live spot pricing, same-day cash at 4 locations: Orange, Pomona, San Bernardino & Walnut, CA.',
  alternates: { canonical: '/what-we-buy/platinum' },
  keywords: [
    'sell platinum Southern California', 'sell palladium near me',
    'platinum buyer Orange CA', 'palladium buyer Inland Empire',
    'sell platinum jewelry', 'sell platinum bars', 'sell platinum coins',
    'sell rhodium California', 'rhodium buyer near me',
    'rare metals buyer Southern California', 'platinum scrap buyer',
    'sell American Platinum Eagle', 'platinum XRF testing',
  ],
  openGraph: {
    title: 'Sell Platinum, Palladium & Rhodium | Best Prices in Southern California',
    description:
      'Top-rated platinum & palladium buyer in Southern California. XRF-tested purity, live spot pricing, same-day cash at 4 SoCal locations.',
    url: '/what-we-buy/platinum',
  },
  twitter: {
    title: 'Sell Platinum & Palladium | Best Prices in Southern California',
    description: 'XRF testing, live spot pricing, same-day cash. 4 SoCal locations.',
  },
}

const items = [
  {
    metal: 'Platinum',
    name: 'Platinum Jewelry',
    accent: '#9090C0',
    detail:
      'Engagement rings, wedding bands, necklaces, bracelets, earrings — marked "Plat," "PT950," or "PT900." Unmarked items are tested on the spot with our XRF machine to confirm platinum content before any offer.',
  },
  {
    metal: 'Platinum',
    name: 'Platinum Coins & Bullion',
    accent: '#9090C0',
    detail:
      'American Platinum Eagles, Canadian Platinum Maple Leafs, Isle of Man Noble coins, and platinum bars in any size. Valuations factor in both current spot price and collector rarity.',
  },
  {
    metal: 'Palladium',
    name: 'Palladium Items',
    accent: '#9080B8',
    detail:
      'Canadian Palladium Maple Leafs, palladium bars, palladium jewelry, and industrial scrap from catalytic converters and lab equipment. Real-time quotes based on live palladium spot pricing.',
  },
  {
    metal: 'Rhodium',
    name: 'Rhodium',
    accent: '#8A7F72',
    detail:
      'Rhodium bullion bars, plating solutions, anode scrap, and residues. One of the most valuable metals on earth — we pay competitive market rates for any form of rhodium.',
  },
  {
    metal: 'Platinum',
    name: 'Watches & Collectibles',
    accent: '#9090C0',
    detail:
      'Solid platinum watch cases, pens, lighters, and estate collectibles. Gold and silver alloys from luxury watches and electronics are also evaluated.',
  },
  {
    metal: 'Platinum',
    name: 'Industrial Scrap',
    accent: '#9090C0',
    detail:
      'Platinum and palladium from catalytic converters, laboratory equipment, and industrial sources. Priced by assay and current market spot.',
  },
]

const whySell = [
  { title: 'Specialty Expertise', body: 'We identify platinum from white gold and other lookalikes in seconds — no guesswork, no low-ball offers based on mistaken identity.' },
  { title: 'Instant Liquidity', body: 'Platinum group metals are highly illiquid in most markets. We provide an immediate cash offer you can walk out with.' },
  { title: 'Top Market Offers', body: 'All offers are calculated at live spot prices for the specific metal — gold, platinum, palladium, or rhodium.' },
  { title: 'Confidential & Secure', body: 'High-value platinum transactions are handled with complete discretion and professionalism at our established locations.' },
]

const steps = [
  { step: '01', title: 'Visit Our Store', body: 'Walk in to any of our four Southern California locations — no appointment needed for platinum or rare metal evaluations.' },
  { step: '02', title: 'Free Evaluation', body: 'Our XRF machine identifies the exact metal composition in seconds. We distinguish platinum from white gold and palladium from silver instantly.' },
  { step: '03', title: 'Get Paid On the Spot', body: 'Accept the offer and receive payment immediately — cash, check, wire, Zelle, or CashApp. Large transactions handled securely.' },
]

const rareMetals = [
  {
    name: 'Platinum',
    accent: '#C0C0E0',
    accentBorder: '#C0C0E0',
    description: 'Rings, coins, bullion bars, industrial platinum. We pay for exact purity via XRF.',
    image: '/images/products/platinum-eagle-coin.jpg',
    gradient: null,
  },
  {
    name: 'Palladium',
    accent: '#C0B8D8',
    accentBorder: '#C0B8D8',
    description: 'Palladium coins, bars, catalytic converters, and scrap palladium accepted.',
    image: '/images/products/palladium-metal.jpg',
    gradient: null,
  },
  {
    name: 'Rhodium',
    accent: '#E8E8F0',
    accentBorder: '#E8E8F0',
    description: 'One of the world\'s most valuable metals. We buy rhodium in any form — plating scrap, catalysts, sponge.',
    image: '/images/products/rhodium-metal.jpg',
    gradient: null,
  },
]

const testimonials = [
  {
    quote: 'I had platinum jewelry from an old ring set. They tested everything right in front of me and gave me a fair offer based on the actual platinum content.',
    author: 'Sarah L., Southern California',
  },
  {
    quote: 'Brought in old palladium catalytic converters. Levant was one of the only buyers who knew exactly what they were worth. Very knowledgeable team.',
    author: 'David M., Orange',
  },
  {
    quote: 'I inherited some unusual pieces including what turned out to be rhodium-plated items. They explained everything clearly and paid accordingly.',
    author: 'Christine W., San Bernardino',
  },
]

export default function PlatinumPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-charcoal">
        <Image
          src="/images/metal-platinum-new.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-28"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/78 to-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(176,181,196,0.24),transparent_36%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center min-h-[520px]">
            <FadeIn direction="right" className="py-20 lg:py-28">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                What We Buy — Platinum &amp; Rare Metals
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                We Buy Platinum,<br />Palladium &amp; More.
              </h1>
              <p className="mt-5 text-cream/70 text-lg leading-relaxed max-w-lg">
                Gold and silver aren&rsquo;t the only precious metals with value — platinum and
                palladium are highly valuable too, and we buy them at top prices.
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
                  src="/images/what-we-buy/Precious-metals.webp"
                  alt="Platinum, palladium, and precious metals we buy at Levant Gold & Silver"
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

      {/* ── Rare Metals We Buy — 3 Cards ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#C0C0E0' }}>
              Platinum Group Metals
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream">
              Rare Metals We Buy
            </h2>
            <p className="mt-4 text-cream/60 max-w-2xl mx-auto leading-relaxed text-sm">
              Beyond gold and silver, we specialize in the entire platinum group — purchasing all
              forms at competitive live-spot prices.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {rareMetals.map((metal, i) => (
              <FadeIn key={metal.name} delay={i * 0.1}>
                <div
                  className="bg-charcoal-soft border border-white/10 rounded-2xl p-7 flex flex-col items-start h-full border-t-2"
                  style={{ borderTopColor: metal.accentBorder }}
                >
                  {metal.image ? (
                    <div className="mb-5 w-[120px] h-[120px] relative flex items-center justify-center">
                      <Image
                        src={metal.image}
                        alt={`${metal.name} bar`}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="mb-5 w-[120px] h-[120px] rounded-xl"
                      style={{ background: metal.gradient ?? undefined }}
                    />
                  )}
                  <p
                    className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
                    style={{ color: metal.accent }}
                  >
                    {metal.name}
                  </p>
                  <p className="text-cream/70 text-sm leading-relaxed">{metal.description}</p>
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
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#9090C0' }}>
              Metals We Accept
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              What We Buy — Platinum &amp; Others
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">
              From everyday platinum jewelry to rare rhodium bullion — our XRF machine identifies
              every platinum group metal accurately and immediately.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.07}>
                <div className="bg-white border border-border rounded-xl p-6 h-full">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase mb-1" style={{ color: item.accent }}>
                    {item.metal}
                  </p>
                  <p className="font-heading font-semibold text-charcoal mb-2 text-sm">{item.name}</p>
                  <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Rare Metals Hold Value — Photo Split ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 order-2 lg:order-1">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Investment-Grade Metals</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Rare Metals Hold<br />Real-World Value
              </h2>
              <p className="text-muted leading-relaxed mb-6 text-sm">
                Platinum, palladium, and rhodium are used in catalytic converters, medical devices,
                and industrial applications worldwide — demand is driven by industry, not speculation.
                When you bring these metals in, we test exact composition and pay based on real-time
                spot prices, not estimates.
              </p>
              <ul className="space-y-3">
                {[
                  'Platinum: jewelry, investment bars, lab equipment',
                  'Palladium: automotive catalysts, electronics',
                  'Rhodium: catalytic coating, glass manufacturing',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-charcoal">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="relative min-h-[400px] order-1 lg:order-2 bg-cream flex items-center justify-center p-8">
              <div className="relative w-full max-w-[460px] h-[420px]">
                <Image
                  src="/images/what-we-buy/Precious-metals.webp"
                  alt="Platinum and precious metals — investment-grade metals we buy at Levant"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Valuing Platinum ── */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Method</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-cream">
              Valuing Platinum &amp; Others
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
              <p className="text-cream/70 leading-relaxed">
                Platinum group metals require precise identification — a piece that looks like white
                gold may actually be platinum worth significantly more. Our XRF machine reads the
                exact elemental composition in under 30 seconds, with no damage to your item. We
                then calculate your offer at the current spot price for that specific metal,
                displayed openly so you can see exactly how we arrived at the number.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Why Sell ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[360px]">
              <Image
                src="/images/store/DSC03395.webp"
                alt="Precious metals jewelry at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Why Choose Levant</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Why Sell Platinum<br />(and others) to Levant
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

      {/* ── Stats Strip ── */}
      <StatsStrip />

      {/* ── Testimonials ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Customer Reviews</p>
            <h2 className="text-3xl font-heading font-bold text-cream">
              Trusted Across Southern California
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
              Use the precious metals calculator to estimate value based on live spot prices.
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

      {/* ── All Quantities — Photo Split ── */}
      <section className="bg-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 order-2 lg:order-1">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">All Quantities Welcome</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                From a Single Piece<br />to Industrial Lots
              </h2>
              <p className="text-muted leading-relaxed mb-7 text-sm">
                Whether you have a platinum wedding band or industrial platinum scrap, we handle
                both with the same professionalism. Large quantities and bulk industrial transactions
                are especially welcome.
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
                src="/images/store/DSC03302.webp"
                alt="Coins, bars, and precious metals at Levant Gold & Silver"
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
                XRF (X-Ray Fluorescence) technology is the gold standard in precious metals
                identification — distinguishing platinum from white gold, palladium from silver,
                and rhodium from other metals instantly. Results in seconds, performed in front of
                you, with no damage to your item.
              </p>
              <Link href="/about" className="self-start text-gold hover:text-gold-dark font-semibold text-sm transition-colors underline underline-offset-4">
                Learn more about our technology →
              </Link>
            </FadeIn>
            <FadeIn direction="right" className="relative min-h-[400px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03411.webp"
                alt="XRF machine at Levant Gold & Silver"
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
              Sell Your Precious Metals Today
            </h2>
            <p className="text-charcoal/70 mb-8">
              Walk in to any of our four Southern California locations for a free evaluation —
              or contact us online for large or confidential transactions.
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
