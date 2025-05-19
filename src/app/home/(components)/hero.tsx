'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { CreditCard, MoveRight, RefreshCcw } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { ParticlesComponent } from '@/components/background/particles'
import Reveal from '@/components/animations/reveal'
import TranslatedText from '@/components/common/translate-text'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { cn } from '@/lib/utils'

function HeroSection() {
  const { t: tHero } = useTranslation('hero')
  const { t: tCommon } = useTranslation('common')
  const { scrollTo } = useScrollToSection()

  const onViewPortfolio = (id: string) => {
    scrollTo(id)
  }

  return (
    <section id="hero" className="relative">
      <div
        className={cn(
          'relative pt-[2rem] md:pt-[5rem] lg:pt-[10rem] pb-[4rem] md:pb-[6rem] lg:pb-[15rem] flex items-start lg:items-center justify-center'
        )}
      >
        <div className="container relative z-10">
          <div className="relative isolate grid grid-cols-12 gap-8 sm:gap-10 overflow-hidden">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 lg:gap-10">
              <Reveal effect="fadeInDown" once={true}>
                <div className="flex w-fit relative bg-primary/20 dark:bg-primary/30 rounded-full text-sm xl:text-md">
                  <div className="intro-sub_title flex items-center justify-between gap-2 p-1.5">
                    <span className="bg-white dark:bg-primary rounded-full px-3 py-1 font-medium">
                      {tHero('sub_title_1')}
                    </span>
                    <span className="text-primary dark:text-white/80">
                      {tHero('sub_title_2')}
                    </span>
                    <Image
                      alt="hero fire icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/images/icons/fire.svg"
                      className="object-cover w-[1rem] h-[1rem]"
                    />
                  </div>
                </div>
              </Reveal>

              <div className="">
                <Reveal effect="fadeInLeft" once={true} duration={0.8}>
                  <h1 className="font-semibold tracking-tight text-foreground text-4xl lg:text-6xl">
                    <TranslatedText i18nKey="title" ns="hero" />
                  </h1>
                </Reveal>

                <Reveal effect="fadeInLeft" once={true} delay={0.3}>
                  <p className="mt-8 font-medium text-foreground/80 xl:text-lg/8">
                    {tHero('content')}
                  </p>
                </Reveal>

                <div className="mt-[2.5rem] lg:mt-[2rem] xl:mt-[3.5rem] flex items-center justify-start gap-x-4 md:gap-x-6">
                  <Reveal effect="fadeInUp" once={true} delay={0.1}>
                    <Button
                      className="h-9 lg:h-[3rem] px-4 md:px-8 rounded-full cursor-pointer text-md btn-effect-2"
                      onClick={() => onViewPortfolio('contact')}
                    >
                      {tCommon('buttons.contact')} <MoveRight />
                    </Button>
                  </Reveal>
                  <Reveal effect="fadeInUp" once={true} delay={0.2}>
                    <Button
                      className="h-9 lg:h-[3rem] px-4 md:px-8 rounded-full cursor-pointer text-md btn-effect-2 text-primary border-primary btn-outlined bg-transparent"
                      variant="outline"
                      onClick={() => onViewPortfolio('portfolio')}
                    >
                      {tCommon('buttons.view_portfolio')} <MoveRight />
                    </Button>
                  </Reveal>
                </div>

                <div className="mt-[3rem] lg:mt-[2rem] xl:mt-[3.5rem] flex items-center justify-start gap-x-4 md:gap-x-6">
                  <Reveal effect="zoomIn" once={true}>
                    <div className="flex gap-2 sm:gap-4 items-center uppercase text-xs sm:text-sm">
                      <span className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary">
                        <RefreshCcw className="size-4" />
                      </span>
                      Free 14 Days Trial
                    </div>
                  </Reveal>
                  <Reveal effect="zoomIn" once={true}>
                    <div className="flex gap-2 sm:gap-4 items-center uppercase text-xs sm:text-sm">
                      <span className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary">
                        <CreditCard className="size-4" />
                      </span>
                      One time payment
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Reveal effect="zoomIn" once={true}>
                <div className="relative">
                  <div className="intro-thumb w-full h-[18rem] sm:h-[37rem] relative z-10">
                    <Image
                      fill
                      priority
                      alt="Hero Thumb"
                      src="/images/illustrations/hero_mockup_2.png"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <ParticlesComponent />

        <div className="absolute left-0 -bottom-[1px] w-full h-auto z-10">
          <Image
            alt="hero shape wave"
            width={0}
            height={0}
            sizes="100vw"
            src="/images/shapes/shape_hero_wave_4.svg"
            className="object-contain w-full h-full dark:hidden block"
          />
          <Image
            alt="hero"
            width={0}
            height={0}
            sizes="100vw"
            src="/images/shapes/shape_hero_wave_4_dark.svg"
            className="object-contain w-full h-full hidden dark:block"
          />
        </div>

        <div className="absolute left-0 bottom-0 w-full h-auto -z-10 dark:opacity-15 opacity-10">
          <Image
            alt="hero"
            width={0}
            height={0}
            sizes="100vw"
            src="/images/shapes/shape_hero_abstract_5.svg"
            className="object-contain w-full h-full scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
