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
  title: string;
  description: string;
  images: string[];
  figmaLink: string;
}

const designProjects: DesignProject[] = [
  {
    title: "Fikafinder",
    description: "UX/UI design for a café discovery application. Group project.",
    images: [fika1, fika5, fika2, fika3, fika4],
    figmaLink: "https://www.figma.com/proto/7Zp71DUytHbfHRE0oIpuMR/Fika-Finder?node-id=93-3711&p=f&t=ILD26o72kk9rlShS-1&scaling=min-zoom&content-scaling=fixed&page-id=17%3A3"
  },
  {
    title: "Rädda Resten",
    description: "UX/UI design for a food waste reduction app. Group project.",
    images: [rest1, rest2, rest3, rest4, rest5],
    figmaLink: "https://www.figma.com/proto/1N3tOmFaCJwT3YA3pLFx4x/UX-Grupp-7?node-id=257-392&p=f&t=TkthAaH3XlVtFUnz-1&scaling=scale-down&content-scaling=fixed&page-id=215%3A2&starting-point-node-id=257%3A392&show-proto-sidebar=1"
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