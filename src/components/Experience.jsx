function Experience() {
  return (
    <section id="experience" className="section">

      <div className="section-header">
        <p>MY JOURNEY</p>

        <h2>
          Work <span>Experience</span>
        </h2>
      </div>

      <div className="experience-container">

        {/* BITMAP TECHNOLOGY */}
        <div className="experience-card">

          <div className="experience-date">
            Jan 2026 – Apr 2026
          </div>

          <div className="experience-content">

            <h3>Machine Learning Intern</h3>

            <h4>BITMAP Technology</h4>

            <p>
              Worked on AI and Machine Learning projects using real-world
              datasets. Performed data cleaning, preprocessing, feature
              engineering, and model development. Built, trained, tested,
              and evaluated predictive machine learning models while
              collaborating with the team to deliver client projects and
              AI Proof of Concept (POC) solutions.
            </p>

            <div className="experience-tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Data Preprocessing</span>
              <span>Feature Engineering</span>
              <span>Model Development</span>
              <span>AI</span>
            </div>

          </div>

        </div>

        {/* RUBIXE */}
        <div className="experience-card">

          <div className="experience-date">
            Nov 2025 – Apr 2026
          </div>

          <div className="experience-content">

            <h3>AI Expert Consultant Intern</h3>

            <h4>Rubixe Private Limited</h4>

            <p>
              Developed AI and Machine Learning models for Flight Fare
              Prediction, House Price Prediction, Insurance Cost Prediction,
              Rice Leaf Disease Detection, and Employee Performance Analysis.
              Performed data preprocessing, feature engineering, model
              development, evaluation, and predictive analysis while
              contributing to client projects and AI Proof of Concept (POC)
              solutions.
            </p>

            <div className="experience-tags">
              <span>Python</span>
              <span>AI</span>
              <span>Machine Learning</span>
              <span>Data Analysis</span>
              <span>Predictive Modeling</span>
              <span>Computer Vision</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;