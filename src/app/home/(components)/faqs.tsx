'use client'
// import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { ChevronsRight } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'

import { StaggerContainer } from '@/components/animations/stagger-container'
import { StaggerItem } from '@/components/animations/stagger-item'
import SectionHeader from '@/components/common/section-header'

function FaqsSection() {
  const { t } = useTranslation('faqs')

  const items = t('items', { returnObjects: true }) as {
    ques: string
    ans: string
  }[]

  return (
    <section
      id="faq"
      className="pt-5 pb-5 md:pt-10 md:pb-10 relative bg-gradient-1"
    >
      <div className="container relative">
        <SectionHeader title={t('title')} namespace="faqs" />

        <StaggerContainer className="mx-auto max-w-4xl pt-10 md:pt-15 grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <StaggerItem key={index} effect="fadeInUp" delay={0.3}>
                <Collapsible className="bg-[#f1ecff] dark:bg-[#2f294c] rounded-md transition-all duration-300 p-4 md:p-6">
                  <CollapsibleTrigger asChild className="cursor-pointer">
                    <div className="flex items-center justify-between">
                      <h4 className="text-md font-semibold">{item.ques}</h4>
                      <div className="hover:opacity-50">
                        <ChevronsRight className="text-primary" />
                        <span className="sr-only">Toggle</span>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <div className="text-sm/6">{item.ans}</div>
                  </CollapsibleContent>
                </Collapsible>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </div>

      {/* <div className="absolute -z-10 top-0 right-0">
        <Image
          alt="shape_leaf"
          width={0}
          height={0}
          sizes="100vw"
          src="/images/shapes/shape_leaf.png"
          className="w-[15rem] sm:w-[25rem] h-auto object-contain"
        />
      </div> */}
    </section>
  )
}

export default FaqsSection
