// // lib/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'vi'],
    debug: false,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18n

// lib/i18n.ts
// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'
// import { resources } from './helpers/loadLocales'

// if (!i18n.isInitialized) {
//   i18n.use(initReactI18next).init({
//     fallbackLng: 'en',
//     lng: 'en',
//     interpolation: { escapeValue: false },
//     resources: resources
//   })
// }

// export default i18n
