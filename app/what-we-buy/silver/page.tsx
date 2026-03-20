import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'

export const metadata: Metadata = {
  title: 'Sell Silver & Precious Metals in California | Levant Gold',
  description:
    'Turn your unwanted silver into cash at Levant Gold & Silver. We offer fair prices for silver coins, jewelry, flatware, and bullion bars with immediate payment in Southern California.',
  alternates: { canonical: '/what-we-buy/silver' },
  openGraph: {
    title: 'Sell Silver & Precious Metals in California | Levant Gold',
    description: 'We buy all silver — jewelry, coins, flatware, and bullion. Free XRF testing, live spot pricing, instant payment.',
    url: '/what-we-buy/silver',
  },
  keywords: ['sell silver', 'silver coins Southern California', 'sterling silverware buyer', 'sell silver jewelry', 'silver bullion buyer Orange CA'],
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
  { title: 'XRF Analysis', body: 'Our X-Ray Fluorescence machine determines exact silver purity in seconds — no acid tests, no guesswork.' },
  { title: 'Certified Weighing', body: 'Every item is weighed on calibrated scales to ensure you\'re paid for the exact silver content.' },
  { title: 'Live Spot Calculation', body: 'Your offer is calculated from the current silver spot price at the moment of your visit, with full transparency.' },
]

const steps = [
  { step: '01', title: 'Visit Our Store', body: 'Walk in to any of our four Southern California locations during business hours — no appointment needed.' },
  { step: '02', title: 'Free Evaluation', body: 'We test purity with our XRF machine, weigh on certified scales, and calculate your offer at live spot pricing.' },
  { step: '03', title: 'Get Paid On the Spot', body: 'Cash, check, wire transfer, Zelle, or CashApp — your choice. Payment the same visit, every time.' },
]

export default function SilverPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* ── Testing & Valuing ── */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Accurate &amp; Transparent</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-cream">
              Testing &amp; Valuing Your Silver
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testingPoints.map((pt, i) => (
              <FadeIn key={pt.title} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center h-full">
                  <h3 className="font-heading font-bold text-cream mb-2">{pt.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{pt.body}</p>
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

      {/* ── Testimonial ── */}
      <section className="py-14 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <blockquote className="bg-white border border-border rounded-2xl p-8 sm:p-10 text-center">
              <p className="text-gold text-2xl mb-4">&ldquo;</p>
              <p className="text-charcoal text-lg leading-relaxed font-medium mb-5">
                I had a great experience selling a couple of silver items at Levant. They offered
                a good price and the process was simple and hassle-free.
              </p>
              <footer className="text-muted text-sm font-semibold">— Anna M., Southern California</footer>
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
