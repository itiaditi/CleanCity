import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="p-4 drop-shadow-2xl  text-black bg-gradient-to-r from-teal-200 to-transparent bg-opacity75">
      <div className="flex justify-between items-center">
       <NavLink to="/">
       <div className="flex items-center pl-8">
          <FontAwesomeIcon icon={faCampground} className="text-2xl" />
          <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
          Clean City
           
            </h1>
        </div>
       </NavLink>

        {/* MOBILE NAV ICON */}
        <div className="md:hidden block absolute top-4 right-8">
          <button
            aria-label="navigation"
            type="button"
            className="text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} className="text-3xl" />
          </button>
        </div>

        {/* NAVIGATION - LARGE SCREENS */}
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <li className="text-lg pr-8">
              {/* <Link
                href="#"
                className="transition duration-300 focus:outline-none focus:text-black-500 focus:underline hover:underline hover:text-yellow-500"
                style={{ textUnderlineOffset: '8px' }}
              >
                Home
              </Link> */}
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-lg pr-8">
              {/* <Link
                href="#"
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                style={{ textUnderlineOffset: '8px' }}
              >
                About
              </Link> */}
            </li>
            <li className="text-lg pr-8">
              <Link
                href="#"
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                style={{ textUnderlineOffset: '8px' }}
              >
                Blog
              </Link>
            </li>
            <li className="text-lg pr-8">
              <Link
                href="#"
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                style={{ textUnderlineOffset: '8px' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-8">
        <NavLink to="/login">Login</NavLink>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="flex w-full mx-auto py-8 text-center">
          <div className="flex flex-col justify-center items-center w-full">
            <Link
              href="#"
              className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{ textUnderlineOffset: '8px' }}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{ textUnderlineOffset: '8px' }}
            >
              About
            </Link>
            <Link
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{ textUnderlineOffset: '8px' }}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{ textUnderlineOffset: '8px' }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
