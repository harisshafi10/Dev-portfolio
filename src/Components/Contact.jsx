import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-center w-[1448.25px] h-100 flex-col bg-[#191919]'>
        <div className='flex flex-col item-center gap-10 justify-center w-150 h-140'>
            <h1 className='text-xl font-bold'>CONTACT</h1>
        <p className='text-gray-500 text-sm'>Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing and implementing robust, scalable, and innovative web solutions. Adept at leveraging a comprehensive skill set encompassing front-end and back-end technologies </p>
        <div className='flex gap-2'>
            <img className='h-5 w-5' src='https://static.vecteezy.com/system/resources/previews/015/337/565/non_2x/figma-icon-design-free-vector.jpg' alt='mail'/>
        <p className='text-gray-500 text-sm'>Harisshafi01@Gmail.com</p>
        </div>
        <div className='flex flex-row items-center gap-5 '>
         <img className='h-10 w-10 hover:scale-150' src='https://static.vecteezy.com/system/resources/previews/018/930/473/non_2x/instagram-logo-instagram-icon-transparent-free-png.png' alt='instagram'/>
         <img className='h-5 w-5 hover:scale-150' src='https://static.vecteezy.com/system/resources/previews/036/623/772/non_2x/social-media-x-logo-black-and-white-free-png.png' alt='X'/>
         <img className='h-10 w-10 hover:scale-150' src='https://static.vecteezy.com/system/resources/previews/042/127/152/non_2x/black-youtube-logo-on-transparent-background-icon-free-png.png' alt='Youtube'/>
       </div>
        </div>
    </div>
  )
}

export default Contact