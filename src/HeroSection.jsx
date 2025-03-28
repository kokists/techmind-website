import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Assuming you might want icons

// Import your logo assets - adjust paths as needed
import googleLogo from "../../assets/logos/google.png";
import netflixLogo from "../../assets/logos/netflix.png";
import amazonLogo from "../../assets/logos/amazon.png";
import stripeLogo from "../../assets/logos/stripe.png";
import dropboxLogo from "../../assets/logos/dropbox.png";
import uberLogo from "../../assets/logos/uber.png";
// Add other logos if you have them

// Placeholder images - replace with your actual image paths
import talentImage from "../../assets/images/hero-talent.jpg"; // Replace with your talent mode image
import jobsImage from "../../assets/images/hero-jobs.jpg"; // Replace with your jobs mode image

// Typing Animation Component (Simple example)
const TypingSubheading = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText(""); // Reset on text change
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i > text.length - 1) {
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="relative">
      {displayedText}
      <motion.span
        className="absolute inline-block w-0.5 h-full bg-current -right-1 bottom-0" // Adjust cursor style/position
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "linear" }}
      >
        _
      </motion.span>
    </span>
  );
};

// Main Hero Section Component
const HeroSection = ({ selectedOption, setSelectedOption }) => {
  const isTalentMode = selectedOption === "talent";

  const logos = [
    { id: 1, src: googleLogo, alt: "Google" },
    { id: 2, src: netflixLogo, alt: "Netflix" },
    { id: 3, src: amazonLogo, alt: "Amazon" },
    { id: 4, src: stripeLogo, alt: "Stripe" },
    { id: 5, src: dropboxLogo, alt: "Dropbox" },
    { id: 6, src: uberLogo, alt: "Uber" },
    // Add more logos here
  ];

  // Animation controls for looping logo animation
  const controls = useAnimation();

  useEffect(() => {
    // Sequence for looping logo pop animation after initial stagger
    const sequence = async () => {
      while (true) {
        const randomIndex = Math.floor(Math.random() * logos.length);
        await controls.start((i) =>
          i === randomIndex
            ? { scale: [1, 1.1, 1], transition: { duration: 0.3 } }
            : { scale: 1 }
        );
        // Wait a bit before the next pop
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 1500 + 500)
        );
      }
    };
    // Start looping slightly after initial animation finishes
    const timeoutId = setTimeout(sequence, logos.length * 150 + 1000); // Adjust timing
    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [controls, logos.length]);

  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const logoContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Stagger logo entry
      },
    },
  };

  const logoItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const subheadingText = isTalentMode
    ? "We help you hire the top 1% of vetted remote engineers"
    : "Find your dream job with leading tech companies globally"; // Example for jobs mode

  return (
    <motion.section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ease-in-out ${
        isTalentMode ? "bg-tech-blue-dark" : "bg-tech-lime-dark" // Assumed dark background colors
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 1. Animated Background Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        key={selectedOption} // Re-trigger animation on mode change
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{
          scale: [1.1, 1], // Subtle zoom out on load/change
          opacity: 1,
          // Add looping zoom/blur/parallax here if desired using animate prop loops
          // Example subtle loop (add animate-bg-loop to tailwind.config.js)
          // animation: `bg-loop 30s ease-in-out infinite`
        }}
        transition={{ duration: 1.5, ease: "circOut" }}
      >
        <AnimatePresence>
          <motion.img
            key={isTalentMode ? "talent-bg" : "jobs-bg"}
            src={isTalentMode ? talentImage : jobsImage} // Use dynamic image source
            alt="Hero background"
            className={`object-cover w-full h-full transition-transform duration-500 ease-in-out ${
              isTalentMode ? "" : "transform scale-x-[-1]"
            }`} // Mirror effect example
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3, transition: { duration: 1, delay: 0.5 } }} // Adjust opacity/delay
            exit={{ opacity: 0, transition: { duration: 0.5 } }}

            // Add parallax effect using useScroll if needed later
          />
        </AnimatePresence>
      </motion.div>
      {/* 2. Animated Gradient Overlay Layer */}
      <motion.div
        className={`absolute inset-0 z-10 mix-blend-hard-light animate-gradient-overlay`} // Use custom animation class
        style={{
          // Dynamic gradient based on mode
          backgroundImage: isTalentMode
            ? "linear-gradient(90deg, rgba(0, 119, 255, 0.3) 0%, rgba(0, 255, 255, 0.1) 100%)" // Tech Blue gradient (Adjust colors/opacity)
            : "linear-gradient(90deg, rgba(50, 205, 50, 0.3) 0%, rgba(173, 255, 47, 0.1) 100%)", // Teal/Lime gradient (Adjust colors/opacity)
        }}
        // Animate position via CSS animation defined in tailwind.config.js
      />
      {/* Add backdrop filter for glassmorphism if desired - place on content container or separate overlay */}
      <div className="absolute inset-0 z-15 backdrop-filter backdrop-blur-sm"></div>{" "}
      {/* Optional: Adjust blur */}
      {/* Content Container */}
      <motion.div
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
        variants={containerVariants} // Apply stagger to content elements
      >
        {/* Mode Toggle Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="relative flex p-1 bg-gray-700 bg-opacity-50 rounded-full backdrop-filter backdrop-blur-md">
            <button
              onClick={() => setSelectedOption("talent")}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                isTalentMode ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Hire Talent
            </button>
            <button
              onClick={() => setSelectedOption("jobs")}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                !isTalentMode ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Find a Job
            </button>
            {/* Animated background slider for the toggle */}
            <motion.div
              layoutId="modeSlider" // Shared layout animation ID
              className={`absolute inset-0 h-full rounded-full ${
                isTalentMode ? "bg-blue-600" : "bg-teal-500"
              }`} // Use Tailwind theme colors
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: "50%", left: isTalentMode ? "0%" : "50%" }} // Adjust width based on button sizes
            />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Logos */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4"
            variants={logoContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {logos.map((logo, index) => (
              <motion.img
                key={logo.id}
                custom={index} // Pass index for custom animation control
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 object-contain filter brightness-0 invert" // White logos
                variants={logoItemVariants} // Entry animation
                animate={controls} // Apply looping animation controls
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Subtle hover effect
              />
            ))}
          </motion.div>

          {/* Right Side: Text Content & CTA */}
          <motion.div
            className="text-center lg:text-left text-white"
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              {isTalentMode ? "HIRE" : "FIND"}{" "}
              <span
                className={isTalentMode ? "text-blue-400" : "text-lime-400"}
              >
                {isTalentMode ? "smarter" : "faster"} {/* Example variation */}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 mb-8 h-12"
            >
              {" "}
              {/* Fixed height for typing */}
              {/* 3. Typing Subheading */}
              <TypingSubheading key={subheadingText} text={subheadingText} />
            </motion.p>

            <motion.button
              variants={itemVariants}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out shadow-lg ${
                isTalentMode
                  ? "bg-blue-600 hover:bg-blue-500 text-white ring-blue-500"
                  : "bg-lime-500 hover:bg-lime-400 text-black ring-lime-400" // Example for jobs mode
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${
                  isTalentMode
                    ? "rgba(59, 130, 246, 0.7)"
                    : "rgba(163, 230, 53, 0.7)"
                }`,
              }} // Glow effect
              whileTap={{ scale: 0.95 }}
            >
              {isTalentMode ? "Find Your Match" : "Apply Now"}
              {/* Optional: Add icon */}
              {/* <ChevronDownIcon className="w-5 h-5 inline-block ml-2" /> */}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
