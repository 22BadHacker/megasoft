import React from 'react'
import flora from '../Assets/Logos/flora.svg'
import pro from '../Assets/Logos/Artboard 8.png'
import pro2 from '../Assets/Logos/Artboard 4.png'

import {motion} from 'framer-motion'
import { FaBars, FaSearch, FaShoppingBag } from 'react-icons/fa'

const Bank = () => {
  return (
    <motion.div disabled drag  whileDrag={{borderColor: 'yellow'}} className=' w-[280px] h-[460px] cursor-grab  absolute right-0 bg-[#111] px-3 rounded-md border-[.2px] flex flex-col z-20  border-orange-500/30 select-none'>
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

        <img src={pro} className=' pt-1 select-none' alt="" />
        <img src={pro2} className='pt-4 select-none' alt="" />
    </motion.div>
  )
}

export default Bank
