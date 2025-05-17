'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { Card, CardContent } from '@/components/ui/card'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { StaggerItem } from '@/components/animations/stagger-item'
import SectionHeader from '@/components/common/section-header'

function ServicesSection() {
  const { t } = useTranslation('services')

  const services = t('items', { returnObjects: true }) as {
    title: string
    description: string
    image_url: string
  }[]

  return (
    <section id="services" className="pt-0 pb-5 md:pb-10 overflow-hidden">
      <div className="container">
        <SectionHeader title={t('title')} namespace="services" />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 md:pt-15">
          {Array.isArray(services) &&
            services.map((item, index) => (
              <StaggerItem key={index} effect="zoomIn">
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
