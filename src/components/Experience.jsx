import {
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  MapPin,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    company: "BITMAP Technology",
    role: "Machine Learning Intern",
    period: "Jan 2026 – Apr 2026",
    location: "Pune, Maharashtra",
    type: "Internship",
    number: "01",
    icon: BrainCircuit,

    summary:
      "Worked on AI and Machine Learning projects using real-world datasets, contributing to data preparation, predictive modeling, evaluation, and AI Proof of Concept solutions.",

    responsibilities: [
      "Performed data cleaning, preprocessing, and feature engineering on real-world datasets.",
      "Built, trained, tested, and evaluated predictive machine learning models.",
      "Worked with the team to transform business requirements into practical ML solutions.",
      "Contributed to AI Proof of Concept (POC) solutions and client-oriented projects.",
      "Analyzed model performance and supported iterative improvements during development.",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Data Preprocessing",
      "Feature Engineering",
    ],
  },

  {
    company: "Rubixe",
    role: "AI Expert Consultant Intern",
    period: "Nov 2025 – Apr 2026",
    location: "Pune, Maharashtra",
    type: "Internship",
    number: "02",
    icon: Sparkles,

    summary:
      "Developed AI and Machine Learning solutions across multiple predictive analytics and computer vision projects while contributing to client projects and AI Proof of Concept solutions.",

    responsibilities: [
      "Developed machine learning models for Flight Fare Prediction, House Price Prediction, and Insurance Cost Prediction.",
      "Worked on Rice Leaf Disease Detection using computer vision and deep learning techniques.",
      "Performed Employee Performance Analysis using data-driven predictive approaches.",
      "Applied data preprocessing, feature engineering, model development, and model evaluation techniques.",
      "Contributed to predictive analysis and AI Proof of Concept (POC) solutions for client projects.",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "OpenCV",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-background">
        <div className="experience-grid"></div>
        <div className="experience-glow experience-glow-one"></div>
        <div className="experience-glow experience-glow-two"></div>
      </div>

      <div className="container experience-container">
        {/* SECTION HEADER */}
        <div className="section-heading experience-heading">
          <div className="section-eyebrow">
            <span className="eyebrow-line"></span>
            <span>Professional Journey</span>
          </div>

          <h2>
            Experience That
            <span> Builds Impact.</span>
          </h2>

          <p>
            Hands-on experience in Machine Learning, Artificial
            Intelligence, predictive analytics, and real-world
            AI solutions.
          </p>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="experience-timeline">
          <div className="timeline-line"></div>

          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <article
                className="experience-item"
                key={`${experience.company}-${experience.role}`}
              >
                {/* TIMELINE NODE */}
                <div className="timeline-node">
                  <span>{experience.number}</span>
                </div>

                {/* EXPERIENCE CARD */}
                <div className="experience-card">
                  {/* CARD TOP */}
                  <div className="experience-card-top">
                    <div className="experience-company-mark">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <div className="experience-meta">
                      <span className="experience-type">
                        {experience.type}
                      </span>

                      <span className="experience-number">
                        {experience.number}
                      </span>
                    </div>
                  </div>

                  {/* TITLE */}
                  <div className="experience-title-block">
                    <h3>{experience.role}</h3>

                    <h4>{experience.company}</h4>

                    <div className="experience-details">
                      <span>
                        <CalendarDays size={15} />
                        {experience.period}
                      </span>

                      <span>
                        <MapPin size={15} />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  {/* SUMMARY */}
                  <p className="experience-summary">
                    {experience.summary}
                  </p>

                  {/* DIVIDER */}
                  <div className="experience-divider"></div>

                  {/* RESPONSIBILITIES */}
                  <div className="experience-responsibilities">
                    <div className="experience-subheading">
                      <Code2 size={17} />
                      <span>Key Responsibilities</span>
                    </div>

                    <div className="responsibility-list">
                      {experience.responsibilities.map(
                        (responsibility) => (
                          <div
                            className="responsibility-item"
                            key={responsibility}
                          >
                            <CheckCircle2 size={16} />
                            <p>{responsibility}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="experience-tech-section">
                    <div className="experience-subheading">
                      <Database size={17} />
                      <span>Technologies & Skills</span>
                    </div>

                    <div className="experience-tech-list">
                      {experience.technologies.map((technology) => (
                        <span
                          className="experience-tech"
                          key={technology}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div className="experience-card-footer">
                    <span>AI / ML</span>

                    <ChevronRight size={18} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* EXPERIENCE SUMMARY */}
        <div className="experience-summary-card">
          <div className="summary-icon">
            <BrainCircuit size={25} />
          </div>

          <div className="summary-content">
            <span className="summary-label">
              EXPERIENCE FOCUS
            </span>

            <h3>
              Building practical AI solutions from
              <span> data to deployment.</span>
            </h3>

            <p>
              My experience combines machine learning,
              deep learning, data preprocessing, feature
              engineering, predictive analysis, and
              computer vision with real-world project
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;