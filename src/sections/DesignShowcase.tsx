import styles from './DesignShowcase.module.css';

interface DesignProject {
  title: string;
  description: string;
  images: string[];
  figmaLink: string;
}

const designProjects: DesignProject[] = [
  {
    title: "Fikafinder",
    description: "UX/UI design for a café discovery application",
    images: [], // We'll add the image imports once you have the screenshots
    figmaLink: "" // Add your Figma link here
  },
  {
    title: "Rädda Resten",
    description: "UX/UI design for a food waste reduction app",
    images: [], // We'll add the image imports once you have the screenshots
    figmaLink: "" // Add your Figma link here
  }
];

const DesignShowcase = () => {
  return (
    <section className={styles.designShowcase}>
      <h2>Design Work</h2>
      <p className={styles.subtitle}>Additional UX/UI Design Projects</p>
      <div className={styles.projectsContainer}>
        {designProjects.map((project, index) => (
          <div key={index} className={styles.designProject}>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className={styles.figmaLink}>
                View in Figma
              </a>
            </div>
            <div className={styles.imageScroll}>
              {project.images.map((image, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={image} 
                  alt={`${project.title} design ${imgIndex + 1}`} 
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