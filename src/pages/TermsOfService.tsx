import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <div className="legal-page">
      <SEO
        title="Terms of Service"
        description="Review the terms governing use of Jorvee Tours & Travels website, travel planning assistance, and communication channels."
        path="/terms-of-service"
      />

      <div className="page-hero legal-hero">
        <div className="hero-content">
          <h1>Terms of Service</h1>
          <p>These terms outline how our website and service support should be used.</p>
        </div>
      </div>

      <section className="section legal-section">
        <div className="container legal-container">
          <p className="legal-effective-date"><strong>Effective date:</strong> May 31, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By using this website, you agree to these terms. If you do not agree, please discontinue use of the site.
          </p>

          <h2>2. Service Scope</h2>
          <p>
            Information on this website is provided for travel planning support. Final prices, availability, visa
            approvals, and supplier decisions may change without notice.
          </p>

          <h2>3. Booking and Third-Party Providers</h2>
          <p>
            Travel bookings may involve third-party providers such as airlines, hotels, transport operators, and
            insurance providers. Their own terms and policies also apply.
          </p>

          <h2>4. Accuracy of Information</h2>
          <p>
            We aim to keep destination and visa content accurate and current, but we cannot guarantee that all
            information is complete, error-free, or always up to date.
          </p>

          <h2>5. Acceptable Use</h2>
          <ul>
            <li>Do not misuse forms, spam, or submit fraudulent details.</li>
            <li>Do not attempt unauthorized access to the website or infrastructure.</li>
            <li>Do not copy or republish content in a misleading or unlawful way.</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            Site content, branding, and design elements are owned by or licensed to Jorvee Tours & Travels unless
            otherwise stated. Attribution requirements apply where relevant.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the extent allowed by law, we are not liable for indirect or consequential loss arising from site use,
            travel disruptions, policy changes, or third-party service failures.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We may revise these terms periodically. Continued use of the site after updates indicates acceptance of
            the revised terms.
          </p>
        </div>
      </section>
    </div>
  );
}
