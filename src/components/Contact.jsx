import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const templateParams = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    emailjs
      .send(
        "service_ekoxe6n",
        "template_qyvedns",
        templateParams,
        "nrDoilgailQb_Mna2"
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          console.error("Status:", error.status);
          console.error("Text:", error.text);

          setStatus("Failed to send message. Please try again.");
        }
      );
  };

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
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
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

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;