function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hero-small">HELLO, I'M</p>

        <h1>
          Rohit <span>Pawar</span>
        </h1>

        <h2>AI & Data Science Enthusiast</h2>

        <p className="hero-description">
          I build intelligent solutions using Artificial Intelligence,
          Machine Learning and Data Analytics to solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>

          <div className="social-links">
  <a
    href="https://github.com/Rohitpawar12-coder"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a href="mailto:rohitpawar5312@gmail.com">
    Email
  </a>
</div>

          <a href="/resume.pdf" className="btn-secondary">
            Download Resume
          </a>
        </div>

        <div className="hero-stats">
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

export default Hero;