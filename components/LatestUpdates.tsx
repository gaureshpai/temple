import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const updates = [
  {
    id: 1,
    imageSrc: '/images/update.jpg',
    heading: 'Update 1',
    description: 'This is a brief description of the first update. It gives an overview of the latest news or changes.',
    link: 'huh'
  },
  {
    id: 2,
    imageSrc: '/images/update.jpg',
    heading: 'Update 2',
    description: 'This is a brief description of the second update. It provides details about recent activities or announcements.',
    link: 'huh'
  },
  {
    id: 3,
    imageSrc: '/images/update.jpg',
    heading: 'Update 3',
    description: 'This is a brief description of the third update. It includes important information or upcoming events.',
    link: 'huh'
  },
];

const LatestUpdates = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Latest Updates</h1>
        <hr className="border-t-2 border-orange-500 my-2 mx-auto w-1/12" />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {updates.map((update) => (
            <Link href={update.link} key={update.id} className="flex-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer h-full flex flex-col">
                <div className="h-48 relative">
                  <Image
                    src={update.imageSrc}
                    alt={update.heading}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 transition-colors duration-300 ease-in-out group-hover:text-orange-500">{update.heading}</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">{update.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/Updates"
            className="bg-orange-500 text-white font-bold px-6 py-3 border-2 border-orange-500 transition duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:border-orange-500 shadow-md hover:shadow-lg"
          >
            View All Updates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;