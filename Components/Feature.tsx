"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import Chevron icons

const images = [
  { src: "/images/fea1.png", alt: "Image 1" },
  { src: "/images/fea2.png", alt: "Image 2" },
  { src: "/images/bedroom.png", alt: "Image 3" },
  { src: "/images/fea2.png", alt: "Image 4" },
];

const Feature = () => {
  const visibleCount = 3;
  const maxIndex = images.length - visibleCount;
  const [startIndex, setStartIndex] = useState(0);

  // For autoplay and swipe gestures
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToIndex = (index: number) => setStartIndex(index);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStart = e.changedTouches[0].clientX;
    setTouchStart(touchStart);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchMove = e.changedTouches[0].clientX;
    setTouchEnd(touchMove);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }
    if (touchEnd - touchStart > 50) {
      // Swipe right
      setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    }
  };

  const goToPrevious = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex)); // Move to the previous image
  };

  const goToNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0)); // Move to the next image
  };

  return (
    <div className="bg-[#FCF8F3] py-10">
      <div className="flex flex-col lg:flex-row  items-center justify-between mx-20 gap-10">
        {/* Text Section */}
        <div className="lg:w-1/3">
          <h1 className="font-bold text-[40px] leading-tight">
            50+ Beautiful rooms <br />
            inspiration
          </h1>
          <p className="text-[16px] mt-4 text-[#616161]">
            Our designer already made a lot of beautiful <br />
            prototype rooms to inspire you.
          </p>
          <button className="py-3 px-10 font-bold bg-[#B88E2F] my-10 text-white text-[16px]">
            Explore More
          </button>
        </div>

        {/* Carousel Section */}
        <div
          className="relative w-full lg:w-2/3"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-3"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`min-w-[33.3333%] relative ${
                    index === startIndex ? "h-[500px]" : "h-[350px]"
                  }`} // Adjusting height dynamically
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Chevron Left Button */}
          {/* <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#B88E2F] text-white p-3 rounded-full"
            onClick={goToPrevious}
          >
            <FiChevronLeft size={24} />
          </button> */}

          {/* Chevron Right Button */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[#B88E2F] bg-white p-3 rounded-full"
            onClick={goToNext}
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-[-50px]">
            {[...Array(maxIndex + 3)].map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === startIndex ? "bg-[#B88E2F]" : "bg-gray-300"
                }`}
                onClick={() => goToIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
