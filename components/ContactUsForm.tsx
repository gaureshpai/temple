'use client'

import React, { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    contactNo: '',
    message: '',
    captcha: ''
  });

  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const captchaAnswer = '11';

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'captcha') {
      setIsCaptchaValid(value === captchaAnswer);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isCaptchaValid) {
      console.log('Form submitted:', formData);
    } else {
      alert('Captcha is incorrect. Please try again.');
    }
  };

  return (
    <section className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Write to Us</h1>
          <hr className="border-t-2 border-orange-500 my-2 mx-auto w-1/12" />
          <p className="mt-4 text-black text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore commodi quisquam nostrum harum sit sint quasi, nobis possimus quia maxime officiis temporibus ut doloribus nihil ea assumenda sed. Tempora, illum.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 bg-slate-50">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-black text-sm font-semibold mb-2">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out active:border-orange-600 placeholder:text-black text-black"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-black text-sm font-semibold mb-2">Your Company*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out active:border-orange-600 placeholder:text-black text-black"
                  placeholder="Enter your company"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-black text-sm font-semibold mb-2">Your Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out active:border-orange-600 placeholder:text-black text-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactNo" className="block text-black text-sm font-semibold mb-2">Your Contact No.*</label>
                <input
                  type="text"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out active:border-orange-600 placeholder:text-black text-black"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-black text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out active:border-orange-600 placeholder:text-black text-black"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="mb-6 flex items-center">
              <label htmlFor="captcha" className="text-black text-sm font-semibold mr-4 flex-shrink-0">3 + 8 = ?</label>
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out active:border-orange-600 placeholder:text-black text-black"
                placeholder="Enter the answer"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={!isCaptchaValid}
                className={`bg-orange-500 text-white font-bold px-6 py-3 border-2 border-orange-500 transition duration-300 ease-in-out ${!isCaptchaValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-transparent hover:text-orange-500 hover:border-orange-500'} shadow-md hover:shadow-lg`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;