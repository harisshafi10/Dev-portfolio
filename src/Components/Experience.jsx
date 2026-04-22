import React from 'react'

const Experience = () => {
  return (
    <div className='flex items-center w-150 h-191 flex-col gap-10'>
        <div className='flex items-center w-150 h-130 flex-col gap-3 p-4 '>
      <h1 className='text-3xl font-extrabold leading-[35.7px] text-[#1373D1] mb-5'>EXPERIENCE</h1>
      <div className='google flex flex-col gap-5'>
      <div className=' flex justify-center gap-2'>
        <img className='h-7 w-7' src='https://static.vecteezy.com/system/resources/previews/022/484/503/non_2x/google-lens-icon-logo-symbol-free-png.png' alt='google logo'/>
        <h2 className=' flex flex-row text-xl font-semibold'>Lead Software Engineer at Google</h2>
        <span className='flex items-center justify-end ml-22 text-sm text-gray-500'>Nov 2026 - Present</span>
      </div>
        <p className=' text-gray-500 text-sm flex item-center justify-center'>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
      </div>
      <div className='google flex flex-col gap-5'>
      <div className=' flex justify-center gap-2'>
        <img className='h-7 w-7' src='https://static.vecteezy.com/system/resources/previews/020/489/292/non_2x/3d-logo-of-apple-iphone-free-png.png' alt='google logo'/>
        <h2 className=' flex flex-row    text-xl font-semibold'>Junior Software Engineer at Apple</h2>
        <span className='flex items-center justify-end ml-22 text-sm text-gray-500'>Nov 2026 - Present</span>
      </div>
        <p className=' text-gray-500 text-sm flex item-center justify-center'>During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.</p>
      </div>
      <div className='google flex flex-col gap-5'>
      <div className=' flex justify-center gap-2'>
        <img className='h-7 w-7' src='https://static.vecteezy.com/system/resources/previews/057/355/773/non_2x/meta-logo-on-transparent-background-free-png.png' alt='google logo'/>
        <h2 className=' flex flex-row    text-xl font-semibold'>Software Engineer at Meta</h2>
        <span className='flex items-center justify-end ml-40 text-sm text-gray-500'>Nov 2026 - Present</span>
      </div>
        <p className=' text-gray-500 text-sm flex item-center justify-center'>At Meta, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.</p>
      </div>
    </div>
    </div>
  )
}

export default Experience
