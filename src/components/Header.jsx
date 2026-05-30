import React from 'react'

const Header = ({ name, message }) => {

  const quotes = [
    'Keep going, you are getting better every day.',
    'Success is built on consistency.',
    'Small steps every day lead to big results.',
    'Practice makes progress.'
  ]

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <header
      id="home"
      className='text-center py-12 px-4 text-white'
    > 

      <h1 className='text-4xl md:text-5xl font-bold'>
        Hi, I'm
        <span className='text-cyan-400'> {name}</span>
      </h1>

      <p className='mt-4 text-gray-300'>
        {message}
      </p>

      <p className='mt-6 italic text-cyan-300'>
        "{randomQuote}"
      </p>

    </header>
  )
}

export default Header