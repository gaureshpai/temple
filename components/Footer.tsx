import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const templeName = "Shree Rama Temple";
  const address = "123 Main Street, Anytown, CA 91234";
  const phone = "+1 (555) 123-4567";
  const email = "info@shreekrishna.org";

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 md:px-8 lg:px-16" id='Footer'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">SEVA LIST</h3>
            <p className="text-gray-300 mb-4">
              Explore the various sevas offered at {templeName}.
            </p>
            <Link href="/Seva" className="text-orange-300 hover:text-orange-500 font-semibold">
              View Seva List
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">DONATIONS</h3>
            <p className="text-gray-300 mb-4">Support {templeName} with your generous contributions.</p>
            <Link href="/Donate" className="text-orange-300 hover:text-orange-500 font-semibold">
              Donate Now
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">CONTACT US</h3>
            <p className="text-gray-300 mb-4">Have questions? Reach out to us.</p>
            <Link href="/Contact" className="text-orange-300 hover:text-orange-500 font-semibold">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-2">Address</h4>
              <p>{address}</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Phone</h4>
              <p>{phone}</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Email</h4>
              <p>{email}</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Darshan Timing</h4>
              <p>Morning: 6:00 AM – 1:00 PM<br />Evening: 6:00 PM – 8:30 PM</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Pooja Timing</h4>
              <p>Check website for latest timings</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Copyright © {new Date().getFullYear()} {templeName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;