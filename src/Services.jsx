import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Shield,
  Database,
  Smartphone,
  Brain,
} from "lucide-react";

// Images
import services1 from "@/assets/images/services-1.jpg";
import services2 from "@/assets/images/services-2.jpg";

const services = [
  {
    icon: Code,
    title: "Software Engineering",
    description: "Custom software development, cloud-native applications, and enterprise solutions built with cutting-edge technologies.",
    features: ["Full-stack Development", "API Integration", "Microservices", "DevOps"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence and machine learning to transform your business operations.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure designed for your enterprise needs.",
    features: ["Cloud Migration", "AWS/Azure/GCP", "Serverless Architecture", "Cloud Security"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Transform your data into actionable insights with our advanced data engineering solutions.",
    features: ["Big Data Processing", "Data Warehousing", "ETL Pipeline", "Real-time Analytics"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter", "Mobile Security"],
    color: "from-yellow-500 to-orange-500",
  },
];

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-sky-400 text-white py-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${services1})` }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-lg md:text-2xl mb-8">
            Discover how our innovative solutions help businesses thrive.
          </p>
        </div>
      </section>

      {/* Services Description Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="p-6 bg-white shadow-md rounded-xl hover:scale-105 transition-transform duration-300">
              <img
                src={services1}
                alt="Service 1"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold mb-4">Talent Matching</h2>
              <p className="text-lg text-gray-600">
                We provide the best talent from around the world, matched to
                your unique project needs, ensuring seamless integration into
                your team.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-white shadow-md rounded-xl hover:scale-105 transition-transform duration-300">
              <img
                src={services2}
                alt="Service 2"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold mb-4">
                AI + Human Collaboration
              </h2>
              <p className="text-lg text-gray-600">
                Combining artificial intelligence with human expertise, we help
                businesses automate and innovate to achieve optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8"
          >
            Our Expertise
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Expertise Item 1 */}
            <div className="p-8 bg-white shadow-md rounded-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Custom Software Development
              </h3>
              <p className="text-lg text-gray-600">
                Building robust and scalable custom solutions to meet the unique
                needs of your business and industry.
              </p>
            </div>

            {/* Expertise Item 2 */}
            <div className="p-8 bg-white shadow-md rounded-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Data Science & Analytics
              </h3>
              <p className="text-lg text-gray-600">
                Harness the power of data to drive insights and informed
                decision-making for your business strategies.
              </p>
            </div>

            {/* Expertise Item 3 */}
            <div className="p-8 bg-white shadow-md rounded-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Cloud Solutions
              </h3>
              <p className="text-lg text-gray-600">
                Scalable, secure, and cost-effective cloud infrastructure and
                management services that keep your business agile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-700/50 rounded-lg px-3 py-1 text-sm text-gray-300"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8"
          >
            What Our Clients Say
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white shadow-md rounded-xl max-w-xs text-center">
              <p className="text-lg text-gray-600 mb-4">
                "TechMind Infosys helped us find the right talent quickly and
                efficiently. Their expertise has transformed our operations."
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                John Doe
              </h3>
              <p className="text-sm text-gray-500">CEO, Example Corp</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-white shadow-md rounded-xl max-w-xs text-center">
              <p className="text-lg text-gray-600 mb-4">
                "The AI + Human collaboration provided by TechMind has been a
                game-changer in our company's efficiency and innovation."
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Jane Smith
              </h3>
              <p className="text-sm text-gray-500">CTO, Tech Innovators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Want to Know More?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mb-8"
        >
          Get in touch to explore how we can help you with the right solutions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Contact Us
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2025 TechMind Infosys. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
