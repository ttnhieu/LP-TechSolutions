import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { MenuType } from '@/shared/constants/menu'

export function useNavigation() {
  const { t } = useTranslation('menu')
  const items = t('items', { returnObjects: true }) as MenuType[]
  const [activeId, setActiveId] = useState('home')
  const { scrollTo } = useScrollToSection()

  const handleClick = (id: string) => {
    setActiveId(id)
    scrollTo(id)
  }

  return {
    items,
    activeId,
    setActiveId,
    handleClick
  }
}
