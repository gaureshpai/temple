'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Festival {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  link: string;
}

const AboutFestivals = () => {
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFestivals = async () => {
      const festivalData: Festival[] = [
        {
          id: 1,
          name: 'Diwali',
          description: 'Festival of Lights, celebrated with great joy and devotion.',
          imageSrc: '/images/a4.jpg',
          link: '/festivals/diwali',
        },
        {
          id: 2,
          name: 'Holi',
          description: 'Festival of Colors, marking the arrival of spring.',
          imageSrc: '/images/a4.jpg',
          link: '/festivals/holi',
        },
        {
          id: 3,
          name: 'Rama Navami',
          description: 'Celebration of the birth of Lord Rama, an important day for devotees.',
          imageSrc: '/images/a4.jpg',
          link: '/festivals/rama-navami',
        },
      ];

      setTimeout(() => {
        setFestivals(festivalData);
        setLoading(false);
      }, 1000);
    };

    fetchFestivals();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64" id='AboutFestivals'>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (festivals.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50" id='AboutFestivals'>
        <h2 className="text-2xl font-semibold text-gray-800">No festivals to display at the moment.</h2>
        <p className="text-gray-600 mt-2">Please check back later for updates.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-16 px-4 md:px-8" id='AboutFestivals'>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Festivals at Shri Rama Temple</h1>
        <hr className="border-t-2 border-orange-500 my-4 mx-auto w-24" />
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the vibrant celebrations and rich traditions of our temple festivals.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {festivals.map(festival => (
          <div key={festival.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-64">
              <Image
                src={festival.imageSrc}
                alt={festival.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-3">{festival.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{festival.description}</p>
              <Link href={festival.link} className="bg-orange-500 rounded-3xl text-white font-bold px-6 py-3 border-2 border-orange-500 transition duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:border-orange-500 shadow-md hover:shadow-lg"
              >  Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFestivals;