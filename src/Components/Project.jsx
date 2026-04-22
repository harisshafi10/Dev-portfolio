import React from 'react'

const Project = () => {
  return (
    <div className=' flex items-center w-150  flex-col gap-6 mb-20'>
      <h1 className='text-5xl text-[#D5491D] font-bold'>PROJECTS</h1>
      <div className='flex justify-between gap-10'>
        <p className=' bg-[#111111] rounded-4xl'>
            <img className='  object-cover rounded-t-2xl' src='https://static.vecteezy.com/system/resources/previews/071/441/705/non_2x/digital-image-of-teal-lightning-bolt-on-black-background-photo.jpg' alt='project1'/>
            <div className='p-5'>
            {/* <div className='absolute ml-55 -mb-25'>
                <img className='w-5 h-5 ' src='https://static.vecteezy.com/system/resources/previews/039/668/244/non_2x/an-arrow-pointing-down-on-a-transparent-background-png.png'/>
            </div> */}
                <p className='text-[10px]  text-gray-300'>CLICK HERE TO VISIT</p>
            <h1>HTML TUTORIAL</h1>
            </div>
        </p>
        <p className=' bg-[#111111] rounded-4xl'>
            <img className='object-cover rounded-t-2xl' src='https://static.vecteezy.com/system/resources/previews/071/441/705/non_2x/digital-image-of-teal-lightning-bolt-on-black-background-photo.jpg' alt='project2'/>
            <div className='p-5'>
            {/* <div className='absolute ml-55 -mb-25'>
                <img className='w-5 h-5 ' src='https://static.vecteezy.com/system/resources/previews/039/668/244/non_2x/an-arrow-pointing-down-on-a-transparent-background-png.png'/>
            </div> */}
                <p className='text-[10px]  text-gray-300' >CLICK HERE TO VISIT</p>
            <h1>CSS TUTORIAL</h1>
            </div>
        </p>
      </div>
    </div>
  )
}

export default Project
