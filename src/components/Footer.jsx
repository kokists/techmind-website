import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Tech</span>Mind
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering businesses through innovative technology solutions that drive growth and transformation.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#4285F4' }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#1DA1F2' }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#0A66C2' }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#E1306C' }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Industries', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Custom Software Development',
                'Cloud Services',
                'Digital Transformation',
                'IT Consulting',
                'AI Solutions'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  1234 Tech Avenue, Suite 100<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-blue-400 flex-shrink-0" size={18} />
                <a href="tel:+14155550123" className="text-gray-400 hover:text-white transition-colors">
                  (415) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-blue-400 flex-shrink-0" size={18} />
                <a href="mailto:info@techmind.com" className="text-gray-400 hover:text-white transition-colors">
                  info@techmind.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm text-center md:flex md:justify-between md:text-left">
          <p>&copy; {currentYear} TechMind Infosys. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
