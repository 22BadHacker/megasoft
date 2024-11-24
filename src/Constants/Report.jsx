import React from 'react'

const Report = () => {
  return (
    <div className="flex flex-col gap-3 ">
        <p className='text-white text-[35px] font-bold pb-2 max-w-[500px] hover:text-orangee cursor-pointer duration-300 ease-in-out'><span className='text-orangee'>* </span>Simple Steps We Follow To Copmlete Your Work</p>
        <div className=' py-8  w-full grid grid-cols-2 lg:md:grid-cols-4 lg:md:sm:gap-2'>
            <div className="flex flex-col bg-[rgb(17,17,17,.6)] px-4 py-2 pb-5 hover:bg-[rgb(17,17,17,.5)] cursor-pointer duration-300 ease-in-out">
                <p className='text-[55px] text-orangee font-bold'>01</p>
                <h3 className='text-white font-semibold text-[21px]'>Idea Generate</h3>
                <h6 className='font-medium opacity-85 text-[12px] lg:md:sm:text-[13px] max-w-[300px]'>is the process of coming up with creative and innovative thoughts, solutions, or concepts.</h6>
            </div>
            <div className="flex flex-col  px-4 py-2 pb-5 hover:bg-[rgb(17,17,17,.5)] cursor-pointer duration-300 ease-in-out">
                <p className='text-[55px] text-orangee font-bold'>02</p>
                <h3 className='text-white font-semibold text-[21px]'>Plan & Design</h3>
                <h6 className='font-medium opacity-85 text-[12px] lg:md:sm:text-[13px] max-w-[300px]'>Together, planning and design provide a roadmap and framework for turning ideas into actionable, achievable, and well-executed results.</h6>
            </div>
            <div className="flex flex-col lg:md:bg-[rgb(17,17,17,.6)] px-4 py-2 pb-5 hover:bg-[rgb(17,17,17,.5)] cursor-pointer duration-300 ease-in-out">
                <p className='text-[55px] text-orangee font-bold'>03</p>
                <h3 className='text-white font-semibold text-[21px]'>Got results</h3>
                <h6 className='font-medium opacity-85 text-[12px] lg:md:sm:text-[13px] max-w-[300px]'>refers to the outcome or findings obtained after completing a process, experiment, or task. It signifies the achievement or conclusion of an effort.</h6>
            </div>
            <div className="flex flex-col bg-[rgb(17,17,17,.6)] lg:md:bg-transparent px-4 py-2 pb-5 hover:bg-[rgb(17,17,17,.5)] cursor-pointer duration-300 ease-in-out">
                <p className='text-[55px] text-orangee font-bold'>04</p>
                <h3 className='text-white font-semibold text-[21px]'>Project Testing</h3>
                <h6 className='font-medium opacity-85 text-[12px] lg:md:sm:text-[13px] max-w-[300px]'>Testing helps identify errors, weaknesses, or areas of improvement before the final product or solution is released.</h6>
            </div>
           
            
        </div>
    </div>
  )
}

export default Report
