import React from 'react';

const steps = [
  {
    title: 'Sign Up',
    image: '/Images/SignUp1.jpeg',
  },
  {
    title: 'Choose a Course',
    image: '/Images/Choose.jpeg',
  },
  {
    title: 'Learn & Practice',
    image: '/Images/Practice.jpeg',
  },
  {
    title: 'Pass the Quiz',
    image: '/Images/Pass.png',
  },
  {
    title: 'Download Certificate',
    image: '/Images/Certificate.png',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          How <span className="text-green-600">It Works</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <div className="flex flex-col items-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-24 h-24 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
