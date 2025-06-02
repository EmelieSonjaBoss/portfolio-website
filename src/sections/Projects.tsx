import { useState } from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Full-Stack', 'Frontend', 'API'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className={styles.projects}>
      <h2>Featured Projects</h2>
      <div className={styles.projectFilters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterBtn} ${filter === activeFilter ? styles.active : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 