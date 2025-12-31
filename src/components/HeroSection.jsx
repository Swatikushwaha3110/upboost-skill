import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800">
            Master In-Demand Skills <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              with AI-Powered Learning
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
            Join thousands of learners on SkillForge. Learn, certify, and grow with cutting-edge tech education.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/courses"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
            >
              Browse Courses
            </Link>
            <Link
              to="/signup"
              className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/Images/hero1.webp" // Replace with your image path
            alt="AI Learning Illustration"
            className="max-w-md w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
