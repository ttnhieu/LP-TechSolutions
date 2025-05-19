'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { Card, CardContent } from '@/components/ui/card'

import SectionHeader from '@/components/common/section-header'
import BaseSwiper from '@/components/carousel/base-swiper'
import { QuoteIcon } from 'lucide-react'

function TestimonialsSection() {
  const { t } = useTranslation('testimonials')

  const items = t('items', { returnObjects: true }) as {
    name: string
    image_url: string
    job: string
    content: string
  }[]

  return (
    <section
      id="testimonials"
      className="py-5 md:py-10 overflow-hidden bg-gradient-1 relative"
    >
      <div className="container relative">
        <SectionHeader
          align="left"
          layout="horizontal"
          title={t('title')}
          namespace="testimonials"
          description={t('description')}
        />

        <div className="pt-10 md:pt-15">
          <BaseSwiper>
            {items.map((item, index) => (
              <Card key={index} className="border shadow-none max-h-[12.5rem]">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-0.5 rounded-full border-2">
                      <Image
                        alt="Blog"
                        width={0}
                        height={0}
                        sizes="100vw"
                        src={item.image_url}
                        className="w-[2.3rem] h-[2.3rem] sm:w-[3rem] sm:h-[3rem] object-contain rounded-full"
                      />
                    </div>
                    <div className="flex-auto">
                      <p className="md:text-xl text-lg font-semibold leading-6 sm:leading-[140%]">
                        {item.name}
                      </p>
                      <p className="truncate text-gray-500 dark:text-gray-200/70 text-sm">
                        {item.job}
                      </p>
                    </div>
                  </div>

                  <div className="relative px-12">
                    <div className="absolute -top-2 start-0">
                      <QuoteIcon className="size-6 text-[#ccf6eb] fill-[#ccf6eb] dark:text-[#23404a] dark:fill-[#23404a] rotate-180" />
                    </div>
                    <div className="absolute -bottom-2 end-0">
                      <QuoteIcon className="size-6 text-[#ccf6eb] fill-[#ccf6eb] dark:text-[#23404a] dark:fill-[#23404a]" />
                    </div>
                    <p className="text-gray-400 dark:text-gray-300/60 line-clamp-3">
                      {item.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </BaseSwiper>
        </div>
      </div>

      <div className="shape3 absolute left-0 bottom-0 -z-10">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          alt="CircleShape1_3"
          src="/images/shapes/shape_circle_lines.png"
          className="w-[20rem] lg:w-[25rem] h-auto object-contain"
        />
      </div>

      <div className="shape3 absolute left-0 bottom-0 -z-10">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          alt="CircleShape1_3"
          src="/images/shapes/bubbles_dark.svg"
          className="w-[20rem] lg:w-[30rem] h-auto object-contain animate-spin-slow"
        />
      </div>
    </section>
  )
}

export default TestimonialsSection
