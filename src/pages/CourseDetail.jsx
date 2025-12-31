import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/courses/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch course');
        }
        const data = await res.json();
        setCourse(data);
      } catch (err) {
        console.error(err);
        setError('Course not found or server error.');
      }
    };

    fetchCourse();
  }, [id]);

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg font-medium">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />

        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {course.title}
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl mb-3">
            <span className="font-medium text-gray-800">Instructor:</span> {course.instructor}
          </p>

          <p className="text-gray-600 text-base sm:text-lg">
            <span className="font-medium text-gray-800">Rating:</span> {course.rating} / 5
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
