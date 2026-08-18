function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Passionate about AI, Data & Technology</h3>

          <p>
            I'm a Computer Engineering student with a strong interest in
            Artificial Intelligence, Machine Learning and Data Science.
          </p>

          <p>
            I enjoy transforming data into meaningful insights and building
            intelligent solutions that can solve real-world problems.
          </p>

          <p>
            I'm continuously improving my technical skills through practical
            projects and hands-on learning.
          </p>
        </div>

        <div className="about-card">
          <div>
            <strong>BE</strong>
            <span>Computer Engineering</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>Artificial Intelligence</span>
          </div>

          <div>
            <strong>ML</strong>
            <span>Machine Learning</span>
          </div>

          <div>
            <strong>DS</strong>
            <span>Data Science</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;