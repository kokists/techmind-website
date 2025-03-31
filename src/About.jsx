import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

// Images
import aboutImage1 from "@/assets/images/about-image-1.jpg";
import aboutImage2 from "@/assets/images/about-image-2.jpg";
import aboutImage3 from "@/assets/images/about-image-3.jpg";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section with gradient */}
      <PageHero 
        title="About TechMind Infosys"
        subtitle="Pioneering innovation through technology and talent"
        shortPhrase="Our Journey"
        backgroundStartColor="from-blue-800"
        textGradientColors="from-white to-blue-200"
        backgroundImage={aboutImage1}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-8">
          <div className="w-full sm:w-2/3 text-gray-200">
            <p className="mb-6 backdrop-blur-sm bg-black/10 p-4 rounded-lg">
              Founded in 2010, TechMind Infosys has been at the forefront of digital transformation, 
              helping businesses across the globe harness the power of technology to drive growth and innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 shadow-lg transition-all"
            >
              Discover Our Solutions
            </motion.button>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full sm:w-1/3 flex justify-center"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
              <img src={aboutImage2} alt="TechMind Vision" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center pb-4">
                <span className="text-white font-semibold">Our Vision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </PageHero>

      {/* Origin Story Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Origin Story</h2>
            <p className="text-lg text-gray-600 mb-10">
              TechMind Infosys was born from a simple yet powerful idea: to build a bridge between exceptional tech talent and companies driving innovation. What started as a small team of passionate technologists has grown into a global force in tech staffing and solutions.
            </p>

            {/* Timeline - Enhanced with beautiful styling */}
            <div className="relative mt-16 px-4">
              {/* Timeline Items - Enhanced cards with gradients, icons and animations */}
              <div className="space-y-14 relative">
                {/* Decorative zigzag line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 hidden md:block" style={{left: '20px'}}></div>
                
                {/* 2010 */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative md:ml-16 max-w-3xl group"
                >
                  {/* Year indicator */}
                  <div className="absolute -left-16 top-0 hidden md:block items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <span>2010</span>
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-500 overflow-hidden relative">
                    {/* Mobile year display */}
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full mb-4 md:hidden">2010</span>
                    
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:inline-flex w-16 h-16 bg-blue-100 rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">The Beginning</h4>
                        <p className="text-gray-600 mb-3">
                          Founded with a mission to connect tech talent with innovative companies. Our journey began with a small team of passionate technologists in a modest office.
                        </p>
                        <div className="inline-flex items-center text-blue-600 font-medium">
                          <span className="mr-2">Our first milestone</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
                  </div>
                </motion.div>
                
                {/* 2015 */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative max-w-3xl md:ml-auto md:mr-16 group"
                >
                  {/* Year indicator */}
                  <div className="absolute -left-16 top-0 hidden md:block items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <span>2015</span>
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-600 overflow-hidden relative">
                    {/* Mobile year display */}
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4 md:hidden">2015</span>
                    
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:inline-flex w-16 h-16 bg-blue-100 rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Global Expansion</h4>
                        <p className="text-gray-600 mb-3">
                          Expanded operations to serve clients across 15 countries, establishing regional offices and building diverse, multicultural teams.
                        </p>
                        <div className="inline-flex items-center text-blue-600 font-medium">
                          <span className="mr-2">Our global footprint</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
                  </div>
                </motion.div>
                
                {/* 2020 */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative md:ml-16 max-w-3xl group"
                >
                  {/* Year indicator */}
                  <div className="absolute -left-16 top-0 hidden md:block items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <span>2020</span>
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-700 overflow-hidden relative">
                    {/* Mobile year display */}
                    <span className="inline-block px-3 py-1 bg-blue-700 text-white text-sm font-semibold rounded-full mb-4 md:hidden">2020</span>
                    
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:inline-flex w-16 h-16 bg-blue-100 rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Digital Transformation</h4>
                        <p className="text-gray-600 mb-3">
                          Launched innovative solutions to help clients navigate the challenges of a rapidly changing digital landscape, bringing cutting-edge technologies to traditional industries.
                        </p>
                        <div className="inline-flex items-center text-blue-600 font-medium">
                          <span className="mr-2">Our innovation hub</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
                  </div>
                </motion.div>
                
                {/* Today */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative max-w-3xl md:ml-auto md:mr-16 group"
                >
                  {/* Year indicator */}
                  <div className="absolute -left-16 top-0 hidden md:block items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-indigo-900 text-white font-bold shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <span>Today</span>
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-800 overflow-hidden relative">
                    {/* Mobile year display */}
                    <span className="inline-block px-3 py-1 bg-blue-800 text-white text-sm font-semibold rounded-full mb-4 md:hidden">Today</span>
                    
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:inline-flex w-16 h-16 bg-blue-100 rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Industry Leader</h4>
                        <p className="text-gray-600 mb-3">
                          Recognized as a leader in providing tech talent and innovative solutions to businesses worldwide, with a community of over 5,000 skilled professionals.
                        </p>
                        <div className="inline-flex items-center text-blue-600 font-medium">
                          <span className="mr-2">Our leadership journey</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-16">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-lg transition-all"
                >
                  Learn more about our services
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values and Principles */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop our products to how we serve our clients and nurture our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Value 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Excellence</h3>
              <p className="text-gray-600 text-center">
                We strive for excellence in everything we do, from the solutions we deliver to the relationships we build.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Collaboration</h3>
              <p className="text-gray-600 text-center">
                We believe in the power of teamwork and partnership to achieve exceptional results and drive innovation.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                We embrace change and continuously seek new ways to solve complex problems and create value for our clients.
              </p>
            </motion.div>
            
            {/* Value 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 012-2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Integrity</h3>
              <p className="text-gray-600 text-center">
                We conduct business with the highest ethical standards, building trust through transparency and honesty.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-16">
            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-lg transition-all"
              >
                Join our team
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src={aboutImage3} alt="CEO" className="w-full h-full object-cover" />
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our commitment is to deliver exceptional value through technology and talent.</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that the right people, with the right tools, can transform businesses and drive meaningful change in today's digital world.
                </p>
                <p className="text-blue-600 font-semibold">John Doe, CEO of TechMind Infosys</p>
                
                <div className="mt-8">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-lg transition-all"
                    >
                      Connect with us
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've helped companies across industries achieve remarkable results through our technology solutions and talented professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Case 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Services Transformation</h3>
              <p className="text-gray-600 mb-4">
                Helped a leading bank reduce operational costs by 30% through digital transformation and process automation.
              </p>
              <p className="text-blue-600 font-medium">Results: 30% cost reduction, 45% faster processing</p>
            </motion.div>
            
            {/* Case 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthcare Innovation</h3>
              <p className="text-gray-600 mb-4">
                Developed a patient management system that improved care coordination and reduced administrative burden.
              </p>
              <p className="text-blue-600 font-medium">Results: 40% improved patient satisfaction</p>
            </motion.div>
            
            {/* Case 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Retail Tech Implementation</h3>
              <p className="text-gray-600 mb-4">
                Implemented an omnichannel retail solution that integrated online and offline operations for a national retailer.
              </p>
              <p className="text-blue-600 font-medium">Results: 65% increase in online sales</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-16">
            <Link to="/case-studies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-lg transition-all"
              >
                Explore our case studies
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Whether you're looking for exceptional tech talent or innovative solutions, TechMind is ready to help you achieve your goals.
          </motion.p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 shadow-xl transition-all text-lg"
            >
              Start a Project
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm isDarkMode={false} id="about-contact" />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2025 TechMind Infosys. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
