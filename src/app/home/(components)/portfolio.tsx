'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'

import BaseLightBox from '@/components/gallery/lightbox'
import SectionHeader from '@/components/common/section-header'

import { cn } from '@/lib/utils'
import { GalleryInterface } from '@/shared/interfaces/Gallery'
import { PorfolioInterface } from '@/shared/interfaces/Porfolio'

// interface TabInterface {
//   label: string
//   value: string
// }

function PortfolioSection() {
  const { t } = useTranslation('portfolio')
  const [open, setOpen] = useState(false)
  const [slides, setSlides] = useState<GalleryInterface[]>([])
  const [selectedType, setSelectedType] = useState<string>('all')

  const items = t('items', { returnObjects: true }) as PorfolioInterface[]
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

  // const handleClickType = (item: TabInterface) => {
  //   setSelectedType(item.value)
  // }

  const handleOpenLightbox = (itemIndex: number) => {
    const selected = filteredList[itemIndex]
    setSlides(selected.gallery)
    setOpen(true)
  }
  return (
    <section id="portfolio" className="py-5 md:py-10 relative overflow-hidden">
      <div className="container relative">
        <div className="flex lg:flex-row flex-col justify-between lg:items-end gap-4">
          <SectionHeader
            align="left"
            title={t('title')}
            namespace="portfolio"
            subTitleRevealProps={{
              effect: 'fadeInLeft'
            }}
          />

          {/*
          // MENU
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap justify-center -mb-px text-sm text-center"
              id="default-styled-tab"
              role="tablist"
            >
              {Array.isArray(tabs) &&
                tabs.map((item, index) => (
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
          </div> */}
        </div>
        <AnimatePresence>
          <motion.div
            key={selectedType}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 md:pt-15"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {filteredList.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'aspect-[16/9] w-full overflow-hidden rounded-lg relative group cursor-pointer',
                  "after:bg-linear-to-b after:from-[#00000024] after:to-[#0000005c] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:content-['']"
                )}
                onClick={() => handleOpenLightbox(index)}
              >
                <Image
                  fill
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  /** 1. ≤ 640px Ảnh sẽ chiếm toàn bộ chiều rộng viewport → 100vw (vì lưới grid-cols-1)
                   * ≤ 1024px Ảnh chiếm 1/2 chiều rộng viewport → 50vw. (vì lưới sm:grid-cols-2)
                   * > 1024px Ảnh chiếm 1/3 chiều rộng viewport → 33vw (vì lưới lg:grid-cols-3).
                   */
                />
                <div className="portfolio-card-overlay w-full absolute top-0 h-0 invisible bg-[#070b106e] group-hover:h-full group-hover:visible transition-all duration-500"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-[10rem] invisible px-4 sm:px-6 py-4 rounded-lg bg-primary/50 backdrop-blur-sm w-[15rem]  group-hover:bottom-[20px] group-hover:visible transition-all duration-500">
                  <span className="text-white/90 text-sm">
                    {getTypeLabel(item.type)}
                  </span>
                  <h3 className="text-white text-lg truncate">{item.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <BaseLightBox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
        />
      </div>
    </section>
  )
}

export default PortfolioSection
