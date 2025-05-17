import { Variants } from 'framer-motion'

export const motionVariants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0
    }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0
    }
  },
  bounceInUp: {
    hidden: {
      opacity: 0,
      y: 300
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', // mô phỏng độ nảy.
        stiffness: 400, // độ cứng của lò xo, càng cao càng bật mạnh.
        damping: 20 // độ giảm xóc, càng thấp thì càng nảy lâu.
      }
    }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0
    }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0
    }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1
    }
  }
}
