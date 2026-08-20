import {
  ArrowDown,
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background */}
      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hero-content">

          <div className="hero-status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-intro">
            <Sparkles size={16} />
            Hello, I'm
          </p>

          <h1>
            Rohit <span>Pawar</span>
          </h1>

          <h2>
            AI/ML Engineer <span>·</span> Data Scientist
          </h2>

          <p className="hero-description">
            I build intelligent machine learning solutions,
            data-driven applications, and interactive analytics
            experiences using Python, SQL, Machine Learning,
            Artificial Intelligence, and Power BI.
          </p>

          <div className="hero-location">
            <MapPin size={16} />
            Pune, Maharashtra, India
          </div>

          <div className="hero-actions">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Let's Connect
              <Mail size={18} />
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/Rohitpawar12-coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <span className="social-text">GH</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className="social-text">in</span>
            </a>

          </div>
        </div>

        {/* =========================
            RIGHT VISUAL
        ========================== */}
        <div className="hero-visual">

          <div className="profile-orbit orbit-one"></div>
          <div className="profile-orbit orbit-two"></div>

          <div className="profile-card">

            <div className="profile-card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-window">

              <p>
                <span className="code-purple">
                  const
                </span>{" "}
                <span className="code-blue">
                  developer
                </span>{" "}
                = {"{"}
              </p>

              <p className="indent">
                <span className="code-blue">
                  name
                </span>
                :{" "}
                <span className="code-green">
                  "Rohit Pawar"
                </span>
                ,
              </p>

              <p className="indent">
                <span className="code-blue">
                  role
                </span>
                :{" "}
                <span className="code-green">
                  "AI/ML Engineer"
                </span>
                ,
              </p>

              <p className="indent">
                <span className="code-blue">
                  skills
                </span>
                : [
              </p>

              <p className="double-indent">
                <span className="code-green">
                  "Python"
                </span>
                ,
              </p>

              <p className="double-indent">
                <span className="code-green">
                  "Machine Learning"
                </span>
                ,
              </p>

              <p className="double-indent">
                <span className="code-green">
                  "Data Science"
                </span>
                ,
              </p>

              <p className="double-indent">
                <span className="code-green">
                  "Power BI"
                </span>
              </p>

              <p className="indent">
                ],
              </p>

              <p className="indent">
                <span className="code-blue">
                  passion
                </span>
                :{" "}
                <span className="code-green">
                  "Turning data into intelligence"
                </span>
              </p>

              <p>
                {"};"}
              </p>

              <span className="code-cursor"></span>

            </div>
          </div>

          {/* Floating badges */}
          <div className="floating-badge badge-python">
            <span>🐍</span>
            Python
          </div>

          <div className="floating-badge badge-ml">
            <span>🤖</span>
            Machine Learning
          </div>

          <div className="floating-badge badge-data">
            <span>📊</span>
            Data Science
          </div>

        </div>
      </div>

      {/* Scroll */}
      <a
        href="#about"
        className="scroll-indicator"
      >
        <span>Scroll to explore</span>
        <ArrowDown size={18} />
      </a>

    </section>
  );
}

export default Hero;