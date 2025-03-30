import React from "react";
import { motion } from "framer-motion";

// Import images
import careersImg from "@/assets/images/careers.jpg";
import teamImg from "@/assets/images/team.jpg";
import recruiterImg from "@/assets/images/recruiter.jpg";
import happyImg from "@/assets/images/happy.jpg";
import remoteImg from "@/assets/images/remote.jpg";
import cultureImg from "@/assets/images/culture.jpg";

const Careers = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-sky-400 text-white py-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${careersImg})` }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Join Our Team
          </motion.h1>
          <p className="text-lg md:text-2xl mb-8">
            We're building something amazing. Come be part of it.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12"
          >
            Why Work With TechMind
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                img: teamImg,
                title: "Collaborative Culture",
                text: "Join a team that thrives on innovation, transparency, and teamwork.",
              },
              {
                img: cultureImg,
                title: "Empowering Environment",
                text: "We believe in growing talent from within and supporting your career goals.",
              },
              {
                img: remoteImg,
                title: "Flexible Work Style",
                text: "Work from anywhere, anytime. We value productivity and autonomy.",
              },
              {
                img: happyImg,
                title: "Happy People First",
                text: "We prioritize well-being, mental health, and a fulfilling work-life balance.",
              },
              {
                img: recruiterImg,
                title: "Top Talent Network",
                text: "Collaborate with passionate individuals and industry leaders.",
              },
            ].map(({ img, title, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-white p-6 shadow-md rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-52 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Ready to Build Your Future?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mb-8"
        >
          Explore our open roles and find your place at TechMind.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          View Careers
        </motion.button>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2025 TechMind Infosys. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Careers;
