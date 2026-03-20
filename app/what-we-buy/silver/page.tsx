import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'
import StatsStrip from '@/components/what-we-buy/StatsStrip'

export const metadata: Metadata = {
  title: 'Sell Silver Coins, Jewelry & Bullion | Best Prices in Southern California',
  description:
    'Get the best price for your silver at Levant Gold & Silver — coins, jewelry, flatware, and bullion bars. Free XRF testing, live spot pricing, same-day cash. 4 locations: Orange, Pomona, San Bernardino & Walnut, CA.',
  alternates: { canonical: '/what-we-buy/silver' },
  keywords: [
    'sell silver Southern California', 'sell silver coins Orange CA',
    'sell silver jewelry Pomona', 'sell Morgan dollars San Bernardino',
    'silver buyer near me', 'junk silver buyer Southern California',
    'sell American Silver Eagle', 'sterling silver buyer California',
    'sell silver flatware', 'silver bullion buyer near me',
    'cash for silver near me', 'best silver prices Southern California',
  ],
  openGraph: {
    title: 'Sell Silver Coins, Jewelry & Bullion | Best Prices in Southern California',
    description:
      'Top-rated silver buyer in Southern California. Coins, jewelry, flatware, bullion. Free XRF testing, live spot pricing, same-day cash at 4 SoCal locations.',
    url: '/what-we-buy/silver',
  },
  twitter: {
    title: 'Sell Your Silver | Best Prices in Southern California',
    description: 'Coins, jewelry, flatware, bullion. Free XRF testing, same-day cash. 4 SoCal locations.',
  },
}

const items = [
  {
    name: 'Silver Jewelry',
    detail:
      'Chains, necklaces, bracelets, rings, earrings — if it\'s made of silver (sterling .925 or even lower purities), we\'ll buy it. Any condition accepted, including tarnished, broken, or mismatched pieces.',
  },
  {
    name: 'Sterling Silverware & Flatware',
    detail:
      'We purchase sterling silver flatware sets, tea sets, trays, candlesticks, and other household items. Monogrammed or tarnished pieces retain full metal value — bring them in as-is.',
  },
  {
    name: 'Silver Coins',
    detail:
      'All silver coins — U.S. and foreign. Pre-1965 junk silver (dimes, quarters, half-dollars), American Silver Eagles, Canadian Maple Leafs, British Britannias, Mexican Libertads, Morgan and Peace dollars. We evaluate both metal content and collector value.',
  },
  {
    name: 'Silver Bullion (Bars & Rounds)',
    detail:
      'We buy pure silver bars and rounds of any size: 1 oz, 5 oz, 10 oz, 100 oz, kilo. Brands include Engelhard, Johnson Matthey, Sunshine Mint, and others. Competitive rates for all hallmarks.',
  },
  {
    name: 'Other Silver Items',
    detail:
      'Medals, industrial silver, and any miscellaneous silver items welcome. If it\'s silver, we\'ll test it for free and tell you exactly what it\'s worth at today\'s market price.',
  },
]

const whySell = [
  { title: 'Fair Pricing', body: 'Competitive payouts based on real-time silver market rates — no arbitrary deductions or mystery fees.' },
  { title: 'Quick and Easy', body: 'No lengthy consignment or online listings. Walk in with silver and walk out with cash the same visit.' },
  { title: 'Expert Knowledge', body: 'Our team evaluates both metal content and collector value, so numismatic coins receive the premium they deserve.' },
  { title: 'Volume Capability', body: 'From a single ring to a full estate collection — we handle any volume with the same professional process.' },
  { title: 'No Obligation', body: 'Get a professional appraisal of your silver at no cost and with zero pressure. You\'re never required to sell.' },
]

const testingPoints = [
  { step: '01', title: 'XRF Analysis', body: 'Our X-Ray Fluorescence machine determines exact silver purity in seconds — no acid tests, no guesswork. Results are displayed live so you see exactly what we see.' },
  { step: '02', title: 'Certified Weighing', body: 'Every item is weighed on calibrated scales to ensure you\'re paid for the exact silver content. Our scales are certified and accurate to fractions of a gram.' },
  { step: '03', title: 'Live Spot Calculation', body: 'Your offer is calculated from the current silver spot price at the moment of your visit, with full transparency. We show you the math — no hidden deductions.' },
]

