import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // Check if user has already set a preference in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const userPreference = window.localStorage.getItem('theme');
    return userPreference === 'dark' || 
      (!userPreference && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Update the document with the current theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      const hasUserSetPreference = window.localStorage.getItem('theme');
      if (!hasUserSetPreference) {
        setDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
