import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Certifications", "certifications"],
    ["Contact", "contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        ROHIT<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map(([name, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </a>
        ))}
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;