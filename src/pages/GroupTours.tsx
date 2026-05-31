import ServiceCategoryPage from '../components/ServiceCategoryPage';

export default function GroupTours() {
  return (
    <ServiceCategoryPage
      title="Group Tours"
      description="Our group tours are designed for travelers who love shared experiences, guided sightseeing, and fixed-departure convenience with professional trip support."
      path="/services/group-tours"
      heroImage="/images/services/group-tours/hero.jpg"
      heroTagline="Travel together, discover more, and enjoy curated itineraries at great value."
      highlights={[
        'Fixed departure dates and guided sightseeing',
        'Comfortable stays, transfers, and day plans',
        'Cost-effective packages for friends and families',
        'On-trip coordination for a smooth journey',
      ]}
      idealFor={[
        'Families and friend circles',
        'Solo travelers who enjoy social trips',
        'First-time international travelers',
        'Festival and seasonal departures',
      ]}
      gallery={[
        {
          src: '/images/services/group-tours/gallery-1.jpg',
          alt: 'Group tour city skyline experience',
        },
        {
          src: '/images/services/group-tours/gallery-2.jpg',
          alt: 'Group sightseeing near a world heritage attraction',
        },
        {
          src: '/images/services/group-tours/gallery-3.jpg',
          alt: 'Group travelers enjoying a vibrant city tour',
        },
        {
          src: '/images/services/group-tours/gallery-group-beach-game.jpg',
          alt: 'Travel group playing together on a beach activity break',
          credit: {
            photographer: 'epSos.de',
            sourceName: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Family_Playing_at_the_Beach.jpg',
            license: 'CC BY 2.0',
            licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
          },
        },
        {
          src: '/images/services/group-tours/gallery-group-game.jpg',
          alt: 'Friends in a group enjoying a game activity during vacation',
          credit: {
            photographer: 'Kirt Edblom',
            sourceName: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Playing_jenga_in_the_pool.jpg',
            license: 'CC BY-SA 2.0',
            licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
          },
        },
        {
          src: '/images/services/group-tours/gallery-group-board-game.jpg',
          alt: 'Group travelers spending fun time in a shared game moment',
          credit: {
            photographer: 'Kirt Edblom',
            sourceName: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Playing_jenga_in_the_pool.jpg',
            license: 'CC BY-SA 2.0',
            licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
          },
        },
      ]}
      faqs={[
        {
          question: 'What is usually included in a group tour package?',
          answer: 'Group tours commonly include hotel stay, intercity transfers, select sightseeing, and on-ground coordination. Exact inclusions vary by departure and destination, so the final day-wise itinerary is shared before booking confirmation.',
        },
        {
          question: 'Are flights included in group tour pricing?',
          answer: 'Some departures include flights while others are land-only. We share both options so travelers can compare total trip cost before they decide.',
        },
        {
          question: 'How big are group tours and will there be a tour manager?',
          answer: 'Group size depends on route and season. Popular departures usually run with a professionally coordinated group and dedicated support during key travel days.',
        },
        {
          question: 'Can I join as a solo traveler on a group tour?',
          answer: 'Yes. Solo travelers can join most group departures. Depending on availability, you can choose twin-sharing or single-occupancy supplements.',
        },
        {
          question: 'What is the cancellation policy for group departures?',
          answer: 'Cancellation charges are time-based and become higher closer to departure. The exact policy is provided in writing at booking stage for full clarity.',
        },
        {
          question: 'Which destinations are best for first-time group travelers?',
          answer: 'High-demand choices include Dubai, Europe highlights, Thailand, Singapore, and selected India circuits because they offer smooth logistics and strong sightseeing value.',
        },
        {
          question: 'Can meals be upgraded in a group package?',
          answer: 'Yes. Depending on destination and hotel, meal plans can often be upgraded from breakfast-only to half-board or full-board at additional cost.',
        },
        {
          question: 'Will I get free time during a group tour?',
          answer: 'Most group itineraries include a mix of guided sightseeing and personal leisure time, especially in major cities and shopping districts.',
        },
        {
          question: 'How are room sharing and seating arranged in group tours?',
          answer: 'Room sharing follows your selected occupancy while transfers and coach seating are generally managed by on-ground coordination to keep operations smooth.',
        },
        {
          question: 'Do group tours work for senior citizens?',
          answer: 'Many group departures are senior-friendly with manageable sightseeing pace, but we recommend checking walking intensity and climate before finalizing.',
        },
      ]}
    />
  );
}
