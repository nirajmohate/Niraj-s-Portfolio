import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Home page component
import Contact from "./components/Contact"; // Contact page component
import Skill from "./components/Skill";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";


const MyApp = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Home Page */}
        <Route path="/" element={<Home />} />

        {/* Route for the Contact Page (completely separate) */}
        <Route path="/contact" element={<Contact />} />

        {/* Route for the Skill Page (completely separate) */}
        <Route path="/skill" element={<Skill />} />

        {/* Route for the About Page (completely separate) */}
        <Route path="/About" element={<About />} />

        {/* Route for the Project Page (completely separate) */}
        <Route path="/Project" element={<Project />} />

        {/* Route for the Services Page (completely separate) */}
        <Route path="/Services" element={<Services />} /> 
      </Routes>
    </Router>
  );
};

export default MyApp;






