import Carousel from '../components/Carousel';
import TopDestinations from '../components/TopDestinations';
import ContactForm from '../components/ContactForm';
import HomeFAQ from '../components/HomeFAQ';
import { homeFaqItems } from '../data/homeFaq';
import SEO from '../components/SEO';

export default function Home() {
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': 'https://jorveetours.github.io/#faq',
    mainEntity: homeFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const travelAgencySchema = {
    '@type': 'TravelAgency',
    '@id': 'https://jorveetours.github.io/#organization',
    name: 'Jorvee Tours & Travels',
    url: 'https://jorveetours.github.io',
    description: 'Expert-guided travel experiences to world-class destinations.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jasola',
      addressLocality: 'New Delhi',
      postalCode: '110025',
      addressCountry: 'IN',
    },
    telephone: '+919873440127',
  };

  return (
    <>
      <SEO
        title="Jorvee Tours & Travels — Explore the World’s Best Destinations"
        description="Book unforgettable tours to Paris, Tokyo, Rome, London, Dubai, New York, Istanbul, Sydney and more with Jorvee Tours & Travels. Expert-guided travel experiences."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [travelAgencySchema, faqSchema],
        }}
      />
      <Carousel />
      <TopDestinations />
      <ContactForm />
      <HomeFAQ />
    </>
  );
}
