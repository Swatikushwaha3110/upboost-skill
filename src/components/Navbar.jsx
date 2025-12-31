import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [

   
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
       Upboost Skill
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-green-600 transition font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/signup"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
             Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/signup"
            className="block mt-2 bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
