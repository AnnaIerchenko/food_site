import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/**overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/75 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:-7xl font-bold'><span className='text-orange-500'>Foods</span> Delivered</h1>
        </div>
        <img 
          className='w-full max-h-[500px] object-cover'
          src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
          alt='hero'/>
      </div>
    </div>
  )
}

export default Hero