import type { Metadata } from 'next'
import { locations } from '@/lib/constants/locations'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Free Gold & Silver Quote — Orange County & Inland Empire',
  description:
    'Get a free, no-obligation quote for your gold, silver, platinum, or coins. Levant Gold & Silver — 4 Southern California locations in Orange, Pomona, San Bernardino & Walnut. Walk in or reach out online.',
  keywords: [
    'gold quote Southern California', 'sell gold quote Orange CA', 'sell gold quote Pomona',
    'free gold appraisal', 'gold appraisal near me', 'sell gold contact',
    'precious metals quote Inland Empire', 'sell gold jewelry quote',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Levant Gold & Silver | Free Quote — Orange County & Inland Empire',
    description:
      'Free, no-obligation gold and silver appraisals. Walk in to any of 4 locations — Orange, Pomona, San Bernardino & Walnut — or request a quote online.',
    url: '/contact',
  },
  twitter: {
    title: 'Get a Free Gold & Silver Quote | Levant Gold & Silver',
    description: '4 SoCal locations. Free appraisals, no obligation. Orange, Pomona, San Bernardino & Walnut.',
  },
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal text-cream py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-2">Contact Us</h1>
          <p className="text-cream/70 max-w-lg">
            Get a quick quote, ask about our current buy prices, or find your nearest location.
          </p>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h2 className="font-heading font-bold text-xl text-charcoal mb-5">Request a Quote</h2>
              <ContactForm />
            </div>

            {/* Location list */}
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.slug} className="bg-white border border-border rounded-lg p-5">
                  <h3 className="font-heading font-bold text-charcoal mb-1">{loc.name}</h3>
                  <p className="text-sm text-muted mb-2">{loc.address}</p>
                  <a
                    href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                    className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors block mb-2"
                  >
                    {loc.phone}
                  </a>
                  <div className="text-xs text-muted space-y-0.5">
                    {loc.hours.map((h) => (
                      <p key={h.days}>
                        <span className="font-medium text-charcoal/70">{h.days}:</span>{' '}
                        {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-cream-dark border border-border rounded-lg p-4 text-sm text-charcoal/70">
                <p className="font-semibold text-charcoal mb-1">No appointment needed</p>
                <p>Walk in any time during business hours for an immediate appraisal and cash offer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
