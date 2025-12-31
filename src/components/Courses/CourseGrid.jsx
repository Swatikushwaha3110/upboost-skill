import React, { useState } from 'react';
import CourseCard from './CourseCard';

const allCourses = [
  {
    thumbnail: '/Images/react1.jpeg',
    title: 'React for Beginners',
    instructor: 'John Doe',
    rating: 4.5,
    reviews: 420,
    duration: '6 hours',
    price: 0,
  },
  {
    thumbnail: '/Images/ai.jpeg',
    title: 'AI with Python',
    instructor: 'Jane Smith',
    rating: 4.7,
    reviews: 350,
    duration: '8 hours',
    price: 499,
  },
  {
    thumbnail: '/Images/ui.jpeg',
    title: 'UI/UX Design Mastery',
    instructor: 'Emily Johnson',
    rating: 4.6,
    reviews: 200,
    duration: '4.5 hours',
    price: 399,
  },
  {
    thumbnail: '/Images/DeepDive.jpeg',
    title: 'JavaScript Deep Dive',
    instructor: 'David Lee',
    rating: 4.8,
    reviews: 540,
    duration: '5 hours',
    price: 0,
  },
  {
    thumbnail: '/Images/node.png',
    title: 'Node.js for Backend',
    instructor: 'Chris Kim',
    rating: 4.4,
    reviews: 310,
    duration: '7 hours',
    price: 399,
  },
  {
    thumbnail: '/Images/sql.jpeg',
    title: 'SQL & Database Design',
    instructor: 'Sara Ali',
    rating: 4.6,
    reviews: 180,
    duration: '3 hours',
    price: 299,
  },
  {
    thumbnail: '/Images/Python.jpeg',
    title: 'Python Basics',
    instructor: 'Raj Verma',
    rating: 4.7,
    reviews: 270,
    duration: '6 hours',
    price: 0,
  },
  {
    thumbnail: '/Images/sco.jpeg',
    title: 'SEO for Beginners',
    instructor: 'Anita Rao',
    rating: 4.3,
    reviews: 150,
    duration: '4 hours',
    price: 199,
  },
  {
    thumbnail: '/Images/cloud.jpeg',
    title: 'Cloud Fundamentals',
    instructor: 'Mohit Sinha',
    rating: 4.5,
    reviews: 220,
    duration: '5.5 hours',
    price: 349,
  },
];

const CourseGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = allCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(allCourses.length / coursesPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Top <span className="text-green-600">Courses</span>
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white border border-green-500 text-green-600 font-medium rounded-md hover:bg-green-50 disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-gray-700 font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white border border-green-500 text-green-600 font-medium rounded-md hover:bg-green-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
