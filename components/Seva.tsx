import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SevaDetail {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
}

const sevaDetails: SevaDetail[] = [
  { id: 1, name: 'Annadanam Seva', description: 'Offering free meals to devotees and the needy.', imageSrc: '/images/logo.jpg' },
  { id: 2, name: 'Vastra Seva', description: 'Donating clothes to the underprivileged.', imageSrc: '/images/logo.jpg' },
  { id: 3, name: 'Vidya Seva', description: 'Providing education and learning materials to children.', imageSrc: '/images/logo.jpg' },
];

const Seva = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8" id='Seva'>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-orange-500 mb-4">Seva Offerings</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Participate in Temple Services</h2>
        <hr className="border-t-2 border-orange-500 my-4 mx-auto w-24" />
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join us in our mission to serve the community through various seva activities.
          Your participation helps us make a positive impact on people's lives.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sevaDetails.map((seva) => (
            <div
              key={seva.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={seva.imageSrc}
                  alt={seva.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{seva.name}</h3>
                <p className="text-gray-600 mb-6">{seva.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Participate in Seva?</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Participating in seva is a way to express devotion, serve the community, and contribute to the
          betterment of society. It's an opportunity to give back and make a meaningful difference in people's lives.
        </p>
        <Link href="/BookPooja"className="bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
            Book Pooja
        </Link>
      </div>
    </div>
  );
};

export default Seva;
