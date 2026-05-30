import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>404 - Page Not Found | Jorvee Tours & Travels</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Explore destinations, visas, and travel support from Jorvee Tours & Travels."
        />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <p className="not-found-code">404</p>
      <h1>Page Not Found</h1>
      <p className="not-found-copy">
        The page you requested does not exist or may have been moved.
      </p>
      <div className="not-found-actions">
        <Link to="/" className="btn btn-primary">Go to Home</Link>
        <Link to="/destinations" className="btn btn-secondary">View Destinations</Link>
      </div>
    </div>
  );
}
