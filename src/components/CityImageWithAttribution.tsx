import { useEffect, useState } from 'react';
import './CityImageWithAttribution.scss';

interface ImageMetadata {
  source: string;
  photographer: string;
  photographer_url?: string;
  license: string;
  license_url?: string;
  downloaded: string;
  optimization: {
    size: string;
    quality: string;
    format: string;
  };
}

interface CityImageWithAttributionProps {
  state: string;
  city: string;
  cityName: string;
  className?: string;
  showAttribution?: boolean;
}

/**
 * City Image Component with Attribution
 * 
 * Displays city image with proper attribution and credit
 * Automatically loads metadata from metadata.json
 * 
 * Usage:
 *   <CityImageWithAttribution 
 *     state="maharashtra"
 *     city="mumbai"
 *     cityName="Mumbai"
 *   />
 */
export default function CityImageWithAttribution({
  state,
  city,
  cityName,
  className = '',
  showAttribution = true,
}: CityImageWithAttributionProps) {
  const [metadata, setMetadata] = useState<ImageMetadata | null>(null);
  const [hasFallback, setHasFallback] = useState(false);

  const imagePath = `/images/india/${state}/${city}/${city}.jpg`;
  const fallbackImagePath = '/images/destinations/world-travel-destinations-hero-banner.jpg';
  const metadataPath = `/images/india/${state}/${city}/metadata.json`;

  // Load metadata
  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const response = await fetch(metadataPath);
        if (response.ok) {
          const data = await response.json();
          setMetadata(data);
        }
      } catch (error) {
        console.error(`Error loading metadata for ${city}:`, error);
      }
    };

    if (showAttribution) {
      loadMetadata();
    }
  }, [city, metadataPath, showAttribution]);

  const handleImageError = () => {
    if (hasFallback) {
      return;
    }
    setHasFallback(true);
    console.error(`Image failed to load: ${imagePath}`);
  };

  return (
    <figure className={`city-image-wrapper ${className}`}>
      <div className="city-image-container">
        <img
          src={hasFallback ? fallbackImagePath : imagePath}
          alt={`${cityName}, India`}
          title={`${cityName}, India`}
          className="city-image"
          loading="lazy"
          onError={handleImageError}
        />
      </div>

      {showAttribution && metadata && (
        <figcaption className="image-attribution">
          <div className="attribution-content">
            <small className="attribution-text">
              Photo by{' '}
              {metadata.photographer_url ? (
                <a
                  href={metadata.photographer_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="photographer-link"
                >
                  {metadata.photographer}
                </a>
              ) : (
                <span>{metadata.photographer}</span>
              )}
              {' '}from{' '}
              <a
                href={`https://${metadata.source.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                {metadata.source}
              </a>
            </small>
            {metadata.license_url ? (
              <a
                href={metadata.license_url}
                target="_blank"
                rel="noopener noreferrer"
                className="license-link"
              >
                {metadata.license}
              </a>
            ) : (
              <span className="license">{metadata.license}</span>
            )}
          </div>
        </figcaption>
      )}
    </figure>
  );
}
