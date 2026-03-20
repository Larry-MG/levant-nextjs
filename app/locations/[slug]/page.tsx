import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { locations, getLocation } from '@/lib/constants/locations'

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) return {}
  return {
    title: `${loc.name} Location | Buy & Sell Gold in ${loc.city}`,
    description: loc.description,
  }
}

const services = [
  'Buy & sell gold, silver, platinum',
  'Expert XRF appraisals',
  'Estate jewelry evaluation',
  'Bullion coins & bars',
  'Same-day cash or wire transfer',
  'No appointment necessary',
]

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) notFound()

  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Levant Gold &amp; Silver
          </p>
          <h1 className="text-4xl font-heading font-bold mb-3">{loc.name} Location</h1>
          <p className="text-cream/70 max-w-xl">{loc.description}</p>
        </div>
      </section>

      {/* Info grid */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Details */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h2 className="font-heading font-bold text-xl text-charcoal mb-4">Store Information</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Address</p>
                  <p className="text-charcoal">{loc.address}</p>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-sm hover:text-gold-dark transition-colors"
                  >
                    Get directions &rarr;
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                    className="text-gold font-semibold hover:text-gold-dark transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Hours</p>
                  <table className="w-full text-sm">
                    <tbody>
                      {loc.hours.map((h) => (
                        <tr key={h.days} className="border-b border-border last:border-0">
                          <td className="py-1.5 font-medium text-charcoal">{h.days}</td>
                          <td className="py-1.5 text-muted text-right">{h.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <div className="bg-white border border-border rounded-lg p-6">
                <h2 className="font-heading font-bold text-xl text-charcoal mb-4">Services</h2>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="text-gold mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
                <p className="font-semibold text-charcoal mb-1">No appointment needed</p>
                <p className="text-sm text-charcoal/70">
                  Walk in any time during business hours. We&rsquo;ll appraise your items on the spot and make an offer immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="mt-8 bg-white border border-border rounded-lg overflow-hidden">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
              className="w-full h-64 md:h-80"
              loading="lazy"
              title={`Map of Levant Gold ${loc.name}`}
            />
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Browse Live Prices
            </Link>
            <Link
              href="/contact"
              className="border border-border hover:border-gold text-charcoal hover:text-gold font-semibold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="py-10 bg-cream-dark border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Other Locations</p>
          <div className="flex flex-wrap gap-3">
            {locations
              .filter((l) => l.slug !== loc.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="border border-border bg-white hover:border-gold text-charcoal hover:text-gold px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
