// app/components/QuoteSection.js

import Image from 'next/image'; // Import Next.js Image component for optimization

export function QuoteSection() {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 shadow-md"> {/* Container for the whole section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"> {/* Inner container for content */}

        {/* Left Side: Profile Picture */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/images/profile.jpg" // Path to your image in the public folder
            alt="Profile Picture"
            width={300} // Set appropriate width for the image
            height={300} // Set appropriate height for the image
            className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 shadow-lg" // Responsive circular image
          />
        </div>

        {/* Right Side: Quotes and Name */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-gray-800 leading-relaxed">
            &ldquo;The future belongs to those who believe in the beauty of their dreams.&rdquo;
          </blockquote>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            — Eleanor Roosevelt
          </p>
        </div>
      </div>
    </div>
  );
}