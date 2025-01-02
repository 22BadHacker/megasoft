import React from 'react'
import {scrollToTop, story} from '../Constants/main'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div className='w-full h-auto relative flex flex-col '>
        <div className="flex flex-col gap-1 pb-[80px]">
            <h1 className='text-[50px] text-white font-semibold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]'>A few things we believe</h1>
            <p className='text-[19px] tracking-[.2px] font-semibold text-white/90 bg-orangee w-fit px-1 '>Our Values are the center of everything we do</p>
        </div> 

        <div className="w-full grid grid-cols-3 gap-[40px] ">
            {
                story.map((item, i)=> <div key={i} className="flex flex-col gap-5 w-full border-t-[.5px] border-white/30 py-8">
                {item.icon}
                <p className='text-[28px] drop-shadow-[1px_1px_10px_rgba(255,255,255,0.4)] font-semibold text-white relative top-1 tracking-[.5px]'>{item.title}</p>
                <h5 className='text-[18px] text-white/80'>{item.desc}</h5>
            </div>)
            }
        </div> 

        <div className="flex gap-6 items-center pt-10">
            <Link to='/contact' onClick={scrollToTop} className='moree text-white text-[16.5px] font-semibold border-[.5px] py-3 rounded-full border-orangee  px-5 rounded-[20px]'>Work With Us</Link>
            <Link to='/OurWork' onClick={scrollToTop} className='stack relative overflow-hidden duration-[250ms] ease-in-out text-orangee text-[16.5px] font-semibold border-[.5px] border-orangee py-3 px-5 rounded-full'>Explore Our Work</Link>
        </div>


    </div>
  )
}

export default First
