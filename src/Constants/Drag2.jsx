import React from 'react'
import {motion} from 'framer-motion'
import Avatar from '../Assets/Avatar.webp'
import { IoIosSend } from "react-icons/io";
// import gif from '../Collection/1e2c04d4a5d9fe2b4c58b08d7dbf370e.webp'

const Drag2 = () => {
  return (
    <div className='relative lg:md:flex hidden '>
      <motion.div disabled drag  whileDrag={{borderColor: '#ff8a00'}} className='w-[370px]  gap-5 h-auto p-4 cursor-grab -top-[26px] absolute left-[50px] bg-[rgb(17,17,17, .2)] backdrop-blur-[10px] px-3 rounded-md border-[.2px] flex flex-col z-20  border-orange-500/30 select-none'>
      {/* <img src={gif} alt="" className="absolute blur-[10px] -z-[1] right-0 w-full h-[317px]  top-0 object-cover" /> */}
      <div className="w-full h-full  absolute top-0 left-0 bg-transparent"></div>
     
          <div className="w-2 h-2 absolute -left-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -top-1 bg-white"></div>
          <div className="w-2 h-2 absolute -left-1 -bottom-1 bg-white"></div>
          <div className="w-2 h-2 absolute -right-1 -bottom-1 bg-white"></div>
         
        <div className="flex relative items-center gap-3 w-full">
            <img src={Avatar} className='w-[45px] h-[45px] object-cover rounded-full' alt="" />
            <div className="flex- flex-col gap-1">
                <p className='text-[12.5px]'>Sofia Mandes</p>
                <p className='text-[12px] text-white/50'>SofiaM@example.com</p>
            </div>

            <p className='absolute right-0 text-[18px] w-[35px] h-[35px] flex items-center justify-center rounded-full border-[.8px] py-1 border-white/50'>+</p>
        </div>

        <p className='px-2 text-[13px] text-white/85 bg-gray-200/10  py-1 w-fit rounded-[1px_6px_6px_6px] mt-1 ml-1'>Hi, how can I help you today?</p>
        <p className='px-2 text-[13px] relative left-[90px]  bg-gray-200/5  text-white/85 py-1 w-fit rounded-[6px_6px_1px_6px] ml-1'>Hey, I'm Having Trouble with my account</p>
        <p className='px-2 text-[13px] text-white/85 bg-gray-200/10  py-1 w-fit rounded-[1px_6px_6px_6px] ml-1'>What seems to be the problem?</p>
        <p className='px-2 text-[13px] relative left-[250px]  bg-gray-200/5  text-white/85 py-1 w-fit rounded-[6px_6px_1px_6px] ml-1'>I can't log in.</p>

       <div className="flex gap-2 items-center">
       <input type="text" className='bg-transparent text-[12.5px] w-[85%] border-[.5px] border-white/20 px-2 py-1 rounded-md' placeholder='Type your nessage...'/>
       <IoIosSend className='p-[2px] rounded-md bg-[rgb(68,68,68,.4)] w-[28px] h-[28px] flex items-center justify-center  text-white/80'/>
       </div>
        

          
      </motion.div>

      


    </div>
  )
}

export default Drag2
