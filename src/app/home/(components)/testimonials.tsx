'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Wind } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

function TestimonialsSection() {
  const { t } = useTranslation('testimonials')

  const items = t('items', { returnObjects: true }) as {
    name: string
    image_url: string
    job: string
    content: string
  }[]

  return (
    <section id="testimonials" className="py-5 md:py-10 overflow-hidden">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between items-center text-center lg:text-left gap-4">
          <div className="lg:max-w-[510px] ">
            <span className="inline-flex items-center gap-2 px-4 text-sm md:text-xl text-primary border-b-1 border-primary mb-0 md:mb-2 capitalize">
              <Wind className="size-5 rotate-180" />
              {t('title')}
              <Wind className="size-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              {t('sub_title')}
            </h2>
          </div>

          <p className="text-gray-400 dark:text-gray-300/60 lg:max-w-[410px]">
            {t('description')}
          </p>
        </div>

        <div className="flex gap-4 w-fit animate-scrollX pt-10 md:pt-15">
          {items.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-1 w-[20rem] sm:w-[30rem]"
            >
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="quote"
                      className="lucide lucide-quote h-8 w-8 text-[#ccf6eb] fill-[#ccf6eb] dark:text-[#23404a] dark:fill-[#23404a] rotate-180"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 end-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="quote"
                      className="lucide lucide-quote h-8 w-8 text-[#ccf6eb] fill-[#ccf6eb] dark:text-[#23404a] dark:fill-[#23404a]"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-400 dark:text-gray-300/60 line-clamp-3 sm:line-clamp-none">
                    {item.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
