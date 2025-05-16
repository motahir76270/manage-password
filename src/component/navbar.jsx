import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row bg-gray-900 justify-between items-center fixed w-full opacity-80 p-4 z-50">
      <div className="flex justify-between w-full md:w-auto">
        <h1 className="text-3xl text-center font-bold">
          <span className="text-green-400"> &lt; </span>
          <span className='text-gray-100'>Pass</span>
          <span className="text-green-400">OP/&gt;</span>
        </h1>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 md:gap-10 mt-4 md:mt-0 text-gray-200 w-full md:w-auto items-center`}>
        <li className="hover:text-green-400 cursor-pointer py-2 md:py-0">Home</li>
        <li className="hover:text-green-400 cursor-pointer py-2 md:py-0">About</li>
        <li className="hover:text-green-400 cursor-pointer py-2 md:py-0">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar