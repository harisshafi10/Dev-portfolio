import React from 'react'
import { Link , Routes ,Route} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between w-200 ml-50 '>
    <p className='w-20 h-20 flex justify-center items-center'>Haris</p>
        <nav className='flex w-[473.73px] h-[19.64px] justify-center mr-20'>
            <ul className='flex gap-5 items-center h-full px-10'>Home</ul>
            <ul className='flex gap-5 items-center h-full px-10'>Project</ul>
            <ul className='flex gap-5 items-center h-full px-10'>Experience</ul>
            <ul className='flex gap-5 items-center h-full px-10'>Contact</ul>
        </nav>        
    </div>
  )
}

export default Navbar
