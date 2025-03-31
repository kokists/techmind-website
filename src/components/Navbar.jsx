import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = ({ selectedOption }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarStyle = () => {
    if (!isScrolled) return "bg-transparent";
    
    return "bg-white backdrop-blur-md shadow-lg";
  };

  const getTextStyle = () => {
    if (!isScrolled) return "text-white";
    return "text-gray-800";
  };

  const getHoverStyle = () => {
    if (!isScrolled) return "hover:text-white hover:scale-105 transform";
    
    return "hover:text-gray-900 hover:scale-105 transform";
  };

  const getActiveStyle = () => {
    if (!isScrolled) {
      return selectedOption === "talent"
        ? "text-blue-200 font-medium"
        : "text-green-200 font-medium";
    }
    return selectedOption === "talent"
      ? "text-blue-600 font-medium"
      : "text-green-600 font-medium";
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${getNavbarStyle()}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-2xl font-bold tracking-tight transition-all duration-300 ${getTextStyle()} ${isScrolled ? "scale-95" : ""} hover:scale-100`}
          >
            <span className={!isScrolled 
              ? (selectedOption === "talent" ? "text-blue-300" : "text-green-300")
              : (selectedOption === "talent" ? "text-blue-600" : "text-green-600")
            }>
              Tech
            </span>
            Mind
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${getTextStyle()} ${getHoverStyle()} ${window.location.pathname === link.to ? getActiveStyle() : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedOption === "talent"
                ? "bg-blue-500 hover:bg-blue-400 text-white"
                : "bg-green-500 hover:bg-green-400 text-white"}`}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-all duration-300 p-2 rounded-lg ${getTextStyle()} ${isScrolled 
              ? (selectedOption === "talent" ? "hover:bg-blue-50" : "hover:bg-green-50")
              : (selectedOption === "talent" ? "hover:bg-blue-800/50" : "hover:bg-green-800/50")}`}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-2 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 
                      ${getTextStyle()} 
                      ${isScrolled 
                        ? (selectedOption === "talent" ? "hover:bg-blue-50" : "hover:bg-green-50")
                        : (selectedOption === "talent" ? "hover:bg-blue-800/50" : "hover:bg-green-800/50")
                      } 
                      ${window.location.pathname === link.to ? getActiveStyle() : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${selectedOption === "talent"
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : "bg-green-500 hover:bg-green-400 text-white"}`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
