import {
  ArrowUpRight,
  BrainCircuit,
  BarChart3,
  Code2,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "AI Resume Screening & Job Matching",
    category: "Artificial Intelligence",
    description:
      "An AI-powered system designed to analyze resumes, extract relevant information, evaluate candidate profiles, and support job matching using NLP and machine learning techniques.",
    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "TF-IDF",
      "Scikit-learn",
    ],
    github:
      "https://github.com/Rohitpawar12-coder/AI-Resume-Screening-System",
    featured: true,
    icon: BrainCircuit,
  },

  {
    title: "Rice Leaf Disease Detection",
    category: "Deep Learning / Computer Vision",
    description:
      "A computer vision project for detecting rice leaf diseases from images using deep learning and image processing techniques.",
    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Deep Learning",
      "CNN",
    ],
    github:
      "https://github.com/Rohitpawar12-coder/Rice_Leaf_Disease_Ditection-project",
    featured: true,
    icon: Sparkles,
  },

  {
    title: "House Price Prediction",
    category: "Machine Learning",
    description:
      "A predictive machine learning solution that analyzes property-related features and estimates house prices using regression techniques.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Regression",
    ],
    github:
      "https://github.com/Rohitpawar12-coder/House_Price_Prediction",
    icon: BarChart3,
  },

  {
    title: "Employee Performance Analysis",
    category: "Data Science",
    description:
      "A data-driven project focused on analyzing employee performance and extracting meaningful insights from workforce data.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "EDA",
      "Machine Learning",
    ],
    github:
      "https://github.com/Rohitpawar12-coder/Employee_Performance_Analysis-",
    icon: Layers3,
  },

  {
    title: "Telecom Churn Prediction",
    category: "Machine Learning",
    description:
      "A machine learning classification project designed to identify customers who are likely to churn based on telecom customer behavior and usage patterns.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Classification",
      "EDA",
    ],
    github:
      "https://github.com/Rohitpawar12-coder/Telecom_Churn_project",
    icon: BarChart3,
  },

  {
    title: "Car Sales Analysis",
    category: "Data Analytics",
    description:
      "An exploratory data analysis project focused on understanding car sales trends, patterns, and business insights from sales data.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Visualization",
    ],
    github:
      "https://github.com/Rohitpawar12-coder/Car_Sales_Analysis",
    icon: BarChart3,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-background">
        <div className="projects-grid"></div>
        <div className="projects-glow projects-glow-one"></div>
        <div className="projects-glow projects-glow-two"></div>
      </div>

      <div className="container projects-container">
        <div className="section-heading projects-heading">
          <div className="section-eyebrow">
            <span className="eyebrow-line"></span>
            <span>Selected Work</span>
          </div>

          <h2>
            Projects That Turn
            <span> Ideas Into Solutions.</span>
          </h2>

          <p>
            A collection of AI, Machine Learning, Data Science,
            Computer Vision, and Data Analytics projects built
            through hands-on development.
          </p>
        </div>

        <div className="projects-grid-layout">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                className={`project-card ${
                  project.featured ? "project-card-featured" : ""
                }`}
                key={project.title}
              >
                <div className="project-card-top">
                  <div className="project-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                    aria-label={`Open ${project.title} GitHub repository`}
                  >
                    <Code2 size={17} />
                    <span>View on GitHub</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-external-btn"
                    aria-label={`Open ${project.title} repository`}
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-bottom">
          <div>
            <span className="projects-bottom-label">
              MORE PROJECTS
            </span>

            <h3>
              Explore my complete
              <span> GitHub portfolio.</span>
            </h3>
          </div>

          <a
            href="https://github.com/Rohitpawar12-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-link"
          >
            <Code2 size={18} />
            <span>Visit GitHub</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;