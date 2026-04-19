import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';

export default function TopDestinations() {
  // Show first 8 destinations (4x2 grid = "4x4 tiles" as 4 columns)
  const topDests = destinations.slice(0, 8);

  return (
    <section className="top-destinations section">
      <div className="container">
        <div className="section-title">
          <h2>Top Destinations</h2>
          <p>Discover the world's most captivating cities, handpicked by our travel experts for unforgettable experiences.</p>
          <div className="underline"></div>
        </div>

        <div className="destinations-grid">
          {topDests.map((dest) => (
            <Link to={`/destinations/${dest.slug}`} key={dest.slug} className="destination-card">
              <img
                src={dest.heroImage}
                alt={dest.name}
                className="card-image"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-content">
                <span className="card-country">{dest.country}</span>
                <h3>{dest.name}</h3>
                <div className="card-meta">
                  <span><i className="fas fa-map-marker-alt"></i> {dest.tagline}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
