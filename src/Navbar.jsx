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
    
    return selectedOption === "talent"
      ? "bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-blue-900/95 backdrop-blur-md shadow-lg border-b border-blue-700/30"
      : "bg-gradient-to-r from-green-900/95 via-green-800/95 to-green-900/95 backdrop-blur-md shadow-lg border-b border-green-700/30";
  };

  const getHoverStyle = () => {
    if (!isScrolled) return "hover:text-white hover:scale-105 transform";
    
    return selectedOption === "talent"
      ? "hover:text-blue-200 hover:scale-105 transform"
      : "hover:text-green-200 hover:scale-105 transform";
  };

  const getActiveStyle = () => {
    return selectedOption === "talent"
      ? "text-blue-200 font-medium"
      : "text-green-200 font-medium";
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/industries", label: "Industries" },
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
            className={`text-2xl font-bold text-white tracking-tight transition-all duration-300 ${
              isScrolled ? "scale-95" : ""
            } hover:scale-100`}
          >
            <span className={selectedOption === "talent" ? "text-blue-300" : "text-green-300"}>Tech</span>
            Mind
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-gray-100 transition-all duration-300 ${getHoverStyle()} ${
                  window.location.pathname === link.to ? getActiveStyle() : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedOption === "talent"
                  ? "bg-blue-500 hover:bg-blue-400 text-white"
                  : "bg-green-500 hover:bg-green-400 text-white"
              }`}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden text-white transition-all duration-300 p-2 rounded-lg ${
              selectedOption === "talent"
                ? "hover:bg-blue-800/50"
                : "hover:bg-green-800/50"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-2 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2 rounded-lg text-gray-100 transition-all duration-300 ${
                      selectedOption === "talent"
                        ? "hover:bg-blue-800/50"
                        : "hover:bg-green-800/50"
                    } ${window.location.pathname === link.to ? getActiveStyle() : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-2 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedOption === "talent"
                      ? "bg-blue-500 hover:bg-blue-400 text-white"
                      : "bg-green-500 hover:bg-green-400 text-white"
                  }`}
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
