import React from 'react'

const Profile = ({ photo, title, bio }) => {
  return (
    <section className='flex flex-col items-center text-center py-12 px-6 text-white'>
      <div className='w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg'>
        <img
          src={photo}
          alt='Profile'
          className='w-full h-full object-cover'
        />
      </div>

      <h2 className='mt-6 text-2xl md:text-3xl font-bold text-cyan-400'>
        {title}
      </h2>

      <p className='mt-4 max-w-2xl text-gray-300 leading-relaxed'>
        {bio}
      </p>
    </section>
  )
}

export default Profile