import React from "react";
import { motion } from "framer-motion";

import contactOffice from "@/assets/images/contact-office.jpg";
import supportImage from "@/assets/images/support.jpg";
import corporateImage from "@/assets/images/corporate.jpg";

const ContactOptions = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    {[
      {
        title: "Schedule a Call",
        description: "Book a 30-minute consultation with our tech experts",
        buttonText: "Book Now",
        icon: "📅",
      },
      {
        title: "Start a Project",
        description: "Tell us about your project and requirements",
        buttonText: "Get Started",
        icon: "🚀",
      },
      {
        title: "General Inquiry",
        description: "Questions about our services? Let's talk",
        buttonText: "Contact Us",
        icon: "💬",
      },
    ].map((option, index) => (
      <div
        key={index}
        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
      >
        <div className="text-4xl mb-4">{option.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
        <p className="text-gray-300 mb-4">{option.description}</p>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
          {option.buttonText}
        </button>
      </div>
    ))}
  </div>
);

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${corporateImage})` }}
        ></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-lg md:text-2xl">
            Let’s build something great together — get in touch with us today.
          </p>
        </div>
      </section>

      {}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={contactOffice}
              alt="Our Office"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Office
              </h3>
              <p className="text-gray-600">
                1234 Innovation Blvd, Suite 500
                <br />
                Phoenix, AZ 85044
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={supportImage}
              alt="Customer Support"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Customer Support
              </h3>
              <p className="text-gray-600">
                support@techmindinfosys.com
                <br />
                +1 (480) 123-4567
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={corporateImage}
              alt="Partnerships"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Partnerships
              </h3>
              <p className="text-gray-600">
                business@techmindinfosys.com
                <br />
                Collaborate with us
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800"
          >
            Send Us a Message
          </motion.h2>
          <form className="bg-white shadow-lg rounded-xl p-8 grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 text-white font-semibold text-lg py-3 rounded-full shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>

      {}
      <section className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose how you'd like to connect with us
            </p>
          </motion.div>

          <ContactOptions />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 h-32"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Office Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">contact@techmind.com</p>
                  <p className="text-gray-300">support@techmind.com</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">+1 (555) 987-6543</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">
                    123 Tech Avenue, Suite 100<br />
                    Silicon Valley, CA 94025<br />
                    United States
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2025 TechMind Infosys. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
