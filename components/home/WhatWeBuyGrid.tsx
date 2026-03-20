'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import StaggerChildren, { itemVariants } from '@/components/ui/StaggerChildren'

const whatWeBuy = [
  {
    title: 'Gold',
    desc: 'Coins, rings, necklaces, bracelets, earrings, watches, dental gold, and all gold items.',
    img: '/images/store/gold-rand-refinery.webp',
    imgAlt: 'Rand Refinery gold bars and coins',
    href: '/what-we-buy/gold',
  },
  {
    title: 'Silver',
    desc: 'Sterling silver coins, bullion, flatware, holloware, and silver bars of all sizes.',
    img: '/images/store/DSC03307.webp',
    imgAlt: 'Silver dollars and coins spread on felt',
    href: '/what-we-buy/silver',
  },
  {
    title: 'Platinum & Other Metals',
    desc: 'Platinum jewelry, palladium, and rhodium items — evaluated with scientific precision.',
    img: '/images/store/DSC03395.webp',
    imgAlt: 'Jewelry on velvet tray with gold bars',
    href: '/what-we-buy/platinum',
  },
  {
    title: 'Coins',
    desc: 'U.S. and foreign collectible coins, rare coins, silver dollars, full coin collections.',
    img: '/images/store/DSC03344.webp',
    imgAlt: 'Gold bars in PAMP Suisse packaging',
    href: '/what-we-buy/coins',
  },
  {
    title: 'Bars',
    desc: 'Gold, silver, and platinum bars in all sizes from all major refiners worldwide.',
    img: '/images/store/DSC03360.webp',
    imgAlt: 'Gold bars angled shot',
    href: '/what-we-buy/bars',
  },
  {
    title: 'Silverware',
    desc: 'Sterling flatware and serving pieces, hollowware, silver tea sets, and antiques.',
    img: '/images/store/DSC03256.webp',
    imgAlt: 'Silver collectibles on reflective black table',
    href: '/what-we-buy/silverware',
  },
]

export default function WhatWeBuyGrid() {
  return (
    <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5" staggerDelay={0.08}>
      {whatWeBuy.map((item) => (
        <motion.div
          key={item.title}
          variants={itemVariants}
          className="relative rounded-xl overflow-hidden group aspect-[4/3]"
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <Link href={item.href} className="absolute inset-0 z-10" aria-label={`Shop ${item.title}`} />
          <Image
            src={item.img}
            alt={item.imgAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
            <h3 className="font-heading font-bold text-white text-base sm:text-lg mb-1">{item.title}</h3>
            <p className="text-white/65 text-xs sm:text-sm leading-relaxed hidden sm:block">{item.desc}</p>
          </div>
          <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </StaggerChildren>
  )
}
