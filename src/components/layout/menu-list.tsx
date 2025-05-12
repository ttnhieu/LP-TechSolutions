'use client'

import { Button } from '../ui/button'
import { useNavigation } from '@/hooks/useNavigation'
import { cn } from '@/lib/utils'

export default function MenuList() {
  const { items, activeId, handleClick } = useNavigation()

  return (
    <div className="flex-1 flex lg:gap-4 xl:gap-6">
      {Array.isArray(items) &&
        items.map((menu) => (
          <Button
            key={menu.id}
            variant="ghost"
            className={cn(
              'px-0 btn-effect-1 hover:bg-transparent hover:text-primary',
              menu.id === activeId && 'text-primary'
            )}
            onClick={() => handleClick(menu.id)}
          >
            {menu.title}
          </Button>
        ))}
    </div>
  )
}