const steps = [
  { step: '01', title: 'Visit Our Store', body: 'Walk in to any of our four Southern California locations during business hours — no appointment needed.' },
  { step: '02', title: 'Free Evaluation', body: 'We test purity with our XRF machine, weigh on certified scales, and calculate your offer at live spot pricing.' },
  { step: '03', title: 'Get Paid On the Spot', body: 'Cash, check, wire transfer, Zelle, or CashApp — your choice. Payment the same visit, every time.' },
]

const showcaseClaims = [
  'Pre-1965 junk silver at full melt value',
  'All silver coins — U.S. and foreign',
  'Sterling flatware, tea sets, candlesticks',
  'Bullion rounds and bars (1 oz to 100 oz kilo)',
  'Estate lots and inherited collections welcome',
]

const productGrid = [
  {
    src: '/images/products/silver-morgan.png',
    alt: 'Morgan Silver Dollar coin',
    label: 'Morgan Dollars',
    desc: 'Classic U.S. numismatic coins valued for metal and collectibility',
    isPng: true,
  },
  {
    src: '/images/products/silver-buffalo.png',
    alt: 'Silver Buffalo round',
    label: 'Silver Rounds',
    desc: 'Generic and branded .999 fine silver rounds of any size',
    isPng: true,
  },
  {
    src: '/images/store/DSC03307.jpg',
    alt: 'Junk silver coins — quarters and dimes laid out',
    label: 'Junk Silver Coins',
    desc: 'Pre-1965 dimes, quarters, and half-dollars at full melt value',
    isPng: false,
  },
  {
    src: '/images/store/DSC03256.jpg',
    alt: 'Sterling silverware and collectibles display',
    label: 'Sterling Silverware',
    desc: 'Flatware sets, tea services, candlesticks, and trays',
    isPng: false,
  },
]

const testimonials = [
  {
    quote: 'I had a large collection of old silver coins and flatware from my mother\'s estate. Levant gave me a fair offer and handled everything professionally.',
    author: 'Anna M., Southern California',
  },
  {
    quote: 'Brought in 90% junk silver — quarters and dimes. They weighed it all out and explained exactly how they calculated my offer. No surprises.',
    author: 'Tom R., San Bernardino',
  },
  {
    quote: 'I didn\'t know sterling silverware had real value. They tested it right in front of me and paid well above what a pawn shop offered.',
    author: 'Patricia G., Pomona',
  },
]

