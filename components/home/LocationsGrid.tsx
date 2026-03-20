'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import StaggerChildren, { itemVariants } from '@/components/ui/StaggerChildren'

interface Hours {
  days: string
  hours: string
}

interface Location {
  slug: string
  name: string
  address: string
  phone: string
  hours: Hours[]
}

interface LocationsGridProps {
  locations: Location[]
}

export default function LocationsGrid({ locations }: LocationsGridProps) {
  return (
    <StaggerChildren className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
      {locations.map((loc) => (
        <motion.div
          key={loc.slug}
          variants={itemVariants}
          className="bg-cream-dark border border-border rounded-xl overflow-hidden hover:border-gold transition-colors group"
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div className="bg-charcoal px-6 py-4">
            <h3 className="font-heading font-bold text-cream text-xl">{loc.name}</h3>
            <p className="text-gold text-xs font-medium mt-0.5">Southern California</p>
          </div>
          <div className="p-6">
            <p className="text-muted text-sm mb-4">{loc.address}</p>
            <div className="space-y-1 mb-5">
              {loc.hours.map((h) => (
                <p key={h.days} className="text-sm">
                  <span className="font-semibold text-charcoal">{h.days}:</span>{' '}
                  <span className="text-muted">{h.hours}</span>
                </p>
              ))}
            </div>
            <a
              href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
              className="block text-gold font-semibold text-base hover:text-gold-dark transition-colors mb-4"
            >
              {loc.phone}
            </a>
            <Link
              href={`/locations/${loc.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-gold transition-colors border-b border-border hover:border-gold pb-0.5"
            >
              View location &rarr;
            </Link>
          </div>
        </motion.div>
      ))}
    </StaggerChildren>
  )
}
