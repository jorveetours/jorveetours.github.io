import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="section-title" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff' }}>Get In Touch</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
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
                  <i className="fas fa-phone"></i>
                </div>
                <div className="details">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="details">
                  <h4>Email</h4>
                  <p>hello@jorveetours.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="details">
                  <h4>Office</h4>
                  <p>42 Wanderlust Avenue, Suite 200<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-clock"></i>
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            {submitted && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '20px',
                fontSize: '0.9rem'
              }}>
                <i className="fas fa-check-circle" style={{ marginRight: 8 }}></i>
                Thank you! We'll be in touch soon.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="John" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
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
              <textarea id="message" placeholder="Tell us about your dream trip..." rows={4} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
