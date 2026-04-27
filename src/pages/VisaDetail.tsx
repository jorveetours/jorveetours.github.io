import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  getVisaOffering,
  getVisaRequirements,
  getVisaPath,
  visaOfferings,
} from '../data/visaOfferings';

const commonNotes = [
  'Final approval, visa validity and entry conditions are subject to embassy/consulate decision.',
  'Requirements can change without prior notice based on nationality and travel history.',
  'Additional documents may be requested during verification.',
];

export default function VisaDetail() {
  const { visaSlug } = useParams<{ visaSlug: string }>();
  const visa = getVisaOffering(visaSlug || '');

  if (!visa) {
    return (
      <div className="visa-not-found">
        <h1>Visa Page Not Found</h1>
        <p>Sorry, we could not find the visa page you are looking for.</p>
        <Link to="/visa" className="btn btn-primary visa-not-found-btn">
          Browse Visa Offerings
        </Link>
      </div>
    );
  }

  const requirements = getVisaRequirements(visa);
  const suggested = visaOfferings
    .filter((item) => item.slug !== visa.slug)
    .slice(0, 6);

  return (
    <div className="visa-detail-page">
      <SEO
        title={`${visa.name} Basic Requirements`}
        description={`Check basic requirements, processing time, stay duration and support details for ${visa.name}.`}
        path={getVisaPath(visa)}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: `What are the basic requirements for ${visa.name}?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: requirements.join('. '),
              },
            },
          ],
        }}
      />

      <div className="visa-detail-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/visa">Visa Offerings</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{visa.name}</span>
          </div>
          <h1>{visa.name}</h1>
          <p>Basic visa requirements with assisted filing support from Jorvee Tours.</p>
        </div>
      </div>

      <div className="container visa-detail-content">
        <section className="visa-overview-cards">
          <div className="overview-card">
            <i className="fas fa-file-signature"></i>
            <h3>Visa Type</h3>
            <p>{visa.visaType}</p>
          </div>
          <div className="overview-card">
            <i className="fas fa-clock"></i>
            <h3>Processing Time</h3>
            <p>{visa.processingTime}</p>
          </div>
          <div className="overview-card">
            <i className="fas fa-calendar-day"></i>
            <h3>Stay Duration</h3>
            <p>{visa.stayDuration}</p>
          </div>
          <div className="overview-card">
            <i className="fas fa-user-check"></i>
            <h3>Interview</h3>
            <p>{visa.requiresInterview ? 'Usually Required' : 'Generally Not Required'}</p>
          </div>
        </section>

        <section className="visa-requirements-grid">
          <article className="requirements-card">
            <h2>
              <i className="fas fa-list-check"></i> Basic Requirements
            </h2>
            <ul>
              {requirements.map((item) => (
                <li key={item}>
                  <i className="fas fa-check-circle"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="requirements-card">
            <h2>
              <i className="fas fa-circle-info"></i> Important Notes
            </h2>
            <ul>
              {commonNotes.map((item) => (
                <li key={item}>
                  <i className="fas fa-exclamation-circle"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="visa-support-card">
          <h2>Call Us for Visa Support</h2>
          <p>
            Need help with documentation, form filling, appointment guidance, or travel
            insurance? Our team is ready to assist.
          </p>

          <div className="support-items">
            <div>
              <h4>Phone</h4>
              <p>
                <a href="tel:+919873440127">+91 9873440127</a><br />
                <a href="tel:+918860821547">+91 8860821547</a>
              </p>
            </div>
            <div>
              <h4>Email</h4>
              <p>
                <a href="mailto:hello@jorveetours.com">hello@jorveetours.com</a><br />
                <a href="mailto:support@jorveetours.com">support@jorveetours.com</a>
              </p>
            </div>
            <div>
              <h4>Office</h4>
              <p>Jasola, New Delhi 110025</p>
            </div>
          </div>

          <div className="support-actions">
            <a className="btn btn-primary" href="tel:+919873440127">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a className="btn btn-secondary" href="mailto:support@jorveetours.com">
              <i className="fas fa-envelope"></i> Email Support
            </a>
          </div>
        </section>

        <section className="suggested-visas">
          <h3>Explore More Visa Services</h3>
          <div className="suggested-grid">
            {suggested.map((item) => (
              <Link key={item.slug} to={getVisaPath(item)} className="suggested-item">
                <span>{item.name}</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
