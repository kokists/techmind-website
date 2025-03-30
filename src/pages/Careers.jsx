import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

  const perks = [
    {
      id: 1,
      icon: "🌎",
      title: "Remote-First",
      description: "Work from anywhere in the world with flexible hours.",
    },
    {
      id: 2,
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-leading compensation packages and equity options.",
    },
    {
      id: 3,
      icon: "🏥",
      title: "Comprehensive Benefits",
      description: "Full health, dental, and vision coverage for you and your family.",
    },
    {
      id: 4,
      icon: "🎓",
      title: "Learning Budget",
      description: "Annual budget for conferences, courses, and professional development.",
    },
    {
      id: 5,
      icon: "🧘",
      title: "Wellness Program",
      description: "Mental health resources, fitness stipends, and meditation programs.",
    },
    {
      id: 6,
      icon: "🏝️",
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and come back inspired.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gray-900">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={heroJobsImage}
            alt="Careers at TechMind"
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-900/40 to-transparent backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-green-100 max-w-3xl"
          >
            Build the future of technology with us
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us Section */}
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
              Why Work With Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-green-100 max-w-3xl mx-auto"
            >
              At TechMind, we're building more than just technology—we're building a community
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: remoteImage, title: "Remote-First Culture", desc: "Work from anywhere with our distributed team." },
              { image: teamImage, title: "Collaborative Environment", desc: "Learn and grow with talented peers." },
              { image: cultureImage, title: "Innovation-Driven", desc: "Tackle challenging problems with cutting-edge solutions." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                variants={fadeIn}
                className="relative group overflow-hidden rounded-xl shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent rounded-xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-green-100">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
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
                Our Culture
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At TechMind, we believe that great technology is built by great people. That's why we've created a culture that emphasizes collaboration, innovation, and work-life balance.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our team members are empowered to take ownership of their work, contribute ideas, and continuously learn and grow. We celebrate diversity of thought and background, knowing that different perspectives lead to better solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Collaboration", "Innovation", "Growth", "Balance", "Diversity", "Impact"].map((value, index) => (
                  <span key={index} className="px-4 py-2 bg-green-900/30 text-green-100 rounded-full border border-green-700/30">
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden shadow-2xl shadow-green-900/20"
            >
              <img
                src={happyImage}
                alt="TechMind Culture"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks and Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-green-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Perks & Benefits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-green-100 max-w-3xl mx-auto"
            >
              We take care of our team so they can focus on doing their best work
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                variants={fadeIn}
                className="bg-green-900/30 p-8 rounded-xl border border-green-700/30 backdrop-blur-sm h-full"
              >
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                <p className="text-gray-300">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-b from-green-900/30 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Current Openings
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-green-100 max-w-3xl mx-auto"
            >
              Join our team and help shape the future of technology
            </motion.p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                variants={fadeIn}
                className="bg-gray-800/80 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 border border-green-700/20 hover:border-green-700/40"
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-3 py-1 bg-green-900/40 text-green-100 rounded-full">{position.type}</span>
                      <span className="px-3 py-1 bg-gray-700/80 text-gray-300 rounded-full">{position.location}</span>
                      <span className="px-3 py-1 bg-gray-700/80 text-gray-300 rounded-full">{position.department}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all duration-300 whitespace-nowrap"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Join the Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 mb-10 max-w-3xl mx-auto"
          >
            Don't see a position that fits your skills? We're always looking for talented individuals to join our team. Send us your resume and let's talk!
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
                className="px-10 py-4 rounded-lg font-semibold text-lg bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/25 transition-all duration-300"
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

export default Careers;
