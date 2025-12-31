import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // ✅ ADD THIS

import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TopCoursesSection from "./components/TopCoursesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ScrollToTop /> {/* ✅ THIS FIXES SCROLL ISSUE */}
      <Navbar />

      {isHomePage && (
        <>
          <HeroSection />
          <FeaturesSection />
          <TopCoursesSection />
          <TestimonialsSection />
          <HowItWorksSection />
          <CTASection />
          <Footer />
        </>
      )}

      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
