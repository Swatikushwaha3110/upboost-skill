import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'Aarav Mehta',
    comment: 'SkillForge helped me transition into web development. The AI-based quizzes kept me motivated!',
    image: '/Images/user1.jpeg',
  },
  {
    name: 'Priya Sharma',
    comment: 'Great platform with expert instructors. I loved the progress tracking and certifications!',
    image: '/Images/user2.jpeg',
  },
  {
    name: 'Rohan Verma',
    comment: 'Mobile responsive learning is a game changer. I could study anytime, anywhere!',
    image: '/Images/user3.jpeg',
  },
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 9999,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our <span className="text-green-600">Students Say</span>
        </h2>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-3">
              <div className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-2xl shadow-lg text-center h-full flex flex-col items-center justify-between">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-green-500 mb-4"
                />
                <p className="text-gray-700 italic text-sm sm:text-base mb-4 leading-relaxed">"{t.comment}"</p>
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
