import React from 'react';
import Image from 'next/image'; 

export function FeatureBlock ({ imageSrc, imageAlt, title, description, reverse = false }) {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600} // Adjust width and height based on your image dimensions and desired size
          height={400}
          layout="responsive" // Makes the image responsive
          objectFit="cover" // Ensures the image covers the area, cropping if necessary
          className="rounded-lg shadow-lg" // Add rounded corners and a subtle shadow
        />
      </div>

      {/* Text Content Column */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {title}
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};