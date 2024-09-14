import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeAboutSection = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to</h1>
        <h2 className="text-4xl font-bold text-orange-500 relative inline-block">
          Shri Rama Temple
        </h2>
        <hr className="border-t-2 border-orange-500 my-2 mx-auto w-1/12" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 px-4">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/images/logo.jpg"
            alt="Deity Photo"
            width={600}
            height={600}
            className="object-cover shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Shri Rama Temple History</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim sed ipsa natus molestiae numquam, suscipit sapiente praesentium nesciunt laboriosam delectus nemo! Velit, hic aspernatur quas quod incidunt a rem?
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, doloremque obcaecati? Ducimus, accusantium. Consequatur adipisci, architecto suscipit excepturi sequi eveniet omnis error harum ut repellendus! Maxime rerum ad provident dolores!
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia porro, quo pariatur suscipit aut ad quis quae voluptates veritatis accusamus blanditiis consequatur iusto rerum reprehenderit maxime totam nisi repellendus hic?
          </p>
          <Link
            href="/About"
            className="bg-orange-500 text-white font-bold p-2 hover:bg-transparent hover:text-orange-500 border-2 border-orange-500 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
