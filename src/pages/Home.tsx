import Carousel from '../components/Carousel';
import TopDestinations from '../components/TopDestinations';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Jorvee Tours & Travels — Explore the World’s Best Destinations"
        description="Book unforgettable tours to Paris, Tokyo, Rome, London, Dubai, New York, Istanbul, Sydney and more with Jorvee Tours & Travels. Expert-guided travel experiences."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'TravelAgency',
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
        }}
      />
      <Carousel />
      <TopDestinations />
      <ContactForm />
    </>
  );
}
