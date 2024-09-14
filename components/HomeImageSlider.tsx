'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    id: 1,
    url: '/images/a1.png',
    alt: 'Image 1',
  },
  {
    id: 2,
    url: '/images/a2.jpg',
    alt: 'Image 2',
  },
  {
    id: 3,
    url: '/images/a3.jpeg',
    alt: 'Image 3',
  },
  {
    id: 4,
    url: '/images/a4.jpg',
    alt: 'Image 4',
  },
  {
    id: 5,
    url: '/images/a5.webp',
    alt: 'Image 5',
  },
];

const HomeImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[85vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute w-full h-screen transition-all duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={image.url}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          title="Previous"
          className="bg-white text-black p-4 rounded-full opacity-70 hover:bg-orange-500 hover:text-white transition-all duration-300"
          onClick={handlePrevious}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          title="Next"
          className="bg-white text-black p-4 rounded-full opacity-70 hover:bg-orange-500 hover:text-white transition-all duration-300"
          onClick={handleNext}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-0 flex justify-center w-full p-4">
        {images.map((image, index) => (
          <button
            title="Navigation Dot"
            key={image.id}
            className={`w-4 h-4 rounded-full mx-2 ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImageSlider;
