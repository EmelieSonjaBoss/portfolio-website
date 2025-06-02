import { useState } from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateKey, setAnimateKey] = useState(0);
  const filters = ['All', 'Full-Stack', 'Frontend', 'API'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  // Reset animation key when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setAnimateKey(prev => prev + 1);
  };

  return (
    <section className={styles.projects}>
      <h2>Featured Projects</h2>
      <div className={styles.projectFilters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterBtn} ${filter === activeFilter ? styles.active : ''}`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className={styles.projectsGrid} key={animateKey}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`${index}-${animateKey}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 