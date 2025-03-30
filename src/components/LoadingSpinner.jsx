import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'medium', color = 'blue', text = 'Loading...' }) => {
  // Determine size class
  const sizeClass = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }[size] || 'w-8 h-8';

  // Determine color class
  const colorClass = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    gray: 'border-gray-500',
    white: 'border-white',
  }[color] || 'border-blue-500';

  return (
    <div className="flex flex-col items-center justify-center" role="status" aria-live="polite">
      <motion.div
        className={`${sizeClass} border-4 border-t-transparent rounded-full ${colorClass}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
