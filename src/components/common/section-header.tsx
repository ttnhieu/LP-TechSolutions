import { Wind } from 'lucide-react'

import Reveal from '@/components/animations/reveal'
import { RevealConfig } from '@/shared/types/RevealConfig'
import { cn } from '@/lib/utils'
import TranslatedText from './translate-text'

type Align = 'left' | 'center' | 'right'
type Layout = 'vertical' | 'horizontal' // vertical = title/subtitle phía trên, desc phía dưới; horizontal = chia trái phải

type SectionHeaderProps = {
  title: string
  description?: string
  className?: string
  align?: Align
  layout?: Layout
  namespace?: string // thêm namespace
  subTitleRevealProps?: RevealConfig
  descriptionRevealProps?: RevealConfig
}
function SectionHeader({
  title,
  description,
  className,
  align = 'center',
  layout = 'vertical',
  namespace = 'Sub Title',
  subTitleRevealProps,
  descriptionRevealProps
}: SectionHeaderProps) {
  const alignClass = {
    left: 'lg:text-left lg:items-start',
    center: 'text-center items-center',
    right: 'lg:text-right lg:items-end'
  }[align]

  return (
    <div
      className={cn(
        'section-header flex flex-col gap-6 lg:gap-8',
        layout === 'horizontal' ? 'lg:flex-row lg:justify-between' : '',
        className
      )}
    >
      <div
        className={cn(
          'flex flex-col text-center items-center gap-2 sm:gap-0',
          alignClass
        )}
      >
        <span className="inline-flex items-center gap-2 px-4 text-sm md:text-xl text-primary border-b-1 border-primary capitalize">
          <Wind className="size-5 rotate-180" />
          {title}
          <Wind className="size-5" />
        </span>
        <Reveal {...subTitleRevealProps}>
          <h2 className="leading-6 md:leading-normal text-2xl sm:text-3xl md:text-4xl font-semibold ">
            {/* {subTitle} */}
            <TranslatedText i18nKey="sub_title" ns={namespace} />
          </h2>
        </Reveal>
      </div>
      {description && (
        <Reveal {...descriptionRevealProps}>
          <p
            className={cn(
              'text-md lg:text-xl text-foreground/50 w-full lg:max-w-[25rem] text-center lg:text-left'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}

export default SectionHeader
