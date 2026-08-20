import { ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "AI Resume Screening & Job Matching System",
      category: "AI / Machine Learning",
      description:
        "An AI-powered resume screening system that analyzes resumes, extracts relevant information, matches candidates with job requirements, and helps automate the recruitment screening process.",
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "TF-IDF",
        "Streamlit",
      ],
      github:
        "https://github.com/Rohitpawar12-coder/AI-Resume-Screening-System",
    },
    {
      title: "Employee Performance Analysis",
      category: "Data Analytics",
      description:
        "A data analytics project focused on analyzing employee performance data, identifying important patterns, and generating meaningful business insights.",
      technologies: [
        "Python",
        "Pandas",
        "Excel",
        "Power BI",
        "Data Analytics",
      ],
      github:
        "https://github.com/Rohitpawar12-coder/Employee_Performance_Analysis-",
    },
    {
      title: "Car Sales Analysis",
      category: "Data Analytics",
      description:
        "An interactive data analysis project designed to explore car sales data, understand sales trends, and generate useful business insights through data visualization.",
      technologies: [
        "Python",
        "Pandas",
        "Power BI",
        "Data Visualization",
      ],
      github:
        "https://github.com/Rohitpawar12-coder/Car_Sales_Analysis",
    },
    {
      title: "Telecom Churn Prediction",
      category: "Machine Learning",
      description:
        "A machine learning project that analyzes customer behavior and predicts telecom customer churn using multiple classification algorithms.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Random Forest",
        "XGBoost",
      ],
      github:
        "https://github.com/Rohitpawar12-coder/Telecom_Churn_project",
    },
    {
      title: "Rice Leaf Disease Detection",
      category: "Deep Learning",
      description:
        "A computer vision project designed to identify diseases in rice leaves using deep learning and image classification techniques.",
      technologies: [
        "Python",
        "TensorFlow",
        "Deep Learning",
        "CNN",
        "VGG16",
      ],
      github:
        "https://github.com/Rohitpawar12-coder/Rice_Leaf_Disease_Ditection-project",
    },
    {
      title: "House Price Prediction",
      category: "Machine Learning",
      description:
        "A regression-based machine learning project that predicts house prices from relevant property features and demonstrates the complete machine learning workflow.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Regression",
        "Machine Learning",
      ],
      github:
        "https://github.com/Rohitpawar12-coder/House_Price_Prediction",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <p>MY WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p className="section-description">
          A selection of my work across Artificial Intelligence,
          Machine Learning, Data Science, and Data Analytics.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn primary"
                aria-label={`View ${project.title} on GitHub`}
              >
                <span>GitHub</span>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn secondary"
                aria-label={`Open ${project.title} repository`}
              >
                <span>View Project</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer">
        <a
          href="https://github.com/Rohitpawar12-coder?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="all-projects-btn"
        >
          <span>View All GitHub Projects</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

export default Projects;