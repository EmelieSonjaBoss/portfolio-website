import { useTranslation } from 'react-i18next';
import styles from './LanguageToggle.module.css';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sv' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLanguage = i18n.language;
  const nextLanguage = currentLanguage === 'en' ? 'SV' : 'EN';

  return (
    <button 
      onClick={toggleLanguage} 
      className={styles.languageToggle}
      aria-label={`${t('languageToggle')}: ${currentLanguage === 'en' ? 'English' : 'Svenska'}`}
      title={`Switch to ${nextLanguage}`}
    >
      {nextLanguage}
    </button>
  );
};

export default LanguageToggle; 