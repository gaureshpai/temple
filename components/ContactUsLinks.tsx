import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUsLinks = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8" id='ContactUsLinks'>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <hr className="border-t-2 border-orange-500 my-2 mx-auto w-1/12" />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mr-3">
                <FaMapMarkerAlt className="text-2xl text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Location</h2>
            </div>
            <p className="text-gray-700 mb-2">123 Main Street, Cityville, ST 12345</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mr-3">
                <FaPhone className="text-2xl text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Phone Numbers</h2>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Office Manager:</strong> (123) 456-7890
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Support:</strong> (123) 456-7891
            </p>
            <p className="text-gray-700">
              <strong>Sales:</strong> (123) 456-7892
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mr-3">
                <FaEnvelope className="text-2xl text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Email IDs</h2>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>General Inquiries:</strong> <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Support:</strong> <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a>
            </p>
            <p className="text-gray-700">
              <strong>Sales:</strong> <a href="mailto:sales@example.com" className="text-blue-500 hover:underline">sales@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsLinks;