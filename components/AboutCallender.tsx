import React from 'react';
import Image from 'next/image';

const calendarImages = [
  { id: 1, src: '/images/haa.jpg', alt: 'Temple Calendar - January' },
  { id: 2, src: '/images/haa.jpg', alt: 'Temple Calendar - February' },
  { id: 1, src: '/images/haa.jpg', alt: 'Temple Calendar - January' },
  { id: 2, src: '/images/haa.jpg', alt: 'Temple Calendar - February' }
];

const AboutCallender = () => {
  return (
    <div className="bg-slate-50 py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-500">Temple Calendar</h1>
        <h2 className="text-3xl font-semibold text-gray-800">
          Explore Our Yearly Events
        </h2>
        <hr className="border-t-2 border-orange-500 my-2 mx-auto w-1/12" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {calendarImages.map((image) => (
            <div key={image.id} className="flex flex-col items-center w-full">
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={2400}
                height={1600}
                className="object-cover shadow-lg rounded-lg mb-4"
              />
              <p className="text-gray-600 font-semibold">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCallender;
