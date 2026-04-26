import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getVisaPath, visaOfferings } from '../data/visaOfferings';

export default function VisaOfferings() {
  return (
    <div className="visa-directory">
      <SEO
        title="Visa Offerings"
        description="Explore visa support for Australia, UK, UAE, Europe, Asia and more. View basic visa requirements country by country with Jorvee Tours & Travels."
        path="/visa"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Visa Assistance',
          provider: {
            '@type': 'TravelAgency',
            name: 'Jorvee Tours & Travels',
            telephone: '+919873440127',
            url: 'https://jorveetours.github.io',
          },
        }}
      />

      <div className="page-hero visa-hero">
        <div className="hero-content">
          <h1>Visa Offerings</h1>
          <p>Country-wise visa support with guided documentation and filing help</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Choose Your Destination Country</h2>
            <p>
              Select any country below to view basic visa requirements and start your
              application with expert support.
            </p>
            <div className="underline"></div>
          </div>

          <div className="visa-support-banner">
            <div>
              <h3>Need Help Right Now?</h3>
              <p>
                Call our visa desk at <a href="tel:+919873440127">+91 9873440127</a> or{' '}
                <a href="tel:+918860821547">+91 8860821547</a>
              </p>
            </div>
            <a className="btn btn-secondary" href="tel:+919873440127">
              <i className="fas fa-phone-alt"></i> Call Us for Support
            </a>
          </div>

          <div className="visa-grid">
            {visaOfferings.map((visa) => (
              <Link key={visa.slug} to={getVisaPath(visa)} className="visa-card">
                <div className="visa-card-top">
                  <span className="visa-region">{visa.region}</span>
                  <span className="visa-processing">{visa.processingTime}</span>
                </div>
                <h3>{visa.name}</h3>
                <p>{visa.visaType}</p>
                <div className="visa-meta">
                  <span>
                    <i className="fas fa-calendar-check"></i> {visa.stayDuration}
                  </span>
                  <span>
                    <i className="fas fa-passport"></i> {visa.entryType}
                  </span>
                </div>
                <div className="explore-link">
                  View basic requirements <i className="fas fa-arrow-right"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
