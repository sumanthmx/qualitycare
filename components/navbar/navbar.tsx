'use client';
import Link from 'next/link';
import Image from "next/image";
import {useState} from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href = "/">
          <Image src={"/QCG_Logo_White Background.png"} alt="QCG Logo" className="h-10" height={70} width={100}/>
        </a>
        {/* Dropdown Menu */}
        <div className="md:hidden relative">
          <button
            className="text-blue-800 hover:text-blue-900 focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex flex-col justify-center items-center w-8 h-8">
              <span className="bg-gray-900 h-1 w-full mb-1"></span>
              <span className="bg-gray-900 h-1 w-full mb-1"></span>
              <span className="bg-gray-900 h-1 w-full"></span>
            </div>
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-0 right-0 mt-10 py-2 bg-white border rounded z-10">
              <li>
                <Link href="/support" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-800">Find a specialist</Link>
              </li>
              <li>
                <Link href="/how" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-800">How it works</Link>
              </li>
              <li>
                <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-800">About</Link>
              </li>
              <li>
                <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-800">Blog</Link>
              </li>
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-800"
                >
                  List your clinic
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Regular Navbar */}
        <ul className="hidden md:flex space-x-4 ml-auto">
          <li className="inline-block">
            <Link href="/support" className="text-sm font-helvetica-neue text-gray-700 hover:text-blue-800 mr-6 w-32">Find a specialist</Link>
            <Link href="/how" className="text-sm font-helvetica-neue text-gray-700 hover:text-blue-800 mr-6 w-32">How it works</Link>
            <Link href="/about" className="text-sm font-helvetica-neue text-gray-700 hover:text-blue-800 mr-6 w-32">About</Link>
            <Link href="/blog" className="text-sm font-helvetica-neue text-gray-700 hover:text-blue-800 mr-14 w-32">Blog</Link>
            <a
              href="/"
              className="text-sm font-helvetica-neue text-gray-300 bg-blue-950 px-4 py-2 rounded text-white w-32"
            >
              List your clinic
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;