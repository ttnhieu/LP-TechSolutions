'use client'
import { useTranslation } from 'react-i18next'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'

export default function LanguagesDropdown() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="hover:bg-transparent p-0 transition-all duration-300 ease-in-out"
      >
        <Button variant="ghost" size="icon" className="focus-visible:ring-0 ">
          <Avatar className=" w-7 h-7">
            <AvatarImage
              src={
                i18n.language === 'en'
                  ? '/images/icons/flag_usa.svg'
                  : '/images/icons/flag_vietnam.svg'
              }
              alt="flag_vietnam"
            />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => changeLanguage('vi')}
          >
            <Avatar className=" w-6 h-6">
              <AvatarImage
                src="/images/icons/flag_vietnam.svg"
                alt="flag_vietnam"
              />
            </Avatar>
            Vietnamese
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => changeLanguage('en')}
          >
            <Avatar className=" w-6 h-6">
              <AvatarImage src="/images/icons/flag_usa.svg" alt="flag_usa" />
            </Avatar>
            English
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
