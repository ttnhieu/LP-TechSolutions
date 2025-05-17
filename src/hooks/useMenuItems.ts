import { useTranslation } from 'react-i18next'
import { MenuType } from '@/shared/constants/menu'

export function useMenuItems() {
  const { t } = useTranslation('menu')
  const items = t('items', { returnObjects: true }) as MenuType[]

  return {
    items
  }
}
