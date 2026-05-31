import ServiceCategoryPage from '../components/ServiceCategoryPage';

export default function HoneymoonPackages() {
  return (
    <ServiceCategoryPage
      title="Honeymoon Packages"
      description="Celebrate your new beginning with romantic stays, scenic experiences, and thoughtfully planned moments in dreamy destinations around the world."
      path="/services/honeymoon-packages"
      heroImage="/images/services/honeymoon-packages/hero.jpg"
      heroTagline="Romantic escapes with privacy, comfort, and unforgettable memories."
      highlights={[
        'Romantic room setups and couple experiences',
        'Sunset cruises and curated dinner options',
        'Relaxed day plans with premium stays',
        'Assisted documentation and smooth travel support',
      ]}
      idealFor={[
        'Newlyweds',
        'Anniversary celebrations',
        'Couples looking for luxury experiences',
        'Scenic and photography-focused travel',
      ]}
      gallery={[
        {
          src: '/images/services/honeymoon-packages/gallery-1.jpg',
          alt: 'Romantic beachside honeymoon experience',
        },
        {
          src: '/images/services/honeymoon-packages/gallery-2.jpg',
          alt: 'Luxury honeymoon destination with island views',
        },
        {
          src: '/images/services/honeymoon-packages/gallery-3.jpg',
          alt: 'Romantic honeymoon city walk experience',
        },
        {
          src: '/images/services/honeymoon-packages/gallery-couple-beach.jpg',
          alt: 'Newly married couple happily enjoying honeymoon time on a tropical beach',
          credit: {
            photographer: 'Artem Beliaikin',
            sourceName: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Happy_young_honeymoon_couple_having_fun_on_the_beach._Ocean,_tropical_vacation_on_Bali_island,_Indonesia._(47955055743).jpg',
            license: 'CC BY 2.0',
            licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
          },
        },
        {
          src: '/images/services/honeymoon-packages/gallery-couple-mountain.jpg',
          alt: 'Newlywed couple enjoying scenic moments in a mountain landscape',
          credit: {
            photographer: 'Artem Beliaikin',
            sourceName: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Portrait_of_beautiful_young_couple_enjoying_nature_on_a_mountain_background._(46867669051).jpg',
            license: 'CC0',
            licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
          },
        },
        {
          src: '/images/services/honeymoon-packages/gallery-couple-city-mountain.jpg',
          alt: 'Newly married couple enjoying together with city-and-mountain travel views',
          credit: {
            photographer: 'Afifa Afrin',
            sourceName: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Couple_in_top_of_Table_Mountain_in_17_July,_2018.jpg',
            license: 'CC BY-SA 4.0',
            licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
          },
        },
      ]}
      faqs={[
        {
          question: 'What do honeymoon packages usually include?',
          answer: 'Typical honeymoon inclusions are couple-friendly hotels, airport transfers, selected sightseeing, and optional romantic add-ons like candlelight dinner or room decor.',
        },
        {
          question: 'Which honeymoon destinations are most searched by couples?',
          answer: 'Popular choices include Bali, Maldives, Dubai, Thailand, Switzerland, and scenic India options like Kashmir, Kerala, and Andaman.',
        },
        {
          question: 'Can I request honeymoon room decoration and special experiences?',
          answer: 'Yes. We can arrange custom experiences such as private dinners, flower decoration, cake setup, cruise add-ons, and anniversary-style surprises subject to hotel policies.',
        },
        {
          question: 'Do honeymoon packages include visa and travel insurance help?',
          answer: 'For eligible destinations, we provide visa document guidance and can assist with travel insurance options. Final visa approvals remain subject to embassy decisions.',
        },
        {
          question: 'What is the ideal honeymoon duration?',
          answer: 'Most couples choose 5 to 7 nights for nearby destinations and 7 to 10 nights for long-haul international trips to balance relaxation and sightseeing.',
        },
        {
          question: 'Can honeymoon packages be booked with EMI or split payment?',
          answer: 'Payment plans depend on trip timeline and partner terms. In many cases, travelers can secure booking with an advance and complete payment in scheduled milestones.',
        },
        {
          question: 'Can we include both relaxation and sightseeing in one honeymoon trip?',
          answer: 'Yes. Most couples prefer a balanced plan with leisure days plus curated sightseeing, and we structure itineraries accordingly.',
        },
        {
          question: 'Are honeymoon packages available for both India and international destinations?',
          answer: 'Yes. We offer options across domestic and international locations based on budget, season, visa timeline, and preferred travel style.',
        },
        {
          question: 'What is the best time to book honeymoon packages for better pricing?',
          answer: 'Booking early generally provides better hotel choice and fare options. For peak seasons, planning 2 to 3 months in advance is recommended.',
        },
        {
          question: 'Can I request a surprise element for my partner during the trip?',
          answer: 'Yes, surprise arrangements can be added, such as private celebration setups or special activity slots, subject to destination and property availability.',
        },
      ]}
    />
  );
}
