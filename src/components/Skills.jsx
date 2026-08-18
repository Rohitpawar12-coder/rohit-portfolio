function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "JavaScript"],
    },
    {
      title: "Data Science",
      skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Data Analysis"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
        "Computer Vision",
        "TensorFlow",
        "YOLO",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <p>MY EXPERTISE</p>
        <h2>Technical <span>Skills</span></h2>
      </div>

      <div className="skills-grid">
        {categories.map((category) => (
          <div className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;