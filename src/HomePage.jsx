import React, { useState } from "react";
import HeroSection from "./Herosection";
import {
  Brain,
  Cloud,
  Lock,
  Users,
  Briefcase,
  Rocket,
  Lightbulb,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("talent");

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
      ctaColor: "bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500",
      sectionBg: "from-slate-100 via-blue-50 to-white",
      cardBg: "bg-white text-gray-900",
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
      ctaColor: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",
      sectionBg: "from-red-50 via-orange-50 to-yellow-50",
      cardBg: "bg-white text-gray-900",
    },
  };

  const current = features[activeTab];

  return (
    <div className="min-h-screen w-full bg-white text-black font-sans overflow-x-hidden">
      <main className="pt-0 w-full">
        {" "}
        {/* ← changed from pt-16 to pt-0 */}
        <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
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
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`${current.cardBg} transition p-6 rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm flex flex-col items-start`}
                >
                  <item.icon size={36} className="text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`${current.ctaColor} text-white px-8 py-4 rounded-full font-semibold shadow-xl backdrop-blur-md border border-white/30 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-300`}
          >
            {current.ctaButton}
          </motion.button>
        </section>
        <footer className="w-full text-center text-gray-500 text-sm py-10 border-t border-gray-200 px-4">
          © 2025 TechMind Infosys. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
