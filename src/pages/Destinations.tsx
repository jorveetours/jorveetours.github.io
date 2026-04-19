import { Link } from 'react-router-dom';
import { destinations, getDestinationPath } from '../data/destinations';
import SEO from '../components/SEO';

export default function Destinations() {
  return (
    <div className="destinations-directory">
      <SEO
        title="Explore World Destinations"
        description="Discover Paris, Tokyo, Rome, London, Dubai, New York, Istanbul, Sydney and more iconic destinations with Jorvee Tours & Travels."
        path="/destinations"
      />
      {/* Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            'url(/images/destinations/world-travel-destinations-hero-banner.jpg)',
        }}
      >
        <div className="hero-content">
          <h1>Our Destinations</h1>
          <p>Explore the world's most iconic cities with Jorvee Tours & Travels</p>
        </div>
      </div>

      {/* Directory Grid */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>World-Class Destinations</h2>
            <p>Each city tells its own unique story. Discover yours.</p>
            <div className="underline"></div>
          </div>

          <div className="directory-grid">
            {destinations.map((dest) => (
              <Link
                to={getDestinationPath(dest)}
                key={dest.slug}
                className="directory-card"
              >
                <div className="card-image">
                  <img src={dest.heroImage} alt={dest.name} loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="card-country">{dest.country}</span>
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                  <div className="card-footer">
                    <span><i className="fas fa-map-marker-alt"></i> {dest.tagline}</span>
                    <span className="explore-link">
                      Explore <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
