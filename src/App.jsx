import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Careers from "./Careers";
import Solutions from "./Solutions";
import Industries from "./Industries";

export default function App() {
  return (
    <>
      <Navbar />
      {/* 🧠 No padding here, hero goes behind navbar */}
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/capabilities" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
