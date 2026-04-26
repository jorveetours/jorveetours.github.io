/**
 * Pre-render script: generates static HTML files for each route
 * with SEO meta tags baked into <head> so crawlers see them
 * without needing to run JavaScript.
 *
 * Run after `vite build` — reads dist/index.html as template.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const SITE_NAME = 'Jorvee Tours & Travels';
const SITE_URL = 'https://jorveetours.github.io';
const indiaStateCities = [
  { stateSlug: 'andhra-pradesh', stateName: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Tirupati', 'Kurnool'] },
  { stateSlug: 'arunachal-pradesh', stateName: 'Arunachal Pradesh', cities: ['Itanagar', 'Tawang', 'Pasighat', 'Ziro'] },
  { stateSlug: 'assam', stateName: 'Assam', cities: ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat'] },
  { stateSlug: 'bihar', stateName: 'Bihar', cities: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'] },
  { stateSlug: 'chhattisgarh', stateName: 'Chhattisgarh', cities: ['Raipur', 'Jagdalpur', 'Bilaspur', 'Durg'] },
  { stateSlug: 'goa', stateName: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa'] },
  { stateSlug: 'gujarat', stateName: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'] },
  { stateSlug: 'haryana', stateName: 'Haryana', cities: ['Gurugram', 'Faridabad', 'Panipat', 'Karnal'] },
  { stateSlug: 'himachal-pradesh', stateName: 'Himachal Pradesh', cities: ['Shimla', 'Dharamshala', 'Manali', 'Kullu'] },
  { stateSlug: 'jharkhand', stateName: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Deoghar'] },
  { stateSlug: 'karnataka', stateName: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi'] },
  { stateSlug: 'kerala', stateName: 'Kerala', cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Alappuzha'] },
  { stateSlug: 'madhya-pradesh', stateName: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur'] },
  { stateSlug: 'maharashtra', stateName: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'] },
  { stateSlug: 'manipur', stateName: 'Manipur', cities: ['Imphal', 'Churachandpur', 'Thoubal', 'Bishnupur'] },
  { stateSlug: 'meghalaya', stateName: 'Meghalaya', cities: ['Shillong', 'Tura', 'Cherrapunji', 'Jowai'] },
  { stateSlug: 'mizoram', stateName: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip'] },
  { stateSlug: 'nagaland', stateName: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Mon'] },
  { stateSlug: 'odisha', stateName: 'Odisha', cities: ['Bhubaneswar', 'Puri', 'Cuttack', 'Rourkela'] },
  { stateSlug: 'punjab', stateName: 'Punjab', cities: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala'] },
  { stateSlug: 'rajasthan', stateName: 'Rajasthan', cities: ['Jaipur', 'Udaipur', 'Jodhpur', 'Bikaner'] },
  { stateSlug: 'sikkim', stateName: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Pelling', 'Lachung'] },
  { stateSlug: 'tamil-nadu', stateName: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli'] },
  { stateSlug: 'telangana', stateName: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar'] },
  { stateSlug: 'tripura', stateName: 'Tripura', cities: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar'] },
  {
    stateSlug: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    cities: ['Lucknow', 'Varanasi', 'Noida', 'Gorakhpur', 'Khusi Nagar', 'Kanpur', 'Allahabad', 'Badaun'],
  },
  { stateSlug: 'uttarakhand', stateName: 'Uttarakhand', cities: ['Dehradun', 'Nainital', 'Haridwar', 'Rishikesh'] },
  { stateSlug: 'west-bengal', stateName: 'West Bengal', cities: ['Kolkata', 'Darjeeling', 'Siliguri', 'Durgapur'] },
];

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
const visaSlugs = [
  'australia',
  'austria',
  'azerbaijan',
  'bangladesh',
  'bahrain',
  'cambodia',
  'china',
  'czech-republic',
  'dubai-uae',
  'egypt',
  'finland',
  'france',
  'georgia',
  'germany',
  'greece',
  'hong-kong',
  'iceland',
  'indonesia',
  'ireland',
  'italy',
  'japan',
  'kenya',
  'malaysia',
  'morocco',
  'netherlands',
  'new-zealand',
  'norway',
  'portugal',
  'qatar',
  'russia',
  'singapore',
  'south-africa',
  'south-korea',
  'spain',
  'sri-lanka',
  'sweden',
  'switzerland',
  'thailand',
  'united-kingdom-uk',
  'uzbekistan',
  'vietnam',
  'mongolia',
  'zambia',
];

// All routes with their SEO data
const routes = [
  {
    path: '/about',
    title: 'About Us',
    description:
      'Learn about Jorvee Tours & Travels — your trusted partner in crafting extraordinary travel experiences since 2010. 15+ years of expertise, 50+ destinations.',
  },
  {
    path: '/destinations',
    title: 'Explore World Destinations',
    description:
      'Discover Paris, Tokyo, Rome, London, Dubai, New York, Istanbul, Sydney and more iconic destinations with Jorvee Tours & Travels.',
  },
  {
    path: '/destinations/france/paris',
    title: 'Paris, France — Travel Guide',
    description:
      'The City of Light enchants visitors with its iconic Eiffel Tower, world-class museums like the Louvre, and charming café-lined boulevards.',
  },
  {
    path: '/destinations/japan/tokyo',
    title: 'Tokyo, Japan — Travel Guide',
    description:
      'A mesmerizing blend of ultramodern and traditional, Tokyo dazzles with neon-lit skyscrapers, ancient temples, and the world\'s best cuisine.',
  },
  {
    path: '/destinations/italy/rome',
    title: 'Rome, Italy — Travel Guide',
    description:
      'The Eternal City is a living museum where ancient ruins like the Colosseum stand alongside Renaissance masterpieces and vibrant piazzas.',
  },
  {
    path: '/destinations/united-kingdom/london',
    title: 'London, United Kingdom — Travel Guide',
    description:
      'A dynamic metropolis where royal heritage meets cutting-edge culture. From Big Ben to Borough Market.',
  },
  {
    path: '/destinations/uae/dubai',
    title: 'Dubai, UAE — Travel Guide',
    description:
      'A futuristic city rising from the desert, Dubai astounds with the world\'s tallest building, luxury shopping, and golden beaches.',
  },
  {
    path: '/destinations/usa/new-york',
    title: 'New York City, USA — Travel Guide',
    description:
      'The city that never sleeps pulses with energy from Times Square to Central Park, offering world-class dining, Broadway shows, and iconic landmarks.',
  },
  {
    path: '/destinations/turkey/istanbul',
    title: 'Istanbul, Turkey — Travel Guide',
    description:
      'Straddling two continents, Istanbul is where East meets West in a spectacular fusion of Byzantine churches, Ottoman mosques, and bustling bazaars.',
  },
  {
    path: '/destinations/australia/sydney',
    title: 'Sydney, Australia — Travel Guide',
    description:
      'Australia\'s harbor city captivates with its iconic Opera House, stunning beaches like Bondi, and a laid-back lifestyle.',
  },
  {
    path: '/destinations/india',
    title: 'India Destinations by State and City',
    description:
      'Explore all 28 states of India with major city pages, travel highlights, and practical planning information.',
  },
  {
    path: '/visa',
    title: 'Visa Offerings',
    description:
      'Explore country-wise visa services and basic requirements with guided support from Jorvee Tours & Travels.',
  },
];

for (const slug of visaSlugs) {
  const titleCaseSlug = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  routes.push({
    path: `/visa/${slug}`,
    title: `${titleCaseSlug} Visa Basic Requirements`,
    description: `Check basic requirements, processing time and documentation guidance for ${titleCaseSlug} visa support with Jorvee Tours & Travels.`,
  });
}

for (const state of indiaStateCities) {
  for (const city of state.cities) {
    const citySlug = toSlug(city);
    routes.push({
      path: `/destinations/india/${state.stateSlug}/${citySlug}`,
      title: `${city}, ${state.stateName}, India — Travel Guide`,
      description: `Plan your trip to ${city}, ${state.stateName} with city highlights, food recommendations, and travel information from Jorvee Tours & Travels.`,
    });
  }
}

// Read the built index.html as template
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const route of routes) {
  const fullTitle = `${route.title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${route.path}`;

  // Build meta tags to inject
  const metaTags = [
    `<title>${fullTitle}</title>`,
    `<meta name="description" content="${route.description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${fullTitle}" />`,
    `<meta property="og:description" content="${route.description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${fullTitle}" />`,
    `<meta name="twitter:description" content="${route.description}" />`,
  ].join('\n    ');

  // Replace the default <title> with route-specific meta tags
  const html = template.replace(
    '<title>Jorvee Tours & Travels</title>',
    metaTags
  );

  // Write to the correct directory structure
  const outDir = path.join(distDir, route.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`  ✓ ${route.path}/index.html`);
}

// Also create a 404.html that redirects to the SPA for client-side routing
// This handles direct navigation to any route on GitHub Pages
const notFoundHtml = template.replace(
  '<title>Jorvee Tours & Travels</title>',
  `<title>Page Not Found | ${SITE_NAME}</title>
    <script>
      // Redirect to the SPA — GitHub Pages serves 404.html for unknown paths
      // This preserves the URL so React Router can handle it
      var path = window.location.pathname;
      if (path !== '/' && path !== '/index.html') {
        sessionStorage.setItem('redirect', path);
      }
    </script>`
);
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml);
console.log('  ✓ 404.html');

console.log(`\nPre-rendered ${routes.length} routes + 404.html`);
