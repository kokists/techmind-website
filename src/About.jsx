import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

// Images
import aboutImage1 from "@/assets/images/about-image-1.jpg";
import aboutImage2 from "@/assets/images/about-image-2.jpg";
import aboutImage3 from "@/assets/images/about-image-3.jpg";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-sky-400 text-white py-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${aboutImage1})` }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <p className="text-lg md:text-2xl mb-8">
            We are transforming businesses by delivering top-tier tech talent
            and innovative solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We aim to revolutionize businesses by providing innovative tech
              talent that drives success.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              To be the leading platform that connects exceptional talent with
              innovative tech companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats/Milestones Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8"
          >
            Our Milestones
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-8 bg-white shadow-md rounded-xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-blue-600 mb-4"
              >
                500+
              </motion.div>
              <p className="text-lg text-gray-600">Projects Delivered</p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-blue-600 mb-4"
              >
                100+
              </motion.div>
              <p className="text-lg text-gray-600">Clients Served</p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-blue-600 mb-4"
              >
                24/7
              </motion.div>
              <p className="text-lg text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8"
          >
            Meet Our Team
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-xs p-4 bg-white shadow-md rounded-xl text-center">
              <img
                src={aboutImage2}
                alt="Team Member 1"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                John Doe
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="max-w-xs p-4 bg-white shadow-md rounded-xl text-center">
              <img
                src={aboutImage3}
                alt="Team Member 2"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Jane Smith
              </h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="max-w-xs p-4 bg-white shadow-md rounded-xl text-center">
              <img
                src={aboutImage1}
                alt="Team Member 3"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mike Lee
              </h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Want to know more about us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mb-8"
        >
          Get in touch to learn more about our work and how we can help you.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Contact Us
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2025 TechMind Infosys. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
