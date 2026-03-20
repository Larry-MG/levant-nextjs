'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'
import { SpotPriceBar } from '@/components/home/SpotPriceTicker'

const navLinks: Array<{
  label: string
  href?: string
  children?: { href: string; label: string }[]
}> = [
  { href: '/', label: 'Home' },
  {
    href: '/what-we-buy',
    label: 'What We Buy',
    children: [
      { href: '/what-we-buy/gold', label: 'Gold' },
      { href: '/what-we-buy/silver', label: 'Silver' },
      { href: '/what-we-buy/platinum', label: 'Platinum & Other Metals' },
      { href: '/what-we-buy/coins', label: 'Coins' },
      { href: '/what-we-buy/bars', label: 'Bars' },
      { href: '/what-we-buy/silverware', label: 'Silverware' },
    ],
  },
  { href: '/shop', label: 'What We Sell' },
  { href: '/about', label: 'About Us' },
  { href: '/spot-prices', label: 'Live Spot Prices' },
  {
    href: '/locations',
    label: 'Our Locations',
    children: [
      { href: '/locations/orange', label: 'Orange' },
      { href: '/locations/pomona', label: 'Pomona' },
      { href: '/locations/san-bernardino', label: 'San Bernardino' },
      { href: '/locations/walnut', label: 'Walnut' },
    ],
  },
  { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-charcoal/85 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/20'
        : 'bg-charcoal'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <Image
              src="/images/logo/levant-logo.png"
              alt="Levant Gold & Silver"
              width={72}
              height={72}
              className="rounded-full group-hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 px-3 py-2 text-sm text-cream/70 hover:text-gold rounded transition-colors whitespace-nowrap"
                      >
                        {link.label}
                        <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                    ) : (
                      <button className="flex items-center gap-1 px-3 py-2 text-sm text-cream/70 hover:text-gold rounded transition-colors whitespace-nowrap">
                        {link.label}
                        <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-0.5 bg-charcoal-soft border border-white/10 rounded-xl shadow-2xl py-1.5 min-w-[210px] z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-cream/65 hover:text-gold hover:bg-white/5 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="px-3 py-2 text-sm text-cream/70 hover:text-gold rounded transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Cart + mobile toggle — pushed to right */}
          <div className="flex items-center gap-1 ml-auto lg:ml-0">
            <CartIcon />
            <button
              className="lg:hidden p-2 text-cream/70 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Live spot price bar — always visible */}
      <SpotPriceBar />

    </header>

      {/* Mobile nav — portaled to body so backdrop-blur on header doesn't trap fixed positioning */}
      {mounted && mobileOpen && createPortal(
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer panel */}
          <div className="absolute right-0 top-0 h-full w-[300px] bg-charcoal shadow-2xl flex flex-col overflow-y-auto">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
              <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/images/logo/levant-logo.png"
                  alt="Levant"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-gold font-bold text-sm tracking-wide font-playfair">Levant</span>
                  <span className="text-cream/50 text-[10px] tracking-widest uppercase">Gold & Silver</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-cream/40 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-4 flex flex-col divide-y divide-white/5">
              {navLinks.map((link) => {
                if (link.children) {
                  const isOpen = openDropdown === link.label
                  return (
                    <div key={link.label}>
                      <button
                        className="w-full flex items-center justify-between py-3.5 text-[15px] font-medium text-cream/80 hover:text-gold transition-colors"
                        onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-4 h-4 text-gold/40 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="pb-3 space-y-0.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center gap-2.5 py-2.5 pl-3 pr-3 text-sm text-cream/50 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <div key={link.label}>
                    <Link
                      href={link.href!}
                      className="flex items-center py-3.5 text-[15px] font-medium text-cream/80 hover:text-gold transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </div>
                )
              })}
            </nav>

            {/* Bottom CTA */}
            <div className="px-5 py-5 border-t border-white/10 flex-shrink-0">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full py-3.5 rounded-xl bg-gold/15 border border-gold/25 text-gold font-semibold text-sm hover:bg-gold/25 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </Link>
              <p className="text-center text-cream/25 text-[10px] mt-3 tracking-wide">
                3 Locations · Southern California
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
