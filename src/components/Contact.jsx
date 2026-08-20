import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "rohitpawar5312@gmail.com",
    href: "mailto:rohitpawar5312@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 87676 59968",
    href: "tel:+918767659968",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setSubmitted(false);
    setError("");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,

      // Additional variables for your EmailJS template
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      to_email: "rohitpawar5312@gmail.com",
    };

    try {
      await emailjs.send(
        "service_ekoxe6n",
        "template_qyvedns",
        templateParams,
        "nrDoilgailQb_Mna2"
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Message could not be sent. Please try again or contact me directly by email."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <p>CONTACT</p>

        <h2>
          Let's Build Something <span>Meaningful.</span>
        </h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-badge">
            <Sparkles size={15} />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <h3>
            Have a project,
            <br />
            idea, or opportunity?
          </h3>

          <p>
            I'm interested in opportunities involving Data Science,
            Artificial Intelligence, Machine Learning, and Data
            Analytics. Feel free to reach out and let's connect.
          </p>

          <div className="contact-links">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  href={item.href}
                  key={item.label}
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <Icon size={18} />
                  </span>

                  <span className="contact-detail-content">
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>

                  <ArrowUpRight size={16} />
                </a>
              );
            })}
          </div>

          <div className="contact-social-card">
            <Code2 size={19} />

            <div>
              <span>GITHUB</span>

              <a
                href="https://github.com/Rohitpawar12-coder"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Rohitpawar12-coder
              </a>
            </div>

            <ArrowUpRight size={16} />
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <div>
              <span>START A CONVERSATION</span>

              <h3>Send me a message</h3>
            </div>

            <div className="contact-form-icon">
              <Send size={20} />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={sending}
            >
              <span>
                {sending ? "Sending..." : "Send Message"}
              </span>

              <Send size={17} />
            </button>

            {submitted && (
              <div className="contact-success">
                <CheckCircle2 size={17} />

                <span>
                  Message sent successfully! I'll get back to you soon.
                </span>
              </div>
            )}

            {error && (
              <div className="contact-error">
                <span>{error}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;