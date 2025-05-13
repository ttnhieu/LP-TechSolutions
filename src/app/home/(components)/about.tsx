'use client'
import Reveal from '@/components/animations/reveal'
import { CircleCheckBig, Wind } from 'lucide-react'
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
    <section id="about" className="py-5 md:py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 col-span-1 order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative w-full sm:w-fit">
                <Image
                  alt="about thumb 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/images/aboutThumb_2.png.webp"
                  className="w-full h-[20rem] sm:w-[25rem] sm:h-[28rem] object-cover rounded-2xl"
                />

                <div className="absolute right-3.5 xl:-right-[3.5rem] bottom-[2.5rem] animate-jump">
                  <Image
                    alt="about thumb 2"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/aboutThumb_3.png.webp"
                    className="w-[200px] h-[200px] object-contain rounded-2xl"
                  />
                </div>

                <div className="absolute left-3.5 sm:-left-[3.5rem] top-[2.5rem] py-5 xl:py-10 px-5 bg-primary text-white rounded-2xl text-center bg-gradient-to-tl from-[#4a5aee] to-primary">
                  <h2 className="text-5xl mb-2">10+</h2>
                  <span className="">Year of experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-1 order-1 lg:order-2 overflow-hidden">
            <span className=" inline-flex items-center gap-2 px-4 text-xl text-primary  border-b-1 border-primary capitalize">
              <Wind className="size-5 rotate-180" />
              {t('title')}
              <Wind className="size-5" />
            </span>

            <Reveal effect="fadeInRight" once={false}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {t('sub_title')}
              </h2>
            </Reveal>

            <Reveal effect="fadeInRight" once={false} delay={0.1}>
              <p className="mt-6 text-xl text-foreground/50 text-left">
                {t('content')}
              </p>
            </Reveal>

            <Reveal effect="fadeInRight" once={false} delay={0.2}>
              <div className="mt-8 text-xl">
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
