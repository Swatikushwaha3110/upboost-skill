import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const cards = [
  {
    icon: <FiMail className="text-green-600 text-4xl mb-3" />,
    title: 'Email',
    desc: 'support@skillforge.com',
  },
  {
    icon: <FiPhone className="text-green-600 text-4xl mb-3" />,
    title: 'Phone',
    desc: '+91 9876543210',
  },
  {
    icon: <FiMapPin className="text-green-600 text-4xl mb-3" />,
    title: 'Address',
    desc: 'Indore, Madhya Pradesh, India',
  },
];

const ContactInfoCards = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-md">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
