import React from 'react'

const Footer = ({ name }) => {
  return (
    <footer
      id="contact"
      className='bg-[#0f172a] text-gray-300 py-6 mt-16'
    >

      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4'>

        {/* Left */}
        <p className='text-sm'>
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>

        {/* Social Links */}
        <div className='flex gap-6 text-sm'>
          <a href="https://github.com/FarzanaEbrahimi"  target="_blank"  rel="noreferrer" className='hover:text-cyan-400 transition'>
            GitHub
          </a> 
          <a href="https://www.linkedin.com/in/farzana-e-134367215/" target="_blank"  rel="noreferrer" className='hover:text-cyan-400 transition'>
            LinkedIn
          </a>
          <a href="mailto:farzanaebrhimi2001@gmail.com"  target="_blank" rel="noreferrer" className='hover:text-cyan-400 transition'>
            Email
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer