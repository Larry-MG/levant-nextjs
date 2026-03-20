'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

const faqs = [
  {
    q: 'How do you determine what my gold is worth?',
    a: 'We use an XRF (X-Ray Fluorescence) machine to identify the exact elemental composition of your item — its purity to a fraction of a percent. We then apply the current live spot price from the global market. You see the exact reading and exactly how we calculate the offer.',
  },
  {
    q: 'Do I need an appointment?',
    a: "No. All four of our Southern California locations are walk-in friendly, Monday through Saturday. Just bring your items and we'll evaluate them on the spot, typically in just a few minutes.",
  },
  {
    q: 'How fast will I get paid?',
    a: 'Same day, every time. Once you accept our offer, you receive payment immediately — cash, wire transfer, Zelle, or CashApp. There is no waiting period.',
  },
  {
    q: 'What kinds of gold do you buy?',
    a: 'Everything — rings, necklaces, bracelets, earrings, watches, chains, dental gold, scrap gold, and gold coins and bars. Any karat, any condition, any brand.',
  },
  {
    q: 'Is there a minimum or maximum amount I can sell?',
    a: 'No minimums, no maximums. Whether you have a single ring or a full estate of silver flatware and gold coins, we handle it all with the same care and precision.',
  },
  {
    q: 'Do you buy silver and platinum too?',
    a: 'Yes. We buy silver coins, sterling silverware, silver bars, and silver jewelry. We also buy platinum jewelry, palladium, and other precious metals. Our XRF machine identifies all of them accurately.',
  },
  {
    q: 'Are your prices competitive?',
    a: 'Our offers are based directly on live spot prices pulled from global market data — the same prices professional refiners use. We show you the spot price we are using so you can verify it yourself before accepting any offer.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-cream hover:bg-cream-dark transition-colors"
              >
                <span className="font-semibold text-charcoal text-sm pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-gold text-xl leading-none"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 pt-2 text-sm text-muted leading-relaxed border-t border-border">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
