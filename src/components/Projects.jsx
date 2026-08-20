import {
  ArrowUpRight,
  ExternalLink,
  Brain,
  BarChart3,
  Database,
  LineChart,
  Leaf,
  Home,
  Users,
} from "lucide-react";

function Projects() {
  const GITHUB = "https://github.com/Rohitpawar12-coder";

  const projects = [
    {
      title: "AI Resume Screening System",
      category: "AI / MACHINE LEARNING",
      description:
        "AI-powered resume screening and job matching system using NLP and machine learning to analyze resumes, extract candidate skills, and match candidates with relevant job roles.",
      icon: Brain,
      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "Scikit-learn",
        "Streamlit",
      ],
      github: `${GITHUB}/AI-Resume-Screening-System`,
      featured: true,
    },

    {
      title: "Employee Performance Analysis",
      category: "DATA ANALYTICS",
      description:
        "Data analytics project focused on analyzing employee productivity and performance using data visualization and analytical insights.",
      icon: Users,
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Data Analysis",
        "Visualization",
      ],
      github: `${GITHUB}/Employee_Performance_Analysis-`,
    },

    {
      title: "House Price Prediction",
      category: "MACHINE LEARNING",
      description:
        "Machine learning project that predicts house prices using property features such as location, area, bedrooms, and bathrooms with data preprocessing and exploratory analysis.",
      icon: Home,
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "EDA",
      ],
      github: `${GITHUB}/House_Price_Prediction`,
    },

    {
      title: "Rice Leaf Disease Detection",
      category: "DEEP LEARNING / COMPUTER VISION",
      description:
        "Deep learning image classification project designed to identify rice leaf diseases from images for early and accurate crop disease detection.",
      icon: Leaf,
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "CNN",
        "Computer Vision",
      ],
      github: `${GITHUB}/Rice_Leaf_Disease_Ditection-project`,
    },

    {
      title: "Telecom Churn Prediction",
      category: "MACHINE LEARNING",
      description:
        "Machine learning classification project that analyzes telecom customer data and predicts the likelihood of customer churn.",
      icon: Database,
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Classification",
        "Model Evaluation",
      ],
      github: `${GITHUB}/Telecom_Churn_project`,
    },

    {
      title: "Car Sales Analysis",
      category: "DATA ANALYTICS",
      description:
        "Data analytics project that analyzes car sales data to identify sales trends, patterns, and meaningful business insights using exploratory data analysis and visualization.",
      icon: LineChart,
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "EDA",
        "Data Visualization",
      ],
      github: `${GITHUB}/Car_Sales_Analysis`,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* HEADER */}

        <div className="projects-header">
          <div className="section-heading projects-heading">

            <div className="section-label">
              <span></span>
              SELECTED PROJECTS
            </div>

            <h2>
              Building with
              <br />
              <span>data & intelligence.</span>
            </h2>

            <p>
              A collection of machine learning, artificial intelligence,
              deep learning, computer vision, and data analytics projects
              focused on solving practical problems.
            </p>

          </div>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-link"
          >
            View GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* PROJECT GRID */}

        <div className="projects-grid">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                className={`project-card ${
                  project.featured ? "project-featured" : ""
                }`}
                key={project.title}
              >

                {/* TOP */}

                <div className="project-top">

                  <div className="project-icon">
                    <Icon size={22} />
                  </div>

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* CONTENT */}

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>

                {/* TECHNOLOGIES */}

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}

                <div className="project-actions">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-github-button"
                  >
                    <span className="github-text">
                      GH
                    </span>

                    View Project

                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon-link"
                    aria-label={`Open ${project.title} GitHub repository`}
                  >
                    <ExternalLink size={15} />
                  </a>

                </div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM */}

        <div className="projects-bottom">

          <div className="projects-bottom-info">

            <span className="github-status-dot"></span>

            <span>
              More work available on GitHub
            </span>

          </div>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore All Repositories
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;