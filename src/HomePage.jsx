import React from "react";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Lock,
  Users,
  Briefcase,
  Rocket,
  Lightbulb,
  Shield,
  Smile,
  CheckCircle,
  UserPlus,
  CalendarCheck,
} from "lucide-react";

import talentImage from "@/assets/images/talent-image.jpg";
import jobsImage from "@/assets/images/jobs-image.jpg";

const Homepage = ({ selectedOption, setSelectedOption }) => {
  const features = {
    talent: {
      title: "Why Choose TechMind Infosys?",
      items: [
        {
          icon: Brain,
          title: "Elite Engineers",
          desc: "Only the top 1% of remote tech talent globally.",
        },
        {
          icon: Cloud,
          title: "Scalable Teams",
          desc: "Build flexible, fast, and scalable agile squads.",
        },
        {
          icon: Lock,
          title: "Secure Solutions",
          desc: "Compliance and security at every step.",
        },
        {
          icon: Users,
          title: "Dedicated Support",
          desc: "Your success is our mission from day one.",
        },
      ],
      ctaTitle: "Ready to Transform Your Tech Journey?",
      ctaText:
        "Whether you're hiring elite developers or building teams, TechMind makes it seamless.",
      ctaButton: "Let’s Get Started",
      ctaColor: "bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400",
      sectionBg: "from-slate-100 via-blue-50 to-white",
      cardBg: "bg-white text-gray-900",
      iconColor: "text-blue-600",
      ctaTextColor: "text-white",
    },
    jobs: {
      title: "Your Future Starts Here",
      items: [
        {
          icon: Briefcase,
          title: "Exciting Roles",
          desc: "Explore global remote opportunities that match your skills.",
        },
        {
          icon: Rocket,
          title: "Career Growth",
          desc: "Accelerate your journey with companies that invest in you.",
        },
        {
          icon: Lightbulb,
          title: "Innovative Projects",
          desc: "Work on meaningful products with real-world impact.",
        },
        {
          icon: Shield,
          title: "Secure & Fair Pay",
          desc: "Transparent, secure payments — no hidden fees.",
        },
      ],
      ctaTitle: "Launch Your Dream Career Today",
      ctaText:
        "Join a network of top engineers landing jobs at amazing companies.",
      ctaButton: "Explore Open Roles",
      ctaColor: "bg-gradient-to-r from-lime-400 via-teal-400 to-emerald-500",
      sectionBg: "from-lime-50 via-teal-50 to-emerald-50",
      cardBg: "bg-white text-gray-900",
      iconColor: "text-lime-600",
      ctaTextColor: "text-gray-900",
    },
  };

  const current = features[selectedOption];
  const howItWorksSteps =
    selectedOption === "talent"
      ? [
          { icon: Smile, title: "Submit a Brief" },
          { icon: CheckCircle, title: "Get Matched" },
          { icon: UserPlus, title: "Interview & Select" },
          { icon: CalendarCheck, title: "Start Building" },
        ]
      : [
          { icon: UserPlus, title: "Create Your Profile" },
          { icon: Briefcase, title: "Get Matched to Jobs" },
          { icon: CalendarCheck, title: "Interview & Accept Offer" },
          { icon: Rocket, title: "Start Your Remote Role" },
        ];

  const matchingImage = selectedOption === "talent" ? talentImage : jobsImage;

  return (
    <div className="min-h-screen w-full bg-white text-black font-sans overflow-x-hidden">
      <main className="pt-0 w-full">
        <HeroSection
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        {/* Features Section */}
        <section
          className={`w-full bg-gradient-to-b ${current.sectionBg} py-28 px-6`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
            >
              {current.title}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {current.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`${current.cardBg} p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-start`}
                >
                  <item.icon
                    size={36}
                    className={`mb-4 ${current.iconColor}`}
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI + Human Matching Section */}
        <section className="w-full py-28 bg-white px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src={matchingImage}
              alt="Matching"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Smarter Hiring with AI + <br /> Human Expertise
              </h3>
              <p className="text-lg text-gray-700">
                Our platform uses AI to shortlist{" "}
                {selectedOption === "talent" ? "candidates" : "jobs"}, but every{" "}
                {selectedOption === "talent" ? "hire" : "match"} is curated by
                real experts.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full bg-gray-50 py-28 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
              How It Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <step.icon size={48} className="text-blue-500 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-24 px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
          >
            {current.ctaTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-2xl mx-auto mb-10"
          >
            {current.ctaText}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={`${current.ctaColor} ${current.ctaTextColor} px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            {current.ctaButton}
          </motion.button>
        </section>

        <footer className="w-full text-center text-gray-500 text-sm py-10 border-t border-gray-200 px-4">
          {new Date().getFullYear()} TechMind Infosys. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Homepage;
