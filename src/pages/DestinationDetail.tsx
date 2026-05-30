import { useParams, Link } from 'react-router-dom';
import { getDestination, getSisterCities, getDestinationPath } from '../data/destinations';
import { getVisaOfferingByDestinationCountry, getVisaPath } from '../data/visaOfferings';
import SEO from '../components/SEO';

export default function DestinationDetail() {
  const { countrySlug, slug } = useParams<{ countrySlug: string; slug: string }>();
  const dest = getDestination(countrySlug || '', slug || '');

  if (!dest) {
    return (
      <div className="destination-not-found">
        <h1>Destination Not Found</h1>
        <p>Sorry, we couldn't find the destination you're looking for.</p>
        <Link to="/destinations" className="btn btn-primary destination-not-found-btn">
          Browse All Destinations
        </Link>
      </div>
    );
  }

  const sisters = getSisterCities(dest.sisterCities);
  const visaOffering = getVisaOfferingByDestinationCountry(dest.countrySlug);

  return (
    <div className="destination-page">
      <SEO
        title={`${dest.name}, ${dest.country} — Travel Guide`}
        description={dest.description}
        path={getDestinationPath(dest)}
        image={dest.heroImage.startsWith('http') ? dest.heroImage : dest.heroImage}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: dest.name,
          description: dest.description,
          image: dest.heroImage.startsWith('http') ? dest.heroImage : `https://jorveetours.github.io${dest.heroImage}`,
          url: `https://jorveetours.github.io${getDestinationPath(dest)}`,
          containedInPlace: { '@type': 'Country', name: dest.country },
          touristType: 'Sightseeing',
          provider: {
            '@type': 'TravelAgency',
            name: 'Jorvee Tours & Travels',
            url: 'https://jorveetours.github.io',
          },
        }}
      />

      <div className="dest-hero">
        <img className="dest-hero-image" src={dest.heroImage} alt="" aria-hidden="true" />
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right breadcrumb-separator" aria-hidden="true"></i>
            <Link to="/destinations">Destinations</Link>
            <i className="fas fa-chevron-right breadcrumb-separator" aria-hidden="true"></i>
            <span>{dest.country}</span>
            <i className="fas fa-chevron-right breadcrumb-separator" aria-hidden="true"></i>
            <span>{dest.name}</span>
          </div>
          <h1>{dest.name}</h1>
          <div className="hero-meta">
            <div className="meta-item">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i> {dest.country}
            </div>
            <div className="meta-item">
              <i className="fas fa-tag" aria-hidden="true"></i> {dest.tagline}
            </div>
            <div className="meta-item">
              <i className="fas fa-plane" aria-hidden="true"></i> {dest.nearestAirport.split('—')[0].trim()}
            </div>
          </div>
        </div>
      </div>

      <div className="dest-content">
        <section className="dest-about" aria-labelledby="destination-about-heading">
          <h2 id="destination-about-heading"><i className="fas fa-info-circle" aria-hidden="true"></i> About {dest.name}</h2>
          <div className="about-text">
            <p>{dest.description}</p>
          </div>
        </section>

        <section className="dest-history" aria-labelledby="destination-history-heading">
          <h2 id="destination-history-heading"><i className="fas fa-landmark" aria-hidden="true"></i> Historic Background</h2>
          <p>{dest.history}</p>
        </section>

        <section className="dest-gallery" aria-labelledby="destination-gallery-heading">
          <h2 id="destination-gallery-heading"><i className="fas fa-camera" aria-hidden="true"></i> Photo Gallery</h2>
          <div className="gallery-grid">
            {dest.images.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img.url} alt={img.caption} loading="lazy" />
                <div className="gallery-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="dest-info-grid">
          <div className="info-card">
            <h3><i className="fas fa-map-signs" aria-hidden="true"></i> Places to Visit</h3>
            <ul>
              {dest.placesToVisit.map((place, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  {place}
                </li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3><i className="fas fa-utensils" aria-hidden="true"></i> Food to Try</h3>
            <ul>
              {dest.foodToTry.map((food, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  {food}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dest-info-grid dest-info-grid-single">
          <div className="info-card">
            <h3><i className="fas fa-eye" aria-hidden="true"></i> Must See Experiences</h3>
            <ul>
              {dest.mustSee.map((item, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dest-travel-info">
          <div className="travel-card">
            <div className="icon"><i className="fas fa-calendar-alt" aria-hidden="true"></i></div>
            <h3>Best Time to Travel</h3>
            <p>{dest.bestTimeToTravel}</p>
          </div>
          <div className="travel-card">
            <div className="icon"><i className="fas fa-plane-departure" aria-hidden="true"></i></div>
            <h3>Nearest Airport</h3>
            <p>{dest.nearestAirport}</p>
          </div>
          <div className="travel-card">
            <div className="icon"><i className="fas fa-train" aria-hidden="true"></i></div>
            <h3>Nearest Railway</h3>
            <p>{dest.nearestRailway}</p>
          </div>
        </div>

        {visaOffering && (
          <section className="dest-visa-cta" aria-labelledby="destination-visa-heading">
            <div className="visa-copy">
              <h2 id="destination-visa-heading"><i className="fas fa-passport" aria-hidden="true"></i> Visa for {dest.country}</h2>
              <p>
                Planning your {dest.name} trip? Read the basic visa process, required
                documents, and support details for {visaOffering.name}.
              </p>
            </div>
            <Link to={getVisaPath(visaOffering)} className="btn btn-secondary">
              Read Visa Process <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </section>
        )}

        {sisters.length > 0 && (
          <section className="sister-cities" aria-labelledby="sister-cities-heading">
            <h2 id="sister-cities-heading">Explore More Destinations</h2>
            <p className="sister-subtitle">
              If you love {dest.name}, you'll also enjoy these incredible cities
            </p>
            <div className="sister-grid">
              {sisters.map((city) => (
                <Link
                  to={getDestinationPath(city)}
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

