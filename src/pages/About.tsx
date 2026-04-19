export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            'url(/images/about/travel-adventure-hero-banner.jpg)',
        }}
      >
        <div className="hero-content">
          <h1>About Jorvee Tours & Travels</h1>
          <p>Your trusted partner in crafting extraordinary travel experiences since 2010</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="about-story section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img
                src="/images/about/road-trip-travel-adventure-scenic.jpg"
                alt="Travel adventure"
              />
              <div className="experience-badge">
                <div className="number">15+</div>
                <div className="label">Years of Experience</div>
              </div>
            </div>

            <div className="about-text">
              <span className="subtitle">Our Story</span>
              <h2>Turning Dream Destinations Into Cherished Memories</h2>
              <p>
                Jorvee Tours & Travels was born from a deep passion for exploration and a belief
                that travel has the power to transform lives. Founded in 2010, we started as a
                small team of travel enthusiasts with a simple mission — to make world-class travel
                accessible, personal, and unforgettable.
              </p>
              <p>
                Over the years, we've grown into a trusted name in the travel industry, serving
                thousands of happy travelers across every continent. From romantic getaways in Paris
                to adventure-filled safaris in Africa, we've meticulously crafted journeys that go
                beyond sightseeing — creating stories that last a lifetime.
              </p>
              <p>
                What sets us apart is our commitment to personalization. We don't believe in
                cookie-cutter itineraries. Every trip we plan is tailored to your interests, pace,
                and budget, ensuring an experience as unique as you are.
              </p>

              <div className="about-features">
                <div className="feature">
                  <div className="icon"><i className="fas fa-globe-americas"></i></div>
                  <span>50+ Countries Covered</span>
                </div>
                <div className="feature">
                  <div className="icon"><i className="fas fa-users"></i></div>
                  <span>10,000+ Happy Travelers</span>
                </div>
                <div className="feature">
                  <div className="icon"><i className="fas fa-headset"></i></div>
                  <span>24/7 Travel Support</span>
                </div>
                <div className="feature">
                  <div className="icon"><i className="fas fa-shield-alt"></i></div>
                  <span>Secure & Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
            <div className="underline"></div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="icon"><i className="fas fa-heart"></i></div>
              <h3>Passion</h3>
              <p>
                We are passionate travelers ourselves. Every destination we recommend, we've
                experienced firsthand to ensure it meets our standards.
              </p>
            </div>
            <div className="value-card">
              <div className="icon"><i className="fas fa-handshake"></i></div>
              <h3>Trust</h3>
              <p>
                Transparency and honesty are at the core of our business. No hidden fees, no
                surprises — just genuine travel expertise you can rely on.
              </p>
            </div>
            <div className="value-card">
              <div className="icon"><i className="fas fa-leaf"></i></div>
              <h3>Sustainability</h3>
              <p>
                We are committed to responsible tourism that respects local communities, cultures,
                and the environment for future generations.
              </p>
            </div>
            <div className="value-card">
              <div className="icon"><i className="fas fa-star"></i></div>
              <h3>Excellence</h3>
              <p>
                From the first inquiry to your return home, we strive for excellence in every
                interaction and every detail of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="number">15+</div>
              <div className="label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="number">10K+</div>
              <div className="label">Happy Travelers</div>
            </div>
            <div className="stat-item">
              <div className="number">50+</div>
              <div className="label">Destinations</div>
            </div>
            <div className="stat-item">
              <div className="number">98%</div>
              <div className="label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Quote */}
      <section style={{ overflow: 'hidden', padding: '60px 0', background: '#f8f9fa' }}>
        <div style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 20s linear infinite',
        }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 700,
            color: 'rgba(0,0,0,0.06)',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            paddingRight: '100px',
          }}>
            Travel is important to learn the world around you &nbsp;•&nbsp; Travel is important to learn the world around you &nbsp;•&nbsp;
          </span>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </div>
  );
}
