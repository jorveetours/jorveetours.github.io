import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact-section section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-title contact-section-title">
          <h2 id="contact-title">Get In Touch</h2>
          <p>
            Have a question or ready to plan your dream trip? We'd love to hear from you.
          </p>
          <div className="underline"></div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Fill out the form and our travel experts will get back to you within 24 hours.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                </div>
                <div className="details">
                  <h4>Phone</h4>
                  <p><a href="tel:+919873440127">+91 9873440127</a><br /><a href="tel:+918860821547">+91 8860821547</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="details">
                  <h4>Email</h4>
                  <p><a href="mailto:hello@jorveetours.com">hello@jorveetours.com</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </div>
                <div className="details">
                  <h4>Office</h4>
                  <p>Jasola, New Delhi 110025</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-clock" aria-hidden="true"></i>
                </div>
                <div className="details">
                  <h4>Hours</h4>
                  <p>Mon – Fri: 9 AM – 6 PM<br />Sat: 10 AM – 4 PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <h3>Send a Message</h3>

            {submitted && (
              <div className="form-success" role="status" aria-live="polite">
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                Thank you! We'll be in touch soon.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" autoComplete="given-name" placeholder="John" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" autoComplete="family-name" placeholder="Doe" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" autoComplete="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="interest">Interested In</label>
              <select id="interest">
                <option value="">Select a destination or service</option>
                <option value="europe">European Tours</option>
                <option value="asia">Asian Adventures</option>
                <option value="americas">Americas Exploration</option>
                <option value="custom">Custom Trip Planning</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your dream trip..." rows={4} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane" aria-hidden="true"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
