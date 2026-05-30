import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './LandmarkGallery.scss';

interface LandmarkGalleryProps {
  cityName: string;
  citySlug: string;
  stateName: string;
  stateSlug: string;
}

interface LandmarkImage {
  name: string;
  slug: string;
  icon: string;
  path: string;
  failed: boolean;
  visible: boolean;
}

const DEFAULT_FALLBACK_IMAGE = '/images/destinations/world-travel-destinations-hero-banner.jpg';

const LANDMARK_CATEGORIES = [
  { slug: 'mandir', name: 'Temple', icon: '🕉️' },
  { slug: 'masjid', name: 'Mosque', icon: '🕌' },
  { slug: 'gurudwara', name: 'Gurudwara', icon: '🟦' },
  { slug: 'church', name: 'Church', icon: '⛪' },
  { slug: 'park', name: 'Park', icon: '🌳' },
  { slug: 'river', name: 'River', icon: '🌊' },
  { slug: 'mountain', name: 'Mountain', icon: '⛰️' },
  { slug: 'market', name: 'Market', icon: '🛍️' },
  { slug: 'historical-site', name: 'Historical Site', icon: '🏛️' },
];

export default function LandmarkGallery({ cityName, citySlug, stateName, stateSlug }: LandmarkGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [failedSlugs, setFailedSlugs] = useState<{ key: string; slugs: Set<string> }>({ key: '', slugs: new Set() });
  const [visibleSlugs, setVisibleSlugs] = useState<{ key: string; slugs: Set<string> }>({ key: '', slugs: new Set() });
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const cityKey = `${stateSlug}/${citySlug}`;

  // Derive landmark list (stable reference, no setState needed)
  const landmarks = useMemo<LandmarkImage[]>(
    () =>
      LANDMARK_CATEGORIES.map((category) => ({
        name: category.name,
        slug: category.slug,
        icon: category.icon,
        path: `/images/india/${stateSlug}/${citySlug}/${category.slug}-${citySlug}.jpg`,
        failed: failedSlugs.key === cityKey && failedSlugs.slugs.has(category.slug),
        visible: visibleSlugs.key === cityKey && visibleSlugs.slugs.has(category.slug),
      })),
    [citySlug, stateSlug, cityKey, failedSlugs, visibleSlugs]
  );

  // Mark a card visible once it enters the viewport
  const markVisible = useCallback((slug: string, key: string) => {
    setVisibleSlugs(prev => ({
      key,
      slugs: new Set([...( prev.key === key ? prev.slugs : []), slug]),
    }));
  }, []);

  // Set up IntersectionObserver after landmarks are populated
  useEffect(() => {
    if (landmarks.length === 0) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slug = (entry.target as HTMLElement).dataset.slug!;
            markVisible(slug, cityKey);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    itemRefs.current.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [landmarks.length, markVisible, cityKey]);

  // Attach ref callback for each card
  const setItemRef = useCallback((slug: string) => (el: HTMLDivElement | null) => {
    if (el) {
      itemRefs.current.set(slug, el);
    } else {
      itemRefs.current.delete(slug);
    }
  }, []);

  const handleImageError = (slug: string) => {
    setFailedSlugs(prev => ({
      key: cityKey,
      slugs: new Set([...(prev.key === cityKey ? prev.slugs : []), slug]),
    }));
  };

  const generateAltText = (landmarkName: string) =>
    `${landmarkName} in ${cityName}, ${stateName}, India - Travel landmark`;

  const generateTitle = (landmarkName: string) =>
    `${landmarkName} - ${cityName}, ${stateName}, India`;

  const generateDescription = (landmarkName: string) =>
    `Discover ${landmarkName} in ${cityName}, ${stateName}. Explore local attractions and cultural heritage.`;

  const visibleLandmarks = landmarks;

  return (
    <section className="landmark-gallery" id="landmark-gallery">
      <div className="gallery-header">
        <h2>
          <i className="fas fa-images"></i> Landmarks & Attractions
        </h2>
        <p className="gallery-subtitle">
          Explore cultural heritage, religious sites, natural beauty, and historical landmarks in {cityName}
        </p>
      </div>

      {landmarks.length === 0 ? (
        <div className="gallery-loading">
          <p><i className="fas fa-spinner fa-spin"></i> Loading landmark gallery...</p>
        </div>
      ) : visibleLandmarks.length === 0 ? (
        <div className="gallery-loading">
          <p>No landmark images available yet for {cityName}.</p>
        </div>
      ) : (
        <div className="gallery-grid">
          {landmarks.map((landmark) =>
            !landmark.failed && (
              <div
                key={landmark.slug}
                ref={setItemRef(landmark.slug)}
                data-slug={landmark.slug}
                className={`gallery-item${landmark.visible ? ' is-visible' : ''}`}
                onClick={() =>
                  landmark.visible && setSelectedImage(landmark.failed ? DEFAULT_FALLBACK_IMAGE : landmark.path)
                }
              >
                {/* Placeholder shown until card scrolls into view */}
                {!landmark.visible && (
                  <div className="gallery-placeholder" aria-hidden="true" />
                )}

                {/* Image rendered only once the card is in viewport */}
                {landmark.visible && (
                  <>
                    <img
                      src={landmark.failed ? DEFAULT_FALLBACK_IMAGE : landmark.path}
                      alt={generateAltText(landmark.name)}
                      title={generateTitle(landmark.name)}
                      className="landmark-image"
                      onError={() => handleImageError(landmark.slug)}
                      data-landmark-type={landmark.slug}
                      data-city={citySlug}
                    />
                    <div className="image-overlay">
                      <div className="image-caption">
                        <span className="landmark-icon">{landmark.icon}</span>
                        <h4>{landmark.name}</h4>
                        <p>{generateDescription(landmark.name)}</p>
                      </div>
                      <button className="view-button" aria-label={`View ${landmark.name} in ${cityName}`}>
                        <i className="fas fa-expand"></i> View Full
                      </button>
                    </div>

                    <script type="application/ld+json">
                      {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ImageObject',
                        name: landmark.name,
                        description: generateDescription(landmark.name),
                        contentLocation: {
                          '@type': 'Place',
                          name: cityName,
                          address: {
                            '@type': 'PostalAddress',
                            addressLocality: cityName,
                            addressRegion: stateName,
                            addressCountry: 'IN',
                          },
                        },
                        url: landmark.path,
                        thumbnailUrl: landmark.path,
                        keywords: [cityName, landmark.name, stateName, 'India travel', 'landmarks'].join(', '),
                      })}
                    </script>
                  </>
                )}
              </div>
            )
          )}
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full size image view"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={selectedImage}
              alt={`Full size landmark image from ${cityName}`}
              className="modal-image"
              onError={(event) => {
                const img = event.currentTarget;
                if (img.src.includes('world-travel-destinations-hero-banner.jpg')) return;
                img.src = DEFAULT_FALLBACK_IMAGE;
              }}
            />
          </div>
        </div>
      )}

      {/* Page-level SEO structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TouristAttraction',
          name: `${cityName} Landmarks & Attractions`,
          description: `Explore ${visibleLandmarks.length} landmark attractions in ${cityName}, ${stateName}, India including temples, mosques, churches, parks, rivers, mountains, markets and historical sites.`,
          areaServed: {
            '@type': 'Place',
            name: stateName,
            containedInPlace: { '@type': 'Country', name: 'India' },
          },
          geo: {
            '@type': 'Place',
            name: cityName,
            address: {
              '@type': 'PostalAddress',
              addressLocality: cityName,
              addressRegion: stateName,
              addressCountry: 'IN',
            },
          },
          url: `/destinations/india/${stateSlug}/${citySlug}`,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `/destinations/india/${stateSlug}/${citySlug}`,
          },
          potentialAction: {
            '@type': 'ViewAction',
            name: 'View Landmarks',
            target: `/destinations/india/${stateSlug}/${citySlug}#landmark-gallery`,
          },
          keywords: [
            `${cityName} landmarks`, `${cityName} temples`, `${cityName} attractions`,
            `${stateName} tourism`, `India travel`, `${cityName} cultural heritage`,
          ].join(', '),
        })}
      </script>
    </section>
  );
}
