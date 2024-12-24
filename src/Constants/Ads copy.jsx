import React from 'react'
import logo2 from '../Assets/newColor.svg'
import { Link } from 'react-router-dom'
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Ads = () => {
  return (
    <div className='relative'>
        <div className="size-[100px] z-[-5]  absolute left-[200px] blur-[40px] top-20 bg-red-500 rounded-full"></div>
        <div className='w-full z-[1] bg-gradient-to-r from-[rgb(17,17,17,.3)] to-[rgb(0,0,0,.3)] backdrop-blur-[20px] grid grid-cols-[1.5fr_1fr_1fr] relative h-auto '>
            {/* {
                [...Array(6)].map((item, i) => {
                    return (
                        <div className={`circle size-[10px] absolute first:-left-[4px]   first:-top-[4px] last:-bottom-[4px] last:-left-[4px]  rounded-full bg-orangee`}></div>
                    )
                })
            } */}


            <div className="flex gap-4 flex-col p-[20px_20px] col-span-1.5">
                <div className='gradient flex   relative h-max w-max   p-2 rounded-md'>
                    <img src={logo2} className='w-[220px] ' loading='lazy' alt="MEGASOFT" />
                </div>

                <div className="flex flex-col gap-2  p-1">
                    <p className='text-white drop-shadow-[1px_1px_2px_rgb(255,255,255,.5)] text-[26px] font-bold pt-2'>Seeking a Full Suite of Services?</p>
                    <h4 className='font-semibold    text-[14.5px]'>Why settle for less when you can have it all? Explore our full suite of services today! </h4>
                    <div className="flex gap-2 items-center pt-7">
                        <h6 className='font-bold text-orangee p-[2px_10px] bg-orange-600/10 rounded-[15px]  text-[13.5px]'>Visual Identity & Branding</h6>
                        <h6 className='font-bold text-orangee p-[2px_10px] bg-orange-600/10 rounded-[15px]  text-[13.5px]'>Web & App Design</h6>
                        <h6 className='font-bold text-orangee p-[2px_10px] bg-orange-600/10 rounded-[15px]  text-[13.5px]'>Marketing & Advertising</h6>
                        <h6 className='text-orangeLight font-bold text-[13.5px]'>& more</h6>
                    </div>

                    <Link className=' flex items-center gap-4  mt-5 w-max text-white font-bold text-[18px] p-[1px_10px] '>Browse Services <MdOutlineArrowRightAlt className='border-orange-500/40 text-orangee rounded-[10px] w-8 border-[.5px]'/></Link>
                </div>
                {/* <h5 className='text-bold  text-white/80 pt-2 text-[18px]'>Great things start here, where your ideas meet expert guidance and endless possibilities. Let’s collaborate to bring your vision to life with creativity, innovation, and unwavering support – because your success story deserves to begin today.</h5> */}
                {/* <h5 className='text-bold  text-white/80 pt-2 text-[18px]'>Helps You To Start Growing Your Business, With Expert Guidance And Endless Possibilities, </h5> */}
                {/* <p className='text-white text-[18px] font-bold pt-2'>Great things start here. Let’s collaborate to bring your vision to life.</p> */}
                {/* <div className="w-full h-full absolute top-0 left-0 bg-[17,17,17,.5] blur-[100px] backdrop-blur-[20px]"></div> */}
            </div>
            
        </div>
    </div>
  )
}

export default Ads
// backdrop-blur-[100px]
// bg-[rgb(17,17,17,.5)]
