import React from 'react'
import { servicesSlider, slide2 } from './main'
import {motion} from 'framer-motion'

const End = () => {
  return (
    // <div className='w-full flex overflow-clip'>
    //     <div className="flex gap-5 items-center">
    //         {
    //             Array.from({length: 10}).map((_, index) => (
    //                 // <div key={index} className=" flex items-center gap-2 ">

    //                 // </div>
    //                 <>
    //                   <p>MEGASOFT</p>
    //                   <h4>Get In Touch</h4>
    //                 </>
    //             ))
    //         }
    //     </div>

    // </div>

    
            <section className="w-full pt-[55px] gap-4 flex flex-col justify-center items-center overflow-x-clip">
              <div className='overflow-hidden con w-full flex flex-col gap-10'>
                  <motion.div className='flex items-center gap-2 pr-24 md:gap-8 sm:gap-6 lg:gap-8 ' animate={{translateX: '-50%'}} transition={{duration: 15, repeat: Infinity, ease: 'linear', repeatType: 'mirror'}}>
                      {servicesSlider.map((item, i)=> {
                          // const rev = .reverse();
                          return (
                            <>
                              <a className='font-semibold px-6 py-2 text-[13px] lg:md:sm:text-[16px] text-nowrap bg-[rgb(17,17,17,.6)] rounded-full'>{item}</a>
                              <a className='lg:md:flex hidden font-semibold px-6 py-2 text-nowrap text-orange-500 rounded-full '>*</a>

                            
                            </>
                        )
                      })}
                  </motion.div>
              </div>
            </section>
  )
}

export default End
