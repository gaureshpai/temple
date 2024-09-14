import React from 'react';
import Image from 'next/image';

const AboutHistory = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Shri Rama Temple</h1>
        <hr className="border-t-2 border-orange-500 my-4 mx-auto w-1/12" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 px-4">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src="/images/a4.jpg"
              alt="Temple History 1"
              width={600}
              height={400}
              className="object-cover shadow-xl border-2 border-gray-300"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">The Founding of Shri Rama Temple</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Shri Rama Temple was established in the early 19th century by a group of devoted followers who sought to create a place of worship dedicated to Lord Rama. The temple's construction was spearheaded by local philanthropists who were inspired by the divine teachings and sought to build a sanctuary for worship and community gathering.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The architectural style of the temple reflects traditional Hindu design principles, featuring intricately carved pillars and a grand sanctum sanctorum. The temple's foundation stone was laid in 1825, and the main structure was completed by 1830. Over the years, the temple has undergone several renovations and expansions to accommodate the growing number of devotees.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src="/images/a4.jpg"
              alt="Temple History 2"
              width={600}
              height={400}
              className="object-cover shadow-xl border-2 border-gray-300"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">The Role of the Temple in the Community</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Shri Rama Temple has played a central role in the local community since its inception. Beyond serving as a place of worship, the temple has been a hub for cultural and social activities. Regular festivals, religious ceremonies, and community events are organized here, drawing visitors from near and far.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The temple also offers various educational and charitable initiatives, including support for local schools, health camps, and relief efforts during times of need. Its vibrant community outreach programs have earned it a cherished place in the hearts of many.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The legacy of Shri Rama Temple continues to grow, with ongoing efforts to preserve its rich heritage and expand its outreach. The temple remains a symbol of devotion, unity, and cultural pride for the entire community.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">More About Shri Rama Temple</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            For those interested in learning more about the temple's history, architecture, and community impact, please visit our detailed archives or contact us for guided tours and additional information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;