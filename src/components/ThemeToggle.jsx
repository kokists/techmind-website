import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const ThemeToggle = ({ className = '' }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <motion.button
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${className}`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} className="text-blue-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
