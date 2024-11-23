import React from 'react'
import flora from '../Assets/Logos/flora.svg'
import pro from '../Assets/Logos/Artboard 8.png'
import pro2 from '../Assets/Logos/Artboard 4.png'
import pro3 from '../Assets/Logos/Artboard 16.svg'

import {motion} from 'framer-motion'
import { FaBars, FaSearch, FaShoppingBag } from 'react-icons/fa'

const Drag = () => {
  return (
    <div className='relative lg:md:flex hidden'>
      <motion.div disabled drag  whileDrag={{borderColor: 'yellow'}} className='w-[280px] h-[460px] cursor-grab  absolute right-5 bg-[#111] px-3 rounded-md border-[.2px] flex flex-col z-20  border-orange-500/30 select-none'>
      <p className='text-[18px] bg-[#111] px-5 py-1 font-medium text-orange-500 absolute -top-[36px] left-1/2  -translate-x-1/2'>UX Design</p>
          <div className="w-2 h-2 absolute -left-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -left-1 -bottom-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -bottom-1 bg-white"></div>
          <nav className="w-full flex justify-between items-center py-0 select-none;">
              <img src= {flora} className='w-[110px]  relative -left-[6px]' alt="" />
              <div className="flex gap-3 items-center select-none">
                  <FaSearch className='text-[14px]'/>
                  <FaShoppingBag className='text-[14px]'/>
                  <FaBars className='text-[14px]'/>
              </div>
              
          </nav>

          <img src={pro} className='pt-1 select-none' alt="" />
          <img src={pro2} className='pt-4 select-none' alt="" />

          
      </motion.div>

      {/* <div className='flex flex-col items-center justify-center bg-[#111] pb-4'>
      <p className='text-[18px] bg-[#111] px-5 py-1 font-medium text-orange-500 absolute -top-[36px] left-1/2  -translate-x-1/2'>Logo Design</p>
      <img src={pro3} className='w-[200px]' alt="" />
      </div> */}


    </div>
  )
}

export default Drag
