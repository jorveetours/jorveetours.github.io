import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`) ? 'active' : '';

  const isContactActive =
    location.pathname === '/' && location.hash === '#contact' ? 'active' : '';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <i className="fas fa-globe-americas"></i>
          </div>
          Jorvee <span>Tours</span>
        </Link>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/destinations" className={isActive('/destinations')}>Destinations</Link>
          <Link to="/visa" className={isActive('/visa')}>Visa</Link>
          <Link to="/about" className={isActive('/about')}>About Us</Link>
          <Link to="/#contact" className={isContactActive}>Contact Us</Link>
        </nav>

        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
