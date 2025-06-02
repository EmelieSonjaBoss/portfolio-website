import styles from './TechStack.module.css';
import { techStackData } from '../data/techStackData';

const TechStack = () => {
  return (
    <section className={styles.techStack}>
      <h2>Technical Skills</h2>
      <div className={styles.stackCategories}>
        <div className={styles.stackCategory}>
          <h3>Frontend Development</h3>
          <div className={styles.techList}>
            {techStackData.frontend.map((tech, index) => (
              <div key={`frontend-${index}`} className={styles.techItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stackCategory}>
          <h3>Backend Development</h3>
          <div className={styles.techList}>
            {techStackData.backend.map((tech, index) => (
              <div key={`backend-${index}`} className={styles.techItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stackCategory}>
          <h3>Design Skills</h3>
          <div className={styles.techList}>
            {techStackData.design.map((tech, index) => (
              <div key={`design-${index}`} className={styles.techItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stackCategory}>
          <h3>Development Tools</h3>
          <div className={styles.techList}>
            {techStackData.tools.map((tech, index) => (
              <div key={`tools-${index}`} className={styles.techItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stackCategory}>
          <h3>Methodologies & Best Practices</h3>
          <div className={styles.techList}>
            {techStackData.methodologies.map((tech, index) => (
              <div key={`methodologies-${index}`} className={styles.techItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 