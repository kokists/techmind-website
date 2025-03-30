import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholderColor = '#e2e8f0',
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setIsLoaded(true); // Still mark as loaded to remove placeholder
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      aria-busy={!isLoaded}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: placeholderColor }}
          aria-hidden="true"
        />
      )}
      
      {/* Actual image */}
      <motion.img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
