'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Globe } from 'lucide-react'

import { Button } from '@/components/ui/button'

import AvatarDropdown from '@/components/common/avatar-dropdown'
import ThemeToggle from '@/components/common/theme-toggle'

import MenuList from './menu-list'
import MenuDrawer from './menu-drawer'

function Header() {
  return (
    <>
      <header
        className={`flex sticky top-0 z-40 bg-background h-16 shrink-0 items-center gap-2 border-b `}
      >
        <nav
          className={`flex items-center justify-between w-full container px-4 m-auto sticky top-0`}
          aria-label="Global"
        >
          <div className="header-start flex lg:flex-1">
            <Link
              data-slot="start"
              href="/"
              className="-m-1.5 p-1.5 flex items-center gap-3 text-primary"
            >
              <span className="sr-only">Your Company</span>

              <Image
                src="/logo-dark.png"
                alt="logo"
                width="32"
                height="32"
                className="block dark:hidden"
              />

              <Image
                src="/logo.png"
                alt="logo"
                width="32"
                height="32"
                className="hidden dark:block"
              />
              <span className="hidden xl:block text-2xl font-leckerli text-[#555] dark:text-foreground">
                Booking
              </span>
            </Link>
          </div>

          <div className="header-middle">
            <div data-slot="middle" className="hidden lg:block">
              <MenuList />
            </div>
          </div>

          <div className="header-end flex flex-1 justify-end">
            <div data-slot="end" className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer rounded-full"
              >
                <Globe className="size-5" />
                <span className="sr-only">Language</span>
              </Button>

              <ThemeToggle />

              <AvatarDropdown />

              <MenuDrawer />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
