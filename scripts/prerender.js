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
];

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
