import { Link } from 'react-router-dom';
import { homeFaqItems } from '../data/homeFaq';

export default function HomeFAQ() {
  return (
    <section className="home-faq section" aria-labelledby="home-faq-title">
      <div className="container">
        <div className="section-title">
          <h2 id="home-faq-title">Frequently Asked Questions</h2>
          <p>
            Practical answers to common travel planning questions, so you can book with confidence.
          </p>
          <div className="underline"></div>
        </div>

        <div className="home-faq-list">
          {homeFaqItems.map((item) => (
            <details className="home-faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <p className="faq-quick-links">
          Explore more: <Link to="/destinations">International Destinations</Link>,{' '}
          <Link to="/destinations/india">India Destinations</Link>,{' '}
          <Link to="/services/honeymoon-packages">Honeymoon Packages</Link>,{' '}
          <Link to="/services/adventure-trips">Adventure Trips</Link>, and{' '}
          <Link to="/services/group-tours">Group Tours</Link>.
        </p>
      </div>
    </section>
  );
}