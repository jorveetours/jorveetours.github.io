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
    window.scrollTo(0, 0);
  }, [location]);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  const isContactActive = location.pathname === '/' && location.hash === '#contact';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <i className="fas fa-globe-americas" aria-hidden="true"></i>
          </div>
          Jorvee <span>Tours</span>
        </Link>

        <nav id="site-navigation" className={`nav ${isOpen ? 'open' : ''}`} aria-label="Primary">
          <Link to="/" onClick={closeMenu} className={isActive('/') ? 'active' : ''} aria-current={isActive('/') ? 'page' : undefined}>Home</Link>
          <Link to="/destinations" onClick={closeMenu} className={isActive('/destinations') ? 'active' : ''} aria-current={isActive('/destinations') ? 'page' : undefined}>Destinations</Link>
          <Link to="/visa" onClick={closeMenu} className={isActive('/visa') ? 'active' : ''} aria-current={isActive('/visa') ? 'page' : undefined}>Visa</Link>
          <Link to="/about" onClick={closeMenu} className={isActive('/about') ? 'active' : ''} aria-current={isActive('/about') ? 'page' : undefined}>About Us</Link>
          <Link to="/#contact" onClick={closeMenu} className={isContactActive ? 'active' : ''} aria-current={isContactActive ? 'page' : undefined}>Contact Us</Link>
        </nav>

        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-controls="site-navigation"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
