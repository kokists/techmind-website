import React, { useState } from "react";
import { motion } from "framer-motion";

// Images
import contactImage from "@/assets/images/contact.jpg";
import officeImage from "@/assets/images/contact-office.jpg";
import supportImage from "@/assets/images/support.jpg";
import corporateImage from "@/assets/images/corporate.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please fill in all required fields.",
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please enter a valid email address.",
      });
      return;
    }

    // In a real scenario, you would send the form data to a backend service
    // For this demo, just show a success message
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message. We'll be in touch soon!",
    });

    // Reset the form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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

  const contactMethods = [
    {
      id: 1,
      title: "Visit Our Office",
      image: officeImage,
      content: "123 Tech Boulevard, San Francisco, CA 94105",
      action: "Get Directions",
      link: "https://maps.google.com",
    },
    {
      id: 2,
      title: "Support Team",
      image: supportImage,
      content: "support@techmindinfosys.com\n+1 (555) 123-4567",
      action: "Email Support",
      link: "mailto:support@techmindinfosys.com",
    },
    {
      id: 3,
      title: "Corporate Inquiries",
      image: corporateImage,
      content: "partnerships@techmindinfosys.com\n+1 (555) 987-6543",
      action: "Email Us",
      link: "mailto:partnerships@techmindinfosys.com",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gray-900">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={contactImage}
            alt="Contact Us"
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
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl"
          >
            Have questions or ready to start a project? We're here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                variants={fadeIn}
                className="relative group overflow-hidden rounded-xl shadow-xl h-full"
              >
                <div className="aspect-w-3 aspect-h-4 relative">
                  <img
                    src={method.image}
                    alt={method.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/70 to-blue-900/30 rounded-xl" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-blue-100 mb-6 whitespace-pre-line">{method.content}</p>
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 w-max"
                  >
                    {method.action}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Send Us a Message
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-blue-100"
              >
                We'll get back to you as soon as possible
              </motion.p>
            </div>
            
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-blue-900/30 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm"
            >
              {formStatus.submitted && (
                <div
                  className={`mb-6 p-4 rounded-lg ${formStatus.error ? 'bg-red-900/50 border border-red-700/50' : 'bg-green-900/50 border border-green-700/50'}`}
                >
                  <p className={formStatus.error ? 'text-red-200' : 'text-green-200'}>
                    {formStatus.message}
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-blue-100 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-blue-950/50 border border-blue-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-blue-100 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-blue-950/50 border border-blue-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-blue-100 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-blue-950/50 border border-blue-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-blue-100 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-3 bg-blue-950/50 border border-blue-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <div className="text-right">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-20 bg-gradient-to-b from-blue-900/30 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-900/30 p-4 rounded-xl border border-blue-700/30 overflow-hidden shadow-2xl shadow-blue-900/20 aspect-w-16 aspect-h-9"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201064.44869142938!2d-122.57768294144007!3d37.7599330643728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1646979935000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TechMind Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
