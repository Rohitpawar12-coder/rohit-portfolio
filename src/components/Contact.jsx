import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const GITHUB_URL = "https://github.com/Rohitpawar12-coder";
  const LINKEDIN_URL = "https://www.linkedin.com/in/rohit-pawar-a2282b351/";
  const EMAIL = "rohitpawar5312@gmail.com";

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!form.current || isSending) return;

    setIsSending(true);
    setStatus("Sending...");

    const templateParams = {
      name: form.current.name.value.trim(),
      email: form.current.email.value.trim(),
      message: form.current.message.value.trim(),
    };

    try {
      await emailjs.send(
        "service_ekoxe6n",
        "template_qyvedns",
        templateParams,
        "nrDoilgailQb_Mna2"
      );

      setStatus("Message sent successfully! ✅");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        "Failed to send message. Please try again or email me directly."
      );
    } finally {
      setIsSending(false);
    }
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
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Have a project in mind?</h3>

          <p>
            I am open to opportunities in Artificial Intelligence,
            Machine Learning, Data Science, and Data Analytics.
            Feel free to connect with me.
          </p>

          <div className="contact-links">
            <a href={`mailto:${EMAIL}`}>
              📧 {EMAIL}
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            required
            disabled={isSending}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
            required
            disabled={isSending}
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            disabled={isSending}
          />

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message →"}
          </button>

          {status && (
            <p
              className="form-status"
              role="status"
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;