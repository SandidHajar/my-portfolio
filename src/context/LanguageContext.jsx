import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || 'en';

  useEffect(() => {
    document.documentElement.lang = lang;
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.description'));
    }
  }, [lang, t]);

  const toggleLanguage = () => {
    const nextLang = lang.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(nextLang);
  };

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
