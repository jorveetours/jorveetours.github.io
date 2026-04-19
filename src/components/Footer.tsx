import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-globe-americas"></i>
            </div>
            Jorvee <span>Tours</span>
          </div>
          <p>
            Crafting unforgettable travel experiences since 2010. We believe every journey should be as unique as the traveler.
            Let us turn your dream destination into a cherished memory.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
            <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
            <li><Link to="/destinations"><i className="fas fa-chevron-right"></i> Destinations</Link></li>
            <li><Link to="/#contact"><i className="fas fa-chevron-right"></i> Contact Us</Link></li>
          </ul>
        </div>

        {/* Top Destinations */}
        <div className="footer-column">
          <h4>Destinations</h4>
          <ul>
            <li><Link to="/destinations/france/paris"><i className="fas fa-chevron-right"></i> Paris</Link></li>
            <li><Link to="/destinations/japan/tokyo"><i className="fas fa-chevron-right"></i> Tokyo</Link></li>
            <li><Link to="/destinations/italy/rome"><i className="fas fa-chevron-right"></i> Rome</Link></li>
            <li><Link to="/destinations/united-kingdom/london"><i className="fas fa-chevron-right"></i> London</Link></li>
            <li><Link to="/destinations/uae/dubai"><i className="fas fa-chevron-right"></i> Dubai</Link></li>
            <li><Link to="/destinations/usa/new-york"><i className="fas fa-chevron-right"></i> New York</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#"><i className="fas fa-chevron-right"></i> Group Tours</a></li>
            <li><a href="#"><i className="fas fa-chevron-right"></i> Private Tours</a></li>
            <li><a href="#"><i className="fas fa-chevron-right"></i> Honeymoon Packages</a></li>
            <li><a href="#"><i className="fas fa-chevron-right"></i> Adventure Trips</a></li>
            <li><a href="#"><i className="fas fa-chevron-right"></i> Corporate Travel</a></li>
            <li><a href="#"><i className="fas fa-chevron-right"></i> Visa Assistance</a></li>
          </ul>
        </div>

        {/* Office Address */}
        <div className="footer-office">
          <h4>Head Office</h4>
          <div className="office-item">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info">
              <h5>Address</h5>
              <p>Jasola, New Delhi 110025</p>
            </div>
          </div>
          <div className="office-item">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="info">
              <h5>Phone</h5>
              <p>+91 9873440127<br />+91 8860821547</p>
            </div>
          </div>
          <div className="office-item">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info">
              <h5>Email</h5>
              <p>hello@jorveetours.com<br />support@jorveetours.com</p>
            </div>
          </div>
          <div className="office-item">
            <div className="icon">
              <i className="fas fa-clock"></i>
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
