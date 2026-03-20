import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'

export const metadata: Metadata = {
  title: 'Sell Sterling Silverware & Flatware | Levant Gold & Silver',
  description:
    'Get the best price for your sterling silverware at Levant Gold & Silver. We buy sterling flatware sets, tea sets, and serving pieces — even tarnished or incomplete. Immediate cash payment in Southern California.',
  alternates: { canonical: '/what-we-buy/silverware' },
  openGraph: {
    title: 'Sell Sterling Silverware & Flatware | Levant Gold & Silver',
    description: 'Turn silver flatware and tea sets into cash today. Tarnished or incomplete sets welcome. Live spot pricing, immediate payment.',
    url: '/what-we-buy/silverware',
  },
  keywords: ['sell sterling silverware', 'sterling flatware buyer', 'sell silver tea set', 'Gorham silverware buyer', 'sterling silver buyer Southern California'],
}

const items = [
  {
    name: 'Sterling Silver Flatware Sets',
    detail:
      'Complete or partial collections — forks, knives, spoons, and serving utensils. We buy from Gorham, Towle, Wallace, Reed & Barton, and all major makers. Engraved, monogrammed, or worn pieces are accepted at full silver melt value.',
  },
  {
    name: 'Silver Tea Sets & Serving Pieces',
    detail:
      'Teapots, sugar bowls, creamers, trays, and candlesticks in sterling silver. Antique and vintage sets welcome — condition does not affect the silver content we pay for.',
  },
  {
    name: 'Silverware Accessories',
    detail:
      'Salt cellars, napkin rings, butter dishes, gravy boats, platters, and punch bowls in sterling silver. Any sterling silver serving accessory is welcome.',
  },
  {
    name: 'Coin Silver & Lower Purity',
    detail:
      'Older American coin silver (.900 purity) flatware and foreign silverware assessed by actual silver content — you\'re paid for what\'s there, not a blanket rate.',
  },
  {
    name: 'Silver-Plated Items',
    detail:
      'Silver-plated pieces contain minimal silver and are purchased selectively in bulk quantities. Bring them in and we\'ll let you know what we can offer.',
  },
  {
    name: 'Estate & Inherited Collections',
    detail:
      'Inherited a box of old silverware and not sure what you have? Bring it all in. We\'ll sort through it, test what\'s sterling, and give you a straight answer on value.',
  },
]

const evaluation = [
  { title: 'Inspection & Testing', body: 'We check for the .925 sterling stamp and verify purity using our XRF machine where needed — no acid tests, no damage to your pieces.' },
  { title: 'Weighing', body: 'Each sterling piece is weighed on certified scales. Non-sterling and plated items are separated and evaluated differently.' },
  { title: 'Valuing', body: 'Your offer is calculated based on the total verified silver weight at the current live spot price — fully transparent.' },
]

const whySell = [
  { title: 'Tarnish & Condition Don\'t Matter', body: 'We pay for silver content, not aesthetics. Heavily tarnished or incomplete sets receive the same fair melt price.' },
  { title: 'Fair Market Pricing', body: 'Most estate sales dramatically underprice sterling silver. We pay based on actual silver weight at live spot — often 10x estate sale rates.' },
  { title: 'Immediate Payment', body: 'Walk out with cash or a check the same visit. No mailing, no consignment, no waiting.' },
  { title: 'Expert Identification', body: 'We identify genuine sterling from silver-plated ware instantly, so you always know exactly what you\'re being paid for.' },
]

export default function SilverwarePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center min-h-[520px]">
            <FadeIn direction="right" className="py-20 lg:py-28">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                What We Buy — Silverware
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Get the Best Price<br />for Your Sterling<br />Silverware
              </h1>
              <p className="mt-5 text-cream/70 text-lg leading-relaxed max-w-lg">
                Flatware Sets, Tea Sets, Serving Pieces — We Buy All Types of Silverware, Even
                Tarnished or Incomplete.
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
              <div className="relative w-full max-w-[520px] h-[480px]">
                <Image
                  src="/images/what-we-buy/4.webp"
                  alt="Sterling silverware and flatware we buy at Levant Gold & Silver"
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
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#A0A0A0' }}>
              Silverware We Accept
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              What Silverware Items We Buy
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">
              Most inherited silverware is worth significantly more as silver melt than at an estate
              sale. Find out what yours is really worth.
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

      {/* ── Estate Silver Callout ── */}
      <section className="py-14 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 text-center">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Worth Knowing</p>
              <h2 className="text-2xl font-heading font-bold text-cream mb-4">
                Don&rsquo;t sell at an estate sale rate
              </h2>
              <p className="text-cream/70 leading-relaxed mb-4 max-w-2xl mx-auto">
                A set of sterling silver flatware for 12 can contain 40–60+ troy ounces of silver.
                At current spot prices, that&rsquo;s real money — far more than the $50–$100 you&rsquo;d
                typically see at an estate sale or auction.
              </p>
              <p className="text-cream/70 leading-relaxed max-w-2xl mx-auto">
                We weigh every piece, verify the .925 stamp, and pay you based on the actual silver
                content at today&rsquo;s market price. No mystery. No lowball offers.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Evaluation ── */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Transparent Process</p>
            <h2 className="text-3xl font-heading font-bold text-charcoal">How We Evaluate Your Silverware</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {evaluation.map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-xl p-6 h-full text-center">
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-2">{e.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{e.body}</p>
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
                src="/images/store/DSC03395.jpg"
                alt="Precious metals and jewelry at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Why Choose Levant</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Why Sell Silverware to<br />Levant Gold &amp; Silver?
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

      {/* ── How It Works ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Simple Process</p>
            <h2 className="text-3xl font-heading font-bold text-cream">How It Works</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Bring Your Silverware In', body: 'No need to polish or sort it first. Bring pieces loose or in their chest — tarnished, mismatched sets are all fine.' },
              { step: '02', title: 'Free Evaluation', body: 'We weigh sterling pieces, verify .925 content, and calculate your offer at live silver spot pricing.' },
              { step: '03', title: 'Get Paid On the Spot', body: 'Accept the offer and walk out with cash or a check immediately. No delays, no consignment.' },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-7 h-full text-center">
                  <p className="text-5xl font-heading font-bold text-white/8 leading-none mb-4 select-none">{s.step}</p>
                  <h3 className="font-heading font-bold text-cream text-lg mb-2">{s.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── XRF Machine ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[360px]">
              <Image
                src="/images/store/DSC03411.jpg"
                alt="XRF machine testing silver at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Technology</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-4 leading-tight">
                Our State-of-the-Art<br />X-Ray Machine
              </h2>
              <p className="text-muted leading-relaxed text-sm mb-4">
                Our XRF machine identifies sterling silver from silver-plated ware in seconds —
                no acid tests, no damage. You&rsquo;ll see the exact purity reading in real time and
                know precisely what you&rsquo;re being paid for before you accept any offer.
              </p>
              <Link href="/about" className="self-start text-gold hover:text-gold-dark font-semibold text-sm transition-colors underline underline-offset-4">
                Learn more about our technology →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
              Find out what your silverware is worth
            </h2>
            <p className="text-charcoal/70 mb-8">
              Walk in to any of our four Southern California locations — bring it tarnished,
              bring it in a box. We&rsquo;ll handle the rest.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-charcoal hover:bg-charcoal/80 text-cream font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm">
                Request a Quote
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
