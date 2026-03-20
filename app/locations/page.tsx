import type { Metadata } from 'next'
import Link from 'next/link'
import { locations } from '@/lib/constants/locations'

export const metadata: Metadata = {
  title: 'Locations & Hours | Levant Gold & Silver — Southern California',
  description:
    'Find the Levant Gold & Silver location nearest you. Four convenient locations across Southern California — Orange, Pomona, San Bernardino, and Walnut. No appointment necessary.',
}

export default function LocationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Southern California
          </p>
          <h1 className="text-4xl font-heading font-bold mb-3">Our Locations</h1>
          <p className="text-cream/70 max-w-2xl">
            Find the Levant Gold &amp; Silver nearest you. We have four convenient locations across
            Southern California — no appointment necessary at any of them.
          </p>
        </div>
      </section>

      {/* Locations grid */}
      <section className="py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white border border-border rounded-lg p-6 flex flex-col"
              >
                {/* Header */}
                <div className="mb-4">
                  <h2 className="font-heading font-bold text-xl text-charcoal mb-1">
                    {loc.name}
                  </h2>
                  <p className="text-sm text-muted">{loc.description}</p>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm flex-1">
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-0.5">
                      Address
                    </p>
                    <p className="text-charcoal">{loc.address}</p>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-xs hover:text-gold-dark transition-colors"
                    >
                      Get directions &rarr;
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-0.5">
                      Phone
                    </p>
                    <a
                      href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                      className="text-gold font-semibold hover:text-gold-dark transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                      Hours
                    </p>
                    <table className="w-full text-sm">
                      <tbody>
                        {loc.hours.map((h) => (
                          <tr key={h.days} className="border-b border-border last:border-0">
                            <td className="py-1 font-medium text-charcoal">{h.days}</td>
                            <td className="py-1 text-muted text-right">{h.hours}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5 pt-4 border-t border-border">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-block bg-gold hover:bg-gold-dark text-charcoal font-semibold px-4 py-2 rounded transition-colors text-sm"
                  >
                    View location details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 bg-cream-dark border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: 'No appointment necessary', detail: 'Walk in any time during business hours' },
              { label: 'Same-day cash or wire', detail: 'Get paid on the spot — no waiting' },
              { label: 'Free XRF appraisals', detail: 'Accurate, non-destructive metal testing' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-semibold text-charcoal text-sm mb-1">{item.label}</p>
                <p className="text-xs text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
