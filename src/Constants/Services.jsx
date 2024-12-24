import React from 'react'
import {ServecesList} from './main'
import { Link } from 'react-router-dom'
import img1 from '../Collection/dc7d11d0f79b03ddfba835927b5abc4c.webp'
import img2 from '../Collection/e986d04cc3612e019417c773abc2d2fd.webp'
// import img3 from '../Collection/32c3b079c713e90d8088434c5ac7020b.webp'
// import img3 from '../Collection/acdb4c0e97c2ccb0c021657b3022f336.webp'
import img3 from '../Collection/1c9322cb0c2b18c52c9ac4fcb7a9fdbd.webp'
// import img3 from '../Collection/fa05dc2f8900a904a094df4b65c27dd2.webp'
import img4 from '../Collection/da71bccc03313f65ba9005d96b373d69.webp'
// import img5 from '../Collection/07132d4e6bb25b40faba9e6ec00c6d9e.webp'
import img5 from '../Collection/12791db66d76aff8329a5f03f4fa9e0e.webp'
import img6 from '../Collection/e56afcff0ecbd85e0909a6a551c9dd69.webp'
import img7 from '../Collection/f2a14bdfc9a0c796fa46cad6d3805f9e.webp' 
import img8 from '../Collection/92812684a58b0e8b0cdccfbefaf94630.webp'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    useGSAP(() => {
        const tl = gsap.timeline({})
        tl.from('.img1', { scrollTrigger: { trigger: '.img1', start: 'top bottom', end: 'bottom center', smooth: true, scrub: true }, opacity: 0, ease: 'circ.inOut', y: 20, delay: .2, duration: .2 });
        tl.from('.img2', { scrollTrigger: { trigger: '.img2', start: 'top bottom', end: 'bottom center', smooth: true, scrub: true }, opacity: 0, ease: 'circ.inOut', y: 30, delay: .6, duration: .6 });
        tl.from('.img3', { scrollTrigger: { trigger: '.img3', start: 'top bottom', end: 'bottom center', smooth: true, scrub: true }, opacity: 0, ease: 'circ.inOut', y: 40, delay: .8, duration: .8 });
    })
  return (
    <div className='py-6 z-[1] relative overflow-hidden pt-7 flex flex-col gap-4 mt-[100px] px-4 md:lg:px-0  w-full '>
        {/* <img src={img4} className='w-full mix-blend-screen object-cover -z-[1] h-auto fixed top-0 left-0 ' alt="" /> */}
        <p className='text-white flex gap-1 items-center text-[35px] duration-[.3s] ease-in-out w-fit cursor-pointer hover:text-orangee font-bold pb-3 hover'><span className='bg-orangee w-8 h-[2px]'> </span>Our Services</p>

        <div className="box4 grid w-full h-auto grid-cols-1 lg:grid-cols-[1fr_.5fr] gap-5">
            <div className="w-full h-auto grid grid-cols-2 gap-5">
                <div className="img1 w-full h-full relative rounded-md overflow-hidden">
                    <img loading='lazy' src={img1} className=' w-full h-full object-cover' alt="" />
                    <p className='text-orangee text-[11px] sm:text-[14px] border-[.5px] border-orangee bg-gradient-to-r from-black/20 to-lime-200/20 shadow-lg backdrop-blur-[50px] px-3 py-1 rounded-full font-semibold absolute bottom-2 left-2'>Web Development</p>
                </div>
            <div className="img3 w-full h-auto overflow-hidden relative rounded-md">
                <img loading='lazy' src={img3} className=' object-cover saturate-200 h-full w-full' alt="" />
                <p className='text-orangee text-[14px] border-[.5px] border-orange-500/50 bg-transparent shadow-lg backdrop-blur-[10px] px-3 py-1 rounded-full font-semibold absolute bottom-2 left-2'>Graphic Design</p>
            </div>
               
            </div>
                <div className="img2 w-full h-full relative rounded-md overflow-hidden">
                    <img loading='lazy' src={img2} className=' w-full h-full object-cover' alt="" />
                    <p className='text-orangee text-[12px] sm:text-[14px] border-[.5px] border-orange-500/50 bg-transparent shadow-lg backdrop-blur-[80px] px-3 py-1 rounded-full font-semibold absolute bottom-2 left-2'>UX Design</p>
                </div>

        </div>

        <div className=" gap-5 grid-cols-2 lg:grid-cols-4 grid w-full h-auto">
            <div className="w-full h-full relative rounded-md overflow-hidden">
                <img loading='lazy' src={img7} className='w-full h-full object-cover' alt="" />
                <p className='text-orangee text-[12px] sm:text-[14px] border-[.5px] border-orange-500/50 bg-trasparent shadow-lg backdrop-blur-[50px] px-3 py-1 rounded-full font-semibold absolute bottom-2 left-2'>Project Mangment</p>
            </div>
            <div className="w-full h-full relative rounded-md overflow-hidden">
                <img loading='lazy' src={img5} className='w-full h-full object-cover' alt="" />
                <p className='text-orangee text-[12px] sm:text-[14px] border-[.5px] border-orange-500/50 bg-transparent shadow-lg backdrop-blur-[10px] px-3 py-1 rounded-full font-semibold absolute bottom-2 left-2'>Mobile Application</p>
            </div>
            <div className="w-full h-full relative rounded-md overflow-hidden">
                <img loading='lazy' src={img6} className='w-full h-full object-cover' alt="" />
                <p className='text-orangee text-[12px] sm:text-[14px] border-[.5px] border-orange-500/50 bg-transparent shadow-lg backdrop-blur-[10px] px-3 py-1 rounded-full font-semibold absolute bottom-2 left-2'>Digital Marketing</p>
            </div>
            <div className="w-full h-full relative rounded-md overflow-hidden">
                <img loading='lazy' src={img8} className='w-full h-full object-cover' alt="" />
                <p className='text-orangee text-[12px] sm:text-[14px] border-[.5px] border-orangee bg-gradient-to-r from-black/20 to-lime-200/20 shadow-lg backdrop-blur-[50px] px-3 py-1 rounded-full font-semibold absolute bottom-2 left-2'>Motion Graphics</p>
            </div>
        </div>
       
    </div>
  )
}

export default Services
