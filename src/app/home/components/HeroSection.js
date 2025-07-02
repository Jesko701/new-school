import Image from "next/image";

export function HeroSection() {
  return (
    // Outer container: relative for image/content positioning, full width, responsive height, hidden overflow
    <div className="relative w-full h-[500px] overflow-hidden md:h-[400px]">
      {/* Background Image using Next.js Image component */}
      <Image
        src="/globe.svg" // Path to your image in the public directory
        alt="Descriptive background image alt text"
        fill // Makes the image fill the parent container
        priority // Preload the image if it's above the fold
        className="object-cover" // Ensure the image covers the container
      />

      {/* Optional: Dark overlay for text readability over image */}
      {/* Absolute positioning, covers the parent, semi-transparent black, lower z-index */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Absolute positioning, covers the parent, flexbox for centering, text styling, higher z-index */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-5 z-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Granada Preschool
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl mb-8 max-w-xl">
          School that nurtures young minds with love and care, providing a safe
          and stimulating environment for children to learn and grow.
        </p>

        {/* Button */}
        <button className="py-3 px-6 md:py-4 md:px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </div>
  );
}
