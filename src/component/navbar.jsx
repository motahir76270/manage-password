import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex bg-gray-900 justify-between items-center fixed w-full opacity-80 p-4">
      <div>
        <h1 className="text-3xl text-center font-bold">
          <span className="text-green-400"> &lt; </span>
          <span className='text-gray-100'>Pass</span>
          <span className="text-green-400">OP/&gt;</span>
        </h1>
      </div>

      <ul className="flex gap-10 me-0 text-gray-200">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar