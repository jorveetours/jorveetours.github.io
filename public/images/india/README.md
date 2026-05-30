# Setting Up Indian City Images - Complete Guide

This comprehensive guide explains how to add consistent, properly-sized images for all 112 Indian cities without requiring complex API setup.

## 📊 Directory Structure

The following directory structure has been created:

```
public/images/india/
├── andhra-pradesh/
│   ├── visakhapatnam/
│   ├── vijayawada/
│   ├── tirupati/
│   └── kurnool/
├── arunachal-pradesh/
├── assam/
├── bihar/
... (all 28 states with 4 cities each)
└── west-bengal/
```

Each city directory should contain:
- `index.jpg` - The city image (1920x1080, optimized for web)
- `metadata.json` - Attribution and credit information (optional)

## ✨ Key Features

- **Consistent Sizing**: All images automatically resized to 1920x1080px
- **Web Optimized**: Progressive JPEG format, 85% quality, ~100-150KB per image
- **Attribution Tracking**: Automatic metadata storage for image credits
- **No Complex Setup**: Multiple methods, all beginner-friendly

## 🚀 Quick Start (Recommended)

### Option 1: Manual Download (No API Key Required) ⭐ EASIEST

Perfect for quick setup without any technical complexity:

1. **Download from Pexels:**
   - Go to https://www.pexels.com
   - Search for each city name (e.g., "Mumbai", "Jaipur")
   - Download first landscape result
   - Save as `public/images/india/[state]/[city]/index.jpg`

2. **Or download from Pixabay:**
   - Go to https://pixabay.com
   - Search for city
   - Download landscape image
   - Save with same path structure

3. **Then optimize:**
   ```bash
   npm install sharp
   node scripts/image-optimizer.js
   ```
   This resizes all images to 1920x1080 automatically!

### Option 2: Using Free API Keys (5 minutes to setup) ⚡ FASTEST

Both Pexels and Pixabay offer free API keys that don't require payment:

**Method A: Using Pexels API**
```bash
# 1. Get free API key (no credit card needed)
#    Visit: https://www.pexels.com/api/
#    Click "Sign Up for Free"

# 2. Set environment variable
set PEXELS_API_KEY=your_key_here

# 3. Install dependencies
npm install axios

# 4. Run download
node scripts/batch-download.js
```

**Method B: Using Pixabay API**
```bash
# 1. Get free API key
#    Visit: https://pixabay.com/api/

# 2. Set environment variable  
set PIXABAY_API_KEY=your_key_here

# 3. Run download
node scripts/batch-download.js pixabay
```

### Option 3: Command-Line Batch Download

If you prefer using `curl` or `wget`:

```bash
# Download and save a single city image
curl -o "public/images/india/maharashtra/mumbai/index.jpg" \
  "https://images.pexels.com/photos/[photo-id]@[size].jpg"
```

## 📸 Image Requirements & Standards

### Size & Format
- **Dimensions**: 1920×1080px (landscape)
- **Format**: JPEG (progressive encoding)
- **Quality**: 85% (balances quality vs file size)
- **File Size**: ~100-150KB per image
- **Aspect Ratio**: 16:9 (perfect for hero banners)

### License & Attribution
- **Required License**: Free to use (CC0, CC-BY, Public Domain)
- **Attribution**: Automatically tracked in `metadata.json`
- **Credit Display**: Use `image-attribution.js` component

## 🎨 Image Optimization

After downloading images, optimize them for web:

```bash
# Install sharp (image processing)
npm install sharp

# Resize all images to 1920x1080
node scripts/image-optimizer.js
```

This script:
- ✓ Resizes images to consistent 1920×1080
- ✓ Converts to progressive JPEG
- ✓ Reduces file size by 60-70%
- ✓ Maintains image quality
- ✓ Processes all cities in batch

## 📝 Attribution & Credits

### Automatic Attribution System

1. **Save metadata when downloading:**
   ```javascript
   // Automatically saved in metadata.json
   {
     "source": "Pexels",
     "photographer": "John Doe",
     "photographer_url": "https://www.pexels.com/@johndoe",
     "license": "CC0",
     "downloaded": "2024-04-27"
   }
   ```

2. **Display attribution in your components:**
   ```javascript
   import { getImageAttribution } from '../scripts/image-attribution';
   
   const attribution = getImageAttribution('maharashtra', 'mumbai');
   // Use in your component or page
   ```

