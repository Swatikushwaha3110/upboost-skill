import React from 'react';

const CTASection = () => {
  return (
    <section className="relative bg-green-600 text-white py-24 overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/Images/Online learning-bro.png" // ✅ Set your path here
          alt="CTA Background"
          className="w-full h-full object-cover blur-sm"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-500 opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Start your <span className="underline decoration-white/50">learning journey</span> today
        </h2>

        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl">
          Join thousands of learners building real-world skills and earning certificates with SkillForge.
        </p>

        <a
          href="#"
          className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-100"
        >
          Create Free Account
        </a>
      </div>
    </section>
  );
};

export default CTASection;
