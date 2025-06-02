import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  date: string;
}

const ProjectCard = ({ title, description, tech, image, liveLink, githubLink, date }: ProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={image} alt={title} />
        <div className={styles.projectOverlay}>
          <div className={styles.projectLinks}>
            {liveLink ? (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            ) : githubLink ? (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
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