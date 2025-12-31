// ✅ HeroBanner.jsx
import React from 'react';
import MissionVision from '../components/About/MissionVision';
import StatsSection from "../components/About/StatsSection"
import TeamSection from "../components/About/TeamSection"
import AboutCTA from "../components/About/AboutCTA"
import CourseFooter from '../components/Courses/CourseFooter';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 via-green-100 to-green-200 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              About <span className="text-green-600">SkillForge</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Empowering learners with modern, AI-powered online education.
            </p>
            <p className="text-md md:text-lg text-green-700 font-medium">
              Learn from experts. Earn certificates. Transform your career.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/3 w-full flex justify-center">
            <img 
              src="https://img.freepik.com/free-vector/education-concept-illustration_114360-5931.jpg" 
              alt="SkillForge Learning" 
              className="rounded-xl shadow-lg w-64 md:w-72 lg:w-80"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVision />
      <StatsSection/>
      <TeamSection/>
      <AboutCTA/>
          <CourseFooter/>
    </>
  );
};

export default About;
