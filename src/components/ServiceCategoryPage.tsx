import { Link } from 'react-router-dom';
import SEO from './SEO';

interface ServiceImage {
  src: string;
  alt: string;
  credit?: {
    photographer: string;
    sourceName: string;
    sourceUrl: string;
    license: string;
    licenseUrl?: string;
  };
}

interface ServiceFaq {
  question: string;
  answer: string;
}

interface ServiceCategoryPageProps {
  title: string;
  description: string;
  path: string;
  heroImage: string;
  heroTagline: string;
  highlights: string[];
  idealFor: string[];
  gallery: ServiceImage[];
  faqs: ServiceFaq[];
}

export default function ServiceCategoryPage({
  title,
  description,
  path,
  heroImage,
  heroTagline,
  highlights,
  idealFor,
  gallery,
  faqs,
}: ServiceCategoryPageProps) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="service-page">
      <SEO
        title={title}
        description={description}
        path={path}
        image={heroImage}
        jsonLd={faqJsonLd}
      />

      <div className="page-hero service-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{heroTagline}</p>
        </div>
      </div>

      <section className="section">
        <div className="container service-container">
          <div className="service-intro">
            <h2>Why Choose This Holiday Style</h2>
            <p>{description}</p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <h3>What You Get</h3>
              <ul>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="service-card">
              <h3>Ideal For</h3>
              <ul>
                {idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="service-gallery">
            {gallery.map((image) => (
              <figure key={image.src} className="service-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
                {image.credit && (
                  <figcaption className="service-image-credit">
                    Photo by {image.credit.photographer} via{' '}
                    <a href={image.credit.sourceUrl} target="_blank" rel="noopener noreferrer">
                      {image.credit.sourceName}
                    </a>
                    {' '}({image.credit.licenseUrl ? (
                      <a href={image.credit.licenseUrl} target="_blank" rel="noopener noreferrer">
                        {image.credit.license}
                      </a>
                    ) : image.credit.license})
                  </figcaption>
                )}
              </figure>
            ))}
          </div>

          <div className="service-actions">
            <Link to="/#contact" className="btn btn-primary">Plan This Holiday</Link>
            <Link to="/destinations" className="btn btn-secondary">Explore Destinations</Link>
          </div>

          {faqs.length > 0 && (
            <section className="service-faq" aria-labelledby="service-faq-heading">
              <h2 id="service-faq-heading">Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqs.map((faq) => (
                  <details key={faq.question} className="faq-item">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}
