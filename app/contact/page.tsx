import type { Metadata } from 'next'
import { locations } from '@/lib/constants/locations'

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
              {/*
                Note: Replace the action URL below with your Formspree endpoint.
                Sign up at formspree.io to get a free endpoint.
                e.g. action="https://formspree.io/f/YOUR_FORM_ID"
              */}
              <form action="#" method="POST" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
                    What do you have?
                  </label>
                  <select
                    name="category"
                    className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
                  >
                    <option value="">Select a category</option>
                    <option>Gold coins or bars</option>
                    <option>Silver coins or bars</option>
                    <option>Platinum or palladium</option>
                    <option>Jewelry</option>
                    <option>Estate or scrap gold</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white resize-none"
                    placeholder="Describe your items and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold py-3 rounded transition-colors"
                >
                  Send Message
                </button>
              </form>
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
