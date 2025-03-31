import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import {
  Users,
  Search,
  Briefcase,
  GraduationCap,
  ClipboardCheck,
  Building2,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  LineChart,
  Laptop
} from "lucide-react";

// Images
import services1 from "@/assets/images/services-1.jpg";
import services2 from "@/assets/images/services-2.jpg";
import healthImage from "@/assets/images/health.jpg";
import financeImage from "@/assets/images/finance.jpg";
import softwareTechImage from "@/assets/images/software-tech.jpg";

const services = [
  {
    icon: Users,
    title: "Talent Acquisition",
    description: "Find the best tech talent for your organization with our comprehensive recruitment solutions.",
    features: ["Executive Search", "Technical Screening", "Culture Fit Assessment", "Onboarding Support"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Search,
    title: "Job Matching",
    description: "Connecting skilled professionals with opportunities that match their expertise and career goals.",
    features: ["AI-Powered Matching", "Skills Assessment", "Career Coaching", "Interview Preparation"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Briefcase,
    title: "Contract Staffing",
    description: "Flexible staffing solutions for project-based needs and temporary workforce requirements.",
    features: ["Short-term Contracts", "Project Teams", "Specialized Skills", "Scalable Workforce"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: GraduationCap,
    title: "Tech Training",
    description: "Upskill your team with cutting-edge technical training programs delivered by industry experts.",
    features: ["Custom Curricula", "Hands-on Workshops", "Certification Programs", "Skill Assessments"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: ClipboardCheck,
    title: "HR Consulting",
    description: "Strategic human resources consulting to optimize your talent acquisition and retention strategies.",
    features: ["Talent Strategy", "Compensation Analysis", "Performance Management", "Employee Engagement"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Building2,
    title: "Employer Branding",
    description: "Build a strong employer brand that attracts top talent and showcases your company culture.",
    features: ["Brand Positioning", "Recruitment Marketing", "Candidate Experience", "Employer Value Proposition"],
    color: "from-yellow-500 to-orange-500",
  },
];

const serviceCategories = [
  {
    title: "For Employers",
    description: "Find, hire and retain the best tech talent for your organization",
    icon: Building2,
    color: "from-blue-600 to-blue-800",
    link: "/services/employers"
  },
  {
    title: "For Job Seekers",
    description: "Discover opportunities that match your skills and career aspirations",
    icon: Briefcase,
    color: "from-indigo-600 to-indigo-800",
    link: "/services/job-seekers"
  },
  {
    title: "For Contractors",
    description: "Flexible engagement models for independent professionals",
    icon: ClipboardCheck,
    color: "from-violet-600 to-violet-800",
    link: "/services/contractors"
  },
  {
    title: "For Companies",
    description: "Strategic workforce planning and talent management solutions",
    icon: Users,
    color: "from-purple-600 to-purple-800",
    link: "/services/companies"
  },
];

// Industries we serve - moved from Industries.jsx
const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Specialized talent solutions for healthcare organizations, connecting medical professionals with opportunities in hospitals, clinics, research institutions, and healthcare tech companies.",
    image: healthImage,
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: LineChart,
    title: "Finance",
    description: "Expert recruitment for financial services companies, from investment banking and asset management to fintech startups and insurance providers.",
    image: financeImage,
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Laptop,
    title: "Technology",
    description: "Connecting top tech talent with opportunities at software companies, SaaS providers, IT services firms, and technology departments across all industries.",
    image: softwareTechImage,
    color: "from-purple-500 to-violet-500",
  },
];

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section using PageHero component */}
      <PageHero
        title="Talent Solutions"
        subtitle="Connecting the right talent with the right opportunities"
        shortPhrase="Our Services"
        backgroundStartColor="from-blue-900"
        backgroundEndColor="to-indigo-800"
        textGradientColors="from-white to-blue-100"
        backgroundImage={services1}
      >
        <div className="pt-10 pb-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${category.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-blue-100 text-sm mb-2">{category.description}</p>
                    <Link to={category.link} className="inline-flex items-center text-white font-medium text-sm">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 hover:text-blue-800 px-10 py-4 rounded-lg font-medium transition-colors shadow-lg inline-flex items-center"
              >
                <span>Find Your Perfect Match</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </PageHero>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Why Choose TechMind Infosys</h2>
            <p className="text-base md:text-lg text-gray-600">We build bridges between talent and opportunity, creating perfect matches for both candidates and employers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <img src={services2} alt="Team working" className="rounded-xl shadow-lg w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Expertise</h3>
                  <p className="text-gray-600">Our specialized recruiters understand the nuances of the tech industry, ensuring better matches between talent and opportunities.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Matching</h3>
                  <p className="text-gray-600">Our proprietary algorithms and human expertise combine to match candidates with opportunities based on skills, experience, and culture fit.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Network</h3>
                  <p className="text-gray-600">With a vast network of tech professionals and companies worldwide, we connect talent across borders to create optimal matches.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">End-to-End Support</h3>
                  <p className="text-gray-600">We provide comprehensive support throughout the entire recruitment process, from initial search to successful onboarding.</p>
                </div>
              </div>
              
              <Link to="/case-studies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors shadow-md inline-flex items-center"
                >
                  <span>Success Stories</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section - Integrated from Industries.jsx */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Industry Expertise</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">We provide specialized talent solutions across various industries, understanding the unique needs and challenges of each sector.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${industry.color}`}>
                      <industry.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{industry.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <Link to={`/services/${industry.title.toLowerCase()}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    <span>Find opportunities</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Our Comprehensive Services</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">End-to-end talent solutions for every stage of your recruitment and career journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - Integrated from Industries.jsx */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Success Stories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">Real results from our industry-specific talent solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Healthcare Staffing Success</h3>
              <p className="text-gray-600 mb-3">How we helped a major hospital network fill critical positions and improve retention rates.</p>
              <Link to="/case-studies/healthcare" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Finance Talent Transformation</h3>
              <p className="text-gray-600 mb-3">Empowering a financial services firm with specialized tech talent to drive digital transformation.</p>
              <Link to="/case-studies/finance" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tech Startup Growth</h3>
              <p className="text-gray-600 mb-3">Helping a tech startup scale their team with perfect-fit engineers and product specialists.</p>
              <Link to="/case-studies/tech" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm id="services-contact" />

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">5,000+</div>
              <p className="text-gray-300">Successful Placements</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">250+</div>
              <p className="text-gray-300">Partner Companies</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">15+</div>
              <p className="text-gray-300">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-300">94%</div>
              <p className="text-gray-300">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
          >
            Ready to Find Your Perfect Match?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-blue-100 mb-10 max-w-3xl mx-auto"
          >
            Whether you're looking for top talent or your next career opportunity, TechMind Infosys can help you succeed.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-blue-700 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-colors"
              >
                Find Talent
              </motion.button>
            </Link>
            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Find Jobs
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
