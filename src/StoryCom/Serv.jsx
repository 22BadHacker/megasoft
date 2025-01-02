import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { scrollToTop } from '../Constants/main';

const Serv = () => {
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
                     <Link onClick={scrollToTop} to='/services' className="moree flex text-white  items-center gap-4 mt-3 justify-center border-[.5px] py-3 rounded-full border-orangee w-[200px]">
                        <p  className='text-white font-semibold text-[17px] '>Explore More</p>
                        <FaArrowRightLong className='arrow text-[15px]'/>
                    </Link>
              </div>
          </div>
      
    </>
  )
}

export default Serv
