import Link from 'next/link'
import Image from 'next/image'
import { locations } from '@/lib/constants/locations'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/levant-logo.webp"
                alt="Levant Gold & Silver"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-gold font-bold text-base tracking-wide font-playfair">Levant</span>
                <span className="text-cream/50 text-[11px] tracking-widest uppercase">Gold &amp; Silver</span>
              </div>
            </div>
            <div className="space-y-1 text-xs text-white/40">
              <p>Buy &middot; Sell &middot; Appraise</p>
              <p>No appointment necessary</p>
              <p>Same-day cash or wire transfer</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Menu</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/what-we-buy', label: 'What We Buy' },
                { href: '/shop', label: 'What We Sell' },
                { href: '/spot-prices', label: 'Live Spot Prices' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold transition-colors text-white/60">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <Link href="/locations" className="text-white hover:text-gold font-semibold text-xs uppercase tracking-widest mb-4 block transition-colors">
              Our Locations
            </Link>
            <ul className="space-y-3 text-sm">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="text-gold hover:text-gold-light font-semibold transition-colors text-xs">
                    {loc.name}
                  </Link>
                  <p className="text-white/40 text-xs">{loc.phone}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Levant Gold &amp; Silver. All rights reserved.</p>
          <p>Prices shown are for reference only and subject to change without notice.</p>
        </div>
      </div>
    </footer>
  )
}
