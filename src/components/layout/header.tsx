'use client'
// import AvatarDropdown from '@/components/common/avatar-dropdown'
// import ThemeToggle from '@/components/common/theme-toggle'

import MenuList from './menu-list'
import MenuDrawer from './menu-drawer'
import LanguagesDropdown from '../common/languages-dropdown'
import LogoImage from '../common/logo-image'

function Header() {
  return (
    <header
      className={`flex sticky top-0 z-40 bg-background h-16 shrink-0 items-center gap-2 border-b `}
    >
      <nav
        className={`flex items-center justify-between w-full container sticky top-0`}
        aria-label="Global"
      >
        <div className="header-start flex lg:flex-1">
          <LogoImage />
        </div>

        <div className="header-middle">
          <div data-slot="middle" className="hidden lg:block">
            <MenuList />
          </div>
        </div>

        <div className="header-end flex flex-1 justify-end">
          <div data-slot="end" className="flex gap-2">
            <LanguagesDropdown />

            {/* <ThemeToggle /> */}

            {/* <AvatarDropdown /> */}

            <MenuDrawer />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
