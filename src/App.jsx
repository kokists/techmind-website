import React, { useState } from "react";
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
  const [selectedOption, setSelectedOption] = useState("talent"); // 'talent' or 'jobs'

  return (
    <>
      <Navbar selectedOption={selectedOption} />
      <main>
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
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
