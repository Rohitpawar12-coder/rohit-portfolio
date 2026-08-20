import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  CalendarDays,
  Code2,
  Database,
  FileCheck2,
  LineChart,
  Sparkles,
} from "lucide-react";

const certifications = [
  {
    title: "Artificial Intelligence Expert",
    issuer: "IABAC",
    year: "2026",
    category: "Artificial Intelligence",
    icon: BrainCircuit,
    featured: true,
  },
  {
    title: "Certified Data Scientist",
    issuer: "IABAC",
    year: "2026",
    category: "Data Science",
    icon: LineChart,
    featured: true,
  },
  {
    title: "Data Science Foundation",
    issuer: "IABAC",
    year: "2026",
    category: "Data Science",
    icon: Database,
  },
  {
    title: "AI Engineer Course",
    issuer: "DataMites",
    year: "2025 – 2026",
    category: "AI Engineering",
    icon: Sparkles,
  },
  {
    title: "Microsoft Power BI",
    issuer: "Skill Course",
    year: "2026",
    category: "Data Analytics",
    icon: LineChart,
  },
  {
    title: "Python Programming",
    issuer: "TechMaster",
    year: "2024",
    category: "Programming",
    icon: Code2,
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-background">
        <div className="certifications-grid"></div>
        <div className="certifications-glow certifications-glow-one"></div>
        <div className="certifications-glow certifications-glow-two"></div>
      </div>

      <div className="container certifications-container">
        {/* HEADER */}
        <div className="section-heading certifications-heading">
          <div className="section-eyebrow">
            <span className="eyebrow-line"></span>
            <span>Professional Credentials</span>
          </div>

          <h2>
            Certifications That
            <span> Strengthen My Expertise.</span>
          </h2>

          <p>
            Continuous learning through industry-focused
            certifications in Artificial Intelligence, Data
            Science, Python, and Data Analytics.
          </p>
        </div>

        {/* CERTIFICATION GRID */}
        <div className="certifications-grid-layout">
          {certifications.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <article
                className={`certification-card ${
                  certificate.featured
                    ? "certification-card-featured"
                    : ""
                }`}
                key={`${certificate.title}-${certificate.issuer}`}
              >
                {/* TOP */}
                <div className="certification-card-top">
                  <div className="certification-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="certification-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* CATEGORY */}
                <div className="certification-category">
                  {certificate.category}
                </div>

                {/* TITLE */}
                <h3>{certificate.title}</h3>

                {/* ISSUER */}
                <div className="certification-issuer">
                  <BadgeCheck size={17} />
                  <span>{certificate.issuer}</span>
                </div>

                {/* DATE */}
                <div className="certification-date">
                  <CalendarDays size={15} />
                  <span>{certificate.year}</span>
                </div>

                {/* FOOTER */}
                <div className="certification-footer">
                  <div className="credential-status">
                    <span className="credential-dot"></span>
                    <span>Credential</span>
                  </div>

                  <div className="credential-icon">
                    <FileCheck2 size={17} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CERTIFICATION SUMMARY */}
        <div className="certification-summary">
          <div className="certification-summary-icon">
            <Award size={26} />
          </div>

          <div className="certification-summary-content">
            <span>CONTINUOUS LEARNING</span>

            <h3>
              Always learning.
              <strong> Always building.</strong>
            </h3>

            <p>
              My certifications complement hands-on project
              experience and help me continuously strengthen
              my skills across AI, Machine Learning, Data
              Science, Python, and Business Intelligence.
            </p>
          </div>

          <div className="certification-summary-mark">
            <Sparkles size={21} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;