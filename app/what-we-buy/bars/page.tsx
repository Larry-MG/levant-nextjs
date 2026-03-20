import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'

export const metadata: Metadata = {
  title: 'Gold & Silver Bars Buying & Selling | Levant Gold & Silver',
  description:
    'Levant Gold & Silver buys gold, silver, platinum, and palladium bullion bars in Southern California. Competitive payouts from 1 gram to kilo, all brands and conditions. Free XRF testing, transparent process, immediate payment.',
  alternates: { canonical: '/what-we-buy/bars' },
  openGraph: {
    title: 'Gold & Silver Bars Buying & Selling | Levant Gold & Silver',
    description: 'Sell your precious metal bars at top dollar. 1g to kilo, all brands. Free XRF testing, live spot pricing, immediate payment.',
    url: '/what-we-buy/bars',
  },
  keywords: ['sell gold bars', 'sell silver bars', 'bullion buyer Southern California', 'sell PAMP Suisse', 'sell Credit Suisse bar', 'gold bar buyer Orange CA'],
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
