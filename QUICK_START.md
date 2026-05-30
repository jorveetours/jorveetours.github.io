# 🎯 QUICK REFERENCE - IMAGE SETUP

## What's Done ✅
```
✅ 112 city directories created
✅ Image paths configured in code
✅ Hero banners enabled in component
✅ Batch download script ready
✅ Image optimizer ready
✅ React component ready
✅ Full documentation provided
```

## What's Next? 👇

### Choose ONE Option:

#### ⚡ FASTEST (5 min) - Automated
```bash
# 1. Get API key: https://www.pexels.com/api/
set PEXELS_API_KEY=your_key_here

# 2. Run download
npm install axios sharp
node scripts/batch-download.js
node scripts/image-optimizer.js
```

#### 🎯 EASIEST (30 min) - Manual
```bash
# 1. Download from https://www.pexels.com
# 2. Save to: public/images/india/[state]/[city]/index.jpg
# 3. Optimize
npm install sharp
node scripts/image-optimizer.js
```

## Files Reference

### 📍 Where to Put Images
```
public/images/india/maharashtra/mumbai/index.jpg
public/images/india/rajasthan/jaipur/index.jpg
public/images/india/kerala/kochi/index.jpg
... (112 total)
```

### 📄 Documentation Files
- `SETUP_IMAGES_SUMMARY.md` ← Start here!
- `SETUP_IMAGES.md` ← Full guide
- `public/images/india/README.md` ← Detailed steps

### 🛠️ Scripts to Use
- `batch-download.js` - Download images (API)
- `image-optimizer.js` - Resize & optimize (MUST RUN)
- `setup-guide.js` - Interactive help
- `image-attribution.js` - Credit management

### 💻 Code to Use
- `CityImageWithAttribution.tsx` - Display images
- `indiaDestinations.ts` - Already updated
- `IndiaDestinationDetail.tsx` - Already updated

## Image Requirements
```
Size:      1920 × 1080 pixels
Format:    JPEG (progressive)
Quality:   85% (auto optimized)
File Size: ~100-150KB each
Total:     ~12-15MB for all 112
```

## Get Started Now!
```bash
# Option A: Automated (fastest)
node scripts/batch-download.js

# Option B: Manual 
# Visit pexels.com, download images, then:
node scripts/image-optimizer.js

# Option C: Help
node scripts/setup-guide.js
```

## Common Commands
```bash
# Install dependencies
npm install axios sharp

# Download images (after setting PEXELS_API_KEY)
node scripts/batch-download.js

# Optimize all images to 1920x1080
node scripts/image-optimizer.js

# Get interactive help
node scripts/setup-guide.js
```

## Verify Setup
```bash
# Check if images exist
ls public/images/india/maharashtra/mumbai/

# Check image size
ls -lh public/images/india/maharashtra/mumbai/index.jpg

# Verify dimensions (requires imagemagick)
identify public/images/india/maharashtra/mumbai/index.jpg
```

## 🎉 DONE When:
- ✅ Images in all city folders
- ✅ All images are 1920×1080
- ✅ File sizes ~100-150KB each
- ✅ Hero banners show on pages
- ✅ No console errors

**Estimated Time: 5-30 minutes**
**Difficulty: Beginner**

Start with SETUP_IMAGES_SUMMARY.md or run: `node scripts/setup-guide.js`
