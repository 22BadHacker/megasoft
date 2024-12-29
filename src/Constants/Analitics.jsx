import React from 'react'

const Analitics = () => {
  return (
    <div className='w-full  gap-6 sm:gap-y-10 place-items-center px-4 py-4 grid grid-cols-2 lg:md:grid-cols-4'>
        <div className="flex flex-col gap-1">
            
            <p className='text-[60px] font-semibold text-orangee'>40+</p>
            <p className='lg:md:sm:text-[20px] drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] font-medium relative -top-2'>Project Completed</p>
        </div>
        <div className="flex flex-col gap-1">
            <p className='text-[60px] font-semibold text-orangee'>80%</p>
            <p className='lg:md:sm:text-[20px] font-medium relative -top-2 drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)]'>Client Satisfaction</p>
        </div>
        <div className="flex flex-col gap-1">
            <p className='text-[60px] font-semibold text-orangee'>10+</p>
            <p className='lg:md:sm:text-[20px] font-medium relative -top-2 drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)]'>Years of Experience</p>
        </div>
        <div className="flex flex-col gap-1">
            <p className='text-[60px] font-semibold text-orangee'>140+</p>
            <p className='lg:md:sm:text-[20px] font-medium relative -top-2 drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)]'>Good Reviews</p>
        </div>
        
    </div>
  )
}

export default Analitics
