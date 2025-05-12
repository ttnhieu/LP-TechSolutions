// app/i18n-provider.tsx
'use client'

import { ReactNode, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Khởi tạo i18n nếu cần
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
