import Image from "next/image";

export function HeroSection() {
  return (
    // Outer container: relative for image/content positioning, full width, responsive height, hidden overflow
    // Adjusted height to be slightly taller as per screenshot, using a min-h for responsiveness
    <div className="relative w-full h-[600px] md:h-[500px] lg:h-[650px] overflow-hidden">
      {/* Background Image using Next.js Image component */}
      <Image
        src="/school-classroom.jpg" // Assuming you'd use an image like the one in the screenshot
        alt="Granada Preschool classroom with children learning"
        fill // Makes the image fill the parent container
        priority // Preload the image if it's above the fold
        className="object-cover object-center" // Ensure the image covers and is centered
      />

      {/* Dark overlay for text readability over image - adjusted opacity slightly */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Absolute positioning, covers the parent, flexbox for positioning content to the left, higher z-index */}
      {/* Used justify-start for left alignment and items-center for vertical centering */}
      <div className="absolute inset-0 flex justify-start items-center text-white p-5 z-10">
        {/* Content container for text and button, with a max-width and left alignment */}
        {/* Increased left padding to match the screenshot's spacing */}
        <div className="max-w-2xl text-left pl-8 md:pl-16 lg:pl-24"> {/* Adjusted max-w and padding-left */}
          {/* Title - Adjusted font sizes for larger impact as per screenshot */}
          <h1 className="text-5xl sm:text-6xl md:text-2xl lg:text-3xl font-extrabold leading-tight mb-4">
            Granada <br className="sm:hidden"/>Preschool & <br />Kindergarten
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
            Granada Preschool & Kindergarten is the first Islamic
            Montessori in Depok, West Java. Located in Komplek
            Pondok Duta 1, Jalan Duta Wenang Blok H2 No.
            4, Cimanggis Depok, 16451. Granada Preschool &
            Kindergarten program serves young children ages
            1 to 6.5 years old.
          </p>
          <button className="py-3 px-6 md:py-4 md:px-8 bg-white text-orange-600 hover:bg-gray-100 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out">
            Our Academics
          </button>
        </div>
      </div>
    </div>
  );
}