import React from 'react';

const features = [
  {
    title: 'Interactive Learning',
    icon: '✅',
    desc: 'Engaging video lessons, quizzes, and practical exercises to boost retention.',
  },
  {
    title: 'AI-Powered Quiz Generator',
    icon: '🧠',
    desc: 'Smart AI tailors quizzes based on your learning behavior and progress.',
  },
  {
    title: 'Certificate After Completion',
    icon: '📜',
    desc: 'Earn verifiable certificates to showcase your skills and achievements.',
  },
  {
    title: 'Progress Analytics',
    icon: '📊',
    desc: 'Visual insights to track your learning progress and performance.',
  },
  {
    title: 'Expert Instructors',
    icon: '🧑‍🏫',
    desc: 'Learn from industry professionals with real-world experience.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-5 bg-repeat -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-16">
          Why <span className="text-green-600">SkillForge</span> ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-green-500 shadow-sm hover:shadow-2xl transition-all duration-300 text-left transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-green-200 to-green-400 text-3xl text-white mb-5 shadow-lg">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
