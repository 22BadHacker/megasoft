import React from 'react'
import { Latest } from './main'
import { div } from 'framer-motion/client'

const LatestWork = () => {
  return (
    <div className='w-full bg-gradient-to-b from-[rgb(0,0,0,.1)] to-transparent backdrop-blur-[10px] '>

        <div className=' py-6 pt-7 flex flex-col gap-4 mt-[100px] px-4 md:lg:px-5 mx-auto w-full '>
            <p className='text-white text-[35px] duration-[.3s] ease-in-out w-fit cursor-pointer hover:text-orangee font-bold pb-3 hover'><span className='text-orangee'>* </span>Our Latest Work</p>
            <div className="grid w-full lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
            {
                    Latest.map((item, i) => {
                        const {date, name, desc, src} = item

                        return (
                            <div className='flex relative'>
                                <div className="late flex flex-col relative">
                                    <img className='object-cover w-full h-full' src={src} alt="" />
                                    <h5 className='absolute top-1 left-1 text-orangee font-bold text-[12px] bg-[rgb(17,17,17,.3)] backdrop-blur-5 py-1 px-2 rounded-full'>{desc}</h5>
                                    <p className='text-white pt-2 font-bold text-[17px] tracking-[.5px]'>{name}</p>
                                    <h6 className='font-semibold text-white/50 text-[14px] relative -top-[2px]'>{date}</h6>
                                </div>
                            </div>
                        )
                    })
            }
            </div>
        </div>
    </div>
  )
}

export default LatestWork
