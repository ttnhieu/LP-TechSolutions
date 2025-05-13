'use client'
import Image from 'next/image'
import { Wind } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Card, CardContent } from '@/components/ui/card'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { StaggerItem } from '@/components/animations/stagger-item'
import Reveal from '@/components/animations/reveal'

function ServicesSection() {
  const { t } = useTranslation('services')

  const services = t('items', { returnObjects: true }) as {
    title: string
    description: string
    image_url: string
  }[]

  return (
    <section
      id="services"
      className="pt-0 pb-5 md:pb-10 relative overflow-hidden"
    >
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 px-4 text-sm md:text-xl text-primary border-b-1 border-primary mb-0 md:mb-2 capitalize">
            <Wind className="size-5 rotate-180" />
            {t('title')}
            <Wind className="size-5" />
          </span>
          <Reveal effect="fadeInUp" once={true}>
            <h2 className="leading-5 md:leading-normal text-2xl sm:text-3xl md:text-4xl font-semibold ">
              {t('sub_title')}
            </h2>
          </Reveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 md:pt-15">
          {Array.isArray(services) &&
            services.map((item, index) => (
              <StaggerItem key={index} className="" effect="zoomIn">
                <Card className="border-none shadow-1 hover:-translate-y-2 transition-all ease-in-out duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col items-center gap-4">
                      <Image
                        alt={item.title}
                        width={70}
                        height={70}
                        src={item.image_url}
                        className="object-cover"
                      />
                      <div className="text-center mt-2">
                        <h5 className="font-bold text-lg leading-5">
                          {item.title}
                        </h5>
                        <p className="text-sm mt-2 text-foreground/50">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default ServicesSection
