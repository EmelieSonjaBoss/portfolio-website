import storyshelf from '../assets/images/storyshelf.jpg';
import quiz from '../assets/images/quiz.jpg'
import api from '../assets/images/api.jpg'
import nemo from '../assets/images/nemo.jpg'
import munkar from '../assets/images/munkar2.jpg'
import packingList from '../assets/images/packlistan.jpg'

export interface Project {
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  category: string;
  date: string;
}

export const projectsData: Project[] = [
  {
    titleKey: "projects.packingList.title",
    descriptionKey: "projects.packingList.description",
    tech: ["React", "TypeScript", "PWA", "Vite", "CSS"],
    image: packingList,
    liveLink: "https://emeliesonjaboss.github.io/packing-list/",
    githubLink: "https://github.com/EmelieSonjaBoss/packing-list",
    category: "Frontend",
    date: "June 2025"
  },
  {
    titleKey: "projects.storyshelf.title",
    descriptionKey: "projects.storyshelf.description",
    tech: ["TypeScript", "Vue", "Node.js", "MongoDB", "Express", "JWT", "Pinia", "CORS", "Axios", "Vite", "Mongoose"],
    image: storyshelf,
    liveLink: "https://storyshelf-client.vercel.app/",
    githubLink: "https://github.com/EmelieSonjaBoss/storyshelf",
    category: "Full-Stack",
    date: "May 2025"
  },
  {
    titleKey: "projects.quiz.title",
    descriptionKey: "projects.quiz.description",
    tech: ["Vite", "TypeScript", "SASS", "HTML", "CSS"],
    image: quiz,
    liveLink: "https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-king-edward/",
    category: "Frontend",
    date: "January 2025"
  },
  {
    titleKey: "projects.api.title",
    descriptionKey: "projects.api.description",
    tech: ["TypeScript", "Node.js", "Express", "MySQL"],
    image: api,
    githubLink: "https://github.com/EmelieSonjaBoss/api-development-assignment-1",
    category: "Backend",
    date: "April 2025"
  },
  {
    titleKey: "projects.nemo.title",
    descriptionKey: "projects.nemo.description",
    tech: ["JavaScript", "Vite", "Vue", "SASS", "HTML", "CSS"],
    image: nemo,
    liveLink: "https://medieinstitutet.github.io/fed24d-grafiska-verktyg-clownfiskarna/",
    category: "Frontend",
    date: "March 2025"
  },
  {
    titleKey: "projects.donutShop.title",
    descriptionKey: "projects.donutShop.description",
    tech: ["JavaScript", "SASS", "HTML", "CSS"],
    image: munkar,
    liveLink: "https://medieinstitutet.github.io/fed24d-js-intro-inl-1-webshop-EmelieSonjaBoss/",
    category: "Frontend",
    date: "December 2024"
  }
]; 