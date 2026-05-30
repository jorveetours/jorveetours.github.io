/**
 * Image Attribution & Metadata Manager
 * 
 * Manages image attributions, licenses, and metadata
 * Automatically generates attribution strings for images
 * 
 * Usage in React/JS:
 *   import { getImageAttribution, loadImageMetadata } from './image-attribution';
 *   
 *   const attribution = getImageAttribution('maharashtra', 'mumbai');
 */

const fs = require('fs');
const path = require('path');

class ImageAttributionManager {
  constructor() {
    this.metadataDir = 'public/images/india';
    this.attributionData = {};
  }

  /**
   * Save metadata and attribution for an image
   */
  saveImageMetadata(state, city, metadata) {
    const metadataDir = path.join(this.metadataDir, state, city);
    const metadataFile = path.join(metadataDir, 'metadata.json');

    if (!fs.existsSync(metadataDir)) {
      fs.mkdirSync(metadataDir, { recursive: true });
    }

    const imageMetadata = {
      downloaded: new Date().toISOString(),
      source: metadata.source || 'Unknown',
      photographer: metadata.photographer || 'Unknown',
      photographer_url: metadata.photographer_url || null,
      license: metadata.license || 'Unknown',
      license_url: metadata.license_url || null,
      image_url: metadata.url || null,
      optimization: {
        size: '1920x1080',
        quality: '85% JPEG',
        format: 'Progressive JPEG',
      },
    };

    fs.writeFileSync(metadataFile, JSON.stringify(imageMetadata, null, 2));
  }

  /**
   * Get formatted attribution string for an image
   */
  getAttribution(state, city, format = 'html') {
    const metadataFile = path.join(this.metadataDir, state, city, 'metadata.json');

    if (!fs.existsSync(metadataFile)) {
      return null;
    }

    const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));

    if (format === 'html') {
      return `
        <div class="image-attribution">
          <small>
            Photo by 
            ${metadata.photographer_url 
              ? `<a href="${metadata.photographer_url}" target="_blank">${metadata.photographer}</a>`
              : metadata.photographer
            }
            from 
            <a href="https://${metadata.source.toLowerCase()}.com" target="_blank">${metadata.source}</a>
            <br />
            License: <a href="${metadata.license_url}" target="_blank">${metadata.license}</a>
          </small>
        </div>
      `;
    }

    if (format === 'text') {
      return `Photo by ${metadata.photographer} from ${metadata.source}. License: ${metadata.license}`;
    }

    if (format === 'json') {
      return metadata;
    }

    return null;
  }

  /**
   * Generate HTML with proper attribution for all images
   */
  generateAttributionPage() {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Attribution & Credits</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            line-height: 1.6;
            color: #333;
        }
        .attribution-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }
        .city-card {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            background: #f9f9f9;
        }
        .city-card h3 {
            margin-top: 0;
            color: #0066cc;
        }
        .metadata {
            font-size: 0.9em;
            color: #666;
        }
        .metadata p {
            margin: 8px 0;
        }
        a {
            color: #0066cc;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .license {
            background: #f0f0f0;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 0.85em;
            margin-top: 10px;
        }
        h1, h2 {
            color: #222;
        }
    </style>
</head>
<body>
    <h1>Image Attribution & Credits</h1>
    <p>All images used on JorveeTours are from free, royalty-free sources. 
       Below is the complete attribution for each image.</p>
    
    <div class="attribution-grid">
        <!-- Attribution cards will be populated here -->
    </div>

    <section style="margin-top: 50px; padding-top: 30px; border-top: 1px solid #e0e0e0;">
        <h2>Image Sources</h2>
        <p>We use high-quality images from these free sources:</p>
        <ul>
            <li><strong>Pexels</strong> - <a href="https://www.pexels.com">pexels.com</a> (CC0 License)</li>
            <li><strong>Pixabay</strong> - <a href="https://pixabay.com">pixabay.com</a> (Free for commercial use)</li>
            <li><strong>Wikimedia Commons</strong> - <a href="https://commons.wikimedia.org">commons.wikimedia.org</a></li>
        </ul>
        
        <h2>License Information</h2>
        <p><strong>CC0 (Public Domain)</strong> - Images are free to use for any purpose, no attribution required.</p>
        <p><strong>Creative Commons</strong> - Various CC licenses may apply. Attribution required.</p>
        <p><strong>Pixabay License</strong> - Images are free to download and use. No permission or attribution required.</p>
    </section>
</body>
</html>
    `;

    return html;
  }

  /**
   * Create a simple HTML template for displaying image with attribution
   */
  getImageTemplate(state, city) {
    return `
<figure class="city-image">
    <img 
        src="/images/india/${state}/${city}/index.jpg" 
        alt="City of ${city}"
        loading="lazy"
    />
    ${this.getAttribution(state, city, 'html')}
</figure>
    `;
  }
}

module.exports = ImageAttributionManager;

// For use in React component
const getImageAttribution = (state, city) => {
  const manager = new ImageAttributionManager();
  return manager.getAttribution(state, city, 'json');
};

module.exports.getImageAttribution = getImageAttribution;
