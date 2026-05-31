import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/destinations/india', label: 'India Destinations' },
  { to: '/visa', label: 'Visa Offerings' },
];

const policyLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-of-service', label: 'Terms of Service' },
  { to: '/cookie-policy', label: 'Cookie Policy' },
];

const serviceLinks = [
  { to: '/services/group-tours', label: 'Group Tours' },
  { to: '/services/private-tours', label: 'Private Tours' },
  { to: '/services/honeymoon-packages', label: 'Honeymoon Packages' },
  { to: '/services/adventure-trips', label: 'Adventure Trips' },
  { to: '/services/corporate-travel', label: 'Corporate Travel' },
];

export default function SitemapPage() {
  return (
    <div className="legal-page">
      <SEO
        title="Sitemap"
        description="Browse key pages of Jorvee Tours & Travels including destination guides, visa offerings, and legal policy pages."
        path="/sitemap"
      />

      <div className="page-hero legal-hero">
        <div className="hero-content">
          <h1>Sitemap</h1>
          <p>Quick navigation to important sections of our website.</p>
        </div>
      </div>

      <section className="section legal-section">
        <div className="container legal-container">
          <h2>Main Pages</h2>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <h2>Policy Pages</h2>
          <ul>
            {policyLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <h2>Service Pages</h2>
          <ul>
            {serviceLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <h2>Machine Sitemap</h2>
          <p>
            For search engines and technical reference, use the XML sitemap: <a href="/sitemap.xml">/sitemap.xml</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
