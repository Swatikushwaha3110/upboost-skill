import React from 'react';

const CourseCard = ({ course }) => {
  if (!course) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group border border-gray-100">
      <div className="overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500">👨‍🏫 {course.instructor}</p>

        <div className="flex items-center text-sm">
          <span className="text-yellow-500">⭐ {course.rating}</span>
          <span className="text-gray-400 ml-2">({course.reviews} reviews)</span>
        </div>

        <p className="text-sm text-gray-600">⏱ {course.duration}</p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-4">
          <span className="text-green-600 font-bold text-lg">
            {course.price === 0 ? 'Free' : `₹${course.price}`}
          </span>

          <button className="text-sm px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-all">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
