import React from 'react';

const AboutCTA = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-600 py-20 text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-5 leading-tight">
          Join <span className="text-white underline decoration-white/30">SkillForge</span> Today
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Whether you're a student, professional, or career switcher — start learning and earn your certification with us.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-full text-lg shadow-md hover:bg-green-100 transition duration-300"
        >
          🚀 Get Started
        </a>
      </div>
    </section>
  );
};

export default AboutCTA;
