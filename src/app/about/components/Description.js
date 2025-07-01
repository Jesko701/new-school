"use client";

export function Description() {
  return (
    <div className="bg-gray-100 flex items-center justify-center sm:p-6 lg:p-8 font-inter">
      {/* Container for the two sections, ensuring responsiveness */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Section: Title with Underline */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-red-300 text-white md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight relative pb-2">
            Granada Preschool & Kindergarten
            {/* Underline element */}
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-blue-100 rounded-full"></span>
          </h1>
          <p className="mt-4 text-base sm:text-lg opacity-90 text-black">
            Driving innovation for a sustainable future school.
          </p>
        </div>

        {/* Right Section: Description */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white text-gray-800 md:rounded-r-2xl md:rounded-bl-none rounded-b-2xl">
          <p className="text-base sm:text-lg leading-relaxed">
            At our core, we believe in crafting solutions that not only meet
            today's demands but also anticipate tomorrow's challenges. Our
            commitment extends to fostering a collaborative environment where
            creativity flourishes, leading to groundbreaking advancements. We
            aim to empower communities and businesses alike with tools and
            insights that enable growth, efficiency, and a positive impact on
            the world. This description highlights our dedication to progress
            and partnership, laying the foundation for a better tomorrow.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Explore our journey and discover how we're making a difference.
          </p>
        </div>
      </div>
    </div>
  );
}
