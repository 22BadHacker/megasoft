import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Head = () => {
    const list = [
        'Mobile And Web Apps',
        'Graphic Design',
        'Digital Marketing',
        'UX|UI Design',
        'Cybersecurity',
        'Business Mangement',
    ]
  return (
    <>
        <div className="w-full grid grid-cols-2">
              <div className="flex flex-col gap-5">
                  <p className='text-white tracking-wide text-[18px] relative top-1  cursor-pointer sm:text-[16px] drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] h-fit font-medium flex items-center gap-2'>AREAS OF EXPERTISE</p>
                  <h5 className='max-w-[300px]  text-white/85'>Elevate your processes, engage your audience, and thrive in a competitive market with advanced solutions.</h5>
              </div>

              <div className="w-full grid grid-cols-1 gap-[14px]">
                    {
                        list.map((item, i) => (
                            <>
                                <div className="main flex items-center justify-between w-full hover:px-3 duration-200 ease-in-out cursor-pointer">
                                    <p className='text-white text-[40px] font-bold'>{item}</p>
                                    <div className="expert size-8 text-[20px] flex items-center justify-center bg-white text-orangee rounded-full"><GoArrowRight /></div>
                                </div>
                                <div className="w-full h-[.2px] bg-white opacity-20"></div>
                            </>
                        ))
                    }
              </div>
          </div>
      
    </>
  )
}

export default Head
