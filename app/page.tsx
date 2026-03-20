import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SpotPriceTicker from '@/components/home/SpotPriceTicker'
import GoldCalculator from '@/components/home/GoldCalculator'
import HeroText from '@/components/home/HeroText'
import WhatWeBuyGrid from '@/components/home/WhatWeBuyGrid'
import HowItWorksSteps from '@/components/home/HowItWorksSteps'
import TestimonialsGrid from '@/components/home/TestimonialsGrid'
import LocationsGrid from '@/components/home/LocationsGrid'
import LocationsMap from '@/components/home/LocationsMap'
import PopularProductsGrid from '@/components/home/PopularProductsGrid'
import StatsSection from '@/components/home/StatsSection'
import FAQ from '@/components/home/FAQ'
import FadeIn from '@/components/ui/FadeIn'
import JsonLd from '@/components/seo/JsonLd'
import { locations } from '@/lib/constants/locations'
import { getProductCatalog, getProductPrices, mergeShopProducts } from '@/lib/fiztrade/client'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Buy & Sell Gold & Silver Near Me | Orange County & Inland Empire | Levant Gold & Silver',
  description:
    "Buy and sell gold, silver, platinum & palladium at Levant Gold & Silver — 4 Southern California locations in Orange, Pomona, San Bernardino & Walnut. Best prices, free XRF testing, same-day cash. No appointment needed.",
  keywords: [
    'buy gold near me', 'sell gold near me', 'gold dealer near me',
    'buy gold Orange County', 'sell gold Orange County',
    'buy gold Inland Empire', 'sell gold Inland Empire',
    'cash for gold Orange CA', 'cash for gold Pomona CA', 'cash for gold San Bernardino',
    'gold coins buyer Southern California', 'sell gold jewelry Southern California',
    'precious metals dealer near me', 'sell silver near me',
    'gold buyer Orange', 'gold buyer Pomona', 'gold buyer San Bernardino', 'gold buyer Walnut',
    'best gold prices Southern California', 'XRF gold testing',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Buy & Sell Gold & Silver | Best Prices in Orange County & Inland Empire',
    description:
      "Southern California's top-rated precious metals dealer. Walk in to any of 4 locations — Orange, Pomona, San Bernardino & Walnut — for a free appraisal and same-day cash offer.",
    url: '/',
  },
  twitter: {
    title: 'Buy & Sell Gold & Silver | Orange County & Inland Empire',
    description:
      "4 SoCal locations. Free XRF testing, same-day cash, no appointment. Orange, Pomona, San Bernardino & Walnut.",
  },
}

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Levant Gold & Silver',
    url: 'https://levantgold.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://levantgold.com/shop?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://levantgold.com/#business',
    name: 'Levant Gold & Silver',
    description:
      "Southern California's trusted precious metals dealer. We buy and sell gold, silver, platinum, and palladium at four convenient locations.",
    url: 'https://levantgold.com',
    logo: 'https://levantgold.com/images/logo/levant-logo.png',
    image: 'https://levantgold.com/images/store/DSC03302.jpg',
    priceRange: '$$',
    telephone: '+17142134785',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '419 N Tustin St',
      addressLocality: 'Orange',
      addressRegion: 'CA',
      postalCode: '92867',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    hasMap: 'https://maps.google.com/?q=419+N+Tustin+St+Orange+CA+92867',
    sameAs: ['https://levantgold.com'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need an appointment to sell my gold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No appointment needed. Walk in to any of our four Southern California locations — Orange, Pomona, San Bernardino, or Walnut — any time during business hours for a free, immediate appraisal.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you determine the value of my gold or silver?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We test every item with our XRF (X-Ray Fluorescence) machine to determine exact purity, weigh it on a certified scale, and calculate your offer using the live spot price at the time of your visit. We show you the math.',
        },
      },
      {
        '@type': 'Question',
        name: 'What forms of payment do you offer when buying my gold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We pay cash, check, wire transfer, Zelle, or CashApp on the spot — whichever you prefer. There is no waiting period.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of gold and precious metals do you buy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We buy all forms of gold, silver, platinum, palladium, and rhodium — including jewelry (any karat), bullion coins and bars, scrap metal, estate pieces, dental gold, sterling silverware, and collector coins.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are your Southern California locations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We have four locations: Orange (419 N Tustin St), Pomona (1565 W Holt Ave), San Bernardino (1292 W Mill St), and Walnut (386 N Lemon Ave). All open Monday through Saturday, no appointment needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you buy gold without hallmarks or stamps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our XRF machine determines the exact purity of any metal directly — no stamps or hallmarks required.',
        },
      },
    ],
  },
]

