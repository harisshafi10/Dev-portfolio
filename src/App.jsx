import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Project from './Components/Project'
import Experience from './Components/Experience'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-[#0b0b0b] text-white w-370 h-700  flex flex-col items-center '>
    <Header/>
    <Hero/>
    <Project/>
    <Experience/>
    <Contact/>
    </div>
  )
} 

export default App