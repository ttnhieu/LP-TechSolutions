import { AlignJustifyIcon } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import LogoImage from '../common/logo-image'
import { useNavigation } from '@/hooks/useNavigation'

export default function MenuDrawer() {
  const { items, activeId, handleClick } = useNavigation()

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
            <LogoImage />
          </SheetTitle>
        </SheetHeader>
        <div className="sheet-content mt-4">
          <Accordion type="single" collapsible>
            {Array.isArray(items) &&
              items.map((menu, index) => (
                <AccordionItem
                  value={menu.title}
                  key={index}
                  className={cn(
                    'border-none rounded-md accordin-trigger px-4 py-2.5 text-base font-medium cursor-pointer hover:no-underline hover:bg-primary hover:text-white transition-all duration-300',
                    menu.id === activeId &&
                      'bg-primary text-white dark:bg-primary'
                  )}
                  onClick={() => handleClick(menu.id)}
                >
                  {menu.title}
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  )
}
