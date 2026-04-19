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

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <span className="tagline">{slide.tagline}</span>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <div className="carousel-buttons">
              <Link to="/destinations" className="btn btn-secondary">
                Explore Destinations <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/#contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button className="carousel-arrow prev" onClick={prev} aria-label="Previous slide">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carousel-arrow next" onClick={next} aria-label="Next slide">
        <i className="fas fa-chevron-right"></i>
      </button>

      <div className="carousel-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
