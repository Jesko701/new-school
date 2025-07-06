"use client"
import { AnimatedNumber } from "./animation/AnimatedNumber";

const Description = () => {

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24">
        <div className="md:col-span-1 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our Method
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            tempore sapiente, corporis repudiandae quidem cum assumenda
            repellendus, veniam consequuntur officiis labore doloremque et
            ipsam. Aliquid quasi atque minima sint aut perspiciatis totam
            doloribus nostrum eius maxime, neque distinctio quidem mollitia
            cupiditate repellendus reprehenderit ex ipsum enim ullam architecto
            qui adipisci!
          </p>
        </div>
        <div className="md:col-span-1">
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aliquam rem magni totam cum, itaque veniam! Atque ex aut soluta
            delectus accusantium perspiciatis ut saepe placeat illum quos unde
            expedita voluptatibus eos eligendi perferendis dolores quis animi
            culpa deserunt, nihil neque quasi vitae odit. Magni non dolorum
            magnam pariatur obcaecati!
          </p>
          <a
            href={window.location.origin + "/about"}
            className="text-orange-600 hover:text-orange-800 font-semibold text-lg inline-block border-b border-orange-600 hover:border-orange-800 pb-1 transition-colors duration-200"
          >
            Know More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedNumber
            targetValue={25000}
            duration={2500}
            label="Current Enrollments"
            textColorClass="text-red-600"
            textSizeClass="text-3xl sm:text-4xl md:text-5xl"
          />
          <AnimatedNumber
            targetValue={10}
            duration={2000}
            label="New Enrollments Student Capacity"
            textColorClass="text-red-400"
            textSizeClass="text-3xl sm:text-4xl md:text-5xl"
          />
          <AnimatedNumber
            targetValue={150}
            duration={2200}
            label="Class Capacity"
            textColorClass="text-red-400"
            textSizeClass="text-3xl sm:text-4xl md:text-5xl"
          />
          <AnimatedNumber
            targetValue={98}
            duration={2800}
            label="Our Students"
            textColorClass="text-red-400"
            textSizeClass="text-3xl sm:text-4xl md:text-5xl"
          />
        </div>
      </div>
    </>
  );
};

export const MainSection = () => {
  return (
    <>
      <Description />
      <StatsSection/>
    </>
  );
};
