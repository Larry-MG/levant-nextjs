import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { locations } from '@/lib/constants/locations'
import FadeIn from '@/components/ui/FadeIn'
import ValuesGrid from '@/components/about/ValuesGrid'
import LocationsGrid from '@/components/home/LocationsGrid'

export const metadata: Metadata = {
  title: 'About Levant Gold & Silver | Trusted Precious Metals Dealer — Southern California',
  description:
    "Learn about Levant Gold & Silver — Southern California's trusted precious metals dealer with four locations in Orange, Pomona, San Bernardino, and Walnut. We use industry-grade XRF technology for transparent, accurate appraisals.",
  keywords: [
    'Levant Gold Silver about', 'precious metals dealer Southern California',
    'gold dealer Orange County', 'trusted gold buyer Inland Empire',
    'XRF testing Southern California', 'gold silver appraisal',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Levant Gold & Silver | Trusted Precious Metals Dealer',
    description:
      "Southern California's trusted precious metals dealer with 4 locations. Transparent pricing, industry-grade XRF testing, same-day cash. Serving Orange County and the Inland Empire.",
    url: '/about',
  },
  twitter: {
    title: 'About Levant Gold & Silver | Southern California',
    description: 'Transparent pricing, XRF testing, same-day cash. 4 locations in Orange County and the Inland Empire.',
  },
}

const team = [
  {
    img: '/images/store/DSC03302.webp',
    caption: 'Coins, bars, and bullion at our Orange location',
  },
  {
    img: '/images/store/DSC03344.webp',
    caption: 'PAMP Suisse gold bars — just some of what we carry',
  },
  {
    img: '/images/store/DSC03411.webp',
    caption: 'Our XRF machine in action at a Levant location',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[440px] flex items-end overflow-hidden">
        <Image
          src="/images/store/DSC03392.webp"
          alt="Levant Gold & Silver store interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <FadeIn direction="up">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Southern California&rsquo;s Trusted Dealer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight max-w-2xl">
              Our Story
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Who We Are
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-6 leading-tight">
                Built on Trust,<br />
                <span className="text-muted font-normal">Driven by Integrity.</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Levant Gold &amp; Silver was founded with a simple mission: to bring transparency
                  and fairness to the precious metals business in Southern California. With four
                  convenient locations in Orange, Pomona, San Bernardino, and Walnut, we serve
                  customers from all over the Inland Empire and Los Angeles basin.
                </p>
                <p>
                  We buy and sell gold, silver, platinum, palladium, and rare metals. Whether you
                  have inherited jewelry you&rsquo;re ready to part with, a coin collection you&rsquo;ve
                  been building for years, or you&rsquo;re looking to invest in physical bullion —
                  our experienced team is here to help.
                </p>
                <p>
                  What sets us apart is our commitment to scientific accuracy. Every item that comes
                  through our doors is evaluated using the same industry-grade XRF (X-Ray Fluorescence)
                  technology used by professional refiners — not acid tests, not visual inspection.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/store/DSC03395.webp"
                alt="Jewelry and precious metals at Levant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Why Choose Levant
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream">
              What We Stand For
            </h2>
          </FadeIn>
          <ValuesGrid />
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Inside Levant</p>
            <h2 className="text-3xl font-heading font-bold text-charcoal">
              A Look at Our Stores
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {team.map((item, i) => (
              <FadeIn key={item.img} delay={i * 0.1} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src={item.img}
                  alt={item.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 px-4 pb-4 text-xs text-white/70 leading-snug">
                  {item.caption}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── XRF Technology ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch">
            <FadeIn direction="right" className="relative min-h-[400px] lg:min-h-0">
              <Image
                src="/images/store/DSC03411.webp"
                alt="XRF machine at Levant Gold & Silver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
              <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Our Technology
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-5 leading-tight">
                XRF Testing —<br />Science You Can See
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                Our XRF (X-Ray Fluorescence) machine is the same technology used by professional
                mints and refineries worldwide. It emits X-rays that interact with the atoms in
                your metal, and the returning energy signature identifies the exact elemental
                composition — down to a fraction of a percent.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Results in seconds, performed in front of you',
                  'Non-destructive — no damage to your items',
                  'Identifies gold, silver, platinum, and all other metals',
                  'Far more accurate than acid tests or visual inspection',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0">&#10003;</span>
                    <span className="text-muted text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="self-start bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Bring Your Items In
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Locations CTA ── */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
              4 Locations
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              Find Us Near You
            </h2>
          </FadeIn>
          <LocationsGrid locations={locations} />
          <FadeIn delay={0.3} className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
