'use client'
import { motion } from 'framer-motion'
import StaggerChildren, { itemVariants } from '@/components/ui/StaggerChildren'
import FadeIn from '@/components/ui/FadeIn'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Orange, CA',
    text: 'Best experience selling my gold jewelry. They gave me a fair price and paid me immediately. The XRF testing was impressive — totally transparent.',
    stars: 5,
  },
  {
    name: 'James R.',
    location: 'Pomona, CA',
    text: 'Very professional and transparent. The XRF test showed exactly what my coins were worth. No haggling, just honest dealing.',
    stars: 5,
  },
  {
    name: 'Linda T.',
    location: 'San Bernardino, CA',
    text: 'Walked in with old silverware and walked out with cash in hand. The process was quick and the staff was incredibly helpful.',
    stars: 5,
  },
  {
    name: 'Robert K.',
    location: 'Riverside, CA',
    text: "Had a coin collection sitting in my garage for 20 years. Levant gave me a fair price and explained every coin's value. Walked out with more than I expected.",
    stars: 5,
  },
  {
    name: 'Maria G.',
    location: 'Anaheim, CA',
    text: "I was nervous about selling my grandmother's jewelry, but the team was patient, kind, and completely transparent. The XRF test right in front of me gave me real confidence.",
    stars: 5,
  },
  {
    name: 'David P.',
    location: 'Diamond Bar, CA',
    text: 'Sold silver flatware from an estate. They weighed everything precisely, tested it all, and paid immediately. The whole process took about 20 minutes.',
    stars: 5,
  },
]

export default function TestimonialsGrid() {
  return (
    <>
      <StaggerChildren className="grid md:grid-cols-3 gap-6" staggerDelay={0.08}>
        {testimonials.map((review) => (
          <motion.div
            key={review.name}
            variants={itemVariants}
            className="bg-cream border border-border rounded-xl p-7 shadow-sm hover:border-gold transition-colors"
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(201,168,76,0.1)', transition: { duration: 0.2 } }}
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(review.stars)].map((_, i) => (
                <span key={i} className="text-gold text-base">&#9733;</span>
              ))}
            </div>
            <p className="text-muted text-sm leading-relaxed mb-5 italic">&ldquo;{review.text}&rdquo;</p>
            <div>
              <p className="font-semibold text-charcoal text-sm">{review.name}</p>
              <p className="text-muted text-xs mt-0.5">{review.location}</p>
            </div>
          </motion.div>
        ))}
      </StaggerChildren>

      {/* Trust bar */}
      <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-10 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gold text-xl">&#9733;</span>
            ))}
          </div>
          <div>
            <p className="font-bold text-charcoal text-sm">4.9 / 5.0</p>
            <p className="text-muted text-xs">Based on 200+ Google reviews</p>
          </div>
        </div>
        <div className="hidden sm:block w-px h-10 bg-border" />
        <p className="text-muted text-sm text-center sm:text-left max-w-xs">
          Rated Southern California&rsquo;s most trusted precious metals dealer by our customers.
        </p>
      </FadeIn>
    </>
  )
}
