import React from 'react'
import {motion} from 'framer-motion'
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

const Drag5 = ({name, img, email}) => {
  return (
    
    <div className='relative left-[200px] flex '>
      <motion.div disabled drag  whileDrag={{borderColor: '#ff8a00'}} className='w-[370px] gap-2 h-auto p-4 cursor-grab  bg-[rgb(17,17,17, .2)] backdrop-blur-[10px] px-3 rounded-md border-[.2px] flex flex-col z-20  border-orange-500/30 select-none'>
      <div className="w-full h-full  absolute top-0 left-0 bg-transparent"></div>
      {/* <p className='text-[18px] bg-[#111] px-5 py-1 font-medium text-orange-500 absolute -top-[36px] left-1/2  -translate-x-1/2'>Design</p> */}
          <div className="w-2 h-2 absolute -left-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -left-1 -bottom-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -bottom-1 bg-white"></div>
         
        <div className="flex relative items-center gap-3 w-full">
            <img src={img} className='w-[45px] bg-white/5 backdrop-blur-[20px] h-[45px] object-cover rounded-full' alt="" />
            <div className="flex- flex-col gap-1">
                <p className='text-[12.5px] font-semibold'>{name}</p>
                <p className='text-[12px] text-white/50'>{email}</p>
            </div>

            <p className='absolute right-0 text-[18px] w-[35px] h-[35px] flex items-center justify-center rounded-full border-[.8px] py-1 border-white/50'>+</p>
        </div>
        <div className="flex gap-2 items-center  left-[52px] relative ">
            <BsFillTelephoneFill className='text-white/50 text-[13px]'/>
            <p className='text-[12.5px] text-white/50 relative top-[1px]'>+212 697-889-032</p>
        </div>
        <div className="flex gap-2 items-center relative left-[52px]">
            <ImLocation2 className='text-white/50 text-[14px]'/>
            <p className='text-[12.5px] text-white/50 relative top-[1px] max-w-[220px]'>Rue 14 Amal 2 Imm 2 Etage 2 Bureau N°4 Sidi Bernousi, CASABLANCA</p>
        </div>
        </motion.div>
    </div>
  )
}

export default Drag5
