'use client'
import CountUp from '@/components/ui/CountUp'
import FadeIn from '@/components/ui/FadeIn'
import StaggerChildren, { itemVariants } from '@/components/ui/StaggerChildren'
import { motion } from 'framer-motion'

const stats = [
  { value: 10000, suffix: '+', label: 'Customers Served' },
  { value: 4,     suffix: '',  label: 'SoCal Locations'  },
  { value: 15,    suffix: '+', label: 'Years Experience' },
  { value: 98,    suffix: '%', label: 'Satisfaction Rate' },
]

export default function StatsStrip() {
  return (
    <section className="py-14 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <p className="text-4xl sm:text-5xl font-heading font-bold text-gold leading-none mb-2">
                <CountUp to={s.value} suffix={s.suffix} duration={2200} />
              </p>
              <p className="text-cream/70 text-sm font-medium tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
