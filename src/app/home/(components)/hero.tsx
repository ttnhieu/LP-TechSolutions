'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { MoveRight, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Reveal from '@/components/animations/reveal'

function HeroSection() {
  const { t } = useTranslation('landing')
  const { t: tCommon } = useTranslation('common')

  return (
    <section id="hero" className="relative">
      <div
        className={cn(
          'hero-bg-dark bg-[url(/images/bg-g1.webp)] bg-center bg-cove',
          "after:content-[''] after:absolute after:w-full after:h-[2rem] md:after:h-[8rem] xl:after:h-[9rem] dark:after:bg-[url(/images/banner-bg-shape-2-dark.svg)] after:bg-[url(/images/banner-bg-shape-1.svg)] after:z-10 after:left-0 after:bottom-0 after:bg-center after:bg-cover"
        )}
      >
        <div className="container relative z-2">
          <div className="relative isolate grid grid-cols-12 gap-6 lg:gap-8 pt-4 md:pt-[5rem] pb-2 md:pb-[5rem]">
            <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
              <Reveal effect="fadeInDown" once={false}>
                <div className="flex w-fit relative bg-primary/20 dark:bg-primary/30 rounded-full text-sm xl:text-md">
                  <div className="intro-sub_title flex items-center justify-between gap-2 p-1.5">
                    <span className="bg-white dark:bg-primary rounded-full px-3 py-1 font-medium">
                      {t('hero.sub_title_1')}
                    </span>
                    <span className="text-primary dark:text-white/80">
                      {t('hero.sub_title_2')}
                    </span>
                    <Image
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/images/fireIcon.svg"
                      className="object-cover w-[1rem] h-[1rem]"
                    />
                  </div>
                </div>
              </Reveal>

              <div className="">
                <Reveal effect="fadeInLeft" once={false} duration={0.8}>
                  <h1 className="font-semibold tracking-tight text-foreground text-4xl xl:text-7xl">
                    {t('hero.title')}
                  </h1>
                </Reveal>
                <Reveal effect="fadeInLeft" once={false} delay={0.3}>
                  <p className="mt-8 font-medium text-foreground/80 xl:text-lg/8">
                    {t('hero.content')}
                  </p>
                </Reveal>

                <div className="mt-10 mb-4 md:pb-[5rem] flex items-center justify-center sm:justify-start gap-x-4 md:gap-x-6">
                  <Reveal effect="fadeInUp" once={false} delay={0.1}>
                    <Button className="h-10 sm:h-[3rem] px-4 md:px-8 rounded-full cursor-pointer text-md btn-effect-2">
                      {tCommon('buttons.get_started')} <MoveRight />
                    </Button>
                  </Reveal>
                  <Reveal effect="fadeInUp" once={false} delay={0.2}>
                    <Button
                      className="h-10 sm:h-[3rem] px-4 md:px-8 rounded-full cursor-pointer text-md btn-effect-2 text-primary border-primary btn-outlined bg-transparent"
                      variant="outline"
                    >
                      {tCommon('buttons.watch_video')} <Play />
                    </Button>
                  </Reveal>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="intro-thumb relative md:pt-[10rem] lg:pt-[5rem] w-full h-full">
                <div className="thumbShape1 absolute top-0 left-0 z-10 w-full h-full animate-ripple">
                  <Image
                    alt="thumbShape"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/introThumbShape1_1.png"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="thumbShape2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-3/4 h-3/4">
                  <Image
                    alt="thumbShape"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/introThumbShape1_2.png"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <Reveal effect="fadeInRight" once={false}>
                  <Image
                    alt="Blog"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/introThumb1_1.png"
                    className="w-full h-auto object-contain relative z-30"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
