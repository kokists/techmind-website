import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-14">
          <div className="text-white text-2xl font-semibold tracking-tight">
            TechMind
          </div>

          <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/capabilities" className="hover:text-gray-300">
                Capabilities
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-gray-300">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gray-300">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
