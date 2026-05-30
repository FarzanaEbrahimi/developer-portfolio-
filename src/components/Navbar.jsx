import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md shadow-lg'>

      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>

        <h1 className='text-2xl font-bold text-cyan-400'>
          Portfolio
        </h1>

        <ul className='flex gap-8 text-gray-300 font-medium'>

          <li>
            <a
              href="#home"
              className='hover:text-cyan-400 transition duration-300'
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className='hover:text-cyan-400 transition duration-300'
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className='hover:text-cyan-400 transition duration-300'
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className='hover:text-cyan-400 transition duration-300'
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar