import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <SEOHead 
        title="Page Not Found" 
        description="The page you are looking for doesn't exist or has been moved."
      />
      
      <section className="min-h-[80vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-gray-200 mb-8">404</h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link 
                to="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>
              
              <Link 
                to="/contact"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Looking for something else?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
              {[
                { label: 'Our Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="p-3 border border-gray-100 rounded hover:bg-gray-50 transition duration-200 flex items-center"
                >
                  <span className="text-blue-600 mr-2">→</span> {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
