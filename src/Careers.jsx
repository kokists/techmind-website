import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";

// Import images
import careersImg from "@/assets/images/careers.jpg";
import teamImg from "@/assets/images/team.jpg";
import recruiterImg from "@/assets/images/recruiter.jpg";

// Import placeholder flags and icons from our utility component
import { flags, uploadIcon } from "@/components/JobSearch";

const Careers = () => {
  // States for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechGlobal Inc.",
      location: "United States",
      flag: flags['United States'],
      type: "Full-time",
      industry: "Technology",
      skills: ["React", "Node.js", "AWS"],
      posted: "2 days ago",
      salary: "$120,000 - $150,000"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Creative Solutions",
      location: "United Kingdom",
      flag: flags['United Kingdom'],
      type: "Full-time",
      industry: "Design",
      skills: ["Figma", "Adobe XD", "Sketch"],
      posted: "3 days ago",
      salary: "£65,000 - £80,000"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "India",
      flag: flags['India'],
      type: "Full-time",
      industry: "Data",
      skills: ["Python", "TensorFlow", "SQL"],
      posted: "1 week ago",
      salary: "₹1,500,000 - ₹2,000,000"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Cloud Systems",
      location: "United Arab Emirates",
      flag: flags['United Arab Emirates'],
      type: "Full-time",
      industry: "Infrastructure",
      skills: ["Kubernetes", "Docker", "CI/CD"],
      posted: "5 days ago",
      salary: "AED 25,000 - AED 35,000 monthly"
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "Web Innovators",
      location: "Singapore",
      flag: flags['Singapore'],
      type: "Full-time",
      industry: "Technology",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      posted: "Just now",
      salary: "SGD 8,000 - SGD 12,000 monthly"
    },
    {
      id: 6,
      title: "Product Manager",
      company: "Digital Solutions",
      location: "United States",
      flag: flags['United States'],
      type: "Full-time",
      industry: "Product",
      skills: ["Agile", "Scrum", "User Research"],
      posted: "3 days ago",
      salary: "$110,000 - $140,000"
    },
    {
      id: 7,
      title: "Frontend Developer",
      company: "MobileTech",
      location: "India",
      flag: flags['India'],
      type: "Full-time",
      industry: "Technology",
      skills: ["React", "TypeScript", "CSS"],
      posted: "1 week ago",
      salary: "₹1,200,000 - ₹1,800,000"
    },
    {
      id: 8,
      title: "Machine Learning Engineer",
      company: "AI Innovations",
      location: "United Kingdom",
      flag: flags['United Kingdom'],
      type: "Full-time",
      industry: "Artificial Intelligence",
      skills: ["Python", "TensorFlow", "PyTorch"],
      posted: "2 days ago",
      salary: "£75,000 - £95,000"
    },
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCountry = selectedCountry === "all" || job.location === selectedCountry;
    const matchesIndustry = selectedIndustry === "all" || job.industry === selectedIndustry;
    
    return matchesSearch && matchesCountry && matchesIndustry;
  });

  // Get unique industries for filter dropdown
  const industries = [...new Set(jobListings.map(job => job.industry))];
  
  // Get unique countries for filter dropdown
  const countries = [...new Set(jobListings.map(job => job.location))];

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Hero Section with Job Search */}
      <PageHero 
        title="Find Your Dream Job"
        subtitle="Search thousands of job opportunities worldwide"
        shortPhrase="Your Career Journey Starts Here"
        backgroundStartColor="from-blue-900"
        textGradientColors="from-white to-blue-300"
        backgroundImage={careersImg}
      >
        {/* Integrated Search Form - This will appear in the hero */}
        <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Job Title Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-5 py-4 pl-12 bg-white/20 border-0 rounded-xl focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-200"
                    placeholder="Search jobs by title, company, or skill..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              {/* Country Dropdown */}
              <div>
                <select
                  className="w-full px-5 py-4 bg-white/20 border-0 rounded-xl focus:ring-2 focus:ring-blue-400 text-white appearance-none"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22white%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22%3E%3C/path%3E%3C/svg%3E')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em 1.5em' }}
                >
                  <option value="all" className="bg-gray-800 text-white">All Countries</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country} className="bg-gray-800 text-white">{country}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Advanced Search Options */}
            <div className="mt-4 flex items-center justify-between">
              <button 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {showFilters ? "Hide Filters" : "More Search Options"}
              </button>
              
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors text-sm font-medium">
                Search Now
              </button>
            </div>
            
            {/* Filter Dropdown */}
            {showFilters && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-white/10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Industry</label>
                    <select 
                      className="w-full px-4 py-2 bg-white/20 border-0 rounded-lg focus:ring-2 focus:ring-blue-400 text-white"
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                    >
                      <option value="all" className="bg-gray-800 text-white">All Industries</option>
                      {industries.map((industry, index) => (
                        <option key={index} value={industry} className="bg-gray-800 text-white">{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Job Type</label>
                    <select className="w-full px-4 py-2 bg-white/20 border-0 rounded-lg focus:ring-2 focus:ring-blue-400 text-white">
                      <option value="all" className="bg-gray-800 text-white">All Types</option>
                      <option value="full-time" className="bg-gray-800 text-white">Full-time</option>
                      <option value="part-time" className="bg-gray-800 text-white">Part-time</option>
                      <option value="contract" className="bg-gray-800 text-white">Contract</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Experience</label>
                    <select className="w-full px-4 py-2 bg-white/20 border-0 rounded-lg focus:ring-2 focus:ring-blue-400 text-white">
                      <option value="all" className="bg-gray-800 text-white">Any Experience</option>
                      <option value="entry" className="bg-gray-800 text-white">Entry Level</option>
                      <option value="mid" className="bg-gray-800 text-white">Mid Level</option>
                      <option value="senior" className="bg-gray-800 text-white">Senior Level</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Upload CV Section with enhanced design */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 backdrop-blur-md relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full -ml-16 -mb-16 blur-xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Find Your Perfect Match</h3>
                <p className="text-blue-100 leading-relaxed max-w-lg">
                  <span className="hidden md:inline">Let our AI-powered job matching system </span>
                  Upload your CV to discover opportunities that align perfectly with your skills and experience
                </p>
              </div>
              <div className="flex-shrink-0">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 px-6 py-3.5 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors shadow-lg relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-50 to-white opacity-50 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="relative z-10 font-semibold">Upload Your CV</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Job Listings Section - Now directly after the hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Available Opportunities</h2>
          <p className="text-gray-600 dark:text-gray-300">Showing {filteredJobs.length} of {jobListings.length} jobs</p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <motion.div 
              key={job.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h3>
                  <div className="flex items-center gap-2">
                    <img src={job.flag} alt={job.location} className="w-6 h-4 object-cover rounded-sm" />
                  </div>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{job.company}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{job.posted}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{job.salary}</span>
                </div>
              </div>
              <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
                <Link to={`/job/${job.id}`} className="block w-full text-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">No jobs match your search</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredJobs.length > 0 && filteredJobs.length < jobListings.length && (
          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Load More Jobs
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Get Job Alerts Delivered to Your Inbox</h2>
            <p className="text-blue-100 mb-8">Stay updated on the latest opportunities matching your career interests</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-4 py-3 rounded-lg flex-1 max-w-md"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
