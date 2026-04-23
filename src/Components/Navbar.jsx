import React from 'react'
import { Link , Routes ,Route, Router} from 'react-router-dom'


const Navbar = () => {
  
  return (
    <div  className=' flex items-center justify-between w-200 ml-50  '>
    <p className='w-20 h-20 flex justify-center items-center'>Haris</p>
        <nav className='flex w-[473.73px] h-[19.64px] justify-center mr-20'>
            <a href='/' className='flex gap-2 items-center h-full px-5 cursor-pointer hover:text-amber-100'>Home</a>
            <a href='/project'  className='flex gap-2 items-center h-full px-5 cursor-pointer hover:text-amber-100'>Project</a>
            <a href='/experience'   className='flex gap-2 items-center h-full px-5 cursor-pointer hover:text-amber-100'>Experience</a>
            <a href='/contact' className='flex gap-2 items-center h-full px-5 cursor-pointer hover:text-amber-100'>Contact</a>
        </nav>        
        
    </div>
  )
}

export default Navbar
