import React from 'react'
import img1 from '../Assets/services/img3.png'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { services,text } from '../Constants/main'
// import  '../Assets/services/'
// import VideoJS from './VideoJS'
// import video from './vidio2.mp4'
import video from './video.mp4'

const Services = () => {
  return (
    <div id='id' className='w-screen pt-[100px] bg-black pb-[200px] '>

      <div className="max-w-[1500px] px-4 md:lg:px-5 h-full mx-auto w-full">
        
        {/* Head Title */}
        <div className="w-full conns place-content-between lg:place-items-center sm:gap-8 grid lg:md:grid-cols-[1fr_1fr] grid-cols-1 ">
          <div className=' w-full  pb-[60px] flex flex-col text-wrap md:lg:pb-[70px] '>
                    <h1   className='con3 text-[12vw] pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[6vw] tracking-tight    md:text-[14vw] '>Our Services</h1> 
                    <h1  className='lg:text-[2vw] pl-2 text-[5vw] lg:md:sm:pl-3 font-medium text-[20px] sm:text-[28px] sm:-top-[15px] relative lg:md:-top-2 opacity-85'>What <span className='text-orangee'>Services</span> We're Offering</h1> 
            </div>

            <p className='w-full lg:top-[20px] lg:pt-[1vh] relative -top-10  md:-top-[75px] sm:-top-[60px] text-white/70 text-[15px] lg:md:sm:text-[16.5px] max-w-[650px] font-medium flex'>{text}</p>

        </div>

         

          
          
          
      </div>
      
    </div>
  )
}

export default Services
