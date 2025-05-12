'use client'
import Image from 'next/image'
import { Wind } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { StaggerItem } from '@/components/animations/stagger-item'
import Reveal from '@/components/animations/reveal'

function WorkflowSection() {
  const { t } = useTranslation('workflow')

  const items = t('items', { returnObjects: true }) as {
    title: string
    sub_title: string
    description: string
  }[]

  return (
    <section id="workflow" className="py-5 md:py-10 relative overflow-hidden">
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

        <div className="relative mt-10 md:mt-15 xl:pt-[2rem] xl:pb-[2.5rem] 2xl:pb-[3.5rem]">
          <div className="shape absolute top-0 right-0 w-full hidden xl:block">
            <Image
              alt="workflow shape"
              width={0}
              height={0}
              sizes="100vw"
              src="/images/workProcessShape1_1.png"
              className="w-full h-full object-contain"
            />
          </div>

          <StaggerContainer className="grid grid-cols-12 gap-6">
            {items.map((item, index) => (
              <StaggerItem
                className="col-span-12 xl:col-span-4"
                key={index}
                effect={index % 2 === 0 ? 'fadeInDown' : 'fadeInUp'}
              >
                <div
                  className="work-process-box flex flex-col items-center gap-2 max-w-[230px] m-auto text-center style1 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="step font-bold text-xs px-3 py-1.5 bg-primary/15 text-primary w-fit rounded-full">
                    {item.sub_title}
                  </div>
                  <div className="title font-medium text-xl sm:text-2xl">
                    {item.title}
                  </div>
                  <div className="text-md text-foreground/50">
                    {item.description}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection
