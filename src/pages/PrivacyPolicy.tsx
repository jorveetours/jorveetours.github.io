import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <SEO
        title="Privacy Policy"
        description="Read how Jorvee Tours & Travels collects, uses, and protects your personal information across our website and travel services."
        path="/privacy-policy"
      />

      <div className="page-hero legal-hero">
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p>Your trust matters. This page explains what data we collect and why.</p>
        </div>
      </div>

      <section className="section legal-section">
        <div className="container legal-container">
          <p className="legal-effective-date"><strong>Effective date:</strong> May 31, 2026</p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information you provide directly to us, such as your name, phone number, email address,
            travel preferences, and trip inquiry details submitted through our forms or support channels.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected data to:</p>
          <ul>
            <li>Respond to travel inquiries and provide quotations.</li>
            <li>Plan itineraries and support visa-related guidance.</li>
            <li>Send booking updates and service communication.</li>
            <li>Improve our website performance and user experience.</li>
          </ul>

          <h2>3. Cookies and Analytics</h2>
          <p>
            Our website may use cookies and analytics tools to understand traffic trends, preferred destinations,
            and on-site behavior. You can control cookies through your browser settings.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell personal information. We may share relevant details only with trusted partners involved
            in delivering your requested travel service, such as airlines, hotels, or visa processing partners.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We apply reasonable administrative and technical safeguards to protect personal data. No online method
            is fully secure, but we continuously review and improve our data handling practices.
          </p>

          <h2>6. Your Choices</h2>
          <p>
            You may request access, correction, or deletion of your personal data by contacting us using the details
            in the footer section of this website.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            This policy may be updated from time to time. Any change will be reflected on this page with the latest
            effective date.
          </p>
        </div>
      </section>
    </div>
  );
}
