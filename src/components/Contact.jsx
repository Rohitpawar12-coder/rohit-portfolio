import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const GITHUB_URL =
    "https://github.com/Rohitpawar12-coder";

  const LINKEDIN_URL =
    "https://www.linkedin.com/in/rohit-pawar-a2282b351/";

  const EMAIL = "rohitpawar5312@gmail.com";
  const PHONE = "8767659968";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      await emailjs.send(
        "service_ekoxe6n",
        "template_qyvedns",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        "nrDoilgailQb_Mna2"
      );

      setStatus({
        type: "success",
        message:
          "Message sent successfully. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send the message right now. Please email me directly.",
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <div className="contact-grid"></div>
        <div className="contact-glow contact-glow-one"></div>
        <div className="contact-glow contact-glow-two"></div>
      </div>

      <div className="container contact-container">
        <div className="section-heading contact-heading">
          <div className="section-eyebrow">
            <span className="eyebrow-line"></span>
            <span>Let's Connect</span>
          </div>

          <h2>
            Have a Project or
            <span> Opportunity?</span>
          </h2>

          <p>
            I'm open to AI/ML opportunities, data-driven
            projects, internships, collaborations, and
            conversations about technology.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-intro">
              <div className="contact-intro-icon">
                <Sparkles size={23} />
              </div>

              <div>
                <span>AVAILABLE FOR OPPORTUNITIES</span>

                <h3>
                  Let's build something
                  <strong> meaningful.</strong>
                </h3>
              </div>
            </div>

            <p className="contact-description">
              Whether you're looking for an AI/ML enthusiast,
              data science contributor, or someone to work on
              a technical project, feel free to reach out.
            </p>

            <div className="contact-details">
              <a
                href={`mailto:${EMAIL}`}
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Mail size={19} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>{EMAIL}</strong>
                </div>

                <ArrowUpRight size={17} />
              </a>

              <a
                href={`tel:${PHONE}`}
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Phone size={19} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>{PHONE}</strong>
                </div>

                <ArrowUpRight size={17} />
              </a>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    Pune, Maharashtra, India
                  </strong>
                </div>
              </div>
            </div>

            <div className="contact-social-area">
              <span>FIND ME ONLINE</span>

              <div className="contact-socials">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Code2 size={19} />
                  <span>GitHub</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Linkedin size={19} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <div>
                <span>START A CONVERSATION</span>

                <h3>Send me a message</h3>
              </div>

              <div className="form-status-dot"></div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project, opportunity, or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`form-message form-message-${status.type}`}
                >
                  {status.type === "success" && (
                    <CheckCircle2 size={17} />
                  )}

                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={status.type === "loading"}
              >
                <span>
                  {status.type === "loading"
                    ? "Sending..."
                    : "Send Message"}
                </span>

                <Send size={17} />
              </button>
            </form>
          </div>
        </div>

        <div className="contact-bottom">
          <div>
            <span>OPEN TO NEW OPPORTUNITIES</span>

            <h3>
              Let's turn ideas into
              <strong> intelligent solutions.</strong>
            </h3>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="contact-email-button"
          >
            <Mail size={18} />
            <span>Email Me</span>
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;