import React from 'react'

import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImage from '../assets/hero.png'

const Projects = () => {
 const projects = [
  {
    name: 'React Portfolio',
    image: reactLogo,
    description: 'Personal portfolio website built with React.',
    link: '#',
    techStack: ['React', 'Tailwind CSS', 'Vite'],
    featured: true
  },
  {
    name: 'Vite Landing Page',
    image: viteLogo,
    description: 'Responsive landing page created with Vite.',
    link: '#',
    techStack: ['HTML', 'CSS', 'Vite'],
    featured: false
  },
  {
    name: 'Developer Portfolio Design',
    image: heroImage,
    description: 'Modern portfolio UI design and implementation.',
    link: '#',
    techStack: ['React', 'JavaScript', 'Tailwind'],
    featured: true
  }
]

  return (
    <section
        id="projects"
        className='py-16 px-6 text-white max-w-6xl mx-auto'
    >

      {/* Title */}
      <h2 className='text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center'>
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>

        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-[#111827] border border-cyan-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition'
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-48 object-contain bg-white p-4'
            />

            {/* Content */}
            <div className='p-4'>

              {/* Featured Badge */}
              {project.featured && (
                <span className='inline-block bg-cyan-500 text-black text-xs px-2 py-1 rounded-full mb-2'>
                  Featured
                </span>
              )}

              {/* Name */}
              <h3 className='text-xl font-semibold text-white'>
                {project.name}
              </h3>

              {/* Description */}
              <p className='text-gray-400 text-sm mt-2'>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mt-3'>
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className='text-xs bg-cyan-900 text-cyan-300 px-2 py-1 rounded'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                className='inline-block mt-4 text-cyan-400 hover:underline text-sm'
              >
                View Project →
              </a>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Projects