import {
  BriefcaseBusiness,
  Award,
  ExternalLink,
  CalendarDays,
} from "lucide-react";

function Experience() {
  const experiences = [
    {
      type: "Experience",
      title: "AI / Machine Learning Intern",
      company: "Rubixe",
      period: "Internship",
      description:
        "Worked on machine learning concepts, data preprocessing, model development, and practical AI/ML problem-solving.",
      skills: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Scikit-learn",
      ],
    },
    {
      type: "Experience",
      title: "Data Analytics Intern",
      company: "Tata Forage",
      period: "Virtual Internship",
      description:
        "Worked on data visualization and analytical tasks, transforming business data into meaningful insights and reports.",
      skills: [
        "Data Analytics",
        "Data Visualization",
        "Power BI",
        "Business Insights",
      ],
    },
    {
      type: "Experience",
      title: "Data Science / AI Intern",
      company: "DataMites",
      period: "Internship",
      description:
        "Gained practical exposure to data science workflows including Python, exploratory data analysis, machine learning, and model evaluation.",
      skills: [
        "Python",
        "Pandas",
        "EDA",
        "Machine Learning",
      ],
    },
  ];

  const certifications = [
    {
      title: "Data Science Certification",
      issuer: "DataMites",
      icon: Award,
    },
    {
      title: "Data Visualization Internship",
      issuer: "Tata Forage",
      icon: Award,
    },
    {
      title: "AI / ML Internship",
      issuer: "Rubixe",
      icon: Award,
    },
    {
      title: "NPTEL Certification",
      issuer: "NPTEL",
      icon: Award,
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="section-heading experience-heading">

          <div className="section-label">
            <span></span>
            EXPERIENCE & CREDENTIALS
          </div>

          <h2>
            Experience that builds
            <br />
            <span>real-world skills.</span>
          </h2>

          <p>
            My learning journey combines internships, practical projects,
            technical training, and continuous development across AI,
            machine learning, and data analytics.
          </p>

        </div>

        {/* =========================
            EXPERIENCE
        ========================== */}

        <div className="experience-layout">

          <div className="experience-column">

            <div className="subsection-title">
              <BriefcaseBusiness size={18} />
              <span>Experience</span>
            </div>

            <div className="timeline">

              {experiences.map((experience, index) => (
                <article
                  className="timeline-item"
                  key={`${experience.company}-${index}`}
                >

                  <div className="timeline-marker">
                    <span></span>
                  </div>

                  <div className="timeline-content">

                    <div className="timeline-top">

                      <div>
                        <span className="timeline-type">
                          {experience.type}
                        </span>

                        <h3>
                          {experience.title}
                        </h3>

                        <h4>
                          {experience.company}
                        </h4>
                      </div>

                      <div className="timeline-period">
                        <CalendarDays size={13} />
                        {experience.period}
                      </div>

                    </div>

                    <p>
                      {experience.description}
                    </p>

                    <div className="experience-skills">
                      {experience.skills.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

          {/* =========================
              CERTIFICATIONS
          ========================== */}

          <div className="certifications-column">

            <div className="subsection-title">
              <Award size={18} />
              <span>Certifications</span>
            </div>

            <div className="certification-list">

              {certifications.map((certificate) => {
                const Icon = certificate.icon;

                return (
                  <article
                    className="certificate-card"
                    key={certificate.title}
                  >

                    <div className="certificate-icon">
                      <Icon size={19} />
                    </div>

                    <div className="certificate-content">

                      <h3>
                        {certificate.title}
                      </h3>

                      <p>
                        {certificate.issuer}
                      </p>

                    </div>

                    <span className="certificate-arrow">
                      <ExternalLink size={15} />
                    </span>

                  </article>
                );
              })}

            </div>

            {/* Learning Card */}

            <div className="learning-card">

              <div className="learning-card-icon">
                <span></span>
              </div>

              <div>
                <span className="learning-label">
                  CURRENTLY LEARNING
                </span>

                <h3>
                  Generative AI & Modern AI Systems
                </h3>

                <p>
                  Exploring LLMs, AI agents, deployment,
                  and production-ready AI applications.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;