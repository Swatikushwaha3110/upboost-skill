import React, { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Courses", value: 120, suffix: "+" },
  { label: "Learners", value: 20000, suffix: "K+" },
  { label: "Instructors", value: 50, suffix: "+" },
  { label: "Certifications Issued", value: 15000, suffix: "K+" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = Math.ceil(end / (duration / 30));

            const counter = setInterval(() => {
              start += increment;

              if (start >= end) {
                start = end;
                clearInterval(counter);
              }

              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const formatValue = (value, suffix) => {
    if (suffix === "K+") {
      return `${Math.floor(value / 1000)}K+`;
    }
    return `${value}+`;
  };

  return (
    <section ref={sectionRef} className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
            >
              <h3 className="text-4xl font-extrabold text-green-600 mb-2">
                {formatValue(counts[index], item.suffix)}
              </h3>
              <p className="text-gray-700 font-medium text-sm uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
