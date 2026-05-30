#!/usr/bin/env node

/**
 * Image Setup - Interactive Guide
 * 
 * Run this to see all available methods for setting up city images
 * Usage: node scripts/setup-guide.js
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function print(text, color = 'reset') {
  console.log(`${colors[color]}${text}${colors.reset}`);
}

function section(title) {
  console.log('\n');
  print(`${'═'.repeat(70)}`, 'cyan');
  print(`  ${title}`, 'bright');
  print(`${'═'.repeat(70)}`, 'cyan');
  console.log();
}

function printMethod(number, title, time) {
  print(`\n${number}️⃣  ${title} (${time})`, 'yellow');
  print(`${'─'.repeat(60)}`, 'dim');
}

section('🖼️  INDIAN CITY IMAGES SETUP GUIDE');

print('Welcome! This guide will help you add images to all 112 Indian cities.', 'bright');
print('Choose your preferred method below:\n', 'bright');

// METHOD 1
printMethod('1', 'EASIEST: Manual Download (No Setup)', '30 minutes');
print(`
Perfect if you want to download a few images manually:

STEP 1: Download images
  • Visit https://www.pexels.com
  • Search for each city name (e.g., "Mumbai", "Jaipur")
  • Download first landscape image
  • Save as: public/images/india/[STATE]/[CITY]/index.jpg

STEP 2: Optimize all images at once
  npm install sharp
  node scripts/image-optimizer.js

Done! All images will be resized to 1920x1080 automatically.

✓ Pros: No API key needed, full control over images
✗ Cons: Manual for each city, takes longer
`, 'blue');

// METHOD 2
printMethod('2', 'FAST: Using Pexels API (Free)', '5 minutes setup + 2 min download');
print(`
Automated download using free Pexels API (no credit card needed):

STEP 1: Get free API key (2 minutes)
  • Visit: https://www.pexels.com/api/
  • Sign up with email
  • Copy your API key

STEP 2: Set environment variable
  # Windows Command Prompt
  set PEXELS_API_KEY=your_key_here
  
  # Windows PowerShell
  $env:PEXELS_API_KEY="your_key_here"

STEP 3: Install and run
  npm install axios sharp
  node scripts/batch-download.js
  node scripts/image-optimizer.js

Done! All 112 city images downloaded and optimized.

✓ Pros: Fully automated, consistent high-quality images
✗ Cons: Need to get API key (takes 2 minutes)
`, 'green');

// METHOD 3
printMethod('3', 'ALTERNATIVE: Using Pixabay API (Free)', '5 minutes setup + 2 min download');
print(`
Similar to Pexels but different image selection:

STEP 1: Get free API key
  • Visit: https://pixabay.com/api/
  • Register with email
  • Copy your API key

STEP 2: Set environment variable
  set PIXABAY_API_KEY=your_key_here

STEP 3: Run with Pixabay source
  npm install axios sharp
  node scripts/batch-download.js pixabay
  node scripts/image-optimizer.js

Pixabay has different images, so results may vary from Pexels.

✓ Pros: Free API, good image quality, good variety
✗ Cons: Need API key, different images than Pexels
`, 'green');

// METHOD 4
printMethod('4', 'BATCH: Using curl/wget (Advanced)', '1-2 hours');
print(`
For those who prefer command-line tools:

Create a batch download script with pre-made URLs:
  node scripts/create-download-urls.js > download-urls.txt
  
Then use curl or wget to download in parallel.

✓ Pros: Don't need Node.js, scriptable
✗ Cons: More complex, requires understanding URLs
`, 'blue');

section('📊 QUICK COMPARISON');

print(`
┌─────────────────┬──────────┬────────────┬──────────┬─────────┐
│ Method          │ Time     │ API Setup  │ Quality  │ Effort  │
├─────────────────┼──────────┼────────────┼──────────┼─────────┤
│ 1. Manual       │ 30 min   │ None       │ Good     │ High    │
│ 2. Pexels API   │ 7 min    │ 2 min      │ Great    │ Low     │
│ 3. Pixabay API  │ 7 min    │ 2 min      │ Great    │ Low     │
│ 4. curl/wget    │ 2 hours  │ None       │ Varies   │ Medium  │
└─────────────────┴──────────┴────────────┴──────────┴─────────┘
`, 'cyan');

section('💡 RECOMMENDED WORKFLOW');

print('For most users, we recommend METHOD 2 (Pexels):');
print(`
1. Get Pexels API key (2 min) → https://www.pexels.com/api/
2. Set environment variable: set PEXELS_API_KEY=your_key_here
3. Run: npm install axios sharp
4. Run: node scripts/batch-download.js
5. Run: node scripts/image-optimizer.js
6. Done!

Total time: ~7 minutes
Result: 112 perfectly-sized, optimized, consistent images
`, 'green');

section('🔍 WHAT HAPPENS NEXT');

print(`
After adding images:

✓ All images automatically resize to 1920x1080px
✓ Images are optimized to ~100-150KB each
✓ Metadata saved with photographer attribution
✓ City pages display beautiful hero banners
✓ Mobile devices load images quickly
`, 'green');

section('📝 AFTER IMAGES ARE ADDED');

print(`
Using images in your React components:

import CityImageWithAttribution from '../components/CityImageWithAttribution';

<CityImageWithAttribution 
  state="maharashtra"
  city="mumbai"
  cityName="Mumbai"
/>

Images automatically show with:
✓ Proper sizing (1920x1080)
✓ Photographer credit
✓ License information
✓ Optimized for web
`, 'cyan');

section('❓ TROUBLESHOOTING');

print(`
Problem: "Image not found" or 404 errors
Solution: Check path: /public/images/india/[STATE]/[CITY]/index.jpg

Problem: Images look stretched or wrong size
Solution: Run optimizer: node scripts/image-optimizer.js

Problem: API returns "No results"
Solution: Some cities have fewer images. Use alternative source.

Problem: File size too large
Solution: Optimizer reduces size by 60-70%

Problem: Rate limits exceeded
Solution: Wait 1 hour before trying again, or use manual method
`, 'yellow');

section('🚀 GET STARTED NOW');

print(`
Option A: Quick Manual (30 min)
  1. Visit pexels.com
  2. Download images for each city
  3. Run: node scripts/image-optimizer.js

Option B: Full Automation (5 min)
  1. Get Pexels API key: https://www.pexels.com/api/
  2. Run: node scripts/batch-download.js
  3. Done!

Start here:
`, 'bright');

print(`
  https://www.pexels.com/api/ ← Get free API key
  https://www.pexels.com     ← Download manually
  https://pixabay.com        ← Alternative source
`, 'cyan');

console.log('\n');
