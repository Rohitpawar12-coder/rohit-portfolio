import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
} from "lucide-react";

function Education() {
  const education = [
    {
      degree: "B.Tech — Computer Science & Engineering",
      specialization: "Data Science",
      institution: "Shree Ramchandra College of Engineering",
      location: "Pune, Maharashtra",
      period: "2026 — Present",
      status: "Currently Pursuing",
      description:
        "Building a strong foundation in computer science, data science, artificial intelligence, machine learning, databases, and software development.",
    },
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Python Programming",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Statistics",
    "Computer Networks",
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="section-heading education-heading">

          <div className="section-label">
            <span></span>
            EDUCATION
          </div>

          <h2>
            Building the foundation
            <br />
            <span>behind the skills.</span>
          </h2>

          <p>
            My academic journey is focused on computer science,
            data science, artificial intelligence, and practical
            technology development.
          </p>

        </div>

        {/* =========================
            EDUCATION CARD
        ========================== */}

        <div className="education-layout">

          <div className="education-card">

            <div className="education-card-top">

              <div className="education-icon">
                <GraduationCap size={25} />
              </div>

              <span className="education-status">
                Currently Pursuing
              </span>

            </div>

            <div className="education-content">

              <span className="education-label">
                UNDERGRADUATE DEGREE
              </span>

              <h3>
                {education[0].degree}
              </h3>

              <h4>
                {education[0].specialization}
              </h4>

              <div className="education-meta">

                <span>
                  <BookOpen size={14} />
                  {education[0].institution}
                </span>

                <span>
                  <MapPin size={14} />
                  {education[0].location}
                </span>

                <span>
                  <CalendarDays size={14} />
                  {education[0].period}
                </span>

              </div>

              <p>
                {education[0].description}
              </p>

            </div>

          </div>

          {/* =========================
              COURSEWORK
          ========================== */}

          <div className="coursework-card">

            <div className="coursework-header">

              <span className="section-label">
                <span></span>
                CORE COURSEWORK
              </span>

              <p>
                Areas supporting my technical development.
              </p>

            </div>

            <div className="coursework-list">

              {coursework.map((subject) => (
                <div
                  className="coursework-item"
                  key={subject}
                >
                  <span className="coursework-dot"></span>

                  <span>{subject}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* =========================
            ACADEMIC FOCUS
        ========================== */}

        <div className="academic-focus">

          <div className="academic-focus-title">
            <span className="academic-pulse"></span>

            <span>
              ACADEMIC FOCUS
            </span>
          </div>

          <div className="academic-focus-items">

            <span>Artificial Intelligence</span>
            <span>Machine Learning</span>
            <span>Data Science</span>
            <span>Analytics</span>
            <span>Software Development</span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;