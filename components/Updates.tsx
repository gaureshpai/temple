import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const updates = [
  {
    id: 1,
    imageSrc: '/images/update.jpg',
    heading: 'Update 1',
    description: 'This is a brief description of the first update. It gives an overview of the latest news or changes.',
    link: '#'
  },
  {
    id: 2,
    imageSrc: '/images/update.jpg',
    heading: 'Update 2',
    description: 'This is a brief description of the second update. It provides details about recent activities or announcements.',
    link: '#'
  },
  {
    id: 3,
    imageSrc: '/images/update.jpg',
    heading: 'Update 3',
    description: 'This is a brief description of the third update. It includes important information or upcoming events.',
    link: '#'
  },
  {
    id: 4,
    imageSrc: '/images/update.jpg',
    heading: 'Update 4',
    description: 'This is a brief description of the fourth update. It provides additional details about recent news.',
    link: '#'
  },
  {
    id: 5,
    imageSrc: '/images/update.jpg',
    heading: 'Update 5',
    description: 'This is a brief description of the fifth update. It covers more recent developments or changes.',
    link: '#'
  },
  {
    id: 6,
    imageSrc: '/images/update.jpg',
    heading: 'Update 6',
    description: 'This is a brief description of the sixth update. It gives insight into the latest activities or announcements.',
    link: '#'
  }
];

const Updates = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8" id='Updates'>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">All Updates</h1>
        <hr className="border-t-2 border-orange-500 my-2 mx-auto w-1/12" />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update) => (
            <Link href={update.link} key={update.id} className="flex flex-col">
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
      </div>
    </div>
  );
};

export default Updates;
