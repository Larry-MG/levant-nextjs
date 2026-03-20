'use client'
import { motion } from 'framer-motion'
import StaggerChildren, { itemVariants } from '@/components/ui/StaggerChildren'

const steps = [
  {
    num: '01',
    title: 'Walk In',
    desc: 'Visit any of our four Southern California locations — no appointment needed, Monday through Saturday.',
  },
  {
    num: '02',
    title: 'Free Evaluation',
    desc: 'Our experts use XRF technology to give you a scientifically precise reading of your items in seconds.',
  },
  {
    num: '03',
    title: 'Get Paid',
    desc: 'Receive immediate payment via cash, wire transfer, Zelle, or CashApp — same day, every time.',
  },
]

export default function HowItWorksSteps() {
  return (
    <StaggerChildren className="grid md:grid-cols-3 gap-10 md:gap-6">
      {steps.map((step) => (
        <motion.div key={step.num} variants={itemVariants} className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-7xl font-bold text-gold/15 leading-none mb-4 select-none font-mono">
            {step.num}
          </p>
          <div className="w-8 h-px bg-gold mb-4" />
          <h3 className="font-heading font-bold text-xl text-cream mb-3">{step.title}</h3>
          <p className="text-cream/50 text-sm leading-relaxed max-w-xs">{step.desc}</p>
        </motion.div>
      ))}
    </StaggerChildren>
  )
}
