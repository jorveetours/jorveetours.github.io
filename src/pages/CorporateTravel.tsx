import ServiceCategoryPage from '../components/ServiceCategoryPage';

export default function CorporateTravel() {
  return (
    <ServiceCategoryPage
      title="Corporate Travel"
      description="We support business travel with efficient planning, policy-aligned bookings, and reliable on-ground coordination for teams, events, and client visits."
      path="/services/corporate-travel"
      heroImage="/images/services/corporate-travel/hero.jpg"
      heroTagline="Business-ready itineraries with punctual logistics and professional support."
      highlights={[
        'Quick booking support and itinerary management',
        'Meeting/event travel and conference planning',
        'Preferred hotels and airport transfer coordination',
        'Clear communication and travel desk assistance',
      ]}
      idealFor={[
        'SMEs and enterprise teams',
        'Executive business travel',
        'Trade events and exhibitions',
        'Multi-city client meetings',
      ]}
      gallery={[
        {
          src: '/images/services/corporate-travel/gallery-1.jpg',
          alt: 'Corporate travel in a global business city',
        },
        {
          src: '/images/services/corporate-travel/gallery-2.jpg',
          alt: 'Corporate tour planning in Tokyo business zones',
        },
        {
          src: '/images/services/corporate-travel/gallery-3.jpg',
          alt: 'Professional business travel in London',
        },
      ]}
      faqs={[
        {
          question: 'What services are included in corporate travel management?',
          answer: 'Corporate travel support can include flight and hotel bookings, airport transfers, visa guidance, meeting logistics, and itinerary coordination for employees and leadership teams.',
        },
        {
          question: 'Can you handle multi-city business itineraries?',
          answer: 'Yes. We manage multi-city schedules with optimized routing, buffer planning, and centralized coordination to reduce delays and improve productivity.',
        },
        {
          question: 'Do you provide GST-compliant invoices and reporting?',
          answer: 'Yes, billing documents are shared as per booking details, and invoice/reporting formats can be aligned to your finance workflow requirements.',
        },
        {
          question: 'Can corporate policies be applied to bookings?',
          answer: 'Yes. We can plan travel options aligned with your company policy, such as preferred fare classes, hotel categories, and approval workflows.',
        },
        {
          question: 'Do you support conference and event travel?',
          answer: 'Yes. We coordinate business events, exhibitions, and offsites including attendee movement, stay planning, and day-wise logistics support.',
        },
        {
          question: 'How quickly can urgent business travel be arranged?',
          answer: 'Urgent requests are prioritized based on route, visa requirements, and availability. Our team shares fastest viable options with transparent cost breakups.',
        },
        {
          question: 'Can you manage travel for large corporate groups or offsites?',
          answer: 'Yes. We can coordinate large-group movement, rooming plans, event transfers, and staged arrivals for company offsites and conferences.',
        },
        {
          question: 'Do you provide a single point of contact for corporate accounts?',
          answer: 'Yes. Corporate clients are supported with coordinated communication so approvals, itinerary updates, and urgent changes remain streamlined.',
        },
        {
          question: 'Can travelers earn loyalty benefits on flights and hotels?',
          answer: 'Where airline and hotel partner rules allow, loyalty details can be added during booking to retain eligible benefit accrual.',
        },
        {
          question: 'How do you handle disruptions like delays or missed connections?',
          answer: 'We provide active rebooking assistance and alternate routing options based on fare rules, availability, and traveler priority.',
        },
      ]}
    />
  );
}
