import React, {useState} from 'react'
import { FaA, FaArrowRightLong, FaStar} from 'react-icons/fa6'

// import { FaQ } from 'react-icons/fa6';
import {Questions} from '../Constants/main'
import { desc, p } from 'framer-motion/client';

const FAQ = () => {
    // const [faq, setFaq] = useState(false);
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }

     
  return (
    <div className='w-full grid grid-cols-1 lg:md:sm:px-4 py-4'>
        <p className='text-white text-[35px] font-bold pb-5 hover:text-orangee cursor-pointer'><span className='text-orangee'>* </span>FAQ <span className='font-medium text-[20px] text-green-400'>frequently asked questions</span></p>
        
        <div className="w-full gap-x-3 grid grid-cols-1 lg:md:grid-cols-2">

            {
            
                Questions.map((items, i) => {
                    const {title, desc} = items
                    return (
                        <>

                            <div key={i} className="flex flex-col w-full  py-2">
                                <button onClick={() => toggle(i)} className='flex justify-between items-center bg-[rgb(17,17,17,.6)] hover:text-orangee text-white font-semibold w-full py-3 px-3  lg:md:sm:px-4 rounded-sm duration-300 ease-in-out'>
                                    <span className='text-[14.5px] lg:md:text-[16px] max-w-[265px] truncate sm:text-[15.5px] sm:max-w-[500px] lg:md:sm:no-wrap lg:md:sm:max-w-full'><span className='text-green-500'>* </span>{title}</span>
                                    <svg className='fill-orangee' xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                    <rect y= '7' width="16" height="2" rx="1" className={`transform origin-center  transition duration-200 ease-out ${selected === i && "!rotate-180"}`} />
                                    <rect y= '7' width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                    selected === i && "!rotate-180"  }`}/>
                            
                                    </svg>
                                </button>
                                <div style={{transition: '.4s ease'}} className={`w-full relative lg:md:max-w-[600px] py-5 px-5  overflow-hidden flex gap-2 ${
                                    selected === i ? 'flex opacity-100 ' : ' opacity-0 hidden'
                                }`}>
                                    <FaArrowRightLong className='text-orangee text-[15px] mt-1 absolute left-1' />
                                    <p className='font-medium pl-2 text-[15px] lg:md:sm:text-[16px]'> {desc}{items.link}</p>
                                </div>
                                
                            </div>
                        
                        </>
                    )
                })
            }

           
        </div>
    </div>
  )
}

export default FAQ
