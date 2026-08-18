function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <p>GET IN TOUCH</p>
        <h2>Let's <span>Connect</span></h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Have a project or opportunity?</h3>

          <p>
            I'm open to internships, entry-level opportunities,
            collaborations and interesting AI & Data Science projects.
          </p>

          <div className="contact-links">
            <a href="mailto:rohitpawar5312@gmail.com">
              📧 rohitpawar5312@gmail.com
            </a>

            <a
              href=" https://github.com/Rohitpawar12-coder"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href=" https://www.linkedin.com/in/rohit-pawar-a2282b351"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          />

          <button type="submit">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;