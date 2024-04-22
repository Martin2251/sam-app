"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-white font-bold">
              Your Logo
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#" className="text-white mx-4">
              Home
            </a>
            <a href="#" className="text-white mx-4">
              About
            </a>
            <a href="#" className="text-white mx-4">
              Services
            </a>
            <a href="#" className="text-white mx-4">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
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
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 z-50">
          <div className="flex flex-col items-center justify-center h-full">
            <a href="#" className="text-white py-2">
              Home
            </a>
            <a href="#" className="text-white py-2">
              About
            </a>
            <a href="#" className="text-white py-2">
              Services
            </a>
            <Link href="/contact">
            <a href="#" className="text-white py-2">
              Contact
            </a>
            </Link>
            <button
              onClick={closeMenu}
              className="text-white mt-4 px-4 py-2 rounded-lg border border-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;