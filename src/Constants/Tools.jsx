import React,{useState} from 'react'
import { icoons, icoons2, icoons3, icoons4 } from './main'
import { set } from 'date-fns/set'
import {motion} from 'framer-motion'
import icoon from '../Collection/3D App Icon Mockup.png'





    
const Tools = (index) => {
        
       
  return (
    <div className='w-full h-full flex-col gap-4 flex flex-center scale-110'>
        {/* <div className="size-[150px] rounded-full bg-transparent absolute inset-0 border-[.2px] opacity-40 border-white/30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        // <div className="size-[250px] rounded-full bg-transparent absolute inset-0 border-[.2px] border-white/30 opacity-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}
        <div className="size-[150px] rounded-full bg-transparent absolute blur-[100px] inset-0 bg-gradient-to-tr from-[#00f2ff] to-[#ff8a00]/30 opacity-60  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="size-[250px] rounded-full bg-transparent absolute blur-[200px] inset-0 bg-gradient-to-tr from-[#ff8a00]/30 to-[#6fccfd] opacity-50  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <motion.img animate={{y: -4}} transition={{duration: .8,ease: 'easeInOut', type: 'twin', delay: .8,  repeat: Infinity, repeatType: 'mirror'}} src={icoon} className='w-[80px] relative top-2' alt="" />
        <div className=" flex gap-7 items-center">
            {
                icoons.map((icoon, index) => {
                    const {name, icon} = icoon
                    return (
                        <motion.div animate={{y: -4}} transition={{duration: .8,ease: 'easeInOut', type: 'twin', delay: index * .8,  repeat: Infinity, repeatType: 'mirror'}} key={index} className={ `icons flex flex-col items-center gap-2 relative even:-top-4`}>
                            <img  src={icon}  className={` w-[34px] cursor-pointer h-[34px]  object-contain`} alt="" />
                            {/* <p className='namee opacity-0 text-[12px] font-semibold absolute -top-5  text-nowrap'>{name}</p> */}
                        </motion.div>
                    )})
            }
        </div>
        <div className="flex gap-7 items-center">
            {
                icoons2.map((icoon, index) => {
                    const {name, icon, img} = icoon
                    return (
                        <motion.div animate={{y: -4}} transition={{duration: .8,ease: 'easeInOut', type: 'twin', delay: index * .8,  repeat: Infinity, repeatType: 'mirror'}} key={index} className={ `icons cursor-pointer flex odd:top-4 flex-col items-center gap-2 relative `}>
                            {icon && icon}
                            {img ? <img  src={img}  className={` w-[28px] cursor-pointer h-[28px]  object-contain`} alt="" /> : null}
                            <p className='namee opacity-0 text-[12px] font-semibold absolute -top-5  text-nowrap'>{name}</p>
                        </motion.div>
                    )})
            }
        </div>
        <div className="flex gap-7 items-center relative top-2">
            {
                icoons3.map((icoon, index) => {
                    const {name, icon, img} = icoon
                    return (
                        <motion.div animate={{y: -4}} transition={{duration: .8,ease: 'easeInOut', type: 'twin', delay: index * .8,  repeat: Infinity, repeatType: 'mirror'}} key={index} className={ `icons cursor-pointer flex even:top-4 flex-col items-center gap-2 relative `}>
                            {icon && icon}
                            {img ? <img  src={img}  className={` w-[28px] cursor-pointer h-[28px]  object-contain`} alt="" /> : null}
                            <p className='namee opacity-0 text-[12px] font-semibold absolute -top-5  text-nowrap'>{name}</p>
                        </motion.div>
                    )})
            }
        </div>
        <div className="flex gap-7 items-center relative top-2">
            {
                icoons4.map((icoon, index) => {
                    const {name, icon, img} = icoon
                    return (
                        <motion.div animate={{y: -4}} transition={{duration: .8,ease: 'easeInOut', type: 'twin', delay: .8,  repeat: Infinity, repeatType: 'mirror'}} key={index} className={ `icons cursor-pointer flex even:top-4 flex-col items-center gap-2 relative `}>
                            {/* {icon && icon} */}
                            {icon ? <img  src={icon}  className={` w-[28px] cursor-pointer h-[28px]  object-contain`} alt="" /> : null}
                            <p className='namee opacity-0 text-[12px] font-semibold absolute -top-5  text-nowrap'>{name}</p>
                        </motion.div>
                    )})
            }
        </div>
    </div>
  )
}

export default Tools
