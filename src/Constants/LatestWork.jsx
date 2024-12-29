import React from 'react'
import { Latest } from './main'
import { div } from 'framer-motion/client'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineArrowRightAlt } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const LatestWork = () => {

    useGSAP(() => {
        gsap.from('.box', { scrollTrigger: { trigger: '.box', start: 'top bottom', end: 'bottom center', smooth: true, scrub: true }, opacity: 0, ease: 'circ.inOut', y: 20, stagger: {amount: .2}, delay: .1 });
    })

  return (
    <div className='w-full bg-gradient-to-b from-[rgb(0,0,0,.1)] to-transparent backdrop-blur-[10px] '>

        <div className=' py-6 pt-7 flex flex-col gap-4 mt-[100px] px-4 md:lg:px-5 mx-auto w-full '>
            <div className="flex w-full items-center justify-between">
                <p className='text-white text-[35px] items-center flex gap-1 duration-[.3s] ease-in-out w-fit cursor-pointer hover:text-orangee font-bold pb-3 hover'><span className='bg-orangee w-8 h-[2px]'> </span>Our Latest Work</p>
                {/* <Link to='/ourWork/' className='text-orangee font-semibold pr-1 flex items-center gap-3'>See ALL <FaArrowRightLong className='text-[16px]' /></Link> */}
            </div>
            <div className="grid w-full lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
            {
                    Latest.map((item, i) => {
                        const {date, name, desc, src} = item

                        return (
                            <div className='box flex relative'>
                                <div className="late flex flex-col relative">
                                    <img className='object-cover w-full h-full' src={src} alt="" />
                                    <h5 className='absolute top-1 left-1 text-orangee font-bold text-[12px] bg-[rgb(17,17,17,.2)] backdrop-blur-[30px] py-1 px-2 rounded-full'>{desc}</h5>
                                    <p className='text-white flex items-center gap-2 pt-2 font-bold text-[17px] tracking-[.5px]'>{name}<MdOutlineArrowRightAlt className='border-orange-500/40 text-orangee rounded-[10px] w-8 border-[.5px]'/></p>
                                    <h6 className='font-semibold text-white/60 text-[14px] relative -top-[2px]'>{date}</h6>
                                </div>
                            </div>
                        )
                    })
            }
            </div>
        </div>
    </div>
  )
}

export default LatestWork
