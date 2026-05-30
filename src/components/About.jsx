import React, { useState } from 'react'

const About = () => {
  const [showMore, setShowMore] = useState(false)

  const hobbies = [
    "Coding",
    "Learning React",
    "Reading tech blogs",
    "Problem solving",
    "UI Design"
  ]

  return (
    <section
        id="about"
        className='text-white py-16 px-6 max-w-5xl mx-auto'
    >       

      {/* Title */}
      <h2 className='text-3xl md:text-4xl font-bold text-cyan-400 mb-6'>
        About Me
      </h2>

      {/* Description */}
      <p className='text-gray-300 leading-relaxed'>
        I am a Computer Science graduate passionate about frontend development,
        modern web technologies, and continuous learning.
        {showMore && (
          <span>
            {' '}I enjoy building responsive user interfaces, working with React,
            and improving my problem-solving skills every day.
          </span>
        )}
      </p>

      {/* Button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className='mt-4 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full transition'
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {/* Hobbies List */}
      <div className='mt-8'>
        <h3 className='text-xl font-semibold mb-3 text-white'>
          My Hobbies
        </h3>

        <ul className='grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300'>
          {hobbies.map((hobby, index) => (
            <li
              key={index}
              className='bg-[#111827] border border-cyan-800 px-3 py-2 rounded-lg text-center'
            >
              {hobby}
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default About