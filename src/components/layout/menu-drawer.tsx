import { useState } from 'react'
import { AlignJustifyIcon } from 'lucide-react'
import { scrollSpy } from 'react-scroll'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

import ScrollLink from '@/components/common/scroll-link'
import LogoImage from '@/components/common/logo-image'
import { useMenuItems } from '@/hooks/useMenuItems'
import { cn } from '@/lib/utils'

export default function MenuDrawer() {
  const [open, setOpen] = useState(false)
  const { items } = useMenuItems()

  const handleOpenChange = (val: boolean) => {
    setOpen(val)
    if (val) {
      // Gọi scrollSpy.update() sau 1 tick để chắc chắn DOM render xong
      setTimeout(() => {
        scrollSpy.update()
      }, 100)
    }
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
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
            <LogoImage />
          </SheetTitle>
          <SheetDescription className="sr-only">
            {/* Mô tả nội dung của Sheet, giúp screen reader hiểu */}
            Navigation menu for mobile users.
          </SheetDescription>
        </SheetHeader>
        <div className="sheet-content mt-4">
          <Accordion type="single" collapsible>
            {Array.isArray(items) &&
              items.map((menu, index) => (
                <AccordionItem
                  value={menu.title}
                  key={index}
                  className="border-none p-0 bg-transparent"
                >
                  <ScrollLink
                    to={menu.id}
                    label={menu.title}
                    className={cn(
                      'block w-full rounded-md px-4 py-2.5 text-base font-medium cursor-pointer hover:no-underline hover:bg-primary hover:text-white transition-all duration-300'
                    )}
                    activeClassName="bg-primary text-white dark:bg-primary"
                    onClick={() => setOpen(false)}
                  />
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  )
}
