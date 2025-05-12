'use client'

import { motion } from 'framer-motion'

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const StaggerContainer = ({
  children,
  className
}: StaggerContainerProps) => (
  <motion.div
    className={className}
    variants={container}
    initial="hidden" // Trạng thái ban đầu của animation.
    whileInView="show" // Khi phần tử xuất hiện trong vùng nhìn thấy của viewport, sẽ chuyển sang trạng thái show.
    viewport={{
      once: false, // once: true: animation chỉ xảy ra một lần duy nhất, không lặp lại khi scroll ra vào.
      amount: 0.15 // chỉ cần 15% chiều cao phần tử nằm trong viewport là animation được kích hoạt.
    }}
  >
    {children}
  </motion.div>
)
