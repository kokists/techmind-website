import React, { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SkipToContent from "./components/SkipToContent";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load page components
const HomePage = lazy(() => import("./HomePage"));
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Solutions = lazy(() => import("./Solutions"));
const Careers = lazy(() => import("./Careers"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [selectedOption, setSelectedOption] = useState("talent"); // 'talent' or 'jobs'

  return (
    <>
      <SkipToContent />
      <ScrollToTop />
      <Navbar selectedOption={selectedOption} />
      <main id="main-content">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <LoadingSpinner size="large" text="Loading page..." />
          </div>
        }>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/capabilities" element={<Solutions />} />
            <Route path="/careers" element={<Careers />} />
            {/* 404 route - must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
