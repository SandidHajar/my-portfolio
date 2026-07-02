import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import fr from './fr';

const resources = {
  en: { translation: en },
  fr: { translation: fr }
} as const;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    initAsync: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });
}

export default i18n;
