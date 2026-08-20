import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.getBoundingClientRect().top;

        if (top <= 180) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    setIsOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <button
          className="navbar-logo"
          onClick={() => handleNavigation("home")}
        >
          <span className="logo-mark">R</span>

          <span className="logo-text">
            Rohit<span>.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={
                activeSection === item.id
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">

          <a
            href="https://github.com/Rohitpawar12-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            aria-label="GitHub"
          >
            <span className="social-text">GH</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            aria-label="LinkedIn"
          >
            <span className="social-text">in</span>
          </a>

          <button
            className="nav-contact-btn"
            onClick={() => handleNavigation("contact")}
          >
            Let's Talk
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? "mobile-nav-open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={
              activeSection === item.id
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
            onClick={() => handleNavigation(item.id)}
          >
            {item.label}
          </button>
        ))}

        <div className="mobile-socials">

          <a
            href="https://github.com/Rohitpawar12-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-text">GH</span>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-text">in</span>
            LinkedIn
          </a>

        </div>
      </div>
    </header>
  );
}

export default Navbar;