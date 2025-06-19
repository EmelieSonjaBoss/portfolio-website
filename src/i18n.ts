import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import svTranslation from './locales/sv/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  sv: {
    translation: svTranslation
  }
};

// Get saved language from localStorage or default to 'en'
const getSavedLanguage = () => {
  try {
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage && (savedLanguage === 'en' || savedLanguage === 'sv') ? savedLanguage : 'en';
  } catch (error) {
    console.warn('Could not access localStorage, using default language');
    return 'en';
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getSavedLanguage(), // Use saved language or default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

// Listen for language changes and save to localStorage
i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem('portfolio-language', lng);
  } catch (error) {
    console.warn('Could not save language preference to localStorage');
  }
});

export default i18n; 