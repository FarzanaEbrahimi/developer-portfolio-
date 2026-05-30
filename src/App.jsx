import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import hero from './assets/hero.jpg'

const App = () => {
  return (
    <div className='bg-[#111827] min-h-screen text-white'>
      <Navbar />

      <Header
        name="Farzana Ebrahimi"
        message="Welcome to my Developer Portfolio"
      />

      <Profile
        photo={hero}
        title="Frontend Developer"
        bio="Computer Science graduate..."
      />

      <About />

      <Projects />

      <Footer name="Farzana Ebrahimi" />
    </div>
  )
}

export default App