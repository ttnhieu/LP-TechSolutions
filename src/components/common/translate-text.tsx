import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

type TranslatedTextProps = {
  i18nKey: string
  ns?: string // thêm namespace
  values?: Record<string, string | number>
  highlightClassName?: string
}

const TranslatedText: React.FC<TranslatedTextProps> = ({
  i18nKey,
  values = {},
  ns,
  highlightClassName = 'text-gradient'
}) => {
  const { t } = useTranslation(ns)

  return (
    <Trans
      t={t}
      i18nKey={i18nKey}
      values={values}
      components={{
        highlight: <span className={highlightClassName} />
      }}
    />
  )
}

export default TranslatedText
