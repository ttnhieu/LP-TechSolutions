'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { StaggerContainer } from '@/components/animations/stagger-container'
import { StaggerItem } from '@/components/animations/stagger-item'
import SectionHeader from '@/components/common/section-header'

function OptimizationsSection() {
  const { t } = useTranslation('optimizations')

  const contentLeft = t('items_left', {
    returnObjects: true
  }) as {
    title: string
    description: string
    image_url: string
  }[]

  const contentRight = t('items_right', {
    returnObjects: true
  }) as {
    title: string
    description: string
    image_url: string
  }[]

  return (
    <section
      id="optimizations"
      className="py-5 md:py-10 relative overflow-hidden bg-gradient-1"
    >
      <div className="container relative">
        <SectionHeader title={t('title')} namespace="optimizations" />

        <div className="mx-auto max-w-lg lg:max-w-5xl">
          <div className="grid lg:grid-cols-2 justify-center items-center gap-4 lg:gap-6 pt-10 md:pt-15">
            <StaggerContainer className="space-y-4">
              {contentLeft.map((item, index) => (
                <StaggerItem
                  key={index}
                  effect={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                >
                  <div className="flex items-center gap-4">
                    <div className="icon">
                      <Image
                        alt={item.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        src={item.image_url}
                        className="object-cover w-[3.5rem] h-[3.5rem] md:w-20 md:h-20"
                      />
                    </div>
                    <div
                      className="content wow fadeInUp mt-2 flex-1"
                      data-wow-delay=".2s"
                    >
                      <h4 className="font-medium text-xl leading-5">
                        {item.title}
                      </h4>
                      <p className="text-md leading-[1.3rem] mt-2 text-foreground/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <StaggerContainer className="space-y-4">
              {contentRight.map((item, index) => (
                <StaggerItem
                  key={index}
                  effect={index % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'}
                >
                  <div className="flex items-center gap-4">
                    <div className="icon">
                      <Image
                        alt={item.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        src={item.image_url}
                        className="object-cover w-[3.5rem] h-[3.5rem] md:w-20 md:h-20"
                      />
                    </div>
                    <div
                      className="content wow fadeInUp mt-2 flex-1"
                      data-wow-delay=".2s"
                    >
                      <h4 className="font-medium text-xl leading-5">
                        {item.title}
                      </h4>
                      <p className="text-md leading-[1.3rem] mt-2 text-foreground/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>

      <div className="shape3 absolute -top-[10rem] -right-[10rem] -z-10">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          alt="optimization shape"
          src="/images/shapes/circle1_3.png"
          className="object-cover w-[32rem] h-[32rem] sm:w-[40rem] sm:h-[40rem] xl:w-[35rem] xl:h-[35rem]"
        />
      </div>
    </section>
  )
}

export default OptimizationsSection
