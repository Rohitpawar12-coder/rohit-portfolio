function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        {/* PROFILE PHOTO — YAHAN PASTE KARO */}
        <img
          src="WhatsApp Image 2026-07-02 at 8.54.26 PM.jpeg"
          alt="Rohit Pawar"
          className="profile-image"
        />

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

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Download Resume
          </a>
        </div>

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

      </div>
    </section>
  );
}

export default Hero;