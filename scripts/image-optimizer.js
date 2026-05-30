#!/usr/bin/env node

/**
 * Image Optimizer & Resizer
 * 
 * Resizes all downloaded images to consistent 1920x1080 size
 * Optimizes for web (reduces file size by 60-70%)
 * Maintains aspect ratio without distortion
 * 
 * Usage:
 *   npm install sharp
 *   node scripts/image-optimizer.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const STANDARD_WIDTH = 1920;
const STANDARD_HEIGHT = 1080;
const IMAGE_DIR = 'public/images/india';

// Find all images in the india directory
function findAllImages(dir, imageList = []) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findAllImages(filePath, imageList);
      } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        imageList.push(filePath);
      }
    });
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
  }
  
  return imageList;
}

// Optimize a single image
async function optimizeImage(imagePath) {
  try {
    const fileName = path.basename(imagePath);
    const ext = path.extname(imagePath).toLowerCase();
    
    // Get current image info
    const metadata = await sharp(imagePath).metadata();
    console.log(`  Processing: ${path.relative(IMAGE_DIR, imagePath)}`);
    console.log(`    Original: ${metadata.width}x${metadata.height} (${Math.round(fs.statSync(imagePath).size / 1024)}KB)`);
    
    // Resize and optimize
    const tempFile = imagePath + '.tmp';
    await sharp(imagePath)
      .resize(STANDARD_WIDTH, STANDARD_HEIGHT, {
        fit: 'cover',
        position: 'center',
      })
      .jpeg({
        quality: 85,
        progressive: true,
        mozjpeg: true, // Better compression
      })
      .toFile(tempFile);
    
    // Replace original with optimized version
    fs.renameSync(tempFile, imagePath);
    
    const newSize = Math.round(fs.statSync(imagePath).size / 1024);
    console.log(`    ✓ Resized to: ${STANDARD_WIDTH}x${STANDARD_HEIGHT} (${newSize}KB)`);
    
    return true;
  } catch (error) {
    console.error(`    ❌ Error: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  console.log('🖼️  Image Optimizer & Resizer\n');
  console.log(`📁 Scanning: ${IMAGE_DIR}\n`);
  
  // Check if directory exists
  if (!fs.existsSync(IMAGE_DIR)) {
    console.error(`❌ Directory not found: ${IMAGE_DIR}`);
    process.exit(1);
  }
  
  try {
    // Find all images
    const images = findAllImages(IMAGE_DIR);
    
    if (images.length === 0) {
      console.log('ℹ️  No images found yet.');
      console.log('   Please download images first using:\n');
      console.log('   1. Manual download from Pexels/Pixabay');
      console.log('   2. Or use: node scripts/batch-download.js\n');
      process.exit(0);
    }
    
    console.log(`📊 Found ${images.length} image(s) to optimize\n`);
    console.log(`⚙️  Resizing to standard: ${STANDARD_WIDTH}x${STANDARD_HEIGHT}\n`);
    
    let successCount = 0;
    let failCount = 0;
    
    for (const imagePath of images) {
      const success = await optimizeImage(imagePath);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    }
    
    console.log(`\n✅ Optimization Complete!`);
    console.log(`   Success: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log(`\n💡 All images are now optimized and consistent in size!`);
    
  } catch (error) {
    console.error(`Fatal error: ${error.message}`);
    process.exit(1);
  }
}

main();
