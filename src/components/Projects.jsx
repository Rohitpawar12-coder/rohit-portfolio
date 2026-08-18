const projects = [
  {
    number: "01",
    title: "AI Resume Screening & Job Matching System",
    description:
      "AI system that analyzes resumes, extracts skills and matches candidates with suitable job opportunities.",
    technologies: ["Python", "NLP", "Machine Learning", "AI"],
    github:
      "https://github.com/Rohitpawar12-coder/AI-Resume-Screening-System",
    icon: "📄",
  },
  {
    number: "02",
    title: "Telecom Customer Churn Analysis",
    description:
      "Data analytics project identifying customer churn patterns and generating useful business insights.",
    technologies: ["Python", "SQL", "Pandas", "Power BI", "ML"],
    github:
      "https://github.com/Rohitpawar12-coder/Telecom_Churn_project",
    icon: "📊",
  },
  {
    number: "03",
    title: "House Price Prediction",
    description:
      "Machine learning model that predicts house prices using property-related features.",
    technologies: ["Python", "Pandas", "Scikit-learn", "ML"],
    github:
      "https://github.com/Rohitpawar12-coder/House_Price_Prediction",
    icon: "🏠",
  },
  {
    number: "04",
    title: "Rice Leaf Disease Detection Using AI",
    description:
      "AI-powered system that detects and identifies diseases in rice plant leaves using computer vision and deep learning.",
    technologies: ["Python", "CNN", "Deep Learning", "Computer Vision"],
    github:
      "https://github.com/Rohitpawar12-coder/Rice-Leaf-Disease-Detection",
    icon: "🌱",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <p>MY WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <div className="project-visual">
              <span>{project.icon}</span>
            </div>

            <div className="project-number">
              {project.number}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;