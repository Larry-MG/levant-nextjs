import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import StatsStrip from '@/components/what-we-buy/StatsStrip'

export const metadata: Metadata = {
  title: 'Sell Sterling Silverware & Flatware | Best Prices in Southern California',
  description:
    'Get the best price for your sterling silverware at Levant Gold & Silver. We buy flatware sets, tea services, and hollowware — tarnished or incomplete sets welcome. Same-day cash at 4 locations: Orange, Pomona, San Bernardino & Walnut.',
  alternates: { canonical: '/what-we-buy/silverware' },
  keywords: [
    'sell sterling silverware Southern California', 'sterling flatware buyer near me',
    'sell silver flatware Orange CA', 'sell silver tea set California',
    'Gorham silverware buyer', 'Oneida silver buyer', 'Reed Barton buyer',
    'sterling silver hollowware buyer', 'sell antique silverware California',
    'tarnished silverware buyer', 'sell inherited silverware',
    'sterling flatware value', 'old silver set buyer near me',
  ],
  openGraph: {
    title: 'Sell Sterling Silverware & Flatware | Best Prices in Southern California',
    description:
      'Top price for sterling flatware sets, tea services & hollowware. Tarnished or incomplete welcome. Live spot pricing, same-day cash at 4 SoCal locations.',
    url: '/what-we-buy/silverware',
  },
  twitter: {
    title: 'Sell Sterling Silverware | Best Prices in Southern California',
    description: 'Flatware, tea sets, hollowware — tarnished or incomplete welcome. Same-day cash, 4 SoCal locations.',
  },
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

const testimonials = [
  {
    quote: 'I had my grandmother\'s sterling silver set — 12 place settings plus serving pieces. Levant tested everything and gave me a fair price based on the actual silver content. Very satisfied.',
    name: 'Linda M.',
    location: 'Orange',
  },
  {
    quote: 'I didn\'t realize my old silverware was valuable. Brought it in thinking it was silver-plated and it turned out to be sterling. They paid well and explained everything.',
    name: 'Robert S.',
    location: 'San Bernardino',
  },
  {
    quote: 'Estate sale included a full tea service in sterling. Levant handled it professionally and paid same day. No games, no pressure.',
    name: 'Eleanor H.',
    location: 'Pomona',
  },
]

const xrfSteps = [
  'Bring in your silverware',
  'We test each piece with XRF',
  'Genuine sterling gets a full melt offer',
  'Get paid same visit',
]

const silverwareHighlights = [
  '.925 Sterling always bought at full melt value',
  'Tarnished, monogrammed, or mismatched — all accepted',
  'Complete sets and individual pieces welcome',
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

      {/* ── Estate Silver Split ── */}
      <section className="bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[440px]">
              <Image
                src="/images/store/DSC03256.jpg"
                alt="Silver collectibles and estate silverware at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Estate &amp; Sterling Silver</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-cream mb-5 leading-tight">
                Your Silverware Has<br />Real Metal Value
              </h2>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                Sterling silver (.925) flatware, tea sets, candlesticks, and serving pieces contain
                substantial precious metal content. That set gathering dust in your cabinet could be
                worth hundreds or thousands. We buy by weight and purity — tarnish, monograms, and
                missing pieces don&apos;t reduce your metal payout.
              </p>
              <ul className="space-y-3">
                {silverwareHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="text-gold flex-shrink-0 mt-0.5">&#10003;</span>
                    <span className="text-cream/80 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
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

      {/* ── Testing Split: Sterling vs. Silver-Plated ── */}
      <section className="bg-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 order-2 lg:order-1">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Sterling vs. Silver-Plated</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                We Can Tell the<br />Difference Instantly
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Our XRF machine distinguishes genuine sterling silver (.925) from silver-plated items
                in seconds. You&apos;ll know exactly what you have before making any decisions. Sterling
                gets paid at melt value; plated items have little metal value but we&apos;ll give you an
                honest assessment either way.
              </p>
              <ol className="space-y-3">
                {xrfSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold text-charcoal text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-charcoal text-sm font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </FadeIn>
            <FadeIn direction="right" className="relative min-h-[440px] order-1 lg:order-2">
              <Image
                src="/images/store/DSC03307.jpg"
                alt="Silver coins and collectibles tested at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
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

      {/* ── Photo Strip ── */}
      <section className="py-4 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: '/images/store/DSC03256.jpg', alt: 'Silver collectibles display at Levant Gold & Silver' },
              { src: '/images/store/DSC03302.jpg', alt: 'Mixed coins, bars, and slabs at Levant Gold & Silver' },
              { src: '/images/store/DSC03395.jpg', alt: 'Jewelry on velvet tray at Levant Gold & Silver' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <StatsStrip />

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

      {/* ── Large Estate Collection Split ── */}
      <section className="bg-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[400px]">
              <Image
                src="/images/store/DSC03302.jpg"
                alt="Mixed coins, bars, and sterling silver estate collection at Levant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Complete Estate Collections</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Selling a Full<br />Silver Estate?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Inherited a full dining set, complete tea service, or mixed lot of sterling pieces?
                We evaluate everything in one visit, no pre-sorting required. Discreet, professional
                service for estate and family collection sales.
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
