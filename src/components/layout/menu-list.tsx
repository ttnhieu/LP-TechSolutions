'use client'

import ScrollLink from '@/components/common/scroll-link'
import { useMenuItems } from '@/hooks/useMenuItems'
import { cn } from '@/lib/utils'

export default function MenuList() {
  const { items } = useMenuItems()

  return (
    <div className="flex-1 flex lg:gap-4 xl:gap-6">
      {Array.isArray(items) &&
        items.map((menu) => (
          <ScrollLink
            key={menu.id}
            to={menu.id}
            label={menu.title}
            className={cn(
              'px-0 text-sm font-medium btn-effect-1 hover:bg-transparent hover:text-primary'
            )}
            activeClassName="text-primary"
          />
        ))}
    </div>
  )
}
