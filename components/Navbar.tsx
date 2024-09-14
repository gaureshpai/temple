'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Seva List', href: '/Seva' },
    { name: 'Updates', href: '/Updates' },
    { name: 'Contact Us', href: '/Contact' },
  ];

  return (
    <div className="bg-white">
      <nav
        className='fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-outbg-white shadow-lgh-[15vh]'
      >
        <div
          className={`bg-orange-400 text-white p-2 text-center ${isScrolled ? 'hidden' : 'block'
            }`}
        >
          Official website for the Rama temple
        </div>
        <div className="bg-white">
          <div className='max-w-6xl justify-between container mx-auto p-2 flex  items-center'>
            {/* Logo on the left */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-orange-400">
                <Image
                  className="w-auto"
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>

            {/* Desktop Menu on the right */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-orange-400 hover:text-white transition duration-300 p-2 rounded-lg"
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-red-500 text-white px-6 py-2 rounded-3xl animate-pulse transition duration-300 hover:bg-red-600">
                Live
              </button>
            </div>
          </div>


          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              title="ham"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg fixed top-[15vh] left-0 right-0 transition-all duration-300 ease-in-out">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-400 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-red-500 text-white px-4 py-2 rounded-3xl animate-pulse mt-2 hover:bg-red-600">
                Live
              </button>
            </div>
          </div>
        )}
      </nav>
      <div className='min-h-[18vh]'></div>
    </div>
  );
};

export default Navbar;