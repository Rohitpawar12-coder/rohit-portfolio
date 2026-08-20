import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Mail,
  Sparkles,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            Rohit<span>.</span>
          </div>

          <p>
            Data Science & AI/ML enthusiast building
            practical, data-driven solutions.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-connect">
          <span>CONNECT</span>

          <div className="footer-socials">
            <a
              href="https://github.com/Rohitpawar12-coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={17} />
            </a>

            <a
              href="mailto:rohitpawar120504@gmail.com"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <span>© {currentYear} Rohit Pawar.</span>

          <span className="footer-dot">•</span>

          <span>Designed & Built with React</span>
        </div>

        <div className="footer-status">
          <span className="status-dot"></span>

          <span>Open to opportunities</span>
        </div>

        <button
          type="button"
          className="footer-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span>Back to top</span>

          <ArrowUp size={16} />
        </button>
      </div>

      <div className="footer-accent">
        <Sparkles size={13} />

        <span>Data • AI • Machine Learning • Analytics</span>

        <ArrowUpRight size={13} />
      </div>
    </footer>
  );
}

export default Footer;