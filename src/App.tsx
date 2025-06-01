import './App.css'
import heroImage from './assets/imagesmall2.jpg'

function App() {
  const techStack = {
    frontend: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
      'SASS'
    ],
    backend: [
      'Node.js',
      'Express',
      'REST APIs',
      'MongoDB',
      'MySQL'
    ],
    tools: [
      'Git',
      'JWT Authentication',
      'API Development',
      'Database Design'
    ]
  }

  const projects = [
    {
      title: "Full-Stack Social Platform",
      description: "A MERN stack application with JWT authentication, image uploads, and real-time updates.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      image: "/project1.jpg", // You can add your own project screenshots/photos here
      liveLink: "https://project1.com",
      githubLink: "https://github.com/youruser/project1",
      category: "Full-Stack"
    },
    {
      title: "E-commerce Frontend",
      description: "Modern e-commerce interface with cart functionality and payment integration.",
      tech: ["React", "TypeScript", "SASS", "Stripe"],
      image: "/project2.jpg",
      liveLink: "https://project2.com",
      githubLink: "https://github.com/youruser/project2",
      category: "Frontend"
    },
    // Add more projects here
  ]

  return (
    <>
      <section className="hero-section">
        <img src={heroImage} alt="Hero background" className="hero-image" />
        <div className="hero-text-container">
          <h1 className="hero-title">EmelieBoss</h1>
          <h2>Frontend Developer</h2>
          <h3>{`< From Design to Development />`}</h3>
        </div>
      </section>

      <section className="tech-stack">
        <h2>Technical Skills</h2>
        <div className="stack-categories">
          <div className="stack-category">
            <h3>Frontend Development</h3>
            <div className="tech-list">
              {techStack.frontend.map((tech, index) => (
                <div key={`frontend-${index}`} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="stack-category">
            <h3>Backend Experience</h3>
            <div className="tech-list">
              {techStack.backend.map((tech, index) => (
                <div key={`backend-${index}`} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="stack-category">
            <h3>Development Tools</h3>
            <div className="tech-list">
              {techStack.tools.map((tech, index) => (
                <div key={`tools-${index}`} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Full-Stack</button>
          <button className="filter-btn">Frontend</button>
          <button className="filter-btn">API</button>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
