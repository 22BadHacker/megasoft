import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowUpDoubleFill } from "react-icons/ri";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const Fin = () => {
    const [open, setOpen] = useState(false)
    useGSAP(() => {
        gsap.from('.box3', { scrollTrigger: { trigger: '.box3', start: 'top bottom', end: 'bottom center', smooth: true, scrub: true }, opacity: 0,scale: 1.2, ease: 'power2.out', delay: .2 });
    })
     
  return (
    <div className='w-full flex-col pt-5 h-full justify-center flex items-center gap-5'>
        

        {/* <div className="flex gap-20 items-center">
            <div className="flex w-auto h-auto gap-8 items-center border-[.5px] border-white/50 px-10 py-2 rounded-md">
                <span className='flex items-center gap-1'>
                    <p className='text-[40px]'>20</p>
                    <div className="flex flex-col items-center">
                        <RiArrowUpDoubleFill className='text-red-500 text-[17px]'/>
                        <p>%</p>
                    </div>
                </span>
                <p className='text-[20px] font-semibold'>without MEGASOFT</p>
                <div onClick={() => setOpen(!open)} className='w-[50px]  border-[1px] relative h-[25px] rounded-full'>
                    <span onClick={() => setOpen(!open)} className={`rounded-full absolute left-[1.5px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-white ${open ? 'right-[1.5px]' : 'left-[1.5px]'}`}></span>
                </div>
            </div>
        </div> */}
        
        <div className="box3 flex flex-col justify-center items-center">
            <h5 className='text-orangee font-semibold'>Let's talk business</h5>
            <p className='text-[50px] font-semibold text-center leading-snug'>Let us engineer Your <br /> success, efficiency & growth</p>
            <Link className='border-[.5px] border-white/50 px-10 py-2 rounded-full text-[15px] font-semibold mt-7' to={'/contact'}>Contact us</Link>
        </div>

        
    </div>
  )
}

export default Fin
