'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ChevronUp, MoonIcon, SunIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function BackToTopButton() {
  const { setTheme, resolvedTheme } = useTheme()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0
      setShowScrollTop(!isAtTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onChangeTheme = () => {
    // Giữ scrollY sau khi đổi theme để tránh scroll xuống mỗi khi thay đổi theme
    const scrollY = window.scrollY
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    setTimeout(() => {
      window.scrollTo({ top: scrollY })
    }, 0)
  }

  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 flex flex-col items-center  rounded-full z-20 transition-all duration-300',
        showScrollTop ? 'bg-[#e6deff] dark:bg-[#252560]' : 'bg-transparent'
      )}
    >
      <button
        type="button"
        className={cn(
          'cursor-pointer w-8 h-8 flex justify-center items-center transition-all duration-300 transform',
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        )}
        onClick={() => onScrollToTop()}
      >
        <ChevronUp
          className="size-4 text-primary dark:text-white/80"
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        className="transition-all rounded-full cursor-pointer h-9 w-9 sm:h-10 sm:w-10 bg-primary text-white flex justify-center items-center z-20"
        onClick={() => onChangeTheme()}
      >
        {resolvedTheme === 'light' ? (
          <MoonIcon className="size-4 sm:size-5" aria-hidden="true" />
        ) : (
          <SunIcon className="size-4 sm:size-5" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}

export default BackToTopButton
