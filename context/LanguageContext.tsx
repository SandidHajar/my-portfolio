'use client';

import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';
import type { Locale } from '../lib/types';

type LanguageContextValue = {
  lang: Locale;
  toggleLanguage: () => void;
  changeLanguage: (newLang: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.startsWith('fr') ? 'fr' : 'en') as Locale;

  useEffect(() => {
    const savedLang = window.localStorage.getItem('portfolio_lang');
    const browserLang = window.navigator.language?.startsWith('fr') ? 'fr' : 'en';
    const initialLang: Locale = savedLang === 'en' || savedLang === 'fr' ? savedLang : browserLang;

    if (i18n.language !== initialLang) {
      void i18n.changeLanguage(initialLang);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const nextLang: Locale = lang === 'fr' ? 'en' : 'fr';
    window.localStorage.setItem('portfolio_lang', nextLang);
    void i18n.changeLanguage(nextLang);
  };

  const changeLanguage = (newLang: Locale) => {
    window.localStorage.setItem('portfolio_lang', newLang);
    void i18n.changeLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
