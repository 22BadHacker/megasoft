import React from 'react'
import img from '../Assets/newColor.svg'
import {motion} from 'framer-motion'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { PiTrendUpThin } from "react-icons/pi";

const Head = () => {
 
  
  return (
    <div className='w-full h-auto grid grid-cols-1 place-items-center gap-1 pb-[100px] pt-[100px]'>
        <div className="w-full flex justify-center items-center">
            <div className="w-2 h-2 rounded-full  bg-transparent  border-[.5px] border-orangee"></div>
            <div className="w-20 h-[1px] bg-orangee"></div>
            <img src={img} className='w-[170px] backdrop-blur-[20px]  border-[.5px] border-orangeLight bg-transparent drop-shadow-[0_10px_10px_rgb(0,0,0,.8)] px-4 py-2 rounded-full' alt="MEGASOFT" />
            <div className="w-20 h-[1px]  bg-orangee"></div>
            <div className="w-2 h-2 rounded-full  bg-transparent  border-[.5px] border-orangee"></div>

        </div>
        <h1 className='num text-center font-Poppins w-full relative pt-2 leading-[1.1] text-[60px] sm:text-[81px] text-white font-bold'>
            <span className='text-transparent drop-shadow-[0px_0_30px_rgb(255,255,255,.8)]'>It's our job to Light up your</span> Success 
            <div className="w-full absolute -top-5 right-0 opacity-40">
                    <div className="w-[500px] -rotate-0 h-[180px] z-[-5]  absolute -right-[40px] blur-[60px] -top-0 bg-red-500 rounded-full"></div>
                    {/* <div className="h-[500px] -rotate-0 w-[150px] z-[-5]  absolute left-[250px] blur-[50px] top-0 bg-blue-500 rounded-full"></div> */}
            </div>     
        </h1>
        
        {/* <p></p> */}


        <div className="flex w-full flex-col gap-5 pt-[120px] pb-[40px]">
            <h1 className='text-[33px] flex items-center gap-2   text-orangee font-medium'>We're Growing <PiTrendUpThin className='w-7 text-white'/></h1>
            <div className="flex gap-12">
                <div className="flex flex-col gap-4">
                    <div className="w-[330px] h-[.5px] bg-white opacity-20"></div>
                    <p className='drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] text-[23px] font-medium'>Year</p>
                    <h1 className='text-white text-[80px] font-semibold'>2024</h1>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="w-[330px] h-[.5px] bg-white opacity-20"></div>
                    <p className='drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] text-[23px] font-medium'>People</p>
                    <h1 className='text-white text-[80px] font-semibold'>+20</h1>
                </div>
            </div>
        </div>

        <div className="grid w-full grid-cols-2 pt-[100px] ">
          <p className='text-white drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] h-fit font-medium flex items-center gap-2'>THE BACKSTORY <MdOutlineArrowRightAlt className='border-orange-500/40 text-orangee rounded-[10px] w-8 border-[.5px]'/></p>
          <h1 className='text-[20px]  pt-1 font-medium text-white relative'> Back in early 2024, exactly in Casablanca, Morocco the idea of MEGASOFT was born.</h1>

        </div>

    </div>


// There was two childhood friends, Mohammed and Said. <br /> Said, Who spent his days inspiring students to think beyond textbooks. Mohammed, the problem-solver a Brilliant software developer. 

        // <div className="mt-10 w-full flex  h-[400px] overflow-hidden">
        //   {
        //     [...Array(25)].map((_,i) => (<div key={i} className=' w-[5vw] grid grid-cols-1  h-full'>{delays.map((_,i)=> (<motion.div   key={i} className='bg-orangee  w-f}ull'></motion.div>))}
        //     </div>))
        //   }

        // </div>
    // <div className='w-full h-auto grid grid-cols-2 pb-[100px] pt-[70px] gap-10'>
    //     <p className='text-[110px] font-bold flex flex-col leading-[.95]'>build<span className=' text-[35px] tracking-wide text-white/90 w-max bg-orangee px-2'>we are</span>  <span className='text-white font-novea drop-shadow-[1px_1px_1px_orange]'>MEGASOFT</span></p>
    //     <p className='text-[110px] relative top-[90px] font-bold flex flex-col leading-[.95]'><span className=' text-[35px] tracking-wide text-white/90 w-max bg-orangee px-2'>we are</span>  <span className=' num font-novea   relative drop-shadow-[1px_1px_0px_orange]'>MOROCCAN</span></p>
    // </div>
  )
}

export default Head
