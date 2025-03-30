import React from "react";
import { motion } from "framer-motion";

// Import Images
import successImage from "@/assets/images/success.jpg";
import financeImage from "@/assets/images/finance.jpg";
import teamworkImage from "@/assets/images/teamwork.jpg";
import softwareTechImage from "@/assets/images/software-tech.jpg";
import contactImage from "@/assets/images/contact.jpg";
import healthImage from "@/assets/images/health.jpg";

const Industries = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-emerald-400 text-white py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${teamworkImage})` }}
        />
        <div className="relative z-10 container mx-auto text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Industries We Serve
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Discover how we tailor our solutions to meet the unique needs of
            each industry.
          </p>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-gray-800 mb-12"
          >
            Our Expertise Across Industries
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Healthcare */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <img
                src={healthImage}
                alt="Healthcare"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Healthcare
              </h3>
              <p className="text-gray-600 text-base">
                Innovative tech to improve patient care, automate systems, and
                ensure regulatory compliance.
              </p>
            </div>

            {/* Finance */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <img
                src={financeImage}
                alt="Finance"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Finance
              </h3>
              <p className="text-gray-600 text-base">
                Smart solutions for automation, security, and customer
                experience in finance.
              </p>
            </div>

            {/* Technology */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <img
                src={softwareTechImage}
                alt="Technology"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Technology
              </h3>
              <p className="text-gray-600 text-base">
                Scalable platforms, SaaS products, and cloud infrastructure for
                growing tech companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-gray-800 mb-12"
          >
            Success Stories
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Healthcare Solution
              </h3>
              <p className="text-gray-600 mb-3">
                How we helped a provider streamline workflows and improve care
                delivery.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Finance Transformation
              </h3>
              <p className="text-gray-600 mb-3">
                Empowering a finance firm with automation, AI, and secure
                infrastructure.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Tech Innovation
              </h3>
              <p className="text-gray-600 mb-3">
                Helping a startup scale with agile development and cloud-native
                systems.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-4"
        >
          Ready to transform your industry?
        </motion.h2>
        <p className="text-lg mb-8">
          Connect with our experts to explore your next solution.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2025 TechMind Infosys. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Industries;
