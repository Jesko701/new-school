// app/components/AnimatedNumber.js
'use client'; // This component uses client-side hooks and browser APIs

import React, { useState, useEffect, useRef } from 'react';

export function AnimatedNumber({
  targetValue,
  duration = 2000,
  label,
  // New props for dynamic styling
  textColorClass = 'text-blue-600', // Default color if not provided
  textSizeClass = 'text-4xl sm:text-5xl md:text-6xl' // Default size if not provided
}) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false); // To ensure animation runs only once

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true; // Mark as animated
            const start = 0;
            const end = targetValue;
            let startTime = null;

            const animate = (currentTime) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              setCurrentValue(Math.floor(progress * (end - start) + start));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetValue, duration]); // Depend on targetValue and duration, though animation usually runs once

  return (
    <div ref={ref} className="text-center p-4">
      <div className={`${textSizeClass} font-bold ${textColorClass}`}>
        {currentValue.toLocaleString()}+ {/* Format number with commas */}
      </div>
      <p className="mt-2 text-lg sm:text-xl text-gray-700 font-semibold">{label}</p>
    </div>
  );
}