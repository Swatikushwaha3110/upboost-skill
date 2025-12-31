import React from 'react';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left - Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">SkillForge</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white transition">About</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
                    </ul>
                </div>

                {/* Center - Newsletter */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                    <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest updates & offers</p>
                    <form className="flex flex-col sm:flex-row items-center gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-md text-green-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />

                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md font-semibold transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Right - Social Icons */}
                <div className="text-center md:text-right">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex justify-center md:justify-end space-x-4 text-2xl text-gray-300">
                        <a href="#" className="hover:text-white transition"><FaLinkedin /></a>
                        <a href="#" className="hover:text-white transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-white transition"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} SkillForge. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
