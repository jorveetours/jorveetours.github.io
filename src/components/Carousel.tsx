import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/images/carousel/paris-eiffel-tower-city-skyline.jpg',
    tagline: 'Discover the World',
    title: 'Unforgettable Journeys Await You',
    description: 'Explore breathtaking destinations across the globe with curated travel experiences crafted just for you.',
  },
  {
    image: '/images/carousel/tokyo-japan-cityscape-night.jpg',
    tagline: 'Experience Asia',
    title: 'Where Ancient Traditions Meet Modern Marvels',
    description: 'From the temples of Tokyo to the beaches of Bali, discover the magic of Asia with expert-guided tours.',
  },
  {
    image: '/images/carousel/rome-italy-colosseum-historic.jpg',
    tagline: 'Explore Europe',
    title: 'Walk Through Centuries of History',
    description: 'Wander through cobblestone streets, marvel at ancient ruins, and savor world-class cuisine across Europe.',
  },
  {
    image: '/images/carousel/dubai-uae-skyline-desert-city.jpg',
    tagline: 'Adventure Awaits',
    title: 'Create Memories That Last Forever',
    description: 'From desert safaris to mountain treks, embark on adventures that transform the way you see the world.',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateAutoPlay = () => setAutoPlay(!mediaQuery.matches);

    updateAutoPlay();
    mediaQuery.addEventListener('change', updateAutoPlay);

    return () => mediaQuery.removeEventListener('change', updateAutoPlay);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, autoPlay]);

  return (
    <section className="carousel" role="region" aria-roledescription="carousel" aria-label="Featured destinations">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
        >
          <img className="slide-image" src={slide.image} alt="" aria-hidden="true" />
          <div className="slide-content">
            <span className="tagline">{slide.tagline}</span>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <div className="carousel-buttons">
              <Link to="/destinations" className="btn btn-secondary" tabIndex={index === current ? 0 : -1}>
                Explore Destinations <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link to="/#contact" className="btn btn-outline" tabIndex={index === current ? 0 : -1}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button className="carousel-arrow prev" onClick={prev} aria-label="Previous slide" type="button">
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button className="carousel-arrow next" onClick={next} aria-label="Next slide" type="button">
        <i className="fas fa-chevron-right" aria-hidden="true"></i>
      </button>

      <div className="carousel-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
