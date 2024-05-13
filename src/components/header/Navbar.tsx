'use client'
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
interface Props{
  isAdmin:boolean
}
const Navbar = ({isAdmin}:Props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="bg-gray-800 flex  items-center float-end mx-auto md:flex-row">
        <div className="px-4 sm:px-6 lg:px-8 w-full ">
          <div className="flex items-center justify-between h-16 mx-auto sas">
            <div className="hidden sm:block">
              <div className="flex ml-10 space-x-4">
                <Link href="/"   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about"   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/articles?pageNumber=1"   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Articles
                </Link>
              {isAdmin &&  <Link href="/admin"   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Admin Dashboard
                </Link>}
              </div>
            </div>
          </div>
        </div>
      
      
        <div className={`${isOpen ? 'flex' : 'hidden'} sm:hidden items-center flex-col `}>
          <div className="px-2 pb-3 space-y-1">
            <Link href="/"   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about"   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/articles"   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Articles
            </Link>
            {isAdmin &&  <Link href="/admin"   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Admin Dashboard
                </Link>}
          </div>
        </div>
        <div className="md:hidden sm:flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            aria-label="Main menu"
            aria-expanded="false"
          >
            {isOpen ? <IoMdClose className="block h-6 w-6" /> : <AiOutlineMenu className="block h-6 w-6" />}
          </button>
        </div>
      </nav>
      
    );
};

export default Navbar;
