import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const companyLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://cdn.worldvectorlogo.com/logos/facebook-4.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  "https://cdn.worldvectorlogo.com/logos/dropbox.svg",
  "https://cdn.worldvectorlogo.com/logos/uber-2.svg",
  "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", // repeated working logo
  "https://cdn.worldvectorlogo.com/logos/shopify.svg",
];

export default function HeroSection({ activeTab, setActiveTab }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const logoControls = useAnimationControls();

  const heroData = {
    talent: {
      title: "HIRE",
      subtitle: ["smarter", "faster", "better"],
      description: "We help you hire the top 1% of vetted remote engineers.",
      cta: "Find Your Match",
      image:
        "https://images.pexels.com/photos/7652465/pexels-photo-7652465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      theme: {
        titleColor: "text-blue-100",
        subtitleGradient:
          "bg-gradient-to-r from-cyan-300 via-sky-400 via-blue-500 via-indigo-500 to-purple-600 text-shadow-lg",
        ctaColor: "from-blue-500 via-cyan-500 to-indigo-500",
        imageFlip: false,
        blurColor: "bg-blue-900/70",
      },
    },
    jobs: {
      title: "FIND A JOB",
      subtitle: ["growth", "challenges", "impact"],
      description: "Explore remote jobs at top startups and tech companies.",
      cta: "See Openings",
      image:
        "https://images.pexels.com/photos/8507583/pexels-photo-8507583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      theme: {
        titleColor: "text-emerald-100",
        subtitleGradient:
          "bg-gradient-to-r from-lime-200 via-lime-400 via-emerald-400 via-teal-500 to-emerald-700 text-shadow-lg",
        ctaColor: "from-green-400 via-emerald-500 to-lime-500",
        imageFlip: true,
        blurColor: "bg-emerald-900/70",
      },
    },
  };

  const current = heroData[activeTab || "jobs"];
  const activeWords = current.subtitle;

  useEffect(() => {
    setWordIndex(0);
    setCharIndex(0);
    setTypedText("");
    setIsTyping(true);
  }, [activeTab]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout;
    if (isTyping && activeWords.length > 0) {
      if (charIndex < activeWords[wordIndex].length) {
        timeout = setTimeout(() => {
          setTypedText((prev) => prev + activeWords[wordIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 140);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1000);
      }
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % activeWords.length);
        setIsTyping(true);
      }, 800);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex, isTyping, activeWords]);

  useEffect(() => {
    const loop = async () => {
      while (true) {
        const i = Math.floor(Math.random() * companyLogos.length);
        await logoControls.start((index) => ({
          scale: index === i ? 1.25 : 1,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }));
        await new Promise((res) => setTimeout(res, 700));
      }
    };
    loop();
  }, [logoControls]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-16 py-16 overflow-hidden">
      {/* Background Image with continuous animation */}
      <motion.div
        className={`absolute inset-0 z-0 bg-cover bg-center ${
          current.theme.imageFlip ? "scale-x-[-1]" : ""
        } animate-[zoom-blur_10s_ease-in-out_infinite]`}
        style={{ backgroundImage: `url(${current.image})` }}
      />

      {/* Gradient Mask Blur */}
      <div
        className={`absolute left-0 top-0 bottom-0 z-10 w-1/2 backdrop-blur-md ${current.theme.blurColor}`}
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Logos */}
      <motion.div
        className="absolute z-30 top-1/2 left-[100px] transform -translate-y-1/2 grid grid-cols-4 grid-rows-3 gap-8 w-[480px]"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {companyLogos.map((logo, i) => (
          <motion.img
            key={i}
            custom={i}
            animate={logoControls}
            src={logo}
            alt={`Logo ${i}`}
            className="w-24 h-24 object-contain filter brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] opacity-90 hover:opacity-100 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] transition duration-300 ease-in-out"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        ))}
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex-1 hidden md:block" />
        <div className="flex-1 text-center md:text-right text-white">
          <div className="mb-10 flex justify-center md:justify-end space-x-6">
            <button
              onClick={() => setActiveTab("talent")}
              className={`px-6 py-2.5 text-lg rounded-full font-semibold transition-all duration-300 border shadow-md hover:shadow-xl ${
                activeTab === "talent"
                  ? "bg-blue-600 text-white border-transparent"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              }`}
            >
              Hire Talent
            </button>
            <button
              onClick={() => setActiveTab("jobs")}
              className={`px-6 py-2.5 text-lg rounded-full font-semibold transition-all duration-300 border shadow-md hover:shadow-xl ${
                activeTab === "jobs"
                  ? "bg-emerald-600 text-white border-transparent"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              }`}
            >
              Find a Job
            </button>
          </div>

          <h1
            className={`text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight ${current.theme.titleColor} drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]`}
          >
            {current.title}
          </h1>

          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-8 leading-snug min-h-[3.5rem] flex justify-end items-end">
            <span
              className={`bg-clip-text text-transparent ${current.theme.subtitleGradient}`}
            >
              {typedText}
            </span>
            <span
              className={`ml-1 w-[1ch] text-white animate-pulse-fast font-mono`}
            >
              {showCursor && "_"}
            </span>
          </div>

          <p className="text-white/90 max-w-lg ml-auto text-lg md:text-xl leading-relaxed mb-10">
            {current.description}
          </p>

          <button
            className={`bg-gradient-to-r ${current.theme.ctaColor} text-white px-10 py-4 text-lg md:text-xl rounded-full shadow-xl hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 backdrop-blur-md border border-white/20`}
          >
            {current.cta}
          </button>
        </div>
      </div>
    </section>
  );
}

// Add to global CSS or Tailwind config:
// @keyframes zoom-blur {
//   0% { transform: scale(1); filter: blur(0); }
//   50% { transform: scale(1.04); filter: blur(3px); }
//   100% { transform: scale(1); filter: blur(0); }
// }
// .animate-zoom-blur-infinite { animation: zoom-blur 10s ease-in-out infinite; }
