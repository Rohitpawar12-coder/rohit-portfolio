import {
  Award,
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
  Trophy,
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    institution: "Savitribai Phule Pune University",
    period: "2022 – 2026",
    location: "Pune, Maharashtra",
    status: "Final Year",
    score: "7.57 CGPA",
    highlight: "First Class",
    finalYear: "9.20 SGPA",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science",
    institution:
      "Shri Fattechand Jain Vidyalaya & Junior College",
    period: "2020 – 2022",
    location: "Pune, Maharashtra",
    status: "Completed",
    score: "70.17%",
    highlight: "Science Stream",
    icon: BookOpen,
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-background">
        <div className="education-grid"></div>
        <div className="education-glow education-glow-one"></div>
        <div className="education-glow education-glow-two"></div>
      </div>

      <div className="container education-container">
        {/* HEADER */}
        <div className="section-heading education-heading">
          <div className="section-eyebrow">
            <span className="eyebrow-line"></span>
            <span>Academic Background</span>
          </div>

          <h2>
            Education That
            <span> Shapes My Foundation.</span>
          </h2>

          <p>
            My academic journey in Computer Engineering,
            supported by continuous learning in Artificial
            Intelligence, Machine Learning, and Data Science.
          </p>
        </div>

        {/* EDUCATION TIMELINE */}
        <div className="education-timeline">
          <div className="education-line"></div>

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="education-item"
                key={`${item.degree}-${item.institution}`}
              >
                {/* TIMELINE NODE */}
                <div className="education-node">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* CARD */}
                <div className="education-card">
                  <div className="education-card-header">
                    <div className="education-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <div className="education-status">
                      {item.status}
                    </div>
                  </div>

                  <div className="education-main">
                    <div className="education-title">
                      <span className="education-label">
                        {item.field}
                      </span>

                      <h3>{item.degree}</h3>

                      <h4>{item.institution}</h4>
                    </div>

                    <div className="education-details">
                      <span>
                        <CalendarDays size={15} />
                        {item.period}
                      </span>

                      <span>
                        <MapPin size={15} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* SCORE CARDS */}
                  <div className="education-achievements">
                    <div className="education-achievement">
                      <div className="achievement-icon">
                        <Trophy size={17} />
                      </div>

                      <div>
                        <span>Academic Performance</span>
                        <strong>{item.score}</strong>
                      </div>
                    </div>

                    <div className="education-achievement">
                      <div className="achievement-icon">
                        <Award size={17} />
                      </div>

                      <div>
                        <span>Achievement</span>
                        <strong>{item.highlight}</strong>
                      </div>
                    </div>

                    {item.finalYear && (
                      <div className="education-achievement">
                        <div className="achievement-icon">
                          <GraduationCap size={17} />
                        </div>

                        <div>
                          <span>Final Year SGPA</span>
                          <strong>{item.finalYear}</strong>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ACADEMIC FOCUS */}
        <div className="education-focus">
          <div className="focus-icon">
            <GraduationCap size={25} />
          </div>

          <div className="focus-content">
            <span>ACADEMIC FOCUS</span>

            <h3>
              Computer Engineering with a focus on
              <strong> AI, ML & Data Science.</strong>
            </h3>

            <p>
              Alongside my engineering curriculum, I have
              continuously developed practical skills through
              internships, certifications, and hands-on AI,
              machine learning, and data analytics projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;