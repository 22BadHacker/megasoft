import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { DesignStack, WebStack } from '../Constants/main'

const Stack = () => {
  return (

    <>
        <div className="grid  w-full grid-cols-1 md:gap-0 gap-7 sm:gap-5 sm:grid-cols-[.5fr_1fr] pt-[100px]">
            <p className='text-white text-[18px]  cursor-pointer sm:text-[16px] drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] h-fit font-medium flex items-center gap-2'>WEB TECH STACK <MdOutlineArrowRightAlt className='border-orange-500/40 text-orangee rounded-[10px] w-8 border-[.5px]'/></p>
            <div className="flex w-full flex-wrap items-center gap-3">
                {
                    WebStack.map((item, index) => ( <p key={index} className='stack overflow-hidden relative w-fit h-fit sm:text-[18px] border-[.2px] border-white/30 border-opacity-70 text-white px-4 font-medium py-1 rounded-[20px]'>{item}</p> ))
                }
            </div>
        
        </div>


        <div className="grid  w-full grid-cols-1 md:gap-0 gap-7 sm:gap-5 sm:grid-cols-[.5fr_1fr] pt-[100px]">
            <p className='text-white text-[18px]  cursor-pointer sm:text-[16px] drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] h-fit font-medium flex items-center gap-2'>GRAPHIC DESIGN STACK <MdOutlineArrowRightAlt className='border-orange-500/40 text-orangee rounded-[10px] w-8 border-[.5px]'/></p>
            <div className="flex w-full flex-wrap items-center gap-3">
                {
                    DesignStack.map((item, index) => ( <p key={index} className='stack overflow-hidden relative w-fit h-fit sm:text-[18px] border-[.2px] border-white/30 border-opacity-70 text-white px-4 font-medium py-1 rounded-[20px]'>{item}</p> ))
                }
            </div>
        
        </div>
    </>
  )
}

export default Stack
