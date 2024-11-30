import React from 'react'
import {motion} from 'framer-motion'
import Avatar from '../Assets/Avatar2.png'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaThreads } from "react-icons/fa6";


const Drag3 = () => {
    const links = [<FaInstagram/>, <FaFacebook/>, <FaTwitter/>, <FaYoutube/>, <FaThreads/>]
  return (
    <div className='relative lg:md:flex hidden'>
      <motion.div disabled drag  whileDrag={{borderColor: '#ff8a00'}} className='w-[370px] gap-5 h-auto p-4 cursor-grab top-[350px] absolute left-[00px] bg-[rgb(17,17,17, .2)] backdrop-blur-[10px] px-3 rounded-md border-[.2px] flex flex-col z-20  border-orange-500/30 select-none'>
      <div className="w-full h-full  absolute top-0 left-0 bg-transparent"></div>
      {/* <p className='text-[18px] bg-[#111] px-5 py-1 font-medium text-orange-500 absolute -top-[36px] left-1/2  -translate-x-1/2'>Design</p> */}
          <div className="w-2 h-2 absolute -left-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -left-1 -bottom-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -bottom-1 bg-white"></div>
         {/* <p>Digital Marketing</p> */}
        <img src={Avatar} className='brand rounded-md mt-2' alt="" />
        
        <div className="flex gap-4 justify-center left-1/2 -translate-x-1/2 absolute bottom-2 ">
            {
                links.map((link, index) => (
                    <div className="flex items-center gap-5" key={index}>
                        <p className='text-[15px] '>{link}</p>
                    </div>
                ))
            }
        </div>
          
      </motion.div>

      


    </div>
  )
}

export default Drag3
