'use client'

import { motion } from 'framer-motion'
import { motionVariants } from '@/components/animations/motionVariants'
import { RevealConfig } from '@/shared/types/RevealConfig'

type RevealProps = {
  children: React.ReactNode
} & RevealConfig

export default function Reveal({
  children,
  effect = 'fadeInUp',
  className,
  once = true,
  amount = 0.15,
  duration = 0.5,
  delay = 0
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={motionVariants[effect]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
