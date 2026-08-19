function Navbar() {
  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Certifications", "certifications"],
    ["Contact", "contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Rohit<span>.</span>
      </a>

      <div className="nav-links">
        {links.map(([name, id]) => (
          <a href={`#${id}`} key={id}>
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;