import SEO from '../components/SEO';

export default function CookiePolicy() {
  return (
    <div className="legal-page">
      <SEO
        title="Cookie Policy"
        description="Learn how Jorvee Tours & Travels uses cookies and similar technologies to improve website functionality and visitor experience."
        path="/cookie-policy"
      />

      <div className="page-hero legal-hero">
        <div className="hero-content">
          <h1>Cookie Policy</h1>
          <p>This page explains how cookies are used on our website.</p>
        </div>
      </div>

      <section className="section legal-section">
        <div className="container legal-container">
          <p className="legal-effective-date"><strong>Effective date:</strong> May 31, 2026</p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your browser that help websites remember preferences,
            understand usage, and improve performance.
          </p>

          <h2>2. Types of Cookies We May Use</h2>
          <ul>
            <li><strong>Essential cookies:</strong> Needed for core site functionality and navigation.</li>
            <li><strong>Performance cookies:</strong> Help us understand how visitors interact with pages.</li>
            <li><strong>Preference cookies:</strong> Remember useful settings for a smoother experience.</li>
          </ul>

          <h2>3. How We Use Cookies</h2>
          <p>Cookies may be used to:</p>
          <ul>
            <li>Measure page performance and improve load times.</li>
            <li>Understand popular destinations and user journeys.</li>
            <li>Maintain secure and reliable browsing sessions.</li>
          </ul>

          <h2>4. Managing Cookies</h2>
          <p>
            You can block or delete cookies through your browser settings. Disabling certain cookies may affect the
            functionality of some site features.
          </p>

          <h2>5. Policy Updates</h2>
          <p>
            We may update this cookie policy from time to time. Any changes will appear on this page with a revised
            effective date.
          </p>
        </div>
      </section>
    </div>
  );
}
