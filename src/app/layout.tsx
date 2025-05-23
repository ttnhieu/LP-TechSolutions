import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import '@/styles/tailwind.css'

import { Toaster } from '@/components/ui/sonner'

import { I18nProvider } from '@/providers/i18n-provider'

import ThemeProvider from '@/components/layout/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import BackToTopButton from '@/components/buttons/back-to-top-buton'
import FloatingButtons from '@/components/buttons/floating-button'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap' // giúp cải thiện hiệu năng tải font.
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      >
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col justify-between">
              <Header />
              <main className="flex-1 min-h-screen">{children}</main>
              <Footer />
            </div>

            <Toaster position="top-right" richColors closeButton />

            <BackToTopButton />
            <FloatingButtons />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
