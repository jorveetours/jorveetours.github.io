import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import IndiaDestinations from './pages/IndiaDestinations';
import IndiaDestinationDetail from './pages/IndiaDestinationDetail';
import VisaOfferings from './pages/VisaOfferings';
import VisaDetail from './pages/VisaDetail';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import SitemapPage from './pages/SitemapPage';
import GroupTours from './pages/GroupTours';
import PrivateTours from './pages/PrivateTours';
import HoneymoonPackages from './pages/HoneymoonPackages';
import AdventureTrips from './pages/AdventureTrips';
import CorporateTravel from './pages/CorporateTravel';
import './styles/main.scss';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/india" element={<IndiaDestinations />} />
            <Route path="/destinations/india/:stateSlug/:citySlug" element={<IndiaDestinationDetail />} />
            <Route path="/destinations/:countrySlug/:slug" element={<DestinationDetail />} />
            <Route path="/visa" element={<VisaOfferings />} />
            <Route path="/visa/:visaSlug" element={<VisaDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/services/group-tours" element={<GroupTours />} />
            <Route path="/services/private-tours" element={<PrivateTours />} />
            <Route path="/services/honeymoon-packages" element={<HoneymoonPackages />} />
            <Route path="/services/adventure-trips" element={<AdventureTrips />} />
            <Route path="/services/corporate-travel" element={<CorporateTravel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