const POPULAR_CODES = [
  '1G', '1EAGLE', '90MH', 'SE', '1SEMSB', '1VALPLAT',
  '1B', '1MAP', '1AGMAP', '10AG', '1PE', '1PAL',
]

const POPULAR_LABEL_OVERRIDES: Record<string, string> = {
  '1G': '1 oz Gold Bar',
  '1EAGLE': '1 oz American Gold Eagle',
  '90MH': '90% American Silver Coins - Minted Halves',
  'SE': '2026 1 oz American Silver Eagle',
  '1SEMSB': '1 oz American Silver Eagle Mint Sealed Box',
  '1VALPLAT': '1 oz Platinum Bar Valcambi',
  '1B': '1 oz American Gold Buffalo',
  '1MAP': '1 oz Canadian Gold Maple Leaf',
  '1AGMAP': '1 oz Canadian Silver Maple Leaf',
  '10AG': '10 oz Silver Bar',
  '1PE': '1 oz American Platinum Eagle',
  '1PAL': '1 oz Palladium Bar',
}

async function loadPopularProducts() {
  try {
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('FizTrade timeout')), 4000)
    )
    const [catalog, prices] = await Promise.race([
      Promise.all([
        getProductCatalog(POPULAR_CODES),
        getProductPrices(POPULAR_CODES),
      ]),
      timeout,
    ])
    return mergeShopProducts(catalog, prices).filter(p => p.isActiveSell && p.ask > 0)
  } catch {
    return []
  }
}

