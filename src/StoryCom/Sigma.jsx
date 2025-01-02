import React from 'react'

const Sigma = () => {
  return (
    <div className='w-full grid grid-cols-4 gap-[50px]'>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
                <div className="w-full h-[.1px] bg-white opacity-10"></div>
                <p className='drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] font-medium text-white/90'>Client we Worked With</p>
            </div>
            <h1 className='text-white text-[90px] font-semibold '>+30</h1>
        </div>


        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
                <div className="w-full h-[.2px] bg-white opacity-10"></div>
                <p className='drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] font-medium text-white/90'>Experts Team </p>
            </div>
            <h1 className='text-white text-[90px] font-semibold'>+20</h1>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
                <div className="w-full h-[.2px] bg-white opacity-10"></div>
                <p className='drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] font-medium text-white/90'>Years in business</p>
            </div>
            <h1 className='text-white text-[90px] font-semibold'>10</h1>
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
                <div className="w-full h-[.2px] bg-white opacity-10"></div>
                <p className='drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] font-medium text-white/90'>Project We Worked on</p>
            </div>
            <h1 className='text-white text-[90px] font-semibold'>+150</h1>
        </div>
    </div>
  )
}

export default Sigma
