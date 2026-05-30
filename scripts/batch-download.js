#!/usr/bin/env node

/**
 * Batch Image Downloader with API Keys (Pexels or Pixabay)
 * 
 * Supports BOTH Pexels and Pixabay free APIs (no complex setup)
 * 
 * Setup:
 *   1. Pexels API: Visit https://www.pexels.com/api/ → Get free key
 *      set PEXELS_API_KEY=your_key
 *   
 *   2. Pixabay API: Visit https://pixabay.com/api/ → Get free key
 *      set PIXABAY_API_KEY=your_key
 * 
 * Usage:
 *   npm install axios
 *   
 *   # Use Pexels
 *   set PEXELS_API_KEY=your_key
 *   node scripts/batch-download.js
 *   
 *   # Or use Pixabay
 *   set PIXABAY_API_KEY=your_key
 *   node scripts/batch-download.js pixabay
 */

import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Save image bytes to disk
async function saveImage(url, destPath) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  fs.writeFileSync(destPath, response.data);
}

const indianCities = [
  { state: 'andhra-pradesh', state_name: 'Andhra Pradesh', cities: [
    { city: 'visakhapatnam', name: 'Visakhapatnam', search: 'visakhapatnam beach india' },
    { city: 'vijayawada', name: 'Vijayawada', search: 'vijayawada city india' },
    { city: 'tirupati', name: 'Tirupati', search: 'tirupati temple india' },
    { city: 'kurnool', name: 'Kurnool', search: 'kurnool fort india' },
  ]},
  { state: 'arunachal-pradesh', state_name: 'Arunachal Pradesh', cities: [
    { city: 'itanagar', name: 'Itanagar', search: 'itanagar capital himalayas' },
    { city: 'tawang', name: 'Tawang', search: 'tawang monastery himalayas' },
    { city: 'pasighat', name: 'Pasighat', search: 'pasighat northeast india' },
    { city: 'ziro', name: 'Ziro', search: 'ziro valley tribal' },
  ]},
  { state: 'assam', state_name: 'Assam', cities: [
    { city: 'guwahati', name: 'Guwahati', search: 'guwahati brahmaputra river' },
    { city: 'dibrugarh', name: 'Dibrugarh', search: 'tea plantation assam' },
    { city: 'silchar', name: 'Silchar', search: 'silchar assam india' },
    { city: 'jorhat', name: 'Jorhat', search: 'jorhat tea estate' },
  ]},
  { state: 'bihar', state_name: 'Bihar', cities: [
    { city: 'patna', name: 'Patna', search: 'patna ganga river' },
    { city: 'gaya', name: 'Gaya', search: 'gaya buddha bodhgaya temple' },
    { city: 'muzaffarpur', name: 'Muzaffarpur', search: 'litchi fruit agriculture' },
    { city: 'bhagalpur', name: 'Bhagalpur', search: 'silk production india' },
  ]},
  { state: 'chhattisgarh', state_name: 'Chhattisgarh', cities: [
    { city: 'raipur', name: 'Raipur', search: 'raipur city chhattisgarh' },
    { city: 'jagdalpur', name: 'Jagdalpur', search: 'bastar tribal art' },
    { city: 'bilaspur', name: 'Bilaspur', search: 'bilaspur chhattisgarh' },
    { city: 'durg', name: 'Durg', search: 'steel city bhilai' },
  ]},
  { state: 'goa', state_name: 'Goa', cities: [
    { city: 'panaji', name: 'Panaji', search: 'goa beach portuguese colonial' },
    { city: 'margao', name: 'Margao', search: 'south goa beach' },
    { city: 'vasco-da-gama', name: 'Vasco da Gama', search: 'goa port arabian sea' },
    { city: 'mapusa', name: 'Mapusa', search: 'north goa beach resort' },
  ]},
  { state: 'gujarat', state_name: 'Gujarat', cities: [
    { city: 'ahmedabad', name: 'Ahmedabad', search: 'ahmedabad textile city' },
    { city: 'surat', name: 'Surat', search: 'surat diamond city' },
    { city: 'vadodara', name: 'Vadodara', search: 'vadodara palace royal' },
    { city: 'rajkot', name: 'Rajkot', search: 'rajkot saurashtra' },
  ]},
  { state: 'haryana', state_name: 'Haryana', cities: [
    { city: 'gurugram', name: 'Gurugram', search: 'gurugram skyline delhi ncr' },
    { city: 'faridabad', name: 'Faridabad', search: 'faridabad industrial ncr' },
    { city: 'panipat', name: 'Panipat', search: 'panipat historical haryana' },
    { city: 'karnal', name: 'Karnal', search: 'karnal green haryana' },
  ]},
  { state: 'himachal-pradesh', state_name: 'Himachal Pradesh', cities: [
    { city: 'shimla', name: 'Shimla', search: 'shimla mountain hill station' },
    { city: 'dharamshala', name: 'Dharamshala', search: 'dharamshala valley tibetan' },
    { city: 'manali', name: 'Manali', search: 'manali resort himalayas adventure' },
    { city: 'kullu', name: 'Kullu', search: 'kullu valley rivers' },
  ]},
  { state: 'jharkhand', state_name: 'Jharkhand', cities: [
    { city: 'ranchi', name: 'Ranchi', search: 'ranchi waterfall jharkhand' },
    { city: 'jamshedpur', name: 'Jamshedpur', search: 'steel city industrial' },
    { city: 'dhanbad', name: 'Dhanbad', search: 'coal mining jharkhand' },
    { city: 'deoghar', name: 'Deoghar', search: 'temple city pilgrimage' },
  ]},
  { state: 'karnataka', state_name: 'Karnataka', cities: [
    { city: 'bengaluru', name: 'Bengaluru', search: 'bangalore city tech hub' },
    { city: 'mysuru', name: 'Mysuru', search: 'mysore palace royal' },
    { city: 'mangaluru', name: 'Mangaluru', search: 'mangalore coast arabian sea' },
    { city: 'hubballi', name: 'Hubballi', search: 'hubbali city karnataka' },
  ]},
  { state: 'kerala', state_name: 'Kerala', cities: [
    { city: 'kochi', name: 'Kochi', search: 'kochi backwaters kerala tourism' },
    { city: 'thiruvananthapuram', name: 'Thiruvananthapuram', search: 'thiruvananthapuram temple capital' },
    { city: 'kozhikode', name: 'Kozhikode', search: 'kozhikode beach spice coast' },
    { city: 'alappuzha', name: 'Alappuzha', search: 'backwater houseboat kerala' },
  ]},
  { state: 'madhya-pradesh', state_name: 'Madhya Pradesh', cities: [
    { city: 'bhopal', name: 'Bhopal', search: 'bhopal lake madhya pradesh' },
    { city: 'indore', name: 'Indore', search: 'indore city central india' },
    { city: 'gwalior', name: 'Gwalior', search: 'gwalior fort historical' },
    { city: 'jabalpur', name: 'Jabalpur', search: 'marble rocks river gorge' },
  ]},
  { state: 'maharashtra', state_name: 'Maharashtra', cities: [
    { city: 'mumbai', name: 'Mumbai', search: 'mumbai skyline gateway india' },
    { city: 'pune', name: 'Pune', search: 'pune city tech hub' },
    { city: 'nagpur', name: 'Nagpur', search: 'nagpur orange city' },
    { city: 'nashik', name: 'Nashik', search: 'nashik wine vineyard' },
  ]},
  { state: 'manipur', state_name: 'Manipur', cities: [
    { city: 'imphal', name: 'Imphal', search: 'imphal valley floating lake' },
    { city: 'churachandpur', name: 'Churachandpur', search: 'manipur hills tribal' },
    { city: 'thoubal', name: 'Thoubal', search: 'manipur village northeast' },
    { city: 'bishnupur', name: 'Bishnupur', search: 'temple town manipur' },
  ]},
  { state: 'meghalaya', state_name: 'Meghalaya', cities: [
    { city: 'shillong', name: 'Shillong', search: 'shillong hills pine forest' },
    { city: 'tura', name: 'Tura', search: 'garo hills meghalaya' },
    { city: 'cherrapunji', name: 'Cherrapunji', search: 'waterfall rainforest' },
    { city: 'jowai', name: 'Jowai', search: 'pnar culture northeast' },
  ]},
  { state: 'mizoram', state_name: 'Mizoram', cities: [
    { city: 'aizawl', name: 'Aizawl', search: 'aizawl city mountain capital' },
    { city: 'lunglei', name: 'Lunglei', search: 'mizoram south hill town' },
    { city: 'champhai', name: 'Champhai', search: 'border town vineyard' },
    { city: 'serchhip', name: 'Serchhip', search: 'mizoram plateau town' },
  ]},
  { state: 'nagaland', state_name: 'Nagaland', cities: [
    { city: 'kohima', name: 'Kohima', search: 'kohima city nagaland capital' },
    { city: 'dimapur', name: 'Dimapur', search: 'dimapur commercial nagaland' },
    { city: 'mokokchung', name: 'Mokokchung', search: 'tribal culture northeast' },
    { city: 'mon', name: 'Mon', search: 'tribal festival nagaland' },
  ]},
  { state: 'odisha', state_name: 'Odisha', cities: [
    { city: 'bhubaneswar', name: 'Bhubaneswar', search: 'jagannath temple odisha' },
    { city: 'puri', name: 'Puri', search: 'puri beach temple city' },
    { city: 'cuttack', name: 'Cuttack', search: 'silver city river delta' },
    { city: 'rourkela', name: 'Rourkela', search: 'steel city odisha' },
  ]},
  { state: 'punjab', state_name: 'Punjab', cities: [
    { city: 'amritsar', name: 'Amritsar', search: 'golden temple punjab' },
    { city: 'ludhiana', name: 'Ludhiana', search: 'ludhiana city industrial' },
    { city: 'jalandhar', name: 'Jalandhar', search: 'jalandhar sports punjab' },
    { city: 'patiala', name: 'Patiala', search: 'patiala palace royal' },
  ]},
  { state: 'rajasthan', state_name: 'Rajasthan', cities: [
    { city: 'jaipur', name: 'Jaipur', search: 'pink city palace rajasthan' },
    { city: 'udaipur', name: 'Udaipur', search: 'lake palace romantic city' },
    { city: 'jodhpur', name: 'Jodhpur', search: 'blue city fort rajasthan' },
    { city: 'bikaner', name: 'Bikaner', search: 'camel city desert' },
  ]},
  { state: 'sikkim', state_name: 'Sikkim', cities: [
    { city: 'gangtok', name: 'Gangtok', search: 'gangtok capital himalayan' },
    { city: 'namchi', name: 'Namchi', search: 'south sikkim mountain' },
    { city: 'pelling', name: 'Pelling', search: 'sikkim viewpoint himalayan' },
    { city: 'lachung', name: 'Lachung', search: 'alpine village snow' },
  ]},
  { state: 'tamil-nadu', state_name: 'Tamil Nadu', cities: [
    { city: 'chennai', name: 'Chennai', search: 'chennai beach gateway south' },
    { city: 'coimbatore', name: 'Coimbatore', search: 'coimbatore textile manchester' },
    { city: 'madurai', name: 'Madurai', search: 'meenakshi temple tamil' },
    { city: 'tiruchirappalli', name: 'Tiruchirappalli', search: 'rock fort temple' },
  ]},
  { state: 'telangana', state_name: 'Telangana', cities: [
    { city: 'hyderabad', name: 'Hyderabad', search: 'hyderabad city it hub' },
    { city: 'warangal', name: 'Warangal', search: 'warangal fort historical' },
    { city: 'nizamabad', name: 'Nizamabad', search: 'nizamabad city telangana' },
    { city: 'karimnagar', name: 'Karimnagar', search: 'karimnagar city telangana' },
  ]},
  { state: 'tripura', state_name: 'Tripura', cities: [
    { city: 'agartala', name: 'Agartala', search: 'agartala palace capital' },
    { city: 'udaipur', name: 'Udaipur', search: 'temple town tripura' },
    { city: 'dharmanagar', name: 'Dharmanagar', search: 'trade center tripura' },
    { city: 'kailashahar', name: 'Kailashahar', search: 'cultural town tripura' },
  ]},
  { state: 'uttar-pradesh', state_name: 'Uttar Pradesh', cities: [
    { city: 'lucknow', name: 'Lucknow', search: 'lucknow nawab imambara' },
    { city: 'varanasi', name: 'Varanasi', search: 'varanasi ghat spiritual' },
    { city: 'noida', name: 'Noida', search: 'noida skyline ncr' },
    { city: 'gorakhpur', name: 'Gorakhpur', search: 'gorakhpur temple uttar pradesh' },
    { city: 'khusi-nagar', name: 'Khusi Nagar', search: 'buddha temple pilgrimage' },
    { city: 'kanpur', name: 'Kanpur', search: 'kanpur ghat river' },
    { city: 'allahabad', name: 'Allahabad', search: 'allahabad confluence maha mela' },
    { city: 'badaun', name: 'Badaun', search: 'historical city uttar pradesh' },
  ]},
  { state: 'uttarakhand', state_name: 'Uttarakhand', cities: [
    { city: 'dehradun', name: 'Dehradun', search: 'dehradun valley gateway himalayas' },
    { city: 'nainital', name: 'Nainital', search: 'nainital lake hill station' },
    { city: 'haridwar', name: 'Haridwar', search: 'haridwar ghat pilgrimage' },
    { city: 'rishikesh', name: 'Rishikesh', search: 'yoga capital ganga' },
  ]},
  { state: 'west-bengal', state_name: 'West Bengal', cities: [
    { city: 'kolkata', name: 'Kolkata', search: 'kolkata bridge city of joy' },
    { city: 'darjeeling', name: 'Darjeeling', search: 'darjeeling tea toy train' },
    { city: 'siliguri', name: 'Siliguri', search: 'siliguri gateway himalayan' },
    { city: 'durgapur', name: 'Durgapur', search: 'planned city west bengal' },
  ]},
];

