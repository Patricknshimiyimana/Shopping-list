import React from 'react';
import Toggle from './toggle.js';
// import logo from '../images/Tailwind.png';

const Navbar = () => {
  return (
    <header className="text-gray-700 bg-white dark:bg-gray-900 body-font">
      <div className="flex lg:container flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row justify-between">
        <div className="flex ">
          <a
            href="javascript.void(0)"
            className="flex md:justify-center items-center w-40 mb-4 font-bold text-gray-700 dark:text-gray-200 title-font md:mb-0"
          >
            <img alt="tailwind" className="w-9 h-9" />
          </a>
          <nav className="flex md:flex-wrap items-center justify-center md:ml-96  text-base">
            <a
              href="javascript.void(0)"
              className="mr-5 text-sm font-bold text-gray-700 dark:text-gray-300 rounded-xl hover:text-gray-800"
            >
              All
            </a>
            <a
              href="javascript.void(0)"
              className="mr-5 text-sm font-bold text-gray-700 dark:text-gray-300 rounded-xl hover:text-gray-800"
            >
              Shopped
            </a>
            <a
              href="javascript.void(0)"
              className="mr-5 text-sm font-bold text-gray-700 dark:text-gray-300 rounded-xl hover:text-gray-800"
            >
              Waiting
            </a>
          </nav>
        </div>
        <div className="justify-center mr-24 ">
          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;