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
          <div className="grid grid-cols-12 gap-4 lg:gap-6 justify-center items-center pt-10 md:pt-15">
            <div className="col-span-12 xl:col-span-6">
              <StaggerContainer className="flex flex-col gap-4">
                {Array.isArray(contentLeft) &&
                  contentLeft.map((item, index) => (
                    <StaggerItem
                      className="flex items-center gap-4"
                      key={item.title}
                      effect={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                    >
                      <div className="icon">
                        <Image
                          alt=""
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
                    </StaggerItem>
                  ))}
              </StaggerContainer>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <StaggerContainer className="flex flex-col gap-4">
                {Array.isArray(contentRight) &&
                  contentRight.map((item, index) => (
                    <StaggerItem
                      className="flex items-center gap-4"
                      key={item.title}
                      effect={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                    >
                      <div className="icon">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt={item.title}
                          src={item.image_url}
                          className="object-cover w-[3.5rem] h-[3.5rem] md:w-20 md:h-20"
                        />
                      </div>
                      <div
                        className="content wow fadeInUp mt-2 flex-1"
                        data-wow-delay=".2s"
                      >
                        <h4 className="font-medium text-lg sm:text-xl leading-5">
                          {item.title}
                        </h4>
                        <p className="text-sm sm:text-md leading-[1.3rem] mt-2 text-foreground/50">
                          {item.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="shape3 absolute -top-[10rem] -right-[10rem] -z-10">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          alt="CircleShape1_3"
          src="/images/shapes/circle1_3.png"
          className="object-cover w-[32rem] h-[32rem] sm:w-[40rem] sm:h-[40rem] xl:w-[35rem] xl:h-[35rem]"
        />
      </div>
    </section>
  )
}

export default OptimizationsSection
