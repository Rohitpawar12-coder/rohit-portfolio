import {
  Brain,
  Code2,
  Database,
  BarChart3,
  Cpu,
  Wrench,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      icon: Code2,
      title: "Programming",
      description: "Languages and development fundamentals",
      skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Building intelligent predictive solutions",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Scikit-learn",
        "TensorFlow",
        "NLP",
      ],
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Working with data from exploration to insights",
      skills: [
        "Pandas",
        "NumPy",
        "Data Cleaning",
        "EDA",
        "Feature Engineering",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Transforming data into business insights",
      skills: [
        "Power BI",
        "DAX",
        "Excel",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      icon: Cpu,
      title: "AI Technologies",
      description: "Modern AI and neural network technologies",
      skills: [
        "CNN",
        "RNN",
        "LSTM",
        "Transfer Learning",
        "BERT",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      description: "Development and collaboration tools",
      skills: [
        "Git",
        "GitHub",
        "Jupyter",
        "VS Code",
        "MySQL",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-heading skills-heading">
          <div className="section-label">
            <span></span>
            TECHNICAL SKILLS
          </div>

          <h2>
            Tools I use to
            <br />
            <span>build & analyze.</span>
          </h2>

          <p>
            A practical technology stack focused on machine learning,
            artificial intelligence, data science, and business analytics.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                className="skill-card"
                key={group.title}
              >
                <div className="skill-card-header">

                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>

                </div>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span
                      className="skill-pill"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Tech Strip */}
        <div className="skills-bottom">
          <span>Currently learning</span>

          <div className="learning-list">
            <span>Generative AI</span>
            <span>LLMs</span>
            <span>AI Agents</span>
            <span>MLOps</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;