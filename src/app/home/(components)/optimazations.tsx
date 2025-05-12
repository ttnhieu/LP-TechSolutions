'use client'
import Reveal from '@/components/animations/reveal'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { StaggerItem } from '@/components/animations/stagger-item'
import { Wind } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

function OptimazationsSection() {
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
      id="optimazation"
      className="py-5 md:py-10 relative overflow-hidden"
    >
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 px-4 text-sm md:text-xl text-primary border-b-1 border-primary mb-0 md:mb-2 capitalize">
            <Wind className="size-5 rotate-180" />
            {t('title')}
            <Wind className="size-5" />
          </span>
          <Reveal effect="fadeInUp" once={false}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">
              {t('sub_title')}
            </h2>
          </Reveal>
        </div>

        <div className=" grid grid-cols-12 gap-8 justify-center items-center pt-10 md:pt-20">
          <div className="col-span-12 xl:col-span-4 flex justify-center">
            <StaggerContainer className="flex flex-col gap-4">
              {contentLeft.map((item, index) => (
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

          <div className="col-span-12 xl:col-span-4 flex justify-center">
            <div
              className="wcu-thumb w-[20rem] xl:w-full relative wow fadeInUp"
              data-wow-delay=".2s"
            >
              <Reveal effect="bounceInUp" once={true}>
                <div
                  className="main-thumb wow bounceInUp relative z-10"
                  data-wow-delay=".6s"
                >
                  <Image
                    alt="thumb"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/wcuThumb1_1.png"
                    className="object-cover w-full h-auto"
                  />
                </div>
              </Reveal>
              <div className="shape w-full absolute top-0 z-0">
                <Reveal effect="zoomIn" once={true} duration={0.6}>
                  <Image
                    alt="shape"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/wcuThumbShape1_1.png"
                    className="object-cover w-full h-auto"
                  />
                </Reveal>
              </div>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-4 flex justify-center">
            <StaggerContainer className="flex flex-col gap-4">
              {contentRight.map((item, index) => (
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
        </div>
      </div>
    </section>
  )
}

export default OptimazationsSection
