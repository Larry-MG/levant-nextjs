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
import PopularProductsGrid from '@/components/home/PopularProductsGrid'
import StatsSection from '@/components/home/StatsSection'
import FAQ from '@/components/home/FAQ'
import FadeIn from '@/components/ui/FadeIn'
import { locations } from '@/lib/constants/locations'
import { getProductCatalog, getProductPrices, mergeShopProducts } from '@/lib/fiztrade/client'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Buy & Sell Gold & Silver in Southern California | Levant Gold & Silver',
  description: 'Southern California\'s trusted precious metals dealer. 4 locations in Orange, Pomona, San Bernardino, and Walnut. Honest prices, immediate payment, XRF testing.',
}

const POPULAR_CODES = ['1EAGLE', 'SE', '1B', '1MAP', '1PE', '1PAL']

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
      {/* ── Hero ── */}
      <section className="relative min-h-[580px] flex flex-col justify-center overflow-hidden">
        <Image
          src="/images/hero/home-banner.webp"
          alt="Gold and silver coins and bars"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <HeroText />
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
          <PopularProductsGrid products={popularProducts} fallbackCodes={POPULAR_CODES} />
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
            <FadeIn direction="left" delay={0.2} className="relative min-h-[360px] lg:min-h-0">
              <Image
                src="/images/store/DSC03302.jpg"
                alt="Coins, bars, and precious metals at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cream/30 via-transparent to-transparent lg:block hidden" />
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
            {/* Photo */}
            <FadeIn direction="right" className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1">
              <Image
                src="/images/store/DSC03411.jpg"
                alt="XRF testing machine at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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

      {/* ── Gold Bar Photo Break ── */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <Image
          src="/images/store/DSC03392.jpg"
          alt="Gold jewelry on velvet tray"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <FadeIn direction="none" className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2">Walk in any day</p>
            <p className="text-white text-2xl sm:text-3xl font-heading font-bold">
              Same-Day Cash Offers at All 4 Locations
            </p>
          </div>
        </FadeIn>
      </div>

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

      {/* ── Visit Us ── */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">4 Locations</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">Visit Us</h2>
          </FadeIn>
          <LocationsGrid locations={locations} />
        </div>
      </section>
    </>
  )
}
