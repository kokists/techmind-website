import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = ({ isDarkMode = true, id = "contact-form" }) => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Form submission state
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission success
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message! We'll get back to you soon."
      });
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
      
      // In a real application, you would send data to a server here
      console.log("Form submitted:", formData);
    } else {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fix the errors in the form."
      });
    }
  };

  const bgClass = isDarkMode 
    ? "bg-gray-900 text-white" 
    : "bg-white text-gray-800";
  
  const formBgClass = isDarkMode 
    ? "bg-white/5 backdrop-blur-lg" 
    : "bg-gray-50";
  
  const inputBgClass = isDarkMode 
    ? "bg-white/10 text-white focus:ring-cyan-500" 
    : "bg-white text-gray-800 border border-gray-300 focus:ring-blue-500";

  const labelClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-700";

  const buttonClass = isDarkMode 
    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600" 
    : "bg-blue-600 text-white hover:bg-blue-700";
  
  return (
    <section id={id} className={`py-16 md:py-20 ${bgClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Get in Touch With Us
            </h2>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Have questions about our talent solutions? Contact us today and our team will get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`${formBgClass} rounded-xl p-5 md:p-8`}
            >
              <h3 className={`text-lg md:text-xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Contact Information
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} font-semibold mb-1 md:mb-2 text-sm md:text-base`}>Office Hours</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-base`}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-base`}>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
                <div>
                  <h4 className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} font-semibold mb-1 md:mb-2 text-sm md:text-base`}>Email</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-base`}>contact@techmind.com</p>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-base`}>support@techmind.com</p>
                </div>
                <div>
                  <h4 className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} font-semibold mb-1 md:mb-2 text-sm md:text-base`}>Phone</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-base`}>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} font-semibold mb-1 md:mb-2 text-sm md:text-base`}>Location</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-base`}>
                    123 Tech Avenue, Suite 100<br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`${formBgClass} rounded-xl p-5 md:p-8`}
            >
              <h3 className={`text-lg md:text-xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Send us a Message</h3>
              
              {formStatus.submitted && (
                <div 
                  className={`mb-4 md:mb-6 p-3 md:p-4 rounded-lg ${
                    formStatus.success 
                      ? (isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-800') 
                      : (isDarkMode ? 'bg-red-500/20 text-red-200' : 'bg-red-100 text-red-800')
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className={`block ${labelClass} mb-1 md:mb-2 text-sm md:text-base`}>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full ${inputBgClass} rounded-lg px-3 md:px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 ${errors.name ? (isDarkMode ? 'border border-red-500' : 'border-red-500') : ''}`}
                    placeholder="Your name"
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <p className={`${isDarkMode ? "text-red-400" : "text-red-600"} text-xs md:text-sm mt-1`} aria-live="polite">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className={`block ${labelClass} mb-1 md:mb-2 text-sm md:text-base`}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full ${inputBgClass} rounded-lg px-3 md:px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 ${errors.email ? (isDarkMode ? 'border border-red-500' : 'border-red-500') : ''}`}
                    placeholder="your@email.com"
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className={`${isDarkMode ? "text-red-400" : "text-red-600"} text-xs md:text-sm mt-1`} aria-live="polite">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className={`block ${labelClass} mb-1 md:mb-2 text-sm md:text-base`}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full ${inputBgClass} rounded-lg px-3 md:px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 h-24 md:h-32 ${errors.message ? (isDarkMode ? 'border border-red-500' : 'border-red-500') : ''}`}
                    placeholder="Tell us about your needs..."
                    aria-required="true"
                    aria-invalid={errors.message ? "true" : "false"}
                  ></textarea>
                  {errors.message && (
                    <p className={`${isDarkMode ? "text-red-400" : "text-red-600"} text-xs md:text-sm mt-1`} aria-live="polite">{errors.message}</p>
                  )}
                </div>
                <div className="text-right">
                  <button 
                    type="submit" 
                    className={`${buttonClass} px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
