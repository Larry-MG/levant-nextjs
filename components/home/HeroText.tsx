'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroText() {
  return (
    <div className="max-w-xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-5"
      >
        Southern California&rsquo;s Trusted Dealer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-5"
      >
        Buy &amp; Sell<br />
        <span className="text-gold">Gold &amp; Silver</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-white/65 text-base sm:text-lg mb-8 leading-relaxed"
      >
        Gold and silver are too valuable for guesswork. We test every piece with
        XRF technology, price it from live spot rates, and put the math in front
        of you for same-day cash at any of our four Southern California locations.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.72, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-wrap gap-3"
      >
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
          href="/shop"
          className="border border-gold/50 hover:border-gold hover:bg-gold/8 text-gold hover:text-gold-light font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm"
        >
          Shop Bullion
        </Link>
      </motion.div>
    </div>
  )
}
