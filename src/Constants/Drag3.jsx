import React from 'react'
import {motion} from 'framer-motion'

import img from '../Assets/services/Mockup-megaWeb.png'



const Drag3 = () => {
    
  return (
    <div className='relative  lg:md:flex hidden'>
      
      <motion.div disabled drag  whileDrag={{borderColor: '#ff8a00'}} className='w-[370px] gap-5 h-auto p-2 cursor-grab top-[335px] absolute left-[25px] bg-[rgb(17,17,17, .2)] backdrop-blur-[10px] px-3 rounded-md border-[.2px] flex flex-col z-20  border-orange-500/30 select-none'>
      <div className="w-full h-full  absolute top-0 left-0 bg-transparent"></div>
      
          <div className="w-2 h-2 absolute -left-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -left-1 -bottom-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -bottom-1 bg-white"></div>
         
        <img src={img} className='brand blur-[0px] h-[300px] object-cover mt-2' alt="" />
        
       
          
      </motion.div>

      


    </div>
  )
}

export default Drag3
