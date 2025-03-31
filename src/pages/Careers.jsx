import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";

// Images
import heroJobsImage from "@/assets/images/hero-jobs.jpg";
import remoteImage from "@/assets/images/remote.jpg";
import teamImage from "@/assets/images/team.jpg";
import cultureImage from "@/assets/images/culture.jpg";
import happyImage from "@/assets/images/happy.jpg";

const Careers = () => {
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

  const benefits = [
    {
      id: 1,
      image: remoteImage,
      title: "Remote-First Culture",
      description: "Work from anywhere with our distributed team.",
    },
    {
      id: 2,
      image: teamImage,
      title: "Collaborative Environment",
      description: "Learn and grow with talented peers.",
    },
    {
      id: 3,
      image: cultureImage,
      title: "Innovation-Driven",
      description: "Tackle challenging problems with cutting-edge solutions.",
    },
    {
      id: 4,
      image: happyImage,
      title: "Happy Team",
      description: "We care about our team's happiness and well-being.",
    },
  ];

  const cultureItems = [
    {
      id: 1,
      image: teamImage,
      title: "Collaborative Environment",
      description: "Learn and grow with talented peers.",
    },
    {
      id: 2,
      image: cultureImage,
      title: "Innovation-Driven",
      description: "Tackle challenging problems with cutting-edge solutions.",
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Software Engineer",
      type: "Full-time",
      location: "Remote / San Francisco",
      department: "Engineering",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      type: "Full-time",
      location: "Remote / New York",
      department: "Design",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote / Austin",
      department: "Infrastructure",
    },
    {
      id: 4,
      title: "Product Manager",
      type: "Full-time",
      location: "Remote / Chicago",
      department: "Product",
    },
    {
      id: 5,
      title: "Data Scientist",
      type: "Full-time",
      location: "Remote / Seattle",
      department: "Data",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageHero 
        title="Join Our Team"
        subtitle="Discover exciting career opportunities and be part of building the future of technology"
        shortPhrase="Build Your Future With Us"
        backgroundStartColor="from-blue-950"
        textGradientColors="from-blue-400 to-blue-200"
      />
      
      {/* Why Work With Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Why Work With Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Join a team that values innovation, growth, and excellence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                custom={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-16 h-16 mb-4 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Our Culture
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Experience a workplace that encourages creativity and personal growth
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureItems.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Open Positions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Find your perfect role and start your journey with us
            </motion.p>
          </div>

          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                custom={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.department}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-2 mt-4 md:mt-0 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
