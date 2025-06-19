import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './DesignShowcase.module.css';
import fika1 from '../assets/images/fika1.jpg';
import fika2 from '../assets/images/fika2.jpg';
import fika3 from '../assets/images/fika3.jpg';
import fika4 from '../assets/images/fika4.jpg';
import fika5 from '../assets/images/fika5.jpg';
import rest1 from '../assets/images/rest1.jpg';
import rest2 from '../assets/images/rest2.jpg';
import rest3 from '../assets/images/rest3.jpg';
import rest4 from '../assets/images/rest4.jpg';
import rest5 from '../assets/images/rest5.jpg';

interface DesignProject {
  titleKey: string;
  descriptionKey: string;
  images: string[];
  figmaLink: string;
}

const designProjects: DesignProject[] = [
  {
    titleKey: "designProjects.fikafinder.title",
    descriptionKey: "designProjects.fikafinder.description",
    images: [fika1, fika5, fika2, fika3, fika4],
    figmaLink: "https://www.figma.com/proto/7Zp71DUytHbfHRE0oIpuMR/Fika-Finder?node-id=93-3711&p=f&t=ILD26o72kk9rlShS-1&scaling=min-zoom&content-scaling=fixed&page-id=17%3A3"
  },
  {
    titleKey: "designProjects.raddaResten.title",
    descriptionKey: "designProjects.raddaResten.description",
    images: [rest1, rest2, rest3, rest4, rest5],
    figmaLink: "https://www.figma.com/proto/1N3tOmFaCJwT3YA3pLFx4x/UX-Grupp-7?node-id=257-392&p=f&t=TkthAaH3XlVtFUnz-1&scaling=scale-down&content-scaling=fixed&page-id=215%3A2&starting-point-node-id=257%3A392&show-proto-sidebar=1"
  }
];

const DesignShowcase = () => {
  const { t } = useTranslation();
  const projectRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const [visible, setVisible] = useState([false, false]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          projectRefs.forEach((ref, i) => {
            if (entry.target === ref.current && entry.isIntersecting) {
              setVisible((prev) => {
                if (prev[i]) return prev; // already visible
                const updated = [...prev];
                updated[i] = true;
                return updated;
              });
            }
          });
        });
      },
      { threshold: 0.3 }
    );
    projectRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => {
      projectRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className={styles.designShowcase}>
      <h2>{t('designShowcaseh2')}</h2>
      <p className={styles.subtitle}>{t('designShowcaseSubtitle')}</p>
      <div className={styles.projectsContainer}>
        {designProjects.map((project, index) => (
          <div
            key={index}
            ref={projectRefs[index]}
            className={`${styles.designProject} ${styles.fadeInUp} ${visible[index] ? styles.visible : ''}`}
          >
            <div className={styles.projectInfo}>
              <h3>{t(project.titleKey)}</h3>
              <p>{t(project.descriptionKey)}</p>
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className={styles.figmaLink}>
                {t('designShowcaseFigmaLink')}
              </a>
            </div>
            <div className={styles.imageScroll}>
              {project.images.map((image, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={image} 
                  alt={`${t(project.titleKey)} design ${imgIndex + 1}`} 
                  className={styles.designImage}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignShowcase; 