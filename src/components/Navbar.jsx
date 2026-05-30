import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const linkStyle =
    "hover:text-cyan-400 transition duration-200 cursor-pointer"

  return (
    <nav className='bg-[#0f172a] text-white py-4 px-6 relative z-50'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>

        {/* Logo */}
        <h1 className='text-xl font-bold text-cyan-400'>
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 text-gray-300'>
          <li><a href="#home" className={linkStyle}>Home</a></li>
          <li><a href="#about" className={linkStyle}>About</a></li>
          <li><a href="#projects" className={linkStyle}>Projects</a></li>
          <li><a href="#contact" className={linkStyle}>Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-cyan-400 z-50'
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className='fixed inset-0 bg-black/50 md:hidden'
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-[#111827]
          transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <ul className='flex flex-col gap-6 p-6 text-gray-300 mt-16'>
          <li><a className={linkStyle} onClick={() => setOpen(false)} href="#home">Home</a></li>
          <li><a className={linkStyle} onClick={() => setOpen(false)} href="#about">About</a></li>
          <li><a className={linkStyle} onClick={() => setOpen(false)} href="#projects">Projects</a></li>
          <li><a className={linkStyle} onClick={() => setOpen(false)} href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar