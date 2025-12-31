import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    instructor: 'John Doe',
    rating: 4.5,
    thumbnail: '/Images/react1.jpeg',
  },
  {
    id: 2,
    title: 'Mastering Node.js',
    instructor: 'Jane Smith',
    rating: 4,
    thumbnail: '/Images/node.png',
  },
  {
    id: 3,
    title: 'Advanced SQL Techniques',
    instructor: 'Ravi Kumar',
    rating: 4.8,
    thumbnail: '/Images/sql.jpeg',
  },
  {
    id: 4,
    title: 'Fullstack MERN Bootcamp',
    instructor: 'Sana Khan',
    rating: 5,
    thumbnail: '/Images/mern.jpeg',
  },
  {
    id: 5,
    title: 'AI-Powered App Development',
    instructor: 'Ankit Patel',
    rating: 4.2,
    thumbnail: '/Images/ai.jpeg',
  },
  {
    id: 6,
    title: 'JavaScript Essentials',
    instructor: 'Meena Agarwal',
    rating: 4.7,
    thumbnail: '/Images/javascript.png',
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1 text-yellow-400">
      {Array(fullStars).fill().map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {Array(emptyStars).fill().map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

const TopCoursesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Top Rated <span className="text-green-600">Courses</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-3">
                  By {course.instructor}
                </p>

                <div className="mb-4">{renderStars(course.rating)}</div>

                <Link
                  to={`/courses/${course.id}`}
                  className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCoursesSection;