// Download from Pexels
async function downloadFromPexels(apiKey, searchQuery, state, city) {
  try {
    const response = await axios.get('https://api.pexels.com/v1/search', {
      params: {
        query: searchQuery,
        per_page: 1,
        orientation: 'landscape',
      },
      headers: {
        'Authorization': apiKey,
      },
    });

    if (response.data.photos.length === 0) {
      return null;
    }

    const photo = response.data.photos[0];
    return {
      url: photo.src.original,
      photographer: photo.photographer,
      photographer_url: photo.photographer_url,
      source: 'Pexels',
      license: 'CC0',
    };
  } catch (error) {
    console.error(`  Error: ${error.message}`);
    return null;
  }
}

// Download from Pixabay
async function downloadFromPixabay(apiKey, searchQuery, state, city) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 1,
      },
    });

    if (response.data.hits.length === 0) {
      return null;
    }

    const image = response.data.hits[0];
    return {
      url: image.largeImageURL,
      photographer: image.user,
      photographer_url: image.userImageURL,
      source: 'Pixabay',
      license: 'Pixabay License',
    };
  } catch (error) {
    console.error(`  Error: ${error.message}`);
    return null;
  }
}

// Main function
async function main() {
  const source = process.argv[2] || 'pexels';
  const apiKey = source === 'pixabay' 
    ? process.env.PIXABAY_API_KEY 
    : 'tqSFQXT3Gn71VpDnqUqBfmBTDvfuqjkT9e34zN4sy35NRvukljxgpat9';

  console.log(`\n🖼️  Batch Image Downloader (${source.toUpperCase()})\n`);

  if (!apiKey) {
    console.log(`❌ API Key not found!\n`);
    console.log(`Setup for ${source.toUpperCase()}:\n`);
    
    if (source === 'pixabay') {
      console.log('1. Visit: https://pixabay.com/api/');
      console.log('2. Get your API key');
      console.log('3. Set environment variable:\n');
      console.log('   set PIXABAY_API_KEY=your_key_here\n');
      console.log('4. Run: node scripts/batch-download.js pixabay');
    } else {
      console.log('1. Visit: https://www.pexels.com/api/');
      console.log('2. Get your API key');
      console.log('3. Set environment variable:\n');
      console.log('   set PEXELS_API_KEY=your_key_here\n');
      console.log('4. Run: node scripts/batch-download.js');
    }
    process.exit(1);
  }

  console.log(`Starting download with ${source.toUpperCase()} API...\n`);

  let totalDownloaded = 0;
  let totalFailed = 0;

  for (const stateData of indianCities) {
    console.log(`📍 ${stateData.state_name}`);
    
    for (const cityData of stateData.cities) {
      const downloadFn = source === 'pixabay' ? downloadFromPixabay : downloadFromPexels;
      const imageInfo = await downloadFn(apiKey, cityData.search, stateData.state, cityData.city);
      
      if (imageInfo) {
        const destPath = path.join(
          'public/images/india',
          stateData.state,
          cityData.city,
          `${cityData.city}.jpg`
        );
        try {
          await saveImage(imageInfo.url, destPath);
          console.log(`   ✓ ${cityData.name} → ${cityData.city}.jpg`);
          totalDownloaded++;
        } catch (err) {
          console.log(`   ✗ ${cityData.name} (save failed: ${err.message})`);
          totalFailed++;
        }
      } else {
        console.log(`   ⚠️  ${cityData.name} (no result)`);
        totalFailed++;
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  }

  console.log(`\n✅ Complete!`);
  console.log(`   Downloaded: ${totalDownloaded}`);
  console.log(`   Failed: ${totalFailed}`);
}

main();
