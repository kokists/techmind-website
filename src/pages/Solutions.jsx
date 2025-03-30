import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import capabilitiesImage from "@/assets/images/capabilities.jpg";
import softwareTechImage from "@/assets/images/software-tech.jpg";

const Solutions = () => {
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

  const capabilities = [
    {
      id: 1,
      title: "Enterprise Application Development",
      description: "Custom enterprise-grade applications that enhance operational efficiency and drive business growth.",
      features: [
        "Microservices architecture",
        "API development and integration",
        "Legacy system modernization",
        "Scalable database design",
      ],
    },
    {
      id: 2,
      title: "Cloud & Infrastructure Solutions",
      description: "Comprehensive cloud services to modernize your infrastructure and optimize performance.",
      features: [
        "Multi-cloud strategy",
        "Infrastructure as Code (IaC)",
        "Containerization & orchestration",
        "Cloud security implementation",
      ],
    },
    {
      id: 3,
      title: "Data & Analytics",
      description: "Transform raw data into actionable insights that drive strategic business decisions.",
      features: [
        "Data warehousing",
        "Business intelligence",
        "Predictive analytics",
        "Data visualization",
      ],
    },
    {
      id: 4,
      title: "DevOps & Automation",
      description: "Streamline your development processes and enhance collaboration between teams.",
      features: [
        "CI/CD pipeline implementation",
        "Infrastructure automation",
        "Monitoring & alerting",
        "Performance optimization",
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
            src={capabilitiesImage}
            alt="Our Capabilities"
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
            Our Capabilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl"
          >
            Comprehensive technology expertise to power your business transformation
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
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
                Transformative Technology Solutions
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At TechMind, we offer a comprehensive suite of technology capabilities designed to transform your business. Our solutions combine cutting-edge technology with deep industry expertise to help you navigate the complex digital landscape.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you're looking to modernize legacy systems, migrate to the cloud, implement data-driven decision making, or automate your development processes, our team has the expertise to help you achieve your goals.
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
                src={softwareTechImage}
                alt="Technology Solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Core Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Specialized technical expertise to address your most complex challenges
            </motion.p>
          </div>
          
          <div className="space-y-16">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                variants={fadeIn}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-blue-900/30 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                    <p className="text-gray-300 mb-6">{capability.description}</p>
                    <ul className="space-y-3">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-300/50 to-transparent w-full"></div>
                  <div className="py-6 pl-4">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <blockquote className="text-xl italic text-blue-100">
                        {index === 0 && "Modern enterprise applications need to be resilient, scalable, and adaptable to changing business needs."}
                        {index === 1 && "Cloud infrastructure provides the foundation for digital transformation, enabling agility and innovation."}
                        {index === 2 && "Data is the new currency of business, and organizations that harness its power gain a significant competitive advantage."}
                        {index === 3 && "DevOps practices bridge the gap between development and operations, accelerating software delivery while maintaining quality."}
                      </blockquote>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
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
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              How we leverage our capabilities to deliver exceptional results
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Discover",
                description: "We start by understanding your business goals, challenges, and vision for the future.",
                color: "blue",
              },
              {
                title: "Design",
                description: "Our experts design tailored solutions that address your specific needs and align with your objectives.",
                color: "indigo",
              },
              {
                title: "Develop",
                description: "We build your solution using agile methodologies and best-in-class technologies.",
                color: "purple",
              },
              {
                title: "Deliver",
                description: "We implement your solution with minimal disruption and provide ongoing support and optimization.",
                color: "pink",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-${step.color}-900/30 p-8 rounded-xl border border-${step.color}-700/30 backdrop-blur-sm h-full flex flex-col`}
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {(index + 1).toString().padStart(2, '0')}.
                </div>
                <h3 className={`text-2xl font-bold text-${step.color}-300 mb-4`}>{step.title}</h3>
                <p className="text-gray-300 flex-grow">{step.description}</p>
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
          >
            Let's discuss how our technology capabilities can help you achieve your business objectives and stay ahead in the digital era.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-lg font-semibold text-lg bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300"
              >
                Explore Services
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-lg font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
