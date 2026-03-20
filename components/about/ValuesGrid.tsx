'use client'
import { motion } from 'framer-motion'
import StaggerChildren, { itemVariants } from '@/components/ui/StaggerChildren'

const values = [
  {
    icon: '◈',
    title: 'Transparent Evaluations',
    desc: 'Every item is tested with XRF (X-Ray Fluorescence) technology in front of you. You see the exact composition and purity — no black-box guesswork.',
  },
  {
    icon: '◉',
    title: 'Fair Market Prices',
    desc: 'Our offers are based on live spot prices pulled directly from market data. We show you exactly how we calculate every offer.',
  },
  {
    icon: '◎',
    title: 'Same-Day Payment',
    desc: 'Walk in, get evaluated, and leave with payment in hand. Cash, wire transfer, Zelle, or CashApp — your choice, same day.',
  },
  {
    icon: '◇',
    title: 'No Appointment Needed',
    desc: 'All four of our Southern California locations are walk-in friendly, Monday through Saturday. Bring anything precious metals related.',
  },
]

export default function ValuesGrid() {
  return (
    <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((v) => (
        <motion.div
          key={v.title}
          variants={itemVariants}
          className="bg-charcoal-soft border border-white/10 rounded-xl p-7 hover:border-gold/30 transition-colors"
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <span className="text-gold text-3xl block mb-4">{v.icon}</span>
          <h3 className="font-heading font-bold text-cream text-lg mb-3">{v.title}</h3>
          <p className="text-cream/50 text-sm leading-relaxed">{v.desc}</p>
        </motion.div>
      ))}
    </StaggerChildren>
  )
}
