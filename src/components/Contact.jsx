function Contact() {
  return (
    <section id="contact" className="section">

      <div className="section-header">
        <p>GET IN TOUCH</p>

        <h2>
          Let's <span>Connect</span>
        </h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Have a project in mind?</h3>

          <p>
            I am open to opportunities in Artificial Intelligence,
            Machine Learning, Data Science and Data Analytics.
            Feel free to connect with me.
          </p>

          <div className="contact-links">

            <a href="mailto:rohitpawar5312@gmail.com">
              📧 rohitpawar5312@gmail.com
            </a>

            <a
              href="https://github.com/Rohitpawar12-coder"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>

          </div>

        </div>

        <form
          className="contact-form"
          action="mailto:rohitpawar5312@gmail.com"
          method="POST"
          encType="text/plain"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;