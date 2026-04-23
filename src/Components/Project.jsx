import React from 'react'

const Project = () => {
  return (
    <div className='w-[1448.25] flex items-center flex-col h-150 mt-50 '>
      <div className=' flex items-center w-202 h-91  flex-col gap-15'>
      <h1 className='text-5xl text-[#D5491D] font-bold'>PROJECTS</h1>
      <div className='flex justify-between gap-10'>
        <div className=' bg-[#111111] rounded-4xl'>
            <img className='  object-cover rounded-t-2xl' src='https://static.vecteezy.com/system/resources/previews/071/441/705/non_2x/digital-image-of-teal-lightning-bolt-on-black-background-photo.jpg' alt='project1'/>
            <div className='p-5'>
                <p className='text-[10px]  text-gray-300'>CLICK HERE TO VISIT</p>
            <h1>HTML TUTORIAL</h1>
            </div>
        </div>
        <div className=' bg-[#111111] rounded-4xl'>
            <img className='object-cover rounded-t-2xl' src='https://static.vecteezy.com/system/resources/previews/071/441/705/non_2x/digital-image-of-teal-lightning-bolt-on-black-background-photo.jpg' alt='project2'/>
            <div className='p-5'>
                <p className='text-[10px]  text-gray-300' >CLICK HERE TO VISIT</p>
            <h1>CSS TUTORIAL</h1>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Project
