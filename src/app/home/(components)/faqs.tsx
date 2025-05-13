'use client'
import { useTranslation } from 'react-i18next'
import { ChevronsRight, Wind } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import Reveal from '@/components/animations/reveal'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { StaggerItem } from '@/components/animations/stagger-item'

function FaqsSection() {
  const { t } = useTranslation('faqs')

  const items = t('items', { returnObjects: true }) as {
    ques: string
    ans: string
  }[]

  return (
    <section id="faq" className="pt-5 pb-5 md:pt-10 md:pb-10 relative">
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 px-4 text-sm md:text-xl text-primary border-b-1 border-primary capitalize">
            <Wind className="size-5 rotate-180" />
            {t('title')}
            <Wind className="size-5" />
          </span>
          <Reveal effect="fadeInUp" once={false}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              {t('sub_title')}
            </h2>
          </Reveal>
        </div>

        <StaggerContainer className="mx-auto max-w-4xl pt-10 md:pt-15 grid grid-cols-12 items-start gap-4">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <StaggerItem
                key={index}
                className="col-span-12 lg:col-span-6"
                effect="fadeInUp"
                delay={0.3}
              >
                <Collapsible className="bg-primary/5 dark:bg-primary/10 rounded-md p-4 md:p-6">
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
                    <div className="font-mono text-sm/6">{item.ans}</div>
                  </CollapsibleContent>
                </Collapsible>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default FaqsSection
