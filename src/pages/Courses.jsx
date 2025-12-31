import React from 'react';
import CourseFilterBar from "../components/Courses/CourseFilterBar";
import CourseCard from "../components/Courses/CourseCard"
import CourseGrid from "../components/Courses/CourseGrid"
import CourseFooter from '../components/Courses/CourseFooter';

const Courses = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
              Explore <span className="text-green-600">Courses</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Browse courses and boost your skills with top-notch instructors and interactive learning.
            </p>
          </div>

          {/* Right Image or Animation */}
          <div className="flex-1 flex justify-center">
            <img
              src="/Images/course1.png"
              alt="Explore Courses"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[320px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <CourseFilterBar />
      <CourseCard/>
      <CourseGrid/>
      <CourseFooter/>

    </>
  );
};

export default Courses;
