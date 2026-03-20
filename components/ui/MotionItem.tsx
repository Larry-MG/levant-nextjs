'use client'
import { motion } from 'framer-motion'
import { itemVariants } from './StaggerChildren'
import type { ReactNode } from 'react'

export default function MotionItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
