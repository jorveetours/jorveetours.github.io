import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-globe-americas" aria-hidden="true"></i>
            </div>
            Jorvee <span>Tours</span>
          </div>
          <p>
            Crafting unforgettable travel experiences since 2010. We believe every journey should be as unique as the traveler.
            Let us turn your dream destination into a cherished memory.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook" title="Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#" aria-label="Instagram" title="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
            <a href="#" aria-label="Twitter" title="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#" aria-label="YouTube" title="YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="footer-column" aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/"><i className="fas fa-chevron-right" aria-hidden="true"></i> Home</Link></li>
            <li><Link to="/about"><i className="fas fa-chevron-right" aria-hidden="true"></i> About Us</Link></li>
            <li><Link to="/destinations"><i className="fas fa-chevron-right" aria-hidden="true"></i> Destinations</Link></li>
            <li><Link to="/visa"><i className="fas fa-chevron-right" aria-hidden="true"></i> Visa Offerings</Link></li>
            <li><Link to="/#contact"><i className="fas fa-chevron-right" aria-hidden="true"></i> Contact Us</Link></li>
          </ul>
        </nav>

        {/* Top Destinations */}
        <nav className="footer-column" aria-label="Top destinations links">
          <h4>Destinations</h4>
          <ul>
            <li><Link to="/destinations/france/paris"><i className="fas fa-chevron-right" aria-hidden="true"></i> Paris</Link></li>
            <li><Link to="/destinations/japan/tokyo"><i className="fas fa-chevron-right" aria-hidden="true"></i> Tokyo</Link></li>
            <li><Link to="/destinations/italy/rome"><i className="fas fa-chevron-right" aria-hidden="true"></i> Rome</Link></li>
            <li><Link to="/destinations/united-kingdom/london"><i className="fas fa-chevron-right" aria-hidden="true"></i> London</Link></li>
            <li><Link to="/destinations/uae/dubai"><i className="fas fa-chevron-right" aria-hidden="true"></i> Dubai</Link></li>
            <li><Link to="/destinations/usa/new-york"><i className="fas fa-chevron-right" aria-hidden="true"></i> New York</Link></li>
          </ul>
        </nav>

        {/* Services */}
        <nav className="footer-column" aria-label="Services links">
          <h4>Services</h4>
          <ul>
            <li><a href="#"><i className="fas fa-chevron-right" aria-hidden="true"></i> Group Tours</a></li>
            <li><a href="#"><i className="fas fa-chevron-right" aria-hidden="true"></i> Private Tours</a></li>
            <li><a href="#"><i className="fas fa-chevron-right" aria-hidden="true"></i> Honeymoon Packages</a></li>
            <li><a href="#"><i className="fas fa-chevron-right" aria-hidden="true"></i> Adventure Trips</a></li>
            <li><a href="#"><i className="fas fa-chevron-right" aria-hidden="true"></i> Corporate Travel</a></li>
            <li><Link to="/visa"><i className="fas fa-chevron-right" aria-hidden="true"></i> Visa Assistance</Link></li>
          </ul>
        </nav>

        {/* Office Address */}
        <div className="footer-office">
          <h4>Head Office</h4>
          <div className="office-item">
            <div className="icon">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            </div>
            <div className="info">
              <h5>Address</h5>
              <p>Jasola, New Delhi 110025</p>
            </div>
          </div>
          <div className="office-item">
            <div className="icon">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
            </div>
            <div className="info">
              <h5>Phone</h5>
              <p><a href="tel:+919873440127">+91 9873440127</a><br /><a href="tel:+918860821547">+91 8860821547</a></p>
            </div>
          </div>
          <div className="office-item">
            <div className="icon">
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="info">
              <h5>Email</h5>
              <p><a href="mailto:hello@jorveetours.com">hello@jorveetours.com</a><br /><a href="mailto:support@jorveetours.com">support@jorveetours.com</a></p>
            </div>
          </div>
          <div className="office-item">
            <div className="icon">
              <i className="fas fa-clock" aria-hidden="true"></i>
            </div>
            <div className="info">
              <h5>Working Hours</h5>
              <p>Mon – Fri: 9:00 AM – 6:00 PM<br />Saturday: 10:00 AM – 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jorvee Tours & Travels. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
