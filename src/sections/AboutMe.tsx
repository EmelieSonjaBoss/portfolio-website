import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const { t } = useTranslation();
  const mainTextRef = useRef<HTMLParagraphElement>(null);
  const highlightRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const [mainTextVisible, setMainTextVisible] = useState(false);
  const [highlightsVisible, setHighlightsVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === mainTextRef.current && entry.isIntersecting) {
            setMainTextVisible(true);
          }
          highlightRefs.forEach((ref, idx) => {
            if (entry.target === ref.current && entry.isIntersecting) {
              setHighlightsVisible((prev) => {
                const updated = [...prev];
                updated[idx] = true;
                return updated;
              });
            }
          });
        });
      },
      { threshold: 0.3 }
    );
    if (mainTextRef.current) observer.observe(mainTextRef.current);
    highlightRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => {
      if (mainTextRef.current) observer.unobserve(mainTextRef.current);
      highlightRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className={styles.aboutMe}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <p
            ref={mainTextRef}
            className={`${styles.mainText} ${styles.fadeInUp} ${mainTextVisible ? styles.visible : ''}`}
          >
            {t('aboutmaintext')}
          </p>
        </div>
        <div className={styles.highlights}>
          <div
            ref={highlightRefs[0]}
            className={`${styles.highlight} ${styles.fadeInUp} ${highlightsVisible[0] ? styles.visible : ''}`}
          >
            <span className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12H3V5.25" />
              </svg>
            </span>
            <p>{t('abouthighlight1')}</p>
          </div>
          <div
            ref={highlightRefs[1]}
            className={`${styles.highlight} ${styles.fadeInUp} ${highlightsVisible[1] ? styles.visible : ''}`}
          >
            <span className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
            </span>
            <p>{t('abouthighlight2')}</p>
          </div>
          <div
            ref={highlightRefs[2]}
            className={`${styles.highlight} ${styles.fadeInUp} ${highlightsVisible[2] ? styles.visible : ''}`}
          >
            <span className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
            </span>
            <p>{t('abouthighlight3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 