import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getIndiaCitiesByState, getIndiaCityPath, indiaStates } from '../data/indiaDestinations';

export default function IndiaDestinations() {
  return (
    <div className="india-destinations">
      <SEO
        title="India Destinations by State and City"
        description="Explore India travel destinations across all 28 states with major cities, curated city highlights, and practical travel information."
        path="/destinations/india"
      />

      <div className="page-hero india-hero">
        <div className="hero-content">
          <h1>India Destinations</h1>
          <p>Discover all 28 states and their major cities</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>India / State / City Route</h2>
            <p>
              Browse by state and open dedicated city pages for detailed travel planning.
            </p>
            <div className="underline"></div>
          </div>

          <div className="india-states-grid">
            {indiaStates.map((state) => {
              const cities = getIndiaCitiesByState(state.stateSlug);

              return (
                <article key={state.stateSlug} className="india-state-card">
                  <div className="state-card-header">
                    <h3>{state.stateName}</h3>
                  </div>
                  <div className="state-card-body">
                    <p>{cities.length} major cities available</p>
                    <div className="india-city-links">
                      {cities.map((city) => (
                        <Link key={city.citySlug} to={getIndiaCityPath(city)}>
                          {city.cityName}
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
