import ServiceCategoryPage from '../components/ServiceCategoryPage';

export default function PrivateTours() {
  return (
    <ServiceCategoryPage
      title="Private Tours"
      description="Private tours are fully customized around your pace, interests, and comfort. From airport pickup to local experiences, every detail is crafted for your group only."
      path="/services/private-tours"
      heroImage="/images/services/private-tours/hero.jpg"
      heroTagline="Tailor-made holidays with flexible schedules and premium comfort."
      highlights={[
        'Personalized itinerary and pace',
        'Private transfers and optional guides',
        'Handpicked stays and premium add-ons',
        'Dedicated support before and during travel',
      ]}
      idealFor={[
        'Couples and families',
        'Small groups needing flexibility',
        'Luxury and milestone trips',
        'Travelers with special interests',
      ]}
      gallery={[
        {
          src: '/images/services/private-tours/gallery-1.jpg',
          alt: 'Private curated experience in Sydney harbour',
        },
        {
          src: '/images/services/private-tours/gallery-2.jpg',
          alt: 'Private premium holiday atmosphere in Dubai Marina',
        },
        {
          src: '/images/services/private-tours/gallery-3.jpg',
          alt: 'Private cruise-style city tour in Paris',
        },
      ]}
      faqs={[
        {
          question: 'How is a private tour different from a group tour?',
          answer: 'Private tours are fully customized for your own party with flexible timing, tailored sightseeing, and personal pacing. You are not bound to fixed group schedules.',
        },
        {
          question: 'Can I customize hotels, sightseeing, and travel pace?',
          answer: 'Yes. You can choose hotel category, activity level, transfer type, and day plan timing based on your interests and comfort preferences.',
        },
        {
          question: 'Are private guides and airport transfers included?',
          answer: 'They can be included as part of your package. We usually provide options with and without guide support so you can pick what fits your budget.',
        },
        {
          question: 'Is private tour pricing per person or per booking?',
          answer: 'Pricing is usually shared per person on selected occupancy, with transparent breakups for hotels, activities, transport, and optional upgrades.',
        },
        {
          question: 'Can private tours be planned for families with kids or seniors?',
          answer: 'Absolutely. We adjust travel pace, hotel location, transport comfort, and activity mix to suit families, children, and senior travelers.',
        },
        {
          question: 'How early should I book a private tour?',
          answer: 'For best rates and availability, booking 6 to 10 weeks before travel is ideal, especially during holiday seasons and long weekends.',
        },
        {
          question: 'Can I combine multiple countries in one private itinerary?',
          answer: 'Yes. Multi-country private plans can be created with route optimization, transit checks, and realistic sightseeing flow based on your total trip duration.',
        },
        {
          question: 'Do you provide visa document checklists for private tours?',
          answer: 'Yes. We share destination-specific document checklists and submission guidance so travelers can prepare applications correctly and on time.',
        },
        {
          question: 'Can I add special interests like food walks or photography tours?',
          answer: 'Absolutely. Private tours are ideal for themed experiences such as culinary trails, shopping routes, heritage walks, or photography-focused sightseeing.',
        },
        {
          question: 'What happens if my flight timings change?',
          answer: 'Our support team helps adjust airport transfers and day plans wherever possible, based on new timing and service partner availability.',
        },
      ]}
    />
  );
}
