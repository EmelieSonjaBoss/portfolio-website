import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateKey, setAnimateKey] = useState(0);
  const filters = [
    { key: 'All', translation: 'projectsFilterAll' },
    { key: 'Full-Stack', translation: 'projectsFilterFullStack' },
    { key: 'Frontend', translation: 'projectsFilterFrontend' },
    { key: 'Backend', translation: 'projectsFilterBackend' }
  ];

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
      <h2>{t('projectsh2')}</h2>
      <div className={styles.projectFilters}>
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`${styles.filterBtn} ${filter.key === activeFilter ? styles.active : ''}`}
            onClick={() => handleFilterChange(filter.key)}
          >
            {t(filter.translation)}
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