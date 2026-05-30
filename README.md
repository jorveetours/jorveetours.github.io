# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Run locally

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

### Steps (Windows / VS Code Terminal)
1. Open terminal in the project folder:
   ```powershell
   cd c:\git\jorveetours
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Start the development server:
   ```powershell
   npm run dev
   ```

4. Open the local URL shown in terminal (usually):
   - `http://localhost:5173`

### Build and preview production locally
```powershell
npm run build
npm run preview
```

## Scripts

### Batch Image Downloader

This script downloads images for Indian cities using either the Pexels or Pixabay API.

**Setup:**

1. Install dependencies (if not already):
  ```sh
  npm install axios
  ```

2. Get a free API key from either:
  - [Pexels API](https://www.pexels.com/api/)
  - [Pixabay API](https://pixabay.com/api/)

**Usage:**

Run with Pexels:
```sh
set PEXELS_API_KEY=your_key
node scripts/batch-download.js
```

Run with Pixabay:
```sh
set PIXABAY_API_KEY=your_key
node scripts/batch-download.js pixabay
```

Replace `your_key` with your actual API key.

You can refer to this section any time for script usage.

## Scripts Overview

### batch-download.js
Downloads images for Indian cities using either the Pexels or Pixabay API.
- Requires API key (PEXELS_API_KEY or PIXABAY_API_KEY).
- Usage:
  - `set PEXELS_API_KEY=your_key && node scripts/batch-download.js`
  - `set PIXABAY_API_KEY=your_key && node scripts/batch-download.js pixabay`

### download-images-no-api.js
Downloads Indian city images from free sources (Pexels, Pixabay, Wikimedia) with no API key required.
- Usage:
  - `npm install axios sharp`
  - `node scripts/download-images-no-api.js`

### download-india-city-images.js
Downloads city images from Unsplash for all Indian cities.
- Requires Unsplash API key (UNSPLASH_ACCESS_KEY).
- Usage:
  - `npm install axios sharp`
  - `set UNSPLASH_ACCESS_KEY=your_key && node scripts/download-india-city-images.js`

### download-landmarks.js
Downloads landmark images (temples, mosques, parks, etc.) for Indian cities using Pexels API.
- Requires PEXELS_API_KEY.
- Usage:
  - `npm install axios`
  - `set PEXELS_API_KEY=your_key && node scripts/download-landmarks.js`

### image-attribution.js
Manages image attributions, licenses, and metadata. Used as a utility in code, not a standalone script.

### image-optimizer.js
Resizes and optimizes all downloaded images to 1920x1080 for web.
- Usage:
  - `npm install sharp`
  - `node scripts/image-optimizer.js`

### setup-guide.js
Interactive guide for all available image setup/download methods.
- Usage:
  - `node scripts/setup-guide.js`

### prerender.js
Pre-renders static HTML files for each route after build for SEO.
- Usage:
  - `npm run build` (runs automatically as part of build process)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
