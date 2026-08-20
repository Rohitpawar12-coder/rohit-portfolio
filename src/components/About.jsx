import {
  Brain,
  Database,
  BarChart3,
  Code2,
  ArrowUpRight,
} from "lucide-react";

function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      text: "Building predictive models and intelligent solutions from real-world data.",
    },
    {
      icon: Database,
      title: "Data Science",
      text: "Transforming raw data into meaningful insights using Python and SQL.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      text: "Creating interactive dashboards and business-focused analytics with Power BI.",
    },
    {
      icon: Code2,
      title: "Python Development",
      text: "Developing clean, practical applications and automation using Python.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading">
          <div className="section-label">
            <span></span>
            ABOUT ME
          </div>

          <h2>
            Turning <span>data</span> into
            <br />
            intelligent solutions.
          </h2>

          <p>
            I'm an aspiring AI/ML Engineer and Data Scientist passionate
            about building practical solutions using data, machine learning,
            and modern technologies.
          </p>
        </div>

        {/* Main About Content */}
        <div className="about-main">
          <div className="about-text">
            <p>
              I enjoy working at the intersection of{" "}
              <strong>data, artificial intelligence, and software
              development</strong>.
            </p>

            <p>
              My focus is on understanding real-world problems, working with
              data, developing machine learning models, and turning technical
              results into solutions that people can actually use.
            </p>

            <p>
              I have worked on projects involving{" "}
              <strong>Machine Learning, Deep Learning, Data Analytics,
              Power BI, SQL, and Python</strong>.
            </p>

            <a href="#projects" className="about-link">
              Explore my projects
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat-card">
              <strong>10+</strong>
              <span>Projects Built</span>
            </div>

            <div className="stat-card">
              <strong>5+</strong>
              <span>ML Projects</span>
            </div>

            <div className="stat-card">
              <strong>3+</strong>
              <span>Power BI Dashboards</span>
            </div>

            <div className="stat-card">
              <strong>∞</strong>
              <span>Learning Mindset</span>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="about-highlights">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="about-highlight" key={item.title}>
                <div className="highlight-icon">
                  <Icon size={21} />
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;