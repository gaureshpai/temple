'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Seva List', href: '/Seva' },
    { name: 'Updates', href: '/Updates' },
    { name: 'Contact Us', href: '/Contact' },
  ];

  return (
    <div className="bg-white overflow-hidden" id='Navbar'>
      <nav className="fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out bg-white shadow-lg">
        <div
          className='bg-orange-400 justify-center content-center text-white text-center text-sm lg:text-base 5xl:text-xl h-[3vh]'
        >
          Official website of the Rama temple
        </div>

        <div className="bg-white h-[12vh]">
          <div className="container mx-auto h-full px-2 max-w-5xl flex items-center justify-between">
            <div className="flex items-center w-full justify-between md:w-auto">
              <div className="flex items-center">
                <Link href="/" className="text-xl 5xl:text-2xl font-bold text-orange-400 flex items-center">
                  <Image
                    className="w-auto"
                    src="/images/logo.jpg"
                    alt="Logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  title="hamburger"
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
            <div className="hidden md:flex items-center h-full space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-orange-400 hover:text-white transition duration-300 p-2 text-base 5xl:text-xl 6xl:text-2xl"
                >
                  {item.name}
                </Link>
              ))}
              <Link href={'/Live'} className="bg-red-500 text-white px-6 py-2 rounded-3xl animate-pulse transition duration-300 hover:bg-red-600 text-sm lg:text-base xl:text-lg 2xl:text-xl 6xl:text-2xl">
                Live
              </Link>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className='top-[15vh] md:hidden bg-white shadow-lg fixed left-0 right-0 transition-all duration-300 ease-in-out'>
              <div className="flex flex-col px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-orange-400 transition duration-300 text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href={'/Live'} className="bg-red-500 text-white px-4 py-2 rounded-3xl animate-pulse hover:bg-red-600 text-sm lg:text-base xl:text-lg 2xl:text-xl mt-2">
                  Live
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="h-[15vh]"></div>
    </div>
  );
};

export default Navbar;
