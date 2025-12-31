import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-green-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaBullseye className="text-green-600 text-3xl mr-3" />
              <h2 className="text-3xl font-bold text-green-700">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To make quality tech education accessible, interactive, and affordable for everyone — anytime, anywhere.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-green-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaEye className="text-green-600 text-3xl mr-3" />
              <h2 className="text-3xl font-bold text-green-700">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the #1 platform where learners grow their careers through hands-on learning, AI-powered tools, and expert guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
