import { motionVariants } from '@/components/animations/motionVariants'

export type RevealConfig = {
  effect?: keyof typeof motionVariants
  className?: string
  once?: boolean
  amount?: number
  duration?: number
  delay?: number
}
