'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

const containerVariants = (staggerDelay: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
})

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] } },
}

export default function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}
