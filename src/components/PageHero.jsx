import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Typing effect component borrowed from HeroSection
const TypingEffect = ({ text, speed = 75 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Type out the text
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="relative">
      {displayText}
      <span className={`inline-block ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out`}>_</span>
    </span>
  );
};

const PageHero = ({ 
  title, 
  subtitle,
  shortPhrase,
  backgroundStartColor = "from-blue-900",
  textGradientColors = "from-white to-blue-300", 
  backgroundImage = null,
  children = null
}) => {
  // Map color classes to actual color values
  const getColorValue = (colorClass) => {
    const colors = {
      'blue-800': 'rgb(30, 64, 175)',
      'blue-900': 'rgb(30, 58, 138)',
      'blue-950': 'rgb(23, 37, 84)',
      'green-800': 'rgb(22, 101, 52)',
      'green-900': 'rgb(20, 83, 45)',
      'gray-800': 'rgb(31, 41, 55)',
      'gray-900': 'rgb(17, 24, 39)'
    };
    
    const color = colorClass.replace('from-', '');
    return colors[color] || 'rgb(30, 58, 138)';
  };
  
  return (
    <section className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] overflow-hidden">
      {/* Background image that covers the entire section with zoom effect */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="h-full w-full"
          >
            <img src={backgroundImage} alt="" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      )}
      
      {/* Sunrise-like gradient overlay with smooth transition */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ 
          background: `linear-gradient(to right, rgba(10, 20, 50, 1) 0%, rgba(23, 37, 84, 0.95) 25%, rgba(30, 58, 138, 0.8) 50%, rgba(56, 115, 220, 0.4) 75%, rgba(96, 165, 250, 0.1) 90%, transparent 100%)`,
          backdropFilter: 'blur(2px)'
        }}
      />

      {/* Subtle glass reflection */}
      <div 
        className="absolute inset-0 z-11 pointer-events-none" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)',
          mixBlendMode: 'overlay'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-32 md:pb-36 z-20">  
        {/* Content aligned to the left */}
        <div className="max-w-2xl">
          {/* Small motivational phrase */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8 text-gray-200"  
          >
            {shortPhrase}
          </motion.p>

          {/* Main title with gradient from white to blue */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8"  
          >
            <span className={`bg-gradient-to-r ${textGradientColors} bg-clip-text text-transparent`}>
              {title}
            </span>
          </motion.h1>
          
          {/* Subtitle with typing animation */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl backdrop-blur-[2px] px-3 py-2 rounded-md bg-white/5 mb-6 sm:mb-8 md:mb-10"
            >
              <TypingEffect text={subtitle} speed={40} />
            </motion.p>
          )}

          {/* Optional children content (like search form) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 sm:mt-8 w-full"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
