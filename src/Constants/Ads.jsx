import React, { useState } from 'react'
import logo2 from '../Assets/newColor.svg'
import { Link } from 'react-router-dom'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { RiArrowUpDoubleFill } from 'react-icons/ri';
import img1 from '../Logos/ab3909fbc7bdfe1edd352124948aaf1c.jpg'
import img2 from '../Assets/services/Mockup-megaWeb.png'
import img3 from '../Logos/8853c6053e0bc1b012f6e4dc0e39250d.jpg'
import img4 from '../Assets/Team.jpeg'
import img5 from '../Assets/Work/Free Business Cards on Chair Mockup.jpg'
const Ads = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='relative  w-full h-full '>
        <div className="w-full absolute  opacity-65">

        <div className="h-[300px] -rotate-45 w-[50px] z-[-5]  absolute left-[200px] blur-[40px] top-5 bg-red-500 rounded-full"></div>
        <div className="h-[300px] -rotate-45 w-[50px] z-[-5]  absolute left-[300px] blur-[40px] top-5 bg-blue-500 rounded-full"></div>
        </div>
        <div className='w-full z-[1]  grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 relative h-auto '>
           


            <div className="flex gap-4 flex-col p-[20px_20px] col-span-1.5 lg:max-w-[95%] md:max-w-[85%]">
                <div className=' flex items-center  relative   w-full px-1'>
                    <div className="w-[9px] h-[9px] border-[.2px] border-orangee rounded-full"></div>
                    <div className="w-[20%] h-[.5px] bg-orangee "></div>
                    <img src={logo2} className='w-[150px] border-[.5px] border-orangeLight px-2 py-1 rounded-full' loading='lazy' alt="MEGASOFT" />
                    <div className="w-[50%] h-[.5px] bg-orangee "></div>
                    <div className="w-[8px] h-[8px] bg-orangee rounded-full"></div>
                </div>

                <div className="flex flex-col gap-2  p-1">
                    <p className='text-white drop-shadow-[1px_1px_2px_rgb(255,255,255,.5)] text-[35px] font-bold pt-2'>We’re not your average tech partner.</p>
                    <h4 className='font-semibold    text-[14.5px]'>we take the time to learn about your specific needs and deliver tailored and affordable solutions that take your business further. </h4>
                    
                    <div className="flex gap-2 items-center pt-7 flex-wrap">
                        <h6 className='font-bold text-orangee p-[2px_10px] bg-orange-600/10 rounded-[15px]  text-[13.5px]'>Visual Identity & Branding</h6>
                        <h6 className='font-bold text-orangee p-[2px_10px] bg-orange-600/10 rounded-[15px]  text-[13.5px]'>Web & App Design</h6>
                        <h6 className='font-bold text-orangee p-[2px_10px] bg-orange-600/10 rounded-[15px]  text-[13.5px]'>Marketing & Advertising</h6>
                        <h6 className='text-orangeLight font-bold text-[13.5px]'>& more</h6>
                    </div>

                    <Link className=' flex items-center gap-4  mt-5 w-max text-white font-bold text-[18px] p-[1px_10px] '>Le's Get To Business <MdOutlineArrowRightAlt className='border-orange-500/40 text-orangee rounded-[10px] w-8 border-[.5px]'/></Link>
                </div>


                
            </div>

            <div className="w-full grid grid-cols-3 gap-4">
                <div className='flex flex-col gap-4 justify-end'>
                    <img src={img1} className='w-full h-[200px] object-cover rounded-[40px]' loading='lazy' alt="" />
                    {/* <img src={img5} className='w-full h-[200px] object-cover rounded-[40px]' loading='lazy' alt="" /> */}

                </div>
                <img src={img2} className='w-full h-full object-cover rounded-[40px]' loading='lazy' alt="" />
                <div className='flex flex-col gap-4 '>
                    {/* <img src={img4} className='w-full h-[200px] object-cover rounded-[40px]' loading='lazy' alt="" /> */}
                    <img src={img3} className='w-full h-[200px] object-cover rounded-[40px] shadow-[5px_5px_20px_rgb(0,0,0,.5)]' loading='lazy' alt="" />

                </div>
            </div>
            
            
        </div>
                
    </div>
  )
}

export default Ads






// {/* <p className='font-semibold text-white/90 text-[17.5px] pr-2'>Brand</p>
//                 {/* <div className="w-[7px] h-[7px]  bg-white/80 rounded-full"></div> */}
//                 <MdOutlineArrowRightAlt className='-rotate-[180deg] text-[21px]' />
//                 <div className="w-full h-[.2px] border-dashed opacity-20 border-white/80 border-[.5px] bg-transparent "></div>
//                 <MdOutlineArrowRightAlt className=' text-[21px]' />
//                 {/* <div className="w-[7px] h-[7px]  bg-white/80 rounded-full"></div> */}
//                 <p className='font-semibold text-white/90 text-[17.5px] pl-2'>Product</p>

//                 <div className="size-[200px] border-[.5px] rounded-full  border-white/90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
//                 <div className="size-[350px] border-[.5px] rounded-full  border-white/90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}
