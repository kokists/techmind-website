import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import aboutImage1 from "@/assets/images/about-image-1.jpg";
import aboutImage2 from "@/assets/images/about-image-2.jpg";
import aboutImage3 from "@/assets/images/about-image-3.jpg";
import teamImage from "@/assets/images/team.jpg";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gray-900">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={aboutImage1}
            alt="About TechMind"
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
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/40 to-transparent backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl"
          >
            Building world-class solutions for tomorrow's tech challenges
          </motion.p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Company Overview
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2010, TechMind has evolved from a small consulting firm to a global leader in technology solutions. Our journey has been defined by a relentless pursuit of innovation and excellence.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Today, we help businesses across all sectors to navigate the complex technology landscape, providing cutting-edge solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a team of over 500 technology experts worldwide, we combine deep industry knowledge with technical expertise to deliver transformative results for our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20"
            >
              <img
                src={aboutImage2}
                alt="About TechMind"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 order-2 lg:order-1"
            >
              <img
                src={aboutImage3}
                alt="Our Vision"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Vision
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At TechMind, we envision a future where technology seamlessly enhances human potential. We're committed to developing solutions that not only solve today's problems but anticipate tomorrow's challenges.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our mission is to democratize access to cutting-edge technology, making powerful tools available to businesses of all sizes. We believe that when technology is accessible, innovation flourishes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-700/30 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">Innovation</h3>
                  <p className="text-gray-300">Pioneering tomorrow's solutions today</p>
                </div>
                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-700/30 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">Excellence</h3>
                  <p className="text-gray-300">Committed to the highest standards</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Passionate experts dedicated to transforming your technology vision into reality
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 mb-16"
          >
            <img
              src={teamImage}
              alt="The TechMind Team"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <p className="text-2xl font-medium text-white">We're a team of over 500 innovators across 12 global offices</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                variants={fadeIn}
                className="bg-blue-900/30 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-blue-300 mb-4">{index === 1 ? '15+' : index === 2 ? '98%' : '24/7'}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {index === 1 ? 'Years Experience' : index === 2 ? 'Client Satisfaction' : 'Dedicated Support'}
                </h3>
                <p className="text-gray-300">
                  {index === 1 
                    ? 'Over a decade of industry experience delivering cutting-edge solutions.' 
                    : index === 2 
                      ? 'Our clients consistently rate us as exceeding expectations on deliverables.' 
                      : 'Round-the-clock support to ensure your systems run smoothly at all times.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/30 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Start Your Tech Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
          >
            Let's discuss how TechMind can transform your business with innovative technology solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-lg font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
