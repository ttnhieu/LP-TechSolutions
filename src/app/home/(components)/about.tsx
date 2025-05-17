'use client'
import Reveal from '@/components/animations/reveal'
import SectionHeader from '@/components/common/section-header'
import { CircleCheckBig } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

function AboutSection() {
  const { t } = useTranslation('about')

  const aboutInfoList = t('items', {
    returnObjects: true
  }) as {
    description: string
  }[]

  return (
    <section id="about" className="py-5 md:py-10 bg-gradient-1">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="about-left w-full h-[18rem] md:h-[25rem] relative order-2 lg:order-1">
            <Image
              alt="About Thumb"
              src="/images/illustrations/about_thumb.svg"
              fill
              className="object-contain rounded-2xl"
              priority // Để load sớm ảnh này
            />
          </div>

          <div className="about-right overflow-hidden order-1 lg:order-2">
            <SectionHeader
              align="left"
              title={t('title')}
              namespace="about"
              description={t('description')}
              subTitleRevealProps={{
                effect: 'fadeInRight'
              }}
              descriptionRevealProps={{
                effect: 'fadeInRight',
                delay: 0.1
              }}
            />

            <Reveal effect="fadeInRight" once={true} delay={0.2}>
              <div className="mt-8 text-xl grid grid-cols-1 xl:grid-cols-2 gap-2 m-auto lg:w-full w-fit">
                {Array.isArray(aboutInfoList) &&
                  aboutInfoList.map((item, index) => (
                    <p
                      key={index}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <CircleCheckBig className="size-4 text-primary" />
                      {item.description}
                    </p>
                  ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