export default async function HomePage() {
  const popularProducts = await loadPopularProducts()

  return (
    <>
      <JsonLd id="schema-home" schema={homeJsonLd as Record<string, unknown>[]} />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/home-banner.webp"
          alt="Gold and silver coins and bars"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.28),transparent_36%)]" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[580px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)]">
            <div className="py-24 lg:py-28">
              <HeroText />
            </div>
            <FadeIn direction="left" delay={0.15} className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-[520px] h-[420px]">
                <div className="absolute inset-x-12 bottom-8 h-24 rounded-full bg-gold/25 blur-3xl" />
                <Image
                  src="/images/what-we-buy/Group-1000008359-1.webp"
                  alt="Gold jewelry, coins, and bullion bars at Levant Gold & Silver"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_28px_60px_rgba(0,0,0,0.4)]"
                  priority
                  sizes="520px"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Popular Products ── */}
      <section className="bg-charcoal py-14 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <FadeIn className="flex items-end justify-between mb-8">
            <div>
              <p className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">
                Live FizTrade Pricing
              </p>
              <h2 className="text-2xl font-heading font-bold text-cream">Popular Products</h2>
            </div>
            <Link href="/shop" className="text-xs text-gold hover:text-gold-light transition-colors font-medium pb-0.5">
              Shop all &rarr;
            </Link>
          </FadeIn>
          <PopularProductsGrid
            products={popularProducts}
            fallbackCodes={POPULAR_CODES}
            labelOverrides={POPULAR_LABEL_OVERRIDES}
          />
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-0 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Text */}
            <FadeIn direction="right" className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Established in Southern California
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Trusted Dealers.<br />
                <span className="text-muted font-normal">Fair Prices.</span>
              </h2>
              <p className="text-muted leading-relaxed mb-5 text-base">
                Welcome to Levant Gold &amp; Silver — with locations in Orange, Pomona, San
                Bernardino, and Walnut. We buy and sell gold, silver, platinum, and other precious
                metals with a commitment to complete transparency.
              </p>
              <p className="text-muted leading-relaxed mb-8 text-base">
                Our experienced team uses industry-leading XRF (X-Ray Fluorescence)
                technology to ensure every evaluation is accurate and fair — no guesswork,
                no surprises.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Our Story
                </Link>
                <Link
                  href="/contact"
                  className="border border-border hover:border-gold text-charcoal hover:text-gold font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </FadeIn>
            {/* Photo */}
            <FadeIn direction="left" delay={0.2} className="px-6 pb-6 lg:px-0 lg:pr-8 lg:py-8">
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] lg:h-full">
                <Image
                  src="/images/store/levant-outside.jpg"
                  alt="Levant Gold & Silver storefront in Southern California"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cream/30 via-transparent to-transparent lg:block hidden" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Live Spot Prices ── */}
      <SpotPriceTicker />

      {/* ── Gold Calculator ── */}
      <GoldCalculator />

      {/* ── What We Buy ── */}
      <section className="py-18 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Immediate Cash Offers</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">What We Buy</h2>
          </FadeIn>
          <WhatWeBuyGrid />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Simple Process</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">How It Works</h2>
          </FadeIn>
          <HowItWorksSteps />
        </div>
      </section>

      {/* ── Trust Stats ── */}
      <StatsSection />

      {/* ── XRF Machine ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Photos — diagonal stacked */}
            <FadeIn direction="right" className="order-2 lg:order-1 px-6 pb-8 lg:px-0 lg:pl-8 lg:py-8">
              <div className="relative min-h-[460px] lg:h-full">
                {/* Back photo — storefront, shifted up-right */}
                <div className="absolute inset-0 translate-x-6 -translate-y-4 overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/images/store/levant-outside.jpg"
                    alt="Levant Gold & Silver storefront"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/20" />
                </div>
                {/* Front photo — XRF machine, shifted down-left */}
                <div className="absolute inset-0 -translate-x-4 translate-y-6 overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-cream">
                  <Image
                    src="/images/store/xrf-machine.jpg"
                    alt="XRF testing machine at Levant Gold & Silver"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </FadeIn>
            {/* Text */}
            <FadeIn direction="left" delay={0.2} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 order-1 lg:order-2">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Scientific Precision
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-5 leading-tight">
                Our X-Ray<br />Fluorescence Machine
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                At Levant, we use XRF (X-Ray Fluorescence) technology to ensure the most
                accurate assessments possible. Our machine emits X-rays that interact with
                the atoms in your metal, releasing a unique fluorescent energy signature.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Identifies exact elemental composition and purity',
                  'Results displayed in seconds — full transparency',
                  'No damage to your items — completely non-destructive',
                  'Far superior to traditional acid tests or visual inspection',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0 text-base">&#10003;</span>
                    <span className="text-muted text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="self-start bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Get Your Items Tested
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ── Map ── */}
      <LocationsMap locations={locations} />

      {/* ── Testimonials ── */}
      <section className="py-18 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">5-Star Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              What Our Customers Say
            </h2>
          </FadeIn>
          <TestimonialsGrid />
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Request a Quote ── */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">No Obligation</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream mb-5 leading-tight">
                Get a Free Quote
              </h2>
              <p className="text-cream/50 leading-relaxed mb-8">
                Not sure what your items are worth? Send us a message and we&rsquo;ll get
                back to you with a free, no-obligation estimate. We evaluate gold, silver,
                platinum, coins, bars, and jewelry.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '◈', label: 'Free evaluation, no commitment' },
                  { icon: '◉', label: 'Response within 24 hours' },
                  { icon: '◎', label: 'Same-day cash at our locations' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-gold text-lg">{item.icon}</span>
                    <span className="text-cream/60 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <form action="#" method="POST" className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Describe what you have (gold jewelry, silver coins, etc.)"
                  className="w-full bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold py-3.5 rounded-lg transition-colors text-sm"
                >
                  Send Quote Request
                </button>
                <p className="text-center text-xs text-cream/30">
                  We respond within 24 hours. Your information is never shared.
                </p>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

    </>
  )
}
