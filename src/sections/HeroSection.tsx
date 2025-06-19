import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './HeroSection.module.css';
import heroImage from '../assets/images/imagesmall2.jpg';

const HeroSection = () => {
  const { t } = useTranslation();
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTitleVisible(true), 100); // h1
    setTimeout(() => setSubtitleVisible(true), 500); // h2
    setTimeout(() => setDescVisible(true), 900); // h3
  }, []);

  return (
    <section className={styles.heroSection}>
      <img src={heroImage} alt="Hero background" className={styles.heroImage} />
      <div className={styles.heroTextContainer}>
        <h1 className={`${styles.heroTitle} ${styles.slideInRight} ${titleVisible ? styles.visible : ''}`}>EmelieBoss</h1>
        <h2 className={`${styles.slideDownTop} ${subtitleVisible ? styles.visible : ''}`}>{t('heroh2')}</h2>
        <h3 className={`${styles.slideDownTop} ${descVisible ? styles.visible : ''}`}>{`- ${t('heroh3')} -`}</h3>
      </div>
    </section>
  );
};

export default HeroSection; 