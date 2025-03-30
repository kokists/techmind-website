import React, { useState } from 'react';

// This component allows keyboard users to skip to the main content
// Improves accessibility for screen reader and keyboard-only users
const SkipToContent = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50 transform transition-transform duration-200 ease-in-out
        bg-blue-600 text-white font-medium px-4 py-2 rounded shadow-lg
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        ${isFocused ? 'translate-y-0' : '-translate-y-20'}
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;
