import styles from './TechStack.module.css';
import { techStackData } from '../data/techStackData';

const TechStack = () => {
  return (
    <section className={styles.techStack}>
      <h2>Technical Skills</h2>
      
      {/* Main Development Skills */}
      <div className={styles.mainSkills}>
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
        </div>

      {/* Additional Skills */}
      <div className={styles.additionalSkills}>
        <h3>Additional Competencies</h3>
        <div className={styles.skillGroups}>
          <div className={styles.skillGroup}>
            <div className={styles.skillGroupHeader}>
              <span className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128m0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              </span>
              <h4>Design Skills</h4>
            </div>
            <div className={styles.compactTechList}>
            {techStackData.design.map((tech, index) => (
                <div key={`design-${index}`} className={styles.compactTechItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>

          <div className={styles.skillGroup}>
            <div className={styles.skillGroupHeader}>
              <span className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </span>
              <h4>Development Tools</h4>
            </div>
            <div className={styles.compactTechList}>
            {techStackData.tools.map((tech, index) => (
                <div key={`tools-${index}`} className={styles.compactTechItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>

          <div className={styles.skillGroup}>
            <div className={styles.skillGroupHeader}>
              <span className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </span>
              <h4>Methodologies & Best Practices</h4>
            </div>
            <div className={styles.compactTechList}>
            {techStackData.methodologies.map((tech, index) => (
                <div key={`methodologies-${index}`} className={styles.compactTechItem}>
                {tech}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 