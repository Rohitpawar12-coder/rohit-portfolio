import {
  ArrowUpRight,
  Award,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Data Science",
    institution: "Shree Ramchandra College of Engineering, Lonikand, Pune",
    period: "2022 – 2026",
    location: "Pune, Maharashtra",
    status: "Undergraduate",
  },
];

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-header">
        <p>EDUCATION</p>

        <h2>
          Academic <span>Foundation.</span>
        </h2>
      </div>

      <div className="education-container">
        {education.map((item) => (
          <article className="education-card" key={item.degree}>
            <div className="education-year">
              <GraduationCap size={22} />
              <span>{item.period}</span>
            </div>

            <div className="education-content">
              <div className="education-status">
                <span>{item.status}</span>
              </div>

              <h3>{item.degree}</h3>

              <h4>{item.specialization}</h4>

              <p className="education-institution">
                {item.institution}
              </p>

              <div className="education-meta">
                <span>
                  <CalendarDays size={14} />
                  {item.period}
                </span>

                <span>
                  <MapPin size={14} />
                  {item.location}
                </span>
              </div>

              <p className="education-description">
                Focused on Data Science, Artificial Intelligence,
                Machine Learning, Data Analytics, programming,
                databases, and practical software development.
              </p>

              <div className="education-highlights">
                <span>
                  <Award size={14} />
                  Data Science
                </span>

                <span>
                  <Award size={14} />
                  AI & ML
                </span>

                <span>
                  <Award size={14} />
                  Data Analytics
                </span>
              </div>
            </div>

            <div className="education-arrow">
              <ArrowUpRight size={20} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;