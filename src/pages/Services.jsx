import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import servicesHero from "@/assets/images/services-1.jpg";
import servicesGrid from "@/assets/images/services-2.jpg";

// Icons
import { Code, Server, Shield, Database, Layout, BarChart } from "lucide-react";

const Services = () => {
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

  const services = [
    {
      id: 1,
      icon: <Code size={32} />,
      title: "Custom Software Development",
      description: "Bespoke solutions designed to address your unique business challenges and opportunities.",
    },
    {
      id: 2,
      icon: <Layout size={32} />,
      title: "Web Application Development",
      description: "Modern, responsive, and intuitive web applications built with cutting-edge technologies.",
    },
    {
      id: 3,
      icon: <Server size={32} />,
      title: "Cloud Services",
      description: "Seamless cloud migration, optimization, and management for enhanced scalability and performance.",
    },
    {
      id: 4,
      icon: <Shield size={32} />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your data, systems, and reputation.",
    },
    {
      id: 5,
      icon: <Database size={32} />,
      title: "Data Engineering & Analytics",
      description: "Transform raw data into actionable insights that drive strategic business decisions.",
    },
    {
      id: 6,
      icon: <BarChart size={32} />,
      title: "Digital Transformation",
      description: "End-to-end digital strategy and implementation to revolutionize your business processes.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gray-900">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={servicesHero}
            alt="Our Services"
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
            What We Offer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl"
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Technology Services Designed for Impact
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At TechMind, we deliver a comprehensive suite of technology services designed to transform your business. From custom software development to cloud migration and cybersecurity, our solutions are tailored to your unique challenges and opportunities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of experienced professionals combines deep technical expertise with business acumen to deliver solutions that not only solve immediate problems but set you up for long-term success in an ever-evolving digital landscape.
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
                src={servicesGrid}
                alt="Our Services"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                variants={fadeIn}
                className="bg-blue-900/30 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm hover:bg-blue-800/40 transition-all duration-300 h-full"
              >
                <div className="text-blue-300 mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              How we deliver exceptional results, every time
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business, challenges, and objectives." },
              { step: "02", title: "Strategy", desc: "Developing a tailored approach to achieve your goals." },
              { step: "03", title: "Implementation", desc: "Building and deploying solutions with precision." },
              { step: "04", title: "Optimization", desc: "Continuous improvement for maximum performance." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-blue-900/30 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm h-full">
                  <div className="text-5xl font-bold text-blue-500/30 mb-6">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-[2px] bg-blue-500"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We Work With
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Cutting-edge tools and frameworks for modern solutions
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                techs: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"]
              },
              {
                title: "Backend",
                techs: ["Node.js", "Python", "Java", "C#/.NET", "PHP", "Ruby on Rails"]
              },
              {
                title: "Infrastructure",
                techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD Pipelines"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                variants={fadeIn}
                className="bg-blue-900/30 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm h-full"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.techs.map((tech, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
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
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
          >
            Ready to transform your business with innovative technology solutions? Contact us today to get started.
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

export default Services;
