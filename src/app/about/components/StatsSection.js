// app/components/StatsSection.js
// This can remain a Server Component, as it only renders other components.

import { AnimatedNumber } from "./animation/AnimatedNumber";

export function StatsSection() {
  return (
    <section className=" w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Responsive grid layout */}
          <AnimatedNumber targetValue={25000} duration={2500} label="Happy Students" textColorClass="text-red-300" textSizeClass="text-3xl sm:text-4xl md:text-5xl" />
          <AnimatedNumber targetValue={10} duration={2000} label="Years of Excellence" textColorClass="text-red-300" textSizeClass="text-3xl sm:text-4xl md:text-5xl" />
          <AnimatedNumber targetValue={150} duration={2200} label="Certified Teachers" textColorClass="text-red-300" textSizeClass="text-3xl sm:text-4xl md:text-5xl" />
          <AnimatedNumber targetValue={98} duration={2800} label="Graduation Rate (%)" textColorClass="text-red-300" textSizeClass="text-3xl sm:text-4xl md:text-5xl" />
        </div>
      </div>
    </section>
  );
}