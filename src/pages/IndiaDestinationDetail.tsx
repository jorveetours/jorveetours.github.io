import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  getIndiaCityDestination,
  getIndiaCityPath,
  getIndiaCitiesByState,
} from '../data/indiaDestinations';

export default function IndiaDestinationDetail() {
  const { stateSlug, citySlug } = useParams<{ stateSlug: string; citySlug: string }>();
  const city = getIndiaCityDestination(stateSlug || '', citySlug || '');

  if (!city) {
    return (
      <div className="india-city-not-found">
        <h1>City Page Not Found</h1>
        <p>We could not find this city in our India destination directory.</p>
        <Link to="/destinations/india" className="btn btn-primary india-city-not-found-btn">
          Browse India Destinations
        </Link>
      </div>
    );
  }

  const sisterCities = getIndiaCitiesByState(city.stateSlug)
    .filter((entry) => entry.citySlug !== city.citySlug)
    .slice(0, 4);

  return (
    <div className="destination-page india-city-page">
      <SEO
        title={`${city.cityName}, ${city.stateName}, India — Travel Guide`}
        description={city.description}
        path={getIndiaCityPath(city)}
      />

      <div className="dest-hero india-city-hero">
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/destinations">Destinations</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/destinations/india">India</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{city.stateName}</span>
            <i className="fas fa-chevron-right"></i>
            <span>{city.cityName}</span>
          </div>
          <h1>{city.cityName}</h1>
          <div className="hero-meta">
            <div className="meta-item">
              <i className="fas fa-map-marker-alt"></i> {city.stateName}, India
            </div>
            <div className="meta-item">
              <i className="fas fa-tag"></i> {city.tagline}
            </div>
            <div className="meta-item">
              <i className="fas fa-plane"></i> {city.nearestAirport}
            </div>
          </div>
        </div>
      </div>

      <div className="dest-content">
        <section className="dest-about">
          <h2><i className="fas fa-info-circle"></i> About {city.cityName}</h2>
          <div className="about-text">
            <p>{city.description}</p>
          </div>
        </section>

        <div className="dest-info-grid">
          <div className="info-card">
            <h3><i className="fas fa-map-signs"></i> Top Experiences</h3>
            <ul>
              {city.highlights.map((item) => (
                <li key={item}>
                  <i className="fas fa-check-circle"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3><i className="fas fa-utensils"></i> Food to Try</h3>
            <ul>
              {city.foodToTry.map((item) => (
                <li key={item}>
                  <i className="fas fa-check-circle"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="india-faith-heritage">
          <h2><i className="fas fa-landmark"></i> Faith, Heritage and Annual Cultural Event</h2>
          <div className="india-cultural-grid">
            <div className="cultural-item">
              <h4><i className="fas fa-place-of-worship"></i> Famous Temple</h4>
              <p>{city.culture.temple}</p>
            </div>
            <div className="cultural-item">
              <h4><i className="fas fa-mosque"></i> Famous Mosque</h4>
              <p>{city.culture.mosque}</p>
            </div>
            <div className="cultural-item">
              <h4><i className="fas fa-church"></i> Famous Church</h4>
              <p>{city.culture.church}</p>
            </div>
            <div className="cultural-item">
              <h4><i className="fas fa-khanda"></i> Famous Gurudwara</h4>
              <p>{city.culture.gurudwara}</p>
            </div>
            <div className="cultural-item">
              <h4><i className="fas fa-tree"></i> Famous Park</h4>
              <p>{city.culture.park}</p>
            </div>
            <div className="cultural-item">
              <h4><i className="fas fa-monument"></i> Historical Site</h4>
              <p>{city.culture.historicalSite}</p>
            </div>
            <div className="cultural-item annual-event">
              <h4><i className="fas fa-calendar-star"></i> Yearly Cultural Event</h4>
              <p>{city.culture.annualCulturalEvent}</p>
            </div>
          </div>
        </section>

        <div className="dest-travel-info">
          <div className="travel-card">
            <div className="icon"><i className="fas fa-calendar-alt"></i></div>
            <h3>Best Time to Travel</h3>
            <p>{city.bestTimeToTravel}</p>
          </div>
          <div className="travel-card">
            <div className="icon"><i className="fas fa-plane-departure"></i></div>
            <h3>Nearest Airport</h3>
            <p>{city.nearestAirport}</p>
          </div>
          <div className="travel-card">
            <div className="icon"><i className="fas fa-train"></i></div>
            <h3>Nearest Railway</h3>
            <p>{city.nearestRailway}</p>
          </div>
        </div>

        {sisterCities.length > 0 && (
          <section className="sister-cities">
            <h2>More Cities in {city.stateName}</h2>
            <p className="sister-subtitle">Explore other major destinations in this state</p>
            <div className="sister-grid india-sister-grid">
              {sisterCities.map((entry) => (
                <Link to={getIndiaCityPath(entry)} key={entry.citySlug} className="sister-card">
                  <img src={entry.heroImage} alt={entry.cityName} loading="lazy" />
                  <div className="sister-overlay">
                    <div className="sister-info">
                      <span>{entry.stateName}</span>
                      <h4>{entry.cityName}</h4>
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
