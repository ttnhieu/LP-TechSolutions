import { motionVariants } from '@/components/animations/motionVariants'
import { motion } from 'framer-motion'

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  effect?: keyof typeof motionVariants
  duration?: number
  delay?: number
}

export const StaggerItem = ({
  children,
  className,
  effect = 'fadeInUp',
  duration = 0.5,
  delay = 0
}: StaggerItemProps) => (
  <motion.div
    className={className}
    variants={motionVariants[effect]}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
)
