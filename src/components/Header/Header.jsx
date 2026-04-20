// import React from "react";
// import './Header.css';
// function Header() {
//   return (
//    <header className="bg-gray-900 h-16">
//   <div className="flex justify-end items-center h-full pr-10">
//     <ul className="flex space-x-12 text-white">
//       <li className="hover:text-pink-200 cursor-pointer">About Me</li>
//       <li className="hover:text-pink-200 cursor-pointer">My Skills</li>
//       <li className="hover:text-pink-200 cursor-pointer">Portfolio</li>
//       <li className="hover:text-pink-200 cursor-pointer">Contact Me</li>
//     </ul>
//   </div>
// </header>

//   )
// }

// export default Header;


import React, { useState } from "react";
// import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed w-full h-15 z-20 top-0 start-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center  pr-10">



          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-pink-200 cursor-pointer px-3 py-2 rounded-md">
              About Me
            </a>
                        <a href="#my_skills" className="hover:text-pink-200 cursor-pointer px-3 py-2 rounded-md">
              My Skills
            </a>

            <a href="#portfolio" className="hover:text-pink-200 cursor-pointer px-3 py-2 rounded-md">
              Portfolio
            </a>

            <a href="#contact" className="hover:text-pink-200 cursor-pointer px-3 py-2 rounded-md">
              Conatct
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mr-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none "
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-4 py-2">About Me</a>
          <a href="#my_skills" onClick={() => setIsOpen(false)} className="block px-4 py-2">My Skills</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-2">Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-2">Contact</a>
        </div>
      )}

    </header>
  );
};

export default Header;
