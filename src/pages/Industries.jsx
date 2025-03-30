import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import corporateImage from "@/assets/images/corporate.jpg";
import financeImage from "@/assets/images/finance.jpg";
import healthImage from "@/assets/images/health.jpg";

const Industries = () => {
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

  const industries = [
    {
      id: 1,
      title: "Financial Services",
      description: "Innovative solutions for banking, insurance, and financial institutions to enhance customer experience and optimize operations.",
      image: financeImage,
      features: [
        "Digital banking platforms",
        "Fraud detection systems",
        "Risk management solutions",
        "Regulatory compliance tools",
      ],
    },
    {
      id: 2,
      title: "Healthcare",
      description: "Digital healthcare solutions that improve patient care, streamline operations, and ensure compliance with industry regulations.",
      image: healthImage,
      features: [
        "Electronic health records",
        "Telehealth platforms",
        "Clinical decision support",
        "Healthcare analytics",
      ],
    },
    {
      id: 3,
      title: "Corporate & Enterprise",
      description: "Enterprise-grade solutions that enhance productivity, streamline operations, and drive digital transformation.",
      image: corporateImage,
      features: [
        "Enterprise resource planning",
        "Customer relationship management",
        "Supply chain optimization",
        "Digital workplace solutions",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gray-900">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={corporateImage}
            alt="Industries We Serve"
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
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl"
          >
            Domain-specific expertise to address your industry's unique challenges
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Industry Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              We combine deep industry knowledge with technical expertise to deliver solutions tailored to your specific needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section 
          key={industry.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-900 to-gray-800'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
                variants={fadeIn}
                className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-1'}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {industry.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 ${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-2'}`}
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial Section */}
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
              Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              What our clients say about our industry-specific solutions
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-blue-900/30 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl text-white mb-6">u201C</div>
              <p className="text-xl text-gray-200 italic mb-8">
                TechMind's deep understanding of our industry challenges allowed them to deliver a solution that not only met our immediate needs but positioned us for future growth. Their expertise was evident at every stage of the project.
              </p>
              <div className="mt-4">
                <p className="text-white font-semibold">Sarah Johnson</p>
                <p className="text-blue-300">CTO, Global Financial Services</p>
              </div>
            </div>
          </motion.div>
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
            Let's Build Your Industry-Specific Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
          >
            Ready to discuss how our industry expertise can help you overcome your unique challenges? Contact us today.
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

export default Industries;
