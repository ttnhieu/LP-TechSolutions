import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AlignJustifyIcon } from 'lucide-react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

import { SubMenuItemType, MENU } from '@/shared/constants/menu'

export default function MenuDrawer() {
  const router = useRouter()

  const handleLogout = () => {
    // Call api logout
  }

  const handleRedirect = (item: SubMenuItemType) => {
    router.push(item.url)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden rounded-full cursor-pointer"
        >
          <AlignJustifyIcon className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent className="gap-0">
        <SheetHeader>
          <SheetTitle>
            <Link href="/user" className="flex items-center gap-3 text-primary">
              <span className="sr-only">Your Company</span>
              <Image src="/logo.png" alt="logo" width="32" height="32" />
              <span className="font-medium text-2xl font-leckerli text-[#555] dark:text-foreground">
                Booking
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="sheet-content mt-4">
          <Accordion type="single" collapsible>
            {MENU.map((menu, index) => (
              <AccordionItem
                value={menu.title}
                key={index}
                className="border-none"
              >
                <AccordionTrigger
                  className={`accordin-trigger px-4 py-2.5 text-base font-medium cursor-pointer hover:no-underline hover:bg-primary hover:text-white dark:hover:bg-[#55555559]
                  ${!menu.items.length && 'accordin-caret-hidden'} ${
                    menu.is_active && 'text-primary'
                  }
                `}
                >
                  {menu.title}
                </AccordionTrigger>
                {menu.items.length > 0 && (
                  <AccordionContent>
                    <div className="space-y-1 px-4">
                      {menu.items.map((item, i) => (
                        <Button
                          variant="link"
                          onClick={() => handleRedirect(item)}
                          key={i}
                          className="w-full justify-start hover:no-underline text-base rounded-md font-medium px-3 py-2 hover:bg-primary hover:text-white dark:hover:bg-[#55555559]"
                        >
                          {item.title}
                        </Button>
                      ))}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <SheetFooter className="mt-4">
          <SheetClose asChild>
            <Button type="button" onClick={handleLogout}>
              Logout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
