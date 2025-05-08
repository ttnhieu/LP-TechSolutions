import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'

import { MENU } from '@/shared/constants/menu'
import { useState } from 'react'

export default function MenuList() {
  const [menus, setMenus] = useState(MENU)

  return (
    <Menubar className="border-0 shadow-none">
      {menus.map((menu, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger className="px-2 py-2 hover:text-primary text-sm">
            {menu.id && !menu.items.length ? (
              // <Link href={menu.url}>{menu.title}</Link>
              <span>{menu.title}</span>
            ) : (
              <div className="cursor-pointer flex items-center">
                {menu.title} <ChevronDown className="size-4" />
              </div>
            )}
          </MenubarTrigger>

          {menu.items.length > 0 && ( // Sub menu
            <MenubarContent className="">
              {menu.items.map((item, i) => (
                <MenubarItem key={i} className="text-md px-4 py-2">
                  <Link href={item.url} className="w-full">
                    {item.title}
                  </Link>
                </MenubarItem>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  )
}
