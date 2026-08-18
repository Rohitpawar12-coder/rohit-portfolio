const certifications = [
  {
    number: "01",
    title: "Artificial Intelligence Expert",
    category: "IABAC AI Expert",
    file: "Artificial_Intelligence_Expert_IAB1120179057_2026-05-26_1779778697.pdf",
  },
  {
    number: "02",
    title: "Certified Data Scientist",
    category: "IABAC Data Science",
    file: "Certified_Data_Scientist_IAB1120179160_2026-06-09_1780989996.pdf",
  },
  {
    number: "03",
    title: "Data Science Foundation",
    category: "IABAC Foundation",
    file: "Data_Science_Foundation_IAB1120179056_2026-05-26_1779778101.pdf",
  },
  {
    number: "04",
    title: "Python",
    category: "Programming ",
    file: "Rohit python.pdf",
  },
  {
    number: "05",
    title: "AI ENGINEER",
    category: "Artificial Intelligence",
    file: "AI certificate.pdf",
  },
  {
    number: "06",
    title: "SQL Advance",
    category: "Programming",
    file: "sql_advanced certificate (1).pdf",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-header">
        <p>MY ACHIEVEMENTS</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((certificate) => (
          <div className="certificate-card" key={certificate.number}>
            <span className="certificate-number">
              {certificate.number}
            </span>

            <div>
              <h3>{certificate.title}</h3>
              <p>{certificate.category}</p>
            </div>

            <a
              href={certificate.file}
              target="_blank"
              rel="noreferrer"
              className="certificate-button"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;