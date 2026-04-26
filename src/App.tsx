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
import './styles/main.scss';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/india" element={<IndiaDestinations />} />
            <Route path="/destinations/india/:stateSlug/:citySlug" element={<IndiaDestinationDetail />} />
            <Route path="/destinations/:countrySlug/:slug" element={<DestinationDetail />} />
            <Route path="/visa" element={<VisaOfferings />} />
            <Route path="/visa/:visaSlug" element={<VisaDetail />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
