import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const certifications = [
  {
    title: "Data Science Internship",
    issuer: "DataMites",
    category: "Data Science",
    description:
      "Hands-on exposure to data science workflows including data preprocessing, analysis, visualization, and machine learning.",
  },
  {
    title: "Data Visualization",
    issuer: "Tata Forage",
    category: "Data Analytics",
    description:
      "Practical experience with data visualization, analytical thinking, and presenting insights from business data.",
  },
  {
    title: "Artificial Intelligence Internship",
    issuer: "Rubixe",
    category: "Artificial Intelligence",
    description:
      "Practical exposure to AI, machine learning, deep learning, computer vision, and predictive analytics projects.",
  },
  {
    title: "AI & ML Internship",
    issuer: "Anudip Foundation",
    category: "AI / ML",
    description:
      "Worked with fundamental AI and machine learning concepts and applied them to practical project-based learning.",
  },
  {
    title: "NPTEL Certification",
    issuer: "NPTEL",
    category: "Technical Learning",
    description:
      "Completed technical coursework through NPTEL with a focus on strengthening computer science and analytical fundamentals.",
  },
  {
    title: "Powerskill & Fundamentals of Electric Vehicle",
    issuer: "Training Program",
    category: "Technical Training",
    description:
      "Completed technical training covering electric vehicle fundamentals, technology, and industry-oriented concepts.",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-header">
        <p>CERTIFICATIONS</p>

        <h2>
          Learning Beyond the <span>Classroom.</span>
        </h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((certificate, index) => (
          <article
            className="certification-card"
            key={`${certificate.title}-${certificate.issuer}`}
          >
            <div className="certification-top">
              <div className="certification-icon">
                {index < 3 ? (
                  <Award size={21} />
                ) : (
                  <BadgeCheck size={21} />
                )}
              </div>

              <span className="certification-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="certification-category">
              {certificate.category}
            </div>

            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <p>{certificate.description}</p>

            <div className="certification-footer">
              <span>
                <Sparkles size={13} />
                Verified Learning
              </span>

              <button
                type="button"
                aria-label={`View ${certificate.title}`}
                className="certification-action"
              >
                <ExternalLink size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="certifications-bottom">
        <div className="certifications-bottom-icon">
          <BadgeCheck size={23} />
        </div>

        <div>
          <span>CONTINUOUS LEARNING</span>

          <h3>
            Always building stronger
            <strong> technical fundamentals.</strong>
          </h3>
        </div>

        <ArrowUpRight size={22} />
      </div>
    </section>
  );
}

export default Certifications;