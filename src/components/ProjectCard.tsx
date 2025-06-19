import { useTranslation } from 'react-i18next';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  date: string;
}

const ProjectCard = ({ titleKey, descriptionKey, tech, image, liveLink, githubLink, date }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={image} alt={t(titleKey)} />
        <div className={styles.projectOverlay}>
          <div className={styles.projectLinks}>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <h3>{t(titleKey)}</h3>
        <p>{t(descriptionKey)}</p>
        <div className={styles.projectTech}>
          {tech.map((item, index) => (
            <span key={index} className={styles.techTag}>{item}</span>
          ))}
        </div>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default ProjectCard; 