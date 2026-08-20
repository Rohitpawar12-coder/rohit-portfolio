import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

function Footer() {
  const GITHUB_URL =
    "https://github.com/Rohitpawar12-coder";

  const LINKEDIN_URL =
    "https://www.linkedin.com/in/rohit-pawar-a2282b351/";

  const EMAIL = "rohitpawar5312@gmail.com";

  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top-line"></div>

      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <button
              className="footer-logo"
              onClick={scrollToTop}
              aria-label="Back to home"
            >
              <span className="footer-logo-mark">R</span>

              <span className="footer-logo-text">
                Rohit<span>.</span>
              </span>
            </button>

            <p>
              AI/ML Engineer & Data Science enthusiast
              focused on building intelligent,
              data-driven solutions.
            </p>

            <div className="footer-availability">
              <span className="footer-status-dot"></span>
              Open to opportunities
            </div>
          </div>

          <div className="footer-navigation">
            <span className="footer-heading">
              NAVIGATION
            </span>

            <div className="footer-nav-grid">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                >
                  {item.label}
                  <ArrowUpRight size={13} />
                </button>
              ))}
            </div>
          </div>

          <div className="footer-connect">
            <span className="footer-heading">
              CONNECT
            </span>

            <div className="footer-social-list">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={17} />
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a href={`mailto:${EMAIL}`}>
                <Mail size={17} />
                <span>Email</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-cta">
          <div className="footer-cta-content">
            <div className="footer-cta-icon">
              <Sparkles size={20} />
            </div>

            <div>
              <span>HAVE AN IDEA?</span>

              <h3>
                Let's build something
                <strong> intelligent.</strong>
              </h3>
            </div>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="footer-cta-button"
          >
            <Mail size={17} />
            <span>Let's Talk</span>
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Rohit Pawar. All rights reserved.
          </p>

          <p className="footer-built">
            Built with
            <span> React</span>
            <span> · </span>
            <span>Vite</span>
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;