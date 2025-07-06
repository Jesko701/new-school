import React from "react";
import { FeatureBlock } from "./FeatureBlock";

export const FeatureSection = () => {
  return (
    <section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Adds space between feature blocks */}
        <FeatureBlock
          imageSrc="/images/computer-science.jpg" // Make sure these paths are correct in your public folder
          imageAlt="Students learning computer science"
          title="Computer Science"
          description="Hands-on experience with the latest programming languages and technology. We have trained IT professionals who work closely with our students so they are prepared for the real world."
        />
        <FeatureBlock
          imageSrc="/images/fine-arts.jpg"
          imageAlt="Student painting in a fine arts class"
          title="Fine Arts"
          description="Giving wings to the artists who'd like to take it up as a career or just a hobby. Our students are trained by professionals who help them develop, learn and polish their skills while at school."
          reverse
        />
        <FeatureBlock
          imageSrc="/images/fine-arts.jpg"
          imageAlt="Student painting in a fine arts class"
          title="Fine Arts"
          description="Giving wings to the artists who'd like to take it up as a career or just a hobby. Our students are trained by professionals who help them develop, learn and polish their skills while at school."
        />
        <FeatureBlock
          imageSrc="/images/fine-arts.jpg"
          imageAlt="Student painting in a fine arts class"
          title="Fine Arts"
          description="Giving wings to the artists who'd like to take it up as a career or just a hobby. Our students are trained by professionals who help them develop, learn and polish their skills while at school."
          reverse
        />
      </div>
    </section>
  );
};
