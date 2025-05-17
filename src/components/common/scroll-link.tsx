'use client'
import { Link } from 'react-scroll'

import { cn } from '@/lib/utils'

interface ScrollLinkProps {
  to: string
  label: string
  offset?: number
  duration?: number
  className?: string
  activeClassName?: string
  onClick?: () => void
}

export default function ScrollLink({
  to,
  label,
  offset = -64,
  duration = 500,
  className,
  activeClassName = 'text-primary',
  onClick
}: ScrollLinkProps) {
  return (
    <Link
      to={to}
      spy={true}
      isDynamic={true}
      smooth={true}
      offset={offset}
      duration={duration}
      activeClass={activeClassName}
      onClick={onClick}
      className={cn('cursor-pointer transition-colors', className)}
    >
      {label}
    </Link>
  )
}
