import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink as ReactRouterHashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = ({ selectedOption }) => {
  // Define the HashLink component to use ReactRouterHashLink
  const HashLink = ReactRouterHashLink;
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const handleMouseEnter = (dropdown) => {
    setHoverDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setHoverDropdown(null);
  };

  // Show dropdown if either open by click or hover
  const isDropdownVisible = (dropdownId) => {
    return openDropdown === dropdownId || hoverDropdown === dropdownId;
  };

  // Mobile devices show a semi-transparent background even when not scrolled
  const isMobile = windowWidth < 768;

  const getNavbarStyle = () => {
    if (!isScrolled && !isMobile) return "bg-transparent";
    if (!isScrolled && isMobile) return "bg-gray-900/70 backdrop-blur-md";
    
    return "bg-white backdrop-blur-md shadow-lg";
  };

  const getTextStyle = () => {
    if (!isScrolled && !isMobile) return "text-white";
    if (!isScrolled && isMobile) return "text-white";
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

  const getDropdownItemStyle = () => {
    if (!isScrolled) {
      return selectedOption === "talent"
        ? "hover:bg-blue-800/50 text-white"
        : "hover:bg-green-800/50 text-white";
    }
    return selectedOption === "talent"
      ? "hover:bg-blue-50 text-gray-800"
      : "hover:bg-green-50 text-gray-800";
  };

  const getDropdownStyle = () => {
    return isScrolled 
      ? "bg-white shadow-lg border border-gray-100 text-gray-800" 
      : "bg-gray-900/80 backdrop-blur-md shadow-lg text-white";
  };

  const navLinks = [
    { to: "/", label: "Home", hasDropdown: false },
    { 
      to: "/about", 
      label: "About", 
      hasDropdown: true,
      dropdownId: "about",
      dropdownItems: [
        { to: "/about", label: "About Us" },
        { to: "/about#about-contact", label: "Contact Us", isHashLink: true },
      ]
    },
    { 
      to: "/services", 
      label: "Services", 
      hasDropdown: true,
      dropdownId: "services",
      dropdownItems: [
        { to: "/services", label: "Our Services" },
        { to: "/services#services-contact", label: "Get in Touch", isHashLink: true },
      ]
    },
    { to: "/careers", label: "Careers", hasDropdown: false },
  ];

  // Mobile menu button style based on scroll state
  const getMobileMenuButtonStyle = () => {
    if (!isScrolled) {
      return "text-white bg-gray-800/50 hover:bg-gray-700/70";
    }
    return "text-gray-800 bg-gray-200 hover:bg-gray-300";
  };

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
              <div key={link.to} className="relative group">
                {link.hasDropdown ? (
                  <div 
                    className="relative" 
                    onMouseEnter={() => handleMouseEnter(link.dropdownId)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${getTextStyle()} ${getHoverStyle()} ${window.location.pathname === link.to ? getActiveStyle() : ""}`}
                      onClick={() => toggleDropdown(link.dropdownId)}
                      aria-expanded={isDropdownVisible(link.dropdownId)}
                      aria-controls={`dropdown-${link.dropdownId}`}
                    >
                      {link.label}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <AnimatePresence>
                      {isDropdownVisible(link.dropdownId) && (
                        <motion.div
                          id={`dropdown-${link.dropdownId}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-0 mt-1 w-48 rounded-lg z-20 overflow-hidden ${getDropdownStyle()}`}
                        >
                          <div className="py-1">
                            {link.dropdownItems.map((dropdownItem, idx) => (
                              dropdownItem.isHashLink ? (
                                <HashLink
                                  key={idx}
                                  smooth
                                  to={dropdownItem.to}
                                  className={`block px-4 py-2 ${getDropdownItemStyle()} hover:backdrop-blur-sm`}
                                  onClick={() => {
                                    closeDropdown();
                                    handleMouseLeave();
                                  }}
                                >
                                  {dropdownItem.label}
                                </HashLink>
                              ) : (
                                <Link
                                  key={idx}
                                  to={dropdownItem.to}
                                  className={`block px-4 py-2 ${getDropdownItemStyle()} hover:backdrop-blur-sm`}
                                  onClick={() => {
                                    closeDropdown();
                                    handleMouseLeave();
                                  }}
                                >
                                  {dropdownItem.label}
                                </Link>
                              )
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${getTextStyle()} ${getHoverStyle()} ${window.location.pathname === link.to ? getActiveStyle() : ""}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <HashLink
              smooth
              to="/services#services-contact"
              onClick={() => {
                closeDropdown();
                handleMouseLeave();
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`ml-4 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedOption === "talent"
                  ? "bg-blue-500 hover:bg-blue-400 text-white"
                  : "bg-green-500 hover:bg-green-400 text-white"}`}
              >
                Get Started
              </motion.button>
            </HashLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${getMobileMenuButtonStyle()} backdrop-blur-sm shadow-sm`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${isScrolled ? "bg-white" : "bg-gray-900/90 backdrop-blur-lg"}`}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.to} className="py-2">
                  {link.hasDropdown ? (
                  <div>
                    <button
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 
                        ${getTextStyle()} 
                        ${isScrolled 
                          ? (selectedOption === "talent" ? "hover:bg-blue-50" : "hover:bg-green-50")
                          : (selectedOption === "talent" ? "hover:bg-blue-800/50" : "hover:bg-green-800/50")
                        } 
                        ${window.location.pathname === link.to ? getActiveStyle() : ""}`}
                      onClick={() => toggleDropdown(link.dropdownId)}
                      aria-expanded={openDropdown === link.dropdownId}
                    >
                      <span className="text-base md:text-sm">  
                        {link.label}
                      </span>
                      <ChevronDown size={18} className={`ml-1 transition-transform ${openDropdown === link.dropdownId ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.dropdownId && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 mt-1 border-l-2 border-gray-300 ml-4"
                        >
                          {link.dropdownItems.map((dropdownItem, idx) => (
                            dropdownItem.isHashLink ? (
                              <HashLink
                                key={idx}
                                smooth
                                to={dropdownItem.to}
                                className={`block px-4 py-3 my-2 rounded-lg text-base md:text-sm ${getDropdownItemStyle()}`} 
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {dropdownItem.label}
                              </HashLink>
                            ) : (
                              <Link
                                key={idx}
                                to={dropdownItem.to}
                                className={`block px-4 py-3 my-2 rounded-lg text-base md:text-sm ${getDropdownItemStyle()}`} 
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {dropdownItem.label}
                              </Link>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${getTextStyle()} 
                    ${isScrolled 
                      ? (selectedOption === "talent" ? "hover:bg-blue-50" : "hover:bg-green-50")
                      : (selectedOption === "talent" ? "hover:bg-blue-800/50" : "hover:bg-green-800/50")
                    } 
                    ${window.location.pathname === link.to ? getActiveStyle() : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
