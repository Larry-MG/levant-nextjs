'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Do I need an appointment?',
    a: 'No — walk in any time during business hours at any of our four locations. Our team will evaluate your items immediately.',
  },
  {
    q: 'How do you determine the value of my items?',
    a: 'We test purity with our XRF machine, weigh your items on a certified scale, and calculate your offer using the live spot price for that metal at the time of your visit.',
  },
  {
    q: 'What condition do items need to be in?',
    a: "Condition doesn't affect the metal value. Broken jewelry, bent coins, and worn pieces are all welcome — we pay for the metal content, not the aesthetics.",
  },
  {
    q: 'What forms of payment do you offer?',
    a: 'We pay cash or check on the spot. There is no waiting period or processing time.',
  },
  {
    q: 'Do you buy items without hallmarks or stamps?',
    a: 'Yes. Our XRF machine determines purity directly from the metal itself, so stamps or hallmarks are not required.',
  },
  {
    q: 'What is XRF testing?',
    a: 'X-Ray Fluorescence (XRF) is a non-destructive technique that bombards your item with X-rays and reads the elemental composition in seconds. No acid, no scratching, no damage — and you can watch the process in real time.',
  },
]

export default function WhatWeBuyFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-border rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
            aria-expanded={open === i}
          >
            <span className="font-heading font-semibold text-charcoal text-base group-hover:text-gold transition-colors">
              {faq.q}
            </span>
            <span
              className="shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center transition-all duration-300"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-muted">
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