3. **Generate attribution page:**
   ```bash
   node scripts/generate-credits.js
   ```
   Creates `public/CREDITS.html` with all image attributions

## 🎯 Recommended Workflow

1. **Quick Setup** (15 minutes)
   ```bash
   # 1. Download images from Pexels/Pixabay manually
   # 2. Save to public/images/india/[state]/[city]/index.jpg
   
   # 3. Optimize all at once
   npm install sharp
   node scripts/image-optimizer.js
   
   # Done! Images are now consistent and optimized
   ```

2. **Or Full Automation** (5 minutes setup)
   ```bash
   # Get free API key from Pexels (2 min)
   set PEXELS_API_KEY=your_key_here
   
   # Run automated download & optimize
   npm install axios sharp
   node scripts/batch-download.js
   node scripts/image-optimizer.js
   ```

## 🔧 Available Scripts

| Script | Purpose | Time |
|--------|---------|------|
| `batch-download.js` | Download images via Pexels/Pixabay API | 2-3 min |
| `image-optimizer.js` | Resize & optimize all images | 1-2 min |
| `image-attribution.js` | Manage credits & metadata | Auto |
| `download-images-no-api.js` | Guide for manual setup | - |

## 📋 Free Image Sources Comparison

| Source | Setup | License | Quality | Speed |
|--------|-------|---------|---------|-------|
| **Pexels** | Free API key | CC0 | Excellent | Fast |
| **Pixabay** | Free API key | Multiple | Excellent | Fast |
| **Manual Download** | None | Varies | User choice | Slower |
| **Wikipedia Commons** | None | CC | Good | Slower |

## 📍 City Paths Reference

### Example Directory Structure
```
public/images/india/
└── maharashtra/
    ├── mumbai/
    │   ├── index.jpg
    │   └── metadata.json
    ├── pune/
    │   ├── index.jpg
    │   └── metadata.json
    ├── nagpur/
    ├── nashik/
└── rajasthan/
    ├── jaipur/
    ├── udaipur/
    ├── jodhpur/
    └── bikaner/
```

## 🐛 Troubleshooting

### Images Not Showing
- **Problem**: 404 errors in console
- **Solution**: Check path is exactly: `/public/images/india/[state]/[city]/index.jpg`
- **Check**: Verify filename is lowercase `index.jpg`

### Different Image Sizes Breaking Layout
- **Problem**: Some images look stretched/compressed
- **Solution**: Run `node scripts/image-optimizer.js` to standardize all sizes

### API Rate Limits Hit
- **Problem**: "Rate limit exceeded" error
- **Solution**: Wait 1 hour, or switch to manual download method

### File Size Too Large
- **Problem**: Images take too long to load
- **Solution**: Run optimizer to compress (reduces size by 60-70%)

## ✅ Verification Checklist

After setting up images:
- [ ] Images exist in `/public/images/india/[state]/[city]/index.jpg`
- [ ] All images are 1920×1080px
- [ ] All images are JPEG format
- [ ] Files are ~100-150KB each
- [ ] Metadata.json exists in each city folder
- [ ] Images display correctly on city pages
- [ ] No 404 errors in console

## 📊 Statistics

- **Total Cities**: 112
- **Total States**: 28
- **Cities Per State**: 4
- **Total Images**: 112
- **Expected Disk Space**: ~12-15MB total
- **Time to Download** (manual): 2-3 hours
- **Time to Download** (automated): 2-3 minutes
- **Time to Optimize**: 1-2 minutes

## 🔗 Useful Links

| Resource | URL |
|----------|-----|
| Pexels API Docs | https://www.pexels.com/api/ |
| Pixabay API Docs | https://pixabay.com/api/ |
| Image Optimization Tips | https://web.dev/image-optimization/ |
| Progressive JPEG | https://cloudinary.com/blog/progressive_jpegs_and_green_martians |

## 💡 Pro Tips

1. **Batch Download**: Use API for bulk download, then optimize
2. **Mobile First**: 1920×1080 works well on all devices
3. **SEO**: Images improve page speed and SEO rankings
4. **Caching**: Optimized images cache better
5. **Updates**: Re-run optimizer after adding new images

## ❓ Still Need Help?

1. Check specific error message in terminal
2. Verify API key is correct
3. Check internet connection
4. Try manual download as fallback
5. Check file paths are exactly as specified

---

**Last Updated**: April 27, 2024
**Total Setup Time**: 15-30 minutes
**Required Technical Knowledge**: Beginner (copy/paste)
