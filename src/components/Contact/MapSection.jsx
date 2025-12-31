import React from 'react';

const MapSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          📍 Our <span className="text-green-600">Location</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Visit us in Indore, Madhya Pradesh. Here’s where you’ll find us!
        </p>

        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
          <iframe
            title="SkillForge Location"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?q=Indore,+Madhya+Pradesh,+India&key=YOUR_GOOGLE_API_KEY"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
