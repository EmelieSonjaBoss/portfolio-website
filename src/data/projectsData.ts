import storyshelf from "../assets/images/storyshelf.jpg";
import quiz from "../assets/images/quiz.jpg";
import api from "../assets/images/api.jpg";
import nemo from "../assets/images/nemo.jpg";
import packingList from "../assets/images/packlistan.jpg";
import zoo from "../assets/images/zoo.jpg";
import posPrototype from "../assets/images/posprototype.png";
import shopRental from "../assets/images/shoprental.jpg";

export interface Project {
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  comingSoon?: boolean;
  containImage?: boolean;
  category: string;
  date: string;
}

export const projectsData: Project[] = [
  {
    titleKey: "projects.shopRental.title",
    descriptionKey: "projects.shopRental.description",
    tech: ["React", "TypeScript", "MUI"],
    image: shopRental,
    comingSoon: true,
    category: "Frontend",
    date: "2026",
  },
  {
    titleKey: "projects.posPrototype.title",
    descriptionKey: "projects.posPrototype.description",
    tech: ["Figma"],
    image: posPrototype,
    comingSoon: true,
    containImage: true,
    category: "Frontend",
    date: "2026",
  },
  {
    titleKey: "projects.zoo.title",
    descriptionKey: "projects.zoo.description",
    tech: ["React", "Tailwind", "TypeScript", "Vite", "Axios", "PWA"],
    image: zoo,
    liveLink: "https://sebbes-zoo.vercel.app/",
    githubLink: "https://github.com/EmelieSonjaBoss/Sebbes-Zoo",
    category: "Frontend",
    date: "August 2025",
  },
  {
    titleKey: "projects.packingList.title",
    descriptionKey: "projects.packingList.description",
    tech: ["React", "TypeScript", "PWA", "Vite", "CSS"],
    image: packingList,
    liveLink: "https://emeliesonjaboss.github.io/packing-list/",
    githubLink: "https://github.com/EmelieSonjaBoss/packing-list",
    category: "Frontend",
    date: "June 2025",
  },
  {
    titleKey: "projects.storyshelf.title",
    descriptionKey: "projects.storyshelf.description",
    tech: [
      "TypeScript",
      "Vue",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "Pinia",
      "CORS",
      "Axios",
      "Vite",
      "Mongoose",
    ],
    image: storyshelf,
    liveLink: "https://storyshelf-client.vercel.app/",
    githubLink: "https://github.com/EmelieSonjaBoss/storyshelf",
    category: "Full-Stack",
    date: "May 2025",
  },
  {
    titleKey: "projects.quiz.title",
    descriptionKey: "projects.quiz.description",
    tech: ["Vite", "TypeScript", "SASS", "HTML", "CSS"],
    image: quiz,
    liveLink:
      "https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-king-edward/",
    category: "Frontend",
    date: "January 2025",
  },
  {
    titleKey: "projects.api.title",
    descriptionKey: "projects.api.description",
    tech: ["TypeScript", "Node.js", "Express", "MySQL"],
    image: api,
    githubLink:
      "https://github.com/EmelieSonjaBoss/api-development-assignment-1",
    category: "Backend",
    date: "April 2025",
  },
  {
    titleKey: "projects.nemo.title",
    descriptionKey: "projects.nemo.description",
    tech: ["JavaScript", "Vite", "Vue", "SASS", "HTML", "CSS"],
    image: nemo,
    liveLink:
      "https://medieinstitutet.github.io/fed24d-grafiska-verktyg-clownfiskarna/",
    category: "Frontend",
    date: "March 2025",
  },
];
