import React from 'react'
// import { IoLogoJavascript, FaNodeJs,FaHtml5,FaCss3Alt,FaReact } from "react-icons/ri";

const Hero = () => {
  return (
    <div className='flex items-center w-[1448.25px] h-191 flex-col mt-30 gap-20'>
      <div className=' text-black w-62 h-55  flex justify-center items-center mt-10'>
         <img src="https://static.vecteezy.com/system/resources/previews/057/642/922/non_2x/vibrant-3d-user-profile-icon-in-orange-and-blue-free-png.png" alt="logo" />
      </div>
      <h1 className='font-bold text-5xl w-156 h-20 text-center'>I do code and make content  <span className='font-bold text-5xl w-156 h-20 text-center text-sky-700'>about it!</span></h1>
       
      <p className='w-154 h-20 text-sm text-center'>I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.</p>
        <div className='w-104 h-16 flex items-center justify-center gap-5'>
            <button className='h-16 w-48 bg-white rounded-full text-black font-bold outline-3 hover:bg-black hover:text-white'>Get in Touch</button>
            <button className='h-16 w-48 bg-black rounded-full text-white font-bold outline-3 hover:bg-white hover:text-black'>Download CV</button>
        </div>
      <div className='flex flex-col items-center gap-10 justify-center'>
        <h2>EXPERIENCE WITH</h2>
       <div className='flex gap-10 h-10 w-111 justify-center'>

        <img src="https://www.shutterstock.com/image-vector/web-development-sign-javascript-vector-600w-1875934654.jpg" alt="Js" />
        <img src="https://static.vecteezy.com/system/resources/previews/007/625/571/non_2x/minimalist-letter-n-logo-design-free-vector.jpg" alt="Nodejs" />
        <img src="https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg" alt="html" />
        <img src="https://static.vecteezy.com/system/resources/previews/001/416/680/non_2x/css3-emblem-blue-shield-and-white-text-vector.jpg" alt="Css" />
        <img src="https://static.vecteezy.com/system/resources/previews/010/230/663/non_2x/science-and-education-sign-minimalistic-monochrome-symbol-suitable-for-adverts-sites-articles-books-line-icon-of-react-vector.jpg" alt="React" />
        
       </div>
      </div>

    </div>
  )
}

export default Hero
