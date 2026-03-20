'use client'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import StaggerChildren, { itemVariants } from '@/components/ui/StaggerChildren'
import CountUp from '@/components/ui/CountUp'

const stats = [
  { to: 10000, suffix: '+', label: 'Customers Served',    sub: 'Across SoCal' },
  { to: 4,     suffix: '',  label: 'Locations',            sub: 'Orange, Pomona, SB & Walnut' },
  { to: 98,    suffix: '%', label: 'Satisfaction Rate',    sub: 'Based on customer reviews' },
  { to: 15,    suffix: '+', label: 'Years Experience',     sub: 'In precious metals' },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">By the Numbers</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal">
            Southern California Trusts Levant
          </h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="flex flex-col items-center gap-2">
              <p className="text-4xl sm:text-5xl font-heading font-bold text-gold">
                <CountUp to={stat.to} suffix={stat.suffix} duration={2200} />
              </p>
              <p className="font-semibold text-charcoal text-sm">{stat.label}</p>
              <p className="text-muted text-xs">{stat.sub}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
