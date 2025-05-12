'use client'
import { CheckIcon, Wind } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Reveal from '@/components/animations/reveal'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { StaggerItem } from '@/components/animations/stagger-item'

function PricingSection() {
  const { t } = useTranslation('pricing')
  const { t: tCommon } = useTranslation('common')

  const items = t('items', { returnObjects: true }) as {
    id: string
    name: string
    href: string
    price: number
    billing_cycle: string
    description: string
    features: string[]
    featured: boolean
  }[]

  return (
    <section id="pricing" className="py-5 md:py-10 relative">
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

        <StaggerContainer className="mx-auto max-w-lg lg:max-w-4xl pt-10 md:pt-15 grid grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:grid-cols-2">
          {items.map((tier) => (
            <StaggerItem key={tier.id} className="" effect="zoomIn">
              <Card
                key={tier.id}
                className={cn(
                  tier.featured
                    ? 'border-none bg-primary/10 rounded-xl shadow-xl'
                    : 'shadow-none rounded-xl sm:rounded-b-none sm:border-b-0 sm:border-l lg:rounded-r-none lg:border-r-0 lg:border-b lg:rounded-l-xl'
                )}
              >
                <CardContent className={cn('p-5 sm:p-10 ')}>
                  <h3
                    id={tier.id}
                    className={'text-base/7 font-semibold text-primary'}
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-4 flex items-baseline gap-x-2">
                    <span
                      className={cn(
                        'text-4xl sm:text-5xl font-semibold tracking-tight text-foreground'
                      )}
                    >
                      ${tier.price}
                    </span>
                    <span
                      className={cn(
                        tier.featured
                          ? 'text-foreground/35'
                          : 'text-foreground/40',
                        'text-base'
                      )}
                    >
                      /{tier.billing_cycle}
                    </span>
                  </p>
                  <p
                    className={cn(
                      tier.featured
                        ? 'text-foreground/60'
                        : 'text-foreground/70',
                      'mt-6 text-base/7'
                    )}
                  >
                    {tier.description}
                  </p>
                  <ul
                    role="list"
                    className={cn(
                      tier.featured
                        ? 'text-foreground/60'
                        : 'text-foreground/70',
                      'mt-8 space-y-3 text-sm/6 sm:mt-10'
                    )}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className={'h-6 w-5 flex-none text-primary'}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.featured ? undefined : 'outline'}
                    className={cn(
                      'w-full sm:h-10 mt-8 rounded-full btn-effect-2',
                      !tier.featured &&
                        'text-primary border-primary btn-outlined dark:bg-transparent'
                    )}
                  >
                    {tCommon('buttons.get_started_today')}
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default PricingSection
