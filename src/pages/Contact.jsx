import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfoCards from "../components/Contact/ContactInfoCards"
import ContactForm from "../components/Contact/ContactForm"
// import MapSection from "../components/Contact/MapSection"
import CourseFooter from '../components/Courses/CourseFooter';

const Contact = () => {
  return (
    <>
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* Left Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Get in <span className="text-green-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We’re here to help and answer any questions you might have. <br />
              Let’s connect and grow together!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
            >
              Contact Us
            </Link>

          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
              alt="Contact Illustration"
              className="w-80 md:w-96 rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
      <ContactInfoCards/>
      <ContactForm/>
      {/* <MapSection/> */}
       <CourseFooter/>
    </>
  );
};

export default Contact;
