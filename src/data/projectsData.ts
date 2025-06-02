import storyshelf from '../assets/images/storyshelf.jpg';
import quiz from '../assets/images/quiz.jpg'
import api from '../assets/images/api.jpg'
import nemo from '../assets/images/nemo.jpg'
import munkar from '../assets/images/munkar2.jpg'

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  category: string;
  date: string;
}

export const projectsData: Project[] = [
  {
    title: "Storyshelf - FullStack",
    description: "StoryShelf is a full-stack MEVN web app where users can browse and review books, while admins securely manage users and content through a role-based panel using JWT authentication. Group project.",
    tech: ["TypeScript", "Vue", "Node.js", "MongoDB", "Express", "JWT", "Pinia", "CORS", "Axios", "Vite", "Mongoose"],
    image: storyshelf,
    liveLink: "https://storyshelf-client.vercel.app/",
    category: "Full-Stack",
    date: "May 2025"
  },
  {
    title: "The Quiz - Frontend",
    description: "A quiz game with a timer and score tracking. Group project.",
    tech: ["Vite", "TypeScript", "SASS", "HTML", "CSS"],
    image: quiz,
    liveLink: "https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-king-edward/",
    category: "Frontend",
    date: "January 2025"
  },
  {
    title: "API - Backend",
    description: "A RESTful API built with Node.js, Express, and MySQL for managing products and categories in a webshop, featuring full CRUD operations, category-based filtering, and robust validation.",
    tech: ["TypeScript", "Node.js", "Express", "MySQL"],
    image: api,
    githubLink: "https://github.com/EmelieSonjaBoss/api-development-assignment-1",
    category: "API",
    date: "April 2025"
  },
  {
    title: "Nemo's Ice Cream - Frontend",
    description: "Nemo's Ice Cream is a ocean-inspired Vue single-page app that showcases artisanal ice cream flavors with smooth animations and responsive navigation. Group project.",
    tech: ["JavaScript", "Vite", "Vue", "SASS", "HTML", "CSS"],
    image: nemo,
    liveLink: "https://medieinstitutet.github.io/fed24d-grafiska-verktyg-clownfiskarna/",
    category: "Frontend",
    date: "March 2025"
  },
  {
    title: "The Donut shop - Frontend",
    description: "One of my first projects - an e-commerce interface with cart functionality and payment integration.",
    tech: ["JavaScript", "SASS", "HTML", "CSS"],
    image: munkar,
    liveLink: "https://medieinstitutet.github.io/fed24d-js-intro-inl-1-webshop-EmelieSonjaBoss/",
    category: "Frontend",
    date: "December 2024"
  }
]; 