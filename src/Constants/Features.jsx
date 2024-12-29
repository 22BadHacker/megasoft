import React from 'react'
import {feaut} from './main'

// import texture from '../Assets/bright-light-black-background-min.jpg'

const Features = () => {
  return (
    <div className='pt-[100px] w-full  '>
      <p className='text-white text-[35px] col-span-2 items-center flex gap-1  duration-[.3s] h-max ease-in-out w-fit cursor-pointer hover:text-orangee font-bold pb-7 hover'><span className='bg-orangee w-8 h-[2px]'> </span>Our Key Features</p>

      <div className="w-full h-auto lg:grid-cols-4 grid md:grid-cols-3 grid-cols-2  gap-0  ">
          {
            feaut.map((item, i) => {
              const {icon, name, desc} = item
              return (
                <div className="flex w-full hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:scale-[1.02] ease-in-out duration-[.25s] cursor-pointer overflow-hidden z-[1] flex-col h-[310px]   justify-between bg-gradient-to-br relative from-[rgb(0,0,0,.1)] to-[rgb(0,0,0,.35)] p-[10px_12px] backdrop-blur-[10px]">
                    <span className='absolute z-[-5] top-8 left-1/2 -translate-x-1/2 w-[50px] rounded-full blur-[40px] opacity-90 h-[50px] bg-orangee'></span>
                    <span className='absolute z-[-5] top-0 left-1/2 shadow-[0px_10px_20px_0px_rgba(0,0,0,.5)] -translate-x-1/2 w-[50px] rounded-full blur-[0px] h-[4px] bg-gradient-to-t from-transparent to-orangee'></span>
                    <div className="w-full h-full backdrop-blur-[50px] z-[-1] top-0 left-0 bg-transparent absolute blur-[40px]"></div>
                    <span className='w-full items-right flex'>{icon}</span>
                    <div className="flex flex-col gap-1">
                        <p className={`text-white drop-shadow-[0px_0px_6px_rgba(255,255,255,.5)] ${i === 1 ? 'second leading-normal' : ''} sm:text-[35px] text-[22px] duration-[.2s] ease-in-out w-fit cursor-pointer  font-bold pb-3 `}>{name}</p>
                        <h6 className='font-medium opacity-85 text-[12px]'>{desc}</h6>
                    </div>
                </div>

                
                
              )
            })
          }

      </div>
      

    </div>
  )
}

export default Features
