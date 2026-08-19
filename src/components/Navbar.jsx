import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo + Name */}
      <a href="#home" className="logo" onClick={closeMenu}>
        <img src="/logo.jpeg" alt="Rohit Logo" />
        <span>ROHIT</span>
      </a>

      {/* Desktop Navigation */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certificates</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile Menu */}
      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {isOpen && (
        <div className="mobile-nav">

          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#certifications" onClick={closeMenu}>Certificates</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;