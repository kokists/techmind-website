import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the media query matches
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Update the state with the current match
    const updateMatches = () => {
      setMatches(media.matches);
    };
    
    // Set initial value
    updateMatches();
    
    // Add listener for changes
    media.addEventListener('change', updateMatches);
    
    // Clean up
    return () => {
      media.removeEventListener('change', updateMatches);
    };
  }, [query]);

  return matches;
};

// Common breakpoint hooks
export const useIsMobile = () => useMediaQuery('(max-width: 639px)');
export const useIsTablet = () => useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
export const useIsDarkMode = () => useMediaQuery('(prefers-color-scheme: dark)');

export default useMediaQuery;
