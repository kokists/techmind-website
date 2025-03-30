import React from 'react';
import LazyImage from './LazyImage';

/**
 * OptimizedImage component that provides responsive images with proper sizing
 * and leverages the LazyImage component for lazy loading
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  widths = [640, 768, 1024, 1280, 1536],
  loading = 'lazy',
  placeholderColor,
  priority = false,
  ...props
}) => {
  // If the image is a priority image, don't lazy load it
  const loadingProp = priority ? 'eager' : loading;
  
  // If the source is a remote URL, we can't generate srcset
  const isRemoteUrl = src.startsWith('http');
  
  // Create srcSet for images that can be optimized
  const srcSet = !isRemoteUrl ? 
    widths.map(width => `${src}?w=${width} ${width}w`).join(', ') : 
    undefined;
  
  return (
    priority ? (
      <img 
        src={src}
        alt={alt}
        className={className}
        sizes={sizes}
        srcSet={srcSet}
        loading={loadingProp}
        decoding="async"
        {...props}
      />
    ) : (
      <LazyImage
        src={src}
        alt={alt}
        className={className} 
        placeholderColor={placeholderColor}
        sizes={sizes}
        srcSet={srcSet}
        loading={loadingProp}
        {...props}
      />
    )
  );
};

export default OptimizedImage;
