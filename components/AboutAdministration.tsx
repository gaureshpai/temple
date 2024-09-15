import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Trustee {
  name: string;
  imageSrc: string;
  role: string;
  bio: string;
}

const trustees: Trustee[] = [
  {
    name: 'Trustee 1',
    imageSrc: '/images/ppp.png',
    role: 'Chairperson',
    bio: 'Trustee 1 has been serving the temple for over 20 years. They are dedicated to preserving our cultural heritage.'
  },
  {
    name: 'Trustee 2',
    imageSrc: '/images/ppp.png',
    role: 'Secretary',
    bio: 'With a background in community service, Trustee 2 focuses on outreach programs and educational initiatives.'
  },
  {
    name: 'Trustee 3',
    imageSrc: '/images/ppp.png',
    role: 'Treasurer',
    bio: "Trustee 3 brings financial expertise to ensure the temple's resources are managed efficiently and transparently."
  },
  {
    name: 'Trustee 4',
    imageSrc: '/images/ppp.png',
    role: 'Event Coordinator',
    bio: 'Responsible for organizing major festivals and cultural events, Trustee 4 ensures vibrant community engagement.'
  },
  {
    name: 'Trustee 5',
    imageSrc: '/images/ppp.png',
    role: 'Maintenance Officer',
    bio: 'Trustee 5 oversees the upkeep and renovation of the temple premises, preserving its beauty and functionality.'
  },
];

const AboutAdministration = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8" id='AboutAdministration'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-orange-500 mb-4">Temple Administration</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Trustees</h2>
          <hr className="border-t-2 border-orange-500 my-4 mx-auto w-24" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of trustees works tirelessly to manage the temple's affairs,
            organize events, and serve the community. Learn more about the individuals who
            guide our temple's mission and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trustees.map((trustee) => (
            <div key={trustee.name} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={trustee.imageSrc}
                    alt={trustee.name}
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{trustee.name}</h3>
                    <p className="text-orange-500 font-medium">{trustee.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{trustee.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The trustees are committed to transparency, community engagement, and the preservation
            of our cultural and spiritual heritage. We work collaboratively to ensure that the
            temple remains a vibrant center of worship, learning, and community service.
          </p>
          <Link
            href="/Contact"
            className="bg-orange-500 rounded-3xl text-white font-bold px-6 py-3 border-2 border-orange-500 transition duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:border-orange-500 shadow-md hover:shadow-lg"
          >
            Contact Administration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutAdministration;