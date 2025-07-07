import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import en from './locales/en/common.json';
import es from './locales/es/common.json';

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageTag.split('-')[0],
  fallbackLng: 'en',
  resources: {
    en: { common: en },
    es: { common: es },
  },
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
