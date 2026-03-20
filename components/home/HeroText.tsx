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
        of you — same-day cash at any of our four Southern California locations.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.72, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-wrap gap-3"
      >
        <Link
          href="tel:7142134785"
          className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
        >
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
