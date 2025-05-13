'use client'
// import AvatarDropdown from '@/components/common/avatar-dropdown'
// import ThemeToggle from '@/components/common/theme-toggle'

import MenuList from './menu-list'
import MenuDrawer from './menu-drawer'
import LanguagesDropdown from '../common/languages-dropdown'
import LogoImage from '../common/logo-image'

function Header() {
  return (
    <header className={`sticky top-0 z-40 bg-background shrink-0 border-b `}>
      <nav
        className={`container w-full h-16 flex items-center justify-between gap-6`}
        aria-label="Global"
      >
        <div className="header-start">
          <LogoImage />
        </div>

        <div className="header-middle">
          <div data-slot="middle" className="hidden lg:block">
            <MenuList />
          </div>
        </div>

        <div className="header-end">
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
