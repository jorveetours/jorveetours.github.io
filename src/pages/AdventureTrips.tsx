import ServiceCategoryPage from '../components/ServiceCategoryPage';

export default function AdventureTrips() {
  return (
    <ServiceCategoryPage
      title="Adventure Trips"
      description="For thrill seekers and explorers, our adventure trips combine active experiences, unique terrains, and safe planning so you can focus on the excitement."
      path="/services/adventure-trips"
      heroImage="/images/services/adventure-trips/hero.jpg"
      heroTagline="From mountains to city trails, challenge yourself with confidence."
      highlights={[
        'Activity-first itineraries and expert planning',
        'Balanced pace with safety-focused logistics',
        'Nature, culture, and adventure combinations',
        'Optional add-ons for custom difficulty levels',
      ]}
      idealFor={[
        'Young travelers and adventure groups',
        'Outdoor experience enthusiasts',
        'Weekend adrenaline breaks',
        'Photographers and nature explorers',
      ]}
      gallery={[
        {
          src: '/images/services/adventure-trips/gallery-1.jpg',
          alt: 'Desert adventure trip with dune activity',
        },
        {
          src: '/images/services/adventure-trips/gallery-2.jpg',
          alt: 'Adventure travel with mountain landscapes',
        },
        {
          src: '/images/services/adventure-trips/gallery-3.jpg',
          alt: 'Urban adventure and iconic bridge experience',
        },
      ]}
      faqs={[
        {
          question: 'What adventure activities can be included in these trips?',
          answer: 'Depending on destination, activities may include trekking, desert adventures, water sports, cycling trails, mountain viewpoints, and guided nature experiences.',
        },
        {
          question: 'Are adventure trips safe for beginners?',
          answer: 'Yes, beginner-friendly plans are available. We recommend activities based on fitness level and provide guidance on safety briefings, equipment, and pacing.',
        },
        {
          question: 'Do I need special fitness for booking adventure packages?',
          answer: 'Not always. Many itineraries are moderate and suitable for first-time adventurers. For high-intensity routes, we share pre-trip fitness recommendations in advance.',
        },
        {
          question: 'What should I pack for an adventure holiday?',
          answer: 'Core essentials usually include comfortable activewear, sturdy footwear, sun/rain protection, personal medication, and destination-specific gear suggested in your checklist.',
        },
        {
          question: 'Is travel insurance recommended for adventure trips?',
          answer: 'Yes. Travel insurance is strongly recommended, especially for activity-heavy itineraries, since coverage can help in delays, emergencies, or unexpected disruptions.',
        },
        {
          question: 'What is the best season for adventure travel?',
          answer: 'The best season depends on destination and activity. We suggest travel windows based on weather, accessibility, and safety conditions for each route.',
        },
        {
          question: 'Are permits required for certain adventure destinations?',
          answer: 'Some regions may require local permits or access approvals. Our team informs you in advance and guides the documentation process where needed.',
        },
        {
          question: 'Can adventure trips be customized for mixed-age groups?',
          answer: 'Yes. We can create hybrid itineraries with optional activities so different fitness levels can travel together comfortably.',
        },
        {
          question: 'Do adventure packages include local activity operators?',
          answer: 'Where applicable, activities are coordinated through destination partners and operators according to available slots and safety norms.',
        },
        {
          question: 'What if weather affects adventure activities?',
          answer: 'Weather-sensitive activities may be rescheduled, replaced, or adjusted as per local conditions and operator policy to prioritize safety.',
        },
      ]}
    />
  );
}
