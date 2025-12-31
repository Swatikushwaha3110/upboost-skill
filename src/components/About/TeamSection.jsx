import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const team = [
  {
    name: 'Ravi Patel',
    role: 'Founder & Full Stack Developer',
    image: '/Images/team1.jpeg',
  },
  {
    name: 'Aisha Khan',
    role: 'Marketing Head',
    image: '/Images/team2.jpeg',
  },
  {
    name: 'Siddharth Mehta',
    role: 'UI/UX Designer',
    image: '/Images/team3.jpeg',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
          Meet Our <span className="text-green-600">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-green-100 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-sm text-green-700 font-medium">{member.role}</p>

              {/* Optional Socials */}
              <div className="flex justify-center gap-4 mt-4 text-green-600">
                <a href="#" aria-label="LinkedIn" className="hover:text-green-800">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-green-800">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
