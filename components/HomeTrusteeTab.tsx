import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const trustees = [
  { name: 'Trustee 1', imageSrc: '/images/ppp.png' },
  { name: 'Trustee 2', imageSrc: '/images/ppp.png' },
  { name: 'Trustee 3', imageSrc: '/images/ppp.png' },
  { name: 'Trustee 4', imageSrc: '/images/ppp.png' },
  { name: 'Trustee 5', imageSrc: '/images/ppp.png' },
];

const HomeTrusteeTab = () => {
  return (
    <div className="bg-slate-100 py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-500">Trustees</h1>
        <h2 className="text-4xl font-bold  relative text-gray-800 inline-block">
          Administration
        </h2>
        <hr className="border-t-2 border-orange-500 my-2 mx-auto w-1/12" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {trustees.map((trustee) => (
            <div key={trustee.name} className="w-full sm:w-1/2 md:w-1/6 flex flex-col items-center text-center">
              <Image
                src={trustee.imageSrc}
                alt={trustee.name}
                width={150}
                height={150}
                className="object-cover rounded-full shadow-lg mb-2"
              />
              <p className="text-gray-800 font-semibold">{trustee.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-100 text-center my-8'>
        <Link
          href="/About"
          className="bg-orange-500 text-white font-bold p-2 hover:bg-transparent hover:text-orange-500 border-2 border-orange-500 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          View all Trustees
        </Link>
      </div>
    </div>
  );
};

export default HomeTrusteeTab;
