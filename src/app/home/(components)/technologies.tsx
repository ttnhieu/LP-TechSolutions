'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { Card, CardContent } from '@/components/ui/card'

import SectionHeader from '@/components/common/section-header'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { StaggerItem } from '@/components/animations/stagger-item'

function TechnologiesSection() {
  const { t } = useTranslation('technologies')

  const items = t('items', {
    returnObjects: true
  }) as {
    title: string
    description: string
    image_url: string
  }[]

  return (
    <section id="technologies" className="py-5 md:py-10 overflow-hidden">
      <div className="container">
        <SectionHeader title={t('title')} namespace="technologies" />

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 justify-center items-center pt-10 md:pt-15">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <StaggerItem
                key={index}
                effect="zoomIn"
                duration={0.8}
                delay={0.3}
              >
                <Card className="border-none shadow-1 hover:-translate-y-2 transition-all ease-in-out duration-300">
                  <CardContent className="p-2 sm:p-4 flex flex-col items-center">
                    <div className="icon">
                      <Image
                        alt={item.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        src={item.image_url}
                        className="object-contain size-7 sm:size-10"
                      />
                    </div>
                    <div
                      className="content wow fadeInUp mt-2 flex-1"
                      data-wow-delay=".2s"
                    >
                      <h4 className="font-medium text-sm">{item.title}</h4>
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

export default TechnologiesSection
