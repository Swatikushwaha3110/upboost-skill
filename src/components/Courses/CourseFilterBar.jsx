import React, { useState } from 'react';

const CourseFilterBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [sortBy, setSortBy] = useState('');

  return (
    <section className="bg-white py-6 shadow-sm border-b">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="🔍 Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">📚 Category</option>
          <option value="web">Web Development</option>
          <option value="ai">Artificial Intelligence</option>
          <option value="design">UI/UX Design</option>
          <option value="marketing">Digital Marketing</option>
        </select>

        {/* Difficulty Dropdown */}
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">📊 Difficulty</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">🆕 Sort by</option>
          <option value="latest">Latest</option>
          <option value="popular">Popular</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </section>
  );
};

export default CourseFilterBar;
