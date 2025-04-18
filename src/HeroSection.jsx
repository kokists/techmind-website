import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import talentImage from "@/assets/images/talent-image.jpg";
import jobsImage from "@/assets/images/jobs-image.jpg";
import googleLogo from "@/assets/logos/google.png";
import netflixLogo from "@/assets/logos/netflix.png";
import amazonLogo from "@/assets/logos/amazon.png";
import stripeLogo from "@/assets/logos/stripe.png";
import dropboxLogo from "@/assets/logos/dropbox.png";
import uberLogo from "@/assets/logos/uber.png";

const TypingEffect = ({
  words,
  speed = 150,
  deleteSpeed = 75,
  pause = 1500,
  gradientClass,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? deleteSpeed : speed;
    const handleTyping = () => {
      setText((current) =>
        isDeleting
          ? currentWord.substring(0, current.length - 1)
          : currentWord.substring(0, current.length + 1)
      );
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };
    const typingTimeout = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const cursorVisibilityClass = showCursor ? "opacity-100" : "opacity-0";

  return (
    <span
      className={`relative whitespace-nowrap min-w-[1ch] text-4xl sm:text-5xl lg:text-6xl font-bold ${gradientClass}`}
    >
      {text}
      <span
        className={`inline-block ml-1 ${cursorVisibilityClass} transition-opacity duration-100 ease-in-out`}
      >
        _
      </span>
    </span>
  );
};

const HeroSection = ({ selectedOption, setSelectedOption }) => {
  const isTalentMode = selectedOption === "talent";

  const logos = [
    { id: 1, src: googleLogo, alt: "Google" },
    { id: 2, src: netflixLogo, alt: "Netflix" },
    { id: 3, src: amazonLogo, alt: "Amazon" },
    { id: 4, src: stripeLogo, alt: "Stripe" },
    { id: 5, src: dropboxLogo, alt: "Dropbox" },
    { id: 6, src: uberLogo, alt: "Uber" },
  ];

  const controlsRef = useRef(logos.map(() => useAnimation()));
  const controls = controlsRef.current;

  const logoVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  useEffect(() => {
    controls.forEach((control, index) => {
      setTimeout(() => {
        control.start("visible");
      }, index * 500);
    });

    const delayBeforePop = logos.length * 500 + 600;
    const popInterval = setTimeout(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * controls.length);
        controls[randomIndex].start({
          scale: [1, 1.15, 1],
          transition: { duration: 0.6, ease: "easeOut" },
        });
      }, 1800);
      controlsRef.current._popInterval = interval;
    }, delayBeforePop);

    return () => {
      clearTimeout(popInterval);
      if (controlsRef.current._popInterval) {
        clearInterval(controlsRef.current._popInterval);
      }
    };
  }, [controls, logos.length]);

  const StatsBanner = ({ isTalentMode }) => {
    const stats = isTalentMode
      ? [
          { number: "500+", label: "Projects Delivered" },
          { number: "98%", label: "Client Satisfaction" },
          { number: "15+", label: "Years Experience" },
          { number: "50+", label: "Tech Partners" },
        ]
      : [
          { number: "10K+", label: "Tech Jobs" },
          { number: "95%", label: "Placement Rate" },
          { number: "48h", label: "Response Time" },
          { number: "30+", label: "Tech Companies" },
        ];

    return (
      <div className="relative">
        <div
          className={`w-full py-8 ${
            isTalentMode
              ? "bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-blue-900/90"
              : "bg-gradient-to-r from-green-900/90 via-green-800/90 to-green-900/90"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <span className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      isTalentMode ? "text-blue-200" : "text-green-200"
                    }`}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-gray-900 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={selectedOption === "talent" ? talentImage : jobsImage}
          alt="Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80" />

        {/* Mode-specific gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isTalentMode
              ? "from-blue-900/80 via-blue-900/40 to-transparent"
              : "from-green-900/80 via-green-900/40 to-transparent"
          } backdrop-blur-[2px]`}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 pt-32 pb-40 flex flex-col items-center justify-start min-h-screen"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Logos Section */}
          <div className="relative">
            {/* Trust Message */}
            <div className="absolute -top-12 left-1/3 right-1/3 text-center">
              <p
                className={`text-lg font-medium mb-2 ${
                  isTalentMode ? "text-blue-200" : "text-green-200"
                }`}
              >
                Trusted by Industry Leaders
              </p>
            </div>

            {/* Logos Grid */}
            <div className="grid grid-cols-3 gap-8">
              {/* First Column */}
              <div className="space-y-8 flex flex-col items-center">
                <motion.img
                  src={logos[0].src}
                  alt={logos[0].alt}
                  className="h-24 sm:h-28 object-contain hover:drop-shadow-[0_0_10px_white]"
                  initial="hidden"
                  variants={logoVariants}
                  animate={controls[0]}
                />
                <motion.img
                  src={logos[3].src}
                  alt={logos[3].alt}
                  className="h-24 sm:h-28 object-contain hover:drop-shadow-[0_0_10px_white]"
                  initial="hidden"
                  variants={logoVariants}
                  animate={controls[3]}
                />
              </div>

              {/* Middle Column */}
              <div className="space-y-8 flex flex-col items-center">
                <motion.img
                  src={logos[1].src}
                  alt={logos[1].alt}
                  className="h-24 sm:h-28 object-contain hover:drop-shadow-[0_0_10px_white]"
                  initial="hidden"
                  variants={logoVariants}
                  animate={controls[1]}
                />
                <motion.img
                  src={logos[4].src}
                  alt={logos[4].alt}
                  className="h-24 sm:h-28 object-contain hover:drop-shadow-[0_0_10px_white]"
                  initial="hidden"
                  variants={logoVariants}
                  animate={controls[4]}
                />
              </div>

              {/* Last Column */}
              <div className="space-y-8 flex flex-col items-center">
                <motion.img
                  src={logos[2].src}
                  alt={logos[2].alt}
                  className="h-24 sm:h-28 object-contain hover:drop-shadow-[0_0_10px_white]"
                  initial="hidden"
                  variants={logoVariants}
                  animate={controls[2]}
                />
                <motion.img
                  src={logos[5].src}
                  alt={logos[5].alt}
                  className="h-24 sm:h-28 object-contain hover:drop-shadow-[0_0_10px_white]"
                  initial="hidden"
                  variants={logoVariants}
                  animate={controls[5]}
                />
              </div>
            </div>
          </div>

          {/* Hero Text Content */}
          <div className="text-center lg:text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="block mb-4">
                {selectedOption === "talent"
                  ? "Transform Your Tech Vision"
                  : "Find Your Dream Tech Role"}
              </span>
              <span>
                <TypingEffect
                  words={
                    selectedOption === "talent"
                      ? [
                          "With Expert Engineers",
                          "With Agile Teams",
                          "With Innovation",
                        ]
                      : [
                          "In Top Tech Companies",
                          "With Great Benefits",
                          "With Growth Potential",
                        ]
                  }
                  gradientClass={`bg-gradient-to-r text-transparent bg-clip-text ${
                    isTalentMode
                      ? "from-blue-600 via-blue-400 to-cyan-400"
                      : "from-green-600 via-green-400 to-lime-400"
                  }`}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {selectedOption === "talent"
                ? "Access top-tier tech talent and innovative solutions to drive your business forward."
                : "Connect with leading tech companies and take your career to the next level."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedOption("talent")}
                className={`px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  selectedOption === "talent"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 backdrop-blur-sm"
                }`}
              >
                Hire Talent
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedOption("jobs")}
                className={`px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  selectedOption === "jobs"
                    ? "bg-gradient-to-r from-green-500 to-lime-500 text-white shadow-lg shadow-green-500/25"
                    : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 backdrop-blur-sm"
                }`}
              >
                Find Jobs
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Banner positioned at the bottom of the image */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <StatsBanner isTalentMode={isTalentMode} />
      </div>
    </motion.section>
  );
};

export default HeroSection;
