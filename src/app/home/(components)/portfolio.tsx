'use client'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Wind } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '@/lib/utils'
import Reveal from '@/components/animations/reveal'

interface TabInterface {
  label: string
  value: string
}

function PortfolioSection() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const { t } = useTranslation('portfolio')

  const items = t('items', { returnObjects: true }) as {
    id: number
    title: string
    type: string
    href: string
    image_url: string
  }[]

  const tabs = t('tabs', { returnObjects: true }) as {
    label: string
    value: string
  }[]

  const filteredList =
    selectedType === 'all'
      ? items
      : items.filter((item) => item.type === selectedType)

  const getTypeLabel = (type: string) => {
    return tabs.find((item) => item.value === type)?.label
  }

  const handleClickType = (item: TabInterface) => {
    setSelectedType(item.value)
  }
  return (
    <section id="portfolio" className="py-5 md:py-10 relative overflow-hidden">
      <div className="container relative">
        <div className="flex lg:flex-row flex-col justify-between lg:items-end gap-4">
          <div className="lg:max-w-[510px] text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 text-sm md:text-xl text-primary border-b-1 border-primary mb-0 md:mb-2 capitalize">
              <Wind className="size-5 rotate-180" />
              {t('title')}
              <Wind className="size-5" />
            </span>
            <Reveal effect="fadeInLeft" once={false}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {t('sub_title')}
              </h2>
            </Reveal>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap justify-center -mb-px text-sm text-center"
              id="default-styled-tab"
              role="tablist"
            >
              {tabs.map((item, index) => (
                <li className="font-medium" key={index} role="presentation">
                  <button
                    className={cn(
                      'inline-block px-4 py-2 rounded-t-lg border-b-2 border-transparent transition-all duration-300 hover:text-primary hover:border-primary',
                      item.value === selectedType &&
                        ' text-primary border-primary'
                    )}
                    type="button"
                    onClick={() => handleClickType(item)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pt-10 md:pt-15">
          <AnimatePresence mode="wait">
            {filteredList.map((item, index) => (
              <Link
                href={item.href}
                target="_blank"
                key={item.id}
                className={cn(
                  "group rounded-lg relative after:bg-linear-to-b after:from-[#00000024] after:to-[#0000005c] overflow-hidden after:w-full after:h-full after:absolute after:top-0 after:left-0 after:content-['']",
                  [
                    index < 3 && 'col-span-3 lg:col-span-2 h-[15rem]',
                    index >= 3 && 'col-span-3 h-[15rem] lg:h-[20rem]',
                    index === items.length - 1 && 'hidden lg:block'
                  ]
                )}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <Image
                    alt="Portfolio"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={item.image_url}
                    className="w-full h-full object-cover"
                  />
                  <div className="portfolio-card-overlay w-full absolute top-0 h-0 invisible bg-[#070b106e] group-hover:h-full group-hover:visible transition-all duration-500"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-[10rem] invisible px-4 sm:px-6 py-4 rounded-lg bg-primary/50 backdrop-blur-sm w-[15rem]  group-hover:bottom-[20px] group-hover:visible transition-all duration-500">
                    <span className="text-white/90 text-xs">
                      {getTypeLabel(item.type)}
                    </span>
                    <h3 className="text-white text-lg truncate">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