export default function SilverPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-charcoal">
        <Image
          src="/images/metal-silver.webp"
          alt=""
          fill
          className="object-cover object-center opacity-28"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/78 to-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,237,243,0.22),transparent_36%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center min-h-[520px]">
            <FadeIn direction="right" className="py-20 lg:py-28">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                What We Buy — Silver
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Turn Your Unwanted<br />Silver into Cash.
              </h1>
              <p className="mt-5 text-cream/70 text-lg leading-relaxed max-w-lg">
                We Buy All Silver &amp; Sterling Silver Items, Coins, and Bullion — Fast &amp; Fair Payments.
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
                  src="/images/what-we-buy/LEVANT-Silver-Coins.webp"
                  alt="Silver coins we buy — Morgan dollars, Eagles, and more at Levant Gold & Silver"
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

      {/* ── Silver Showcase Split Panel ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — coin image */}
            <FadeIn direction="right" className="relative min-h-[400px] bg-charcoal flex items-center justify-center py-10 lg:py-0">
              <div className="relative w-full max-w-[480px] mx-auto h-[420px]">
                <Image
                  src="/images/what-we-buy/LEVANT-Silver-Coins.webp"
                  alt="Silver coins and rounds accepted at Levant Gold & Silver"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            {/* Right — claims */}
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#A0A0A0' }}>
                Southern California&apos;s Silver Buyer
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream mb-6 leading-tight">
                More Silver Items Accepted Than Anyone Else
              </h2>
              <ul className="space-y-4">
                {showcaseClaims.map((claim) => (
                  <li key={claim} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0 text-lg leading-none">&#10003;</span>
                    <span className="text-cream/80 text-sm leading-relaxed">{claim}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="tel:7142134785"
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Call Now
                </Link>
                <Link
                  href="/locations"
                  className="border border-white/20 hover:border-white/40 text-cream font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Find a Location
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── What Silver Items We Buy ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#A0A0A0' }}>
              Silver Items We Accept
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              What Silver Items We Buy
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">
              From a single silver chain to a complete estate silverware collection — we buy it all
              at competitive, market-rate prices.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.07}>
                <div className="bg-white border border-border rounded-xl p-6 h-full">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: '#A0A0A0' }}>
                    {item.name}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Visual Grid ── */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#A0A0A0' }}>
              What We Accept
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              Popular Silver Items We Buy
            </h2>
            <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
              Recognise something you own? Bring it in for a free, no-obligation appraisal.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {productGrid.map((card, i) => (
              <FadeIn key={card.label} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col h-full">
                  {card.isPng ? (
                    <div className="relative aspect-square bg-cream flex items-center justify-center p-4">
                      <Image
                        src={card.src}
                        alt={card.alt}
                        width={240}
                        height={240}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={card.src}
                        alt={card.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  )}
                  <div className="p-4 flex flex-col gap-1 flex-1">
                    <p className="font-heading font-bold text-charcoal text-sm" style={{ color: '#6B7280' }}>
                      {card.label}
                    </p>
                    <p className="text-xs text-muted leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testing & Valuing — Split Panel ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — store photo */}
            <FadeIn direction="right" className="relative min-h-[420px] order-2 lg:order-1">
              <Image
                src="/images/store/DSC03307.jpg"
                alt="Silver dollars and coins laid out at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </FadeIn>
            {/* Right — numbered steps */}
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 order-1 lg:order-2">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Accurate &amp; Transparent</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-cream mb-8 leading-tight">
                Testing &amp; Valuing Your Silver
              </h2>
              <div className="space-y-8">
                {testingPoints.map((pt, i) => (
                  <FadeIn key={pt.title} delay={0.2 + i * 0.1}>
                    <div className="flex items-start gap-5">
                      <span className="text-4xl font-heading font-bold text-gold/20 leading-none select-none flex-shrink-0 w-10">
                        {pt.step}
                      </span>
                      <div>
                        <h3 className="font-heading font-bold text-cream text-base mb-1">{pt.title}</h3>
                        <p className="text-cream/60 text-sm leading-relaxed">{pt.body}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
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
                alt="Coins, silver bars, and bullion at Levant Gold & Silver Orange location"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Why Sell Silver to Us
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

      {/* ── Photo Mosaic Row ── */}
      <section className="py-2 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: '/images/store/DSC03256.jpg', alt: 'Silver collectibles display at Levant Gold & Silver' },
              { src: '/images/store/DSC03302.jpg', alt: 'Mixed coins, bars, and slabs at Levant Gold & Silver' },
              { src: '/images/store/DSC03307.jpg', alt: 'Silver dollars and coins laid out at Levant Gold & Silver' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#A0A0A0' }}>
              5-Star Reviews
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-cream">
              Trusted by Silver Sellers Across Southern California
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.1}>
                <div className="bg-charcoal-soft border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                  <p className="text-gold text-2xl mb-3 leading-none">&ldquo;</p>
                  <p className="text-cream/80 text-sm leading-relaxed flex-1">{t.quote}</p>
                  <footer className="mt-5 text-muted text-xs font-semibold">— {t.author}</footer>
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
              Use the calculator to estimate precious metal value based on live spot prices.
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

      {/* ── Silver Collection Split Panel ── */}
      <section className="bg-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <FadeIn direction="right" className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 order-2 lg:order-1">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Estate &amp; Bulk Silver</p>
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4 leading-tight">
                Selling a Silver Collection?
              </h2>
              <p className="text-muted leading-relaxed mb-6 text-sm">
                Whether it&apos;s a single Morgan dollar or 200 pieces of sterling flatware, we have the
                expertise and capacity to evaluate everything in a single visit. Estate lots and inherited
                collections handled with care and discretion.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="tel:7142134785"
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
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
            {/* Right — photo */}
            <FadeIn direction="left" delay={0.15} className="relative min-h-[420px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03302.jpg"
                alt="Mixed coins, bars, and slabs — estate silver collection at Levant Gold & Silver"
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
                Our XRF machine tests every piece of silver by identifying its exact elemental
                composition — non-destructive, accurate to fractions of a percent, and completed
                in seconds right in front of you. No acid tests. No mystery.
              </p>
              <Link href="/about" className="self-start text-gold hover:text-gold-dark font-semibold text-sm transition-colors underline underline-offset-4">
                Learn more about our technology →
              </Link>
            </FadeIn>
            <FadeIn direction="right" className="relative min-h-[400px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03411.jpg"
                alt="XRF testing machine at Levant Gold & Silver"
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
              Turn your silver into cash today!
            </h2>
            <p className="text-charcoal/70 mb-8">
              Walk in to any of our four Southern California locations for a free,
              no-obligation appraisal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-charcoal hover:bg-charcoal/80 text-cream font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm">
                Sell Your Silver Today
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
