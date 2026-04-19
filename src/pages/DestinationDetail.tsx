import { useParams, Link } from 'react-router-dom';
import { getDestination, getSisterCities } from '../data/destinations';

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const dest = getDestination(slug || '');

  if (!dest) {
    return (
      <div style={{ marginTop: 120, textAlign: 'center', padding: 40 }}>
        <h1>Destination Not Found</h1>
        <p>Sorry, we couldn't find the destination you're looking for.</p>
        <Link to="/destinations" className="btn btn-primary" style={{ marginTop: 20 }}>
          Browse All Destinations
        </Link>
      </div>
    );
  }

  const sisters = getSisterCities(dest.sisterCities);

  return (
    <div className="destination-page">
      {/* Hero */}
      <div
        className="dest-hero"
        style={{ backgroundImage: `url(${dest.heroImage})` }}
      >
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right" style={{ fontSize: '0.7rem' }}></i>
            <Link to="/destinations">Destinations</Link>
            <i className="fas fa-chevron-right" style={{ fontSize: '0.7rem' }}></i>
            <span>{dest.name}</span>
          </div>
          <h1>{dest.name}</h1>
          <div className="hero-meta">
            <div className="meta-item">
              <i className="fas fa-map-marker-alt"></i> {dest.country}
            </div>
            <div className="meta-item">
              <i className="fas fa-tag"></i> {dest.tagline}
            </div>
            <div className="meta-item">
              <i className="fas fa-plane"></i> {dest.nearestAirport.split('—')[0].trim()}
            </div>
          </div>
        </div>
      </div>

      <div className="dest-content">
        {/* About */}
        <section className="dest-about">
          <h2><i className="fas fa-info-circle"></i> About {dest.name}</h2>
          <div className="about-text">
            <p>{dest.description}</p>
          </div>
        </section>

        {/* History */}
        <section className="dest-history">
          <h2><i className="fas fa-landmark"></i> Historic Background</h2>
          <p>{dest.history}</p>
        </section>

        {/* Gallery */}
        <section className="dest-gallery">
          <h2><i className="fas fa-camera"></i> Photo Gallery</h2>
          <div className="gallery-grid">
            {dest.images.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img.url} alt={img.caption} loading="lazy" />
                <div className="gallery-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Places to Visit & Food */}
        <div className="dest-info-grid">
          <div className="info-card">
            <h3><i className="fas fa-map-signs"></i> Places to Visit</h3>
            <ul>
              {dest.placesToVisit.map((place, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i>
                  {place}
                </li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3><i className="fas fa-utensils"></i> Food to Try</h3>
            <ul>
              {dest.foodToTry.map((food, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i>
                  {food}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Must See */}
        <div className="dest-info-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="info-card">
            <h3><i className="fas fa-eye"></i> Must See Experiences</h3>
            <ul>
              {dest.mustSee.map((item, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Travel Info Cards */}
        <div className="dest-travel-info">
          <div className="travel-card">
            <div className="icon"><i className="fas fa-calendar-alt"></i></div>
            <h3>Best Time to Travel</h3>
            <p>{dest.bestTimeToTravel}</p>
          </div>
          <div className="travel-card">
            <div className="icon"><i className="fas fa-plane-departure"></i></div>
            <h3>Nearest Airport</h3>
            <p>{dest.nearestAirport}</p>
          </div>
          <div className="travel-card">
            <div className="icon"><i className="fas fa-train"></i></div>
            <h3>Nearest Railway</h3>
            <p>{dest.nearestRailway}</p>
          </div>
        </div>

        {/* Sister Cities */}
        {sisters.length > 0 && (
          <section className="sister-cities">
            <h2>Explore More Destinations</h2>
            <p className="sister-subtitle">
              If you love {dest.name}, you'll also enjoy these incredible cities
            </p>
            <div className="sister-grid">
              {sisters.map((city) => (
                <Link
                  to={`/destinations/${city.slug}`}
                  key={city.slug}
                  className="sister-card"
                >
                  <img src={city.heroImage} alt={city.name} loading="lazy" />
                  <div className="sister-overlay">
                    <div className="sister-info">
                      <span>{city.country}</span>
                      <h4>{city.name}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
