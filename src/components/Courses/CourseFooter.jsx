import React from 'react';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const CourseFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Links */}
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4 sm:mb-0">
          <li><a href="#" className="hover:text-white transition">About</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
          <li><a href="#" className="hover:text-white transition">Privacy</a></li>
          <li><a href="#" className="hover:text-white transition">Terms</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 text-lg text-gray-300">
          <a href="#" className="hover:text-white transition"><FaLinkedin /></a>
          <a href="#" className="hover:text-white transition"><FaTwitter /></a>
          <a href="#" className="hover:text-white transition"><FaYoutube /></a>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} SkillForge. All rights reserved.
      </div>
    </footer>
  );
};

export default CourseFooter;
