#!/usr/bin/env node

/**
 * Script to download city images from Unsplash API for all Indian cities
 * 
 * Usage:
 *   node scripts/download-india-city-images.js
 * 
 * Make sure you have:
 *   1. Unsplash API key (set as UNSPLASH_ACCESS_KEY env variable)
 *   2. axios and sharp installed (npm install axios sharp)
 * 
 * Get your Unsplash API key:
 *   1. Go to https://unsplash.com/oauth/applications
 *   2. Create a new application
 *   3. Get your Access Key
 *   4. Run: set UNSPLASH_ACCESS_KEY=your_key
 */

import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Indian cities data - must match indiaDestinations.ts
const indianCities = [
  // Andhra Pradesh
  { state: 'andhra-pradesh', cities: ['visakhapatnam', 'vijayawada', 'tirupati', 'kurnool'] },
  // Arunachal Pradesh
  { state: 'arunachal-pradesh', cities: ['itanagar', 'tawang', 'pasighat', 'ziro'] },
  // Assam
  { state: 'assam', cities: ['guwahati', 'dibrugarh', 'silchar', 'jorhat'] },
  // Bihar
  { state: 'bihar', cities: ['patna', 'gaya', 'muzaffarpur', 'bhagalpur'] },
  // Chhattisgarh
  { state: 'chhattisgarh', cities: ['raipur', 'jagdalpur', 'bilaspur', 'durg'] },
  // Goa
  { state: 'goa', cities: ['panaji', 'margao', 'vasco-da-gama', 'mapusa'] },
  // Gujarat
  { state: 'gujarat', cities: ['ahmedabad', 'surat', 'vadodara', 'rajkot'] },
  // Haryana
  { state: 'haryana', cities: ['gurugram', 'faridabad', 'panipat', 'karnal'] },
  // Himachal Pradesh
  { state: 'himachal-pradesh', cities: ['shimla', 'dharamshala', 'manali', 'kullu'] },
  // Jharkhand
  { state: 'jharkhand', cities: ['ranchi', 'jamshedpur', 'dhanbad', 'deoghar'] },
  // Karnataka
  { state: 'karnataka', cities: ['bengaluru', 'mysuru', 'mangaluru', 'hubballi'] },
  // Kerala
  { state: 'kerala', cities: ['kochi', 'thiruvananthapuram', 'kozhikode', 'alappuzha'] },
  // Madhya Pradesh
  { state: 'madhya-pradesh', cities: ['bhopal', 'indore', 'gwalior', 'jabalpur'] },
  // Maharashtra
  { state: 'maharashtra', cities: ['mumbai', 'pune', 'nagpur', 'nashik'] },
  // Manipur
  { state: 'manipur', cities: ['imphal', 'churachandpur', 'thoubal', 'bishnupur'] },
  // Meghalaya
  { state: 'meghalaya', cities: ['shillong', 'tura', 'cherrapunji', 'jowai'] },
  // Mizoram
  { state: 'mizoram', cities: ['aizawl', 'lunglei', 'champhai', 'serchhip'] },
  // Nagaland
  { state: 'nagaland', cities: ['kohima', 'dimapur', 'mokokchung', 'mon'] },
  // Odisha
  { state: 'odisha', cities: ['bhubaneswar', 'puri', 'cuttack', 'rourkela'] },
  // Punjab
  { state: 'punjab', cities: ['amritsar', 'ludhiana', 'jalandhar', 'patiala'] },
  // Rajasthan
  { state: 'rajasthan', cities: ['jaipur', 'udaipur', 'jodhpur', 'bikaner'] },
  // Sikkim
  { state: 'sikkim', cities: ['gangtok', 'namchi', 'pelling', 'lachung'] },
  // Tamil Nadu
  { state: 'tamil-nadu', cities: ['chennai', 'coimbatore', 'madurai', 'tiruchirappalli'] },
  // Telangana
  { state: 'telangana', cities: ['hyderabad', 'warangal', 'nizamabad', 'karimnagar'] },
  // Tripura
  { state: 'tripura', cities: ['agartala', 'udaipur', 'dharmanagar', 'kailashahar'] },
  // Uttar Pradesh
  { state: 'uttar-pradesh', cities: ['lucknow', 'varanasi', 'noida', 'gorakhpur', 'khusi-nagar', 'kanpur', 'allahabad', 'badaun'] },
  // Uttarakhand
  { state: 'uttarakhand', cities: ['dehradun', 'nainital', 'haridwar', 'rishikesh'] },
  // West Bengal
  { state: 'west-bengal', cities: ['kolkata', 'darjeeling', 'siliguri', 'durgapur'] },
];

// Convert dashes to spaces for city names
const formatCityName = (citySlug) => {
  return citySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Download image from URL
async function downloadImage(imageUrl, filePath) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const dir = path.dirname(filePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, response.data);
    return true;
  } catch (error) {
    console.error(`Error downloading image from ${imageUrl}: ${error.message}`);
    return false;
  }
}

// Search and download image from Unsplash
async function downloadCityImage(state, city) {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  
  if (!apiKey) {
    console.error('❌ UNSPLASH_ACCESS_KEY environment variable not set');
    console.error('Get your key from: https://unsplash.com/oauth/applications');
    process.exit(1);
  }

  const cityName = formatCityName(city);
  const searchQuery = `${cityName} India city`;
  
  try {
    // Search for images on Unsplash
    const searchResponse = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: searchQuery,
        per_page: 1,
        orientation: 'landscape',
      },
      headers: {
        'Authorization': `Client-ID ${apiKey}`,
      },
    });

    if (searchResponse.data.results.length === 0) {
      console.log(`⚠️  No image found for ${cityName}`);
      return false;
    }

    const imageUrl = searchResponse.data.results[0].urls.regular;
    const filePath = path.join(
      'public/images/india',
      state,
      city,
      `${city}.jpg`
    );

    const success = await downloadImage(imageUrl, filePath);
    if (success) {
      console.log(`✓ Downloaded: ${state}/${city}/${city}.jpg`);
    }
    return success;
  } catch (error) {
    console.error(`❌ Error downloading for ${cityName}: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  console.log('🖼️  Starting to download Indian city images from Unsplash...\n');
  
  let totalDownloaded = 0;
  let totalFailed = 0;

  for (const stateData of indianCities) {
    console.log(`\n📍 State: ${stateData.state}`);
    for (const city of stateData.cities) {
      const success = await downloadCityImage(stateData.state, city);
      if (success) {
        totalDownloaded++;
      } else {
        totalFailed++;
      }
      // Rate limiting - Unsplash allows ~50 requests/hour on free tier
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log(`\n✅ Download complete!`);
  console.log(`   Downloaded: ${totalDownloaded}`);
  console.log(`   Failed: ${totalFailed}`);
}

main();
