'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}: FadeInProps) {
  const initialMap = {
    up:    { opacity: 0, y: 32 },
    down:  { opacity: 0, y: -32 },
    left:  { opacity: 0, x: 32 },
    right: { opacity: 0, x: -32 },
    none:  { opacity: 0 },
  }

  return (
    <motion.div
      className={className}
      initial={initialMap[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
