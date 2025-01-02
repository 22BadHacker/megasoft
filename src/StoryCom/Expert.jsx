import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { scrollToTop } from '../Constants/main';

const Expert = () => {
  return (
    <div className='w-full grid gap-10 sm:gap-0 grid-cols-1 sm:grid-cols-2'>
         <p className='text-white text-[18px] relative top-1  cursor-pointer sm:text-[16px] drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] h-fit font-medium flex items-center gap-2'>AREAS OF EXPERTISE <MdOutlineArrowRightAlt className='border-orange-500/40 text-orangee rounded-[10px] w-8 border-[.5px]'/></p>

         <div className='flex w-full flex-wrap items-center gap-6 '>
            <div className="flex flex-col gap-1 w-full">
                <h1 className='text-white text-[30px] sm:text-[38px] font-semibold tracking-[.5px]'>Frontend</h1>
                <h5 className='sm:text-[16.5px] text-[15px] text-white/90 pb-10'>We use the most popular frontend frameworks like React.js, Next.js,  which enable us to create the surface layer of your product.</h5>
                <div className="w-full  bg-white/20 h-[.2px]"></div>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <h1 className='text-white text-[30px] sm:text-[38px] font-semibold tracking-[.5px]'>Backend</h1>
                <h5 className='sm:text-[16.5px] text-[15px] text-white/90 pb-10'>We use server-side technologies like Python, Laravel, and Node.js for prototyping and development, producing fast and scalable web apps.</h5>
                <div className="w-full  bg-white/20 h-[.2px]"></div>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <h1 className='text-white text-[30px] sm:text-[38px] font-semibold tracking-[.5px]'>Full Stack</h1>
                <h5 className='sm:text-[16.5px] text-[15px] text-white/90 pb-10'>We deliver end-to-end web development, combining frontend and backend solutions and other technologies necessary to make your product a success.</h5>
                <div className="w-full  bg-white/20 h-[.2px]"></div>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <h1 className='text-white text-[30px] sm:text-[38px] font-semibold tracking-[.5px]'>Graphic Design</h1>
                <h5 className='sm:text-[16.5px] text-[15px] text-white/90 pb-10'>We use design tools like Adobe Photoshop, Illustrator, and Figma for creating visual content to enhance user experience and to produce designs that inform, inspire, and captivate audiences.</h5>
                <div className="w-full  bg-white/20 h-[.2px]"></div>
            </div>
            <div className="flex flex-col gap-[9px] w-full pt-4">
                <p className="flex items-center text-white gap-6 font-semibold text-[18px]"><span className='w-[9px] h-[9px] rounded-full bg-orangee'></span>Web applications</p>
                <p className="flex items-center text-white gap-6 font-semibold text-[18px]"><span className='w-[9px] h-[9px] rounded-full bg-orangee'></span>Cloud development</p>
                <p className="flex items-center text-white gap-6 font-semibold text-[18px]"><span className='w-[9px] h-[9px] rounded-full bg-orangee'></span>cyber security</p>
                <p className="flex items-center text-white gap-6 font-semibold text-[18px]"><span className='w-[9px] h-[9px] rounded-full bg-orangee'></span>Degital Marketing</p>
                <Link onClick={scrollToTop} to='/services' className="moree flex text-white  items-center gap-4 mt-3 justify-center border-[.5px] py-3 rounded-full border-orangee w-[200px]">
                    <p  className='text-white font-semibold text-[17px] '>Explore More</p>
                    <FaArrowRightLong className='arrow text-[15px]'/>
                </Link>
            </div>


         </div>
    </div>
  )
}

export default Expert
