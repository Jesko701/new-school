"use client";
import Image from "next/image";

export function HeroSection() {
  return (
    // Outer container: relative for image/content positioning, full width, responsive height, hidden overflow
    // Adjusted height to be slightly taller as per screenshot, using a min-h for responsiveness
    <div className="relative w-full h-[600px] md:h-[500px] lg:h-[650px] overflow-hidden">
      <Image
        src="/school-classroom.jpg" 
        alt="Granada Preschool classroom with children learning"
        fill 
        priority 
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="absolute inset-0 flex justify-start items-center text-white p-5 z-10">
        <div className="max-w-2xl text-left pl-8 md:pl-16 lg:pl-24"> 
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
          <button onClick={() => {
            window.location.href = "/academics"
          }}  className="py-3 px-6 md:py-4 md:px-8 bg-white text-orange-600 hover:bg-gray-100 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer active:cursor-grabbing">
            Our Academics
          </button>
        </div>
      </div>
    </div>
  );
}