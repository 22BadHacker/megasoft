import React from 'react'
import logo from '../Assets/newColor.svg'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { socialLinks } from '../Constants/main';


const Footer = () => {
  return (
    <div className='footer z-1 relative  pt-[30px] px-8 w-screen overflow-hidden py-10  mx-auto bg-[rgba(0,0,0,.6)] sm:py-[60px]  md:lg:py-[60px] md:lg:px-[20px]  sm:px-8'>
        <div className='w-full gap-[60px] mx-auto max-w-[1500px] grid grid-cols-1 lg:md:gap-[150px] md:lg:grid-cols-[1fr,1fr]'>

            <div className="flex  sm:lg:md:max-w-[500px] gap-4 flex-col">
                <a href="">

                    <img className='w-[280px] ' src={logo} alt="logo" />
                </a>
                <p className='pb-[10px]  relative -top-[8px] text-[20px] font-medium'>Designing Your Digital Future, that Drive Success.</p>
                <h5 className='text-[16px] text-white/70 font-medium'>" We are a community of passionate designers and developers dedicated to crafting innovative, user-centered digital experiences "</h5>

                {/* <div className="flex flex-col">
                    <input id='prenom' type="text" placeholder='Your email *' name='first_name' className='bg-transparent  outline-none placeholder:font-medium placeholder:text-white/60 py-2 flex text-white  font-roboto font-semibold'  />
                    <div className="line h-[.1px] w-full  bg-white/40 relative"></div>                
                </div> */}

            </div>

            <div className="grid relative gap-8 md:lg:gap-8 grid-cols-2 sm:grid-cols-3 md:lg:grid-cols-3">
                <div className="foot flex flex-col gap-1">
                    <h1 className='pb-2 hover:text-white cursor-pointer text-[24px]  font-bold'>Explore</h1>
                    <p className=' text-[18px] text-white/70 font-medium'>Features</p>
                    <p className='text-[17px] text-white/70 font-medium'>Our Story</p>
                    <p className='text-[17px] text-white/70 font-medium'>Our Work</p>
                    <p className='text-[17px] text-white/70 font-medium'>Services</p>
                    <p className='text-[17px] text-white/70 font-medium'>Contact</p>
                </div>
                <div className="flex flex-col gap-1 foot">
                    <h1 className='hover:text-white cursor-pointer pb-2 text-[24px]  font-bold'>Services</h1>
                    <p className=' text-[17px] text-white/70 font-medium'>Web Design</p>
                    <p className='text-[17px] text-white/70 font-medium'>Graphic Design</p>
                    <p className='text-[17px] text-white/70 font-medium'>Digital Marketing</p>
                    <p className='text-[17px] text-white/70 font-medium'>Web Maintenance</p>
                    <p className='text-[17px] text-white/70 font-medium'>More....</p>
                </div>
                <div className="flex flex-col gap-1 foot">
                    <h1 className='hover:text-white cursor-pointer pb-2 text-[24px]  font-bold'>Society </h1>
                    <p className=' text-[17px] text-white/70 font-medium'>About</p>
                    <p className='text-[17px] text-white/70 font-medium'>Support</p>
                    <p className='text-[17px] text-white/70 font-medium'>Privacy policy</p>
                    <p className='text-[17px] text-white/70 font-medium'>Contact</p>
                </div>
                
            </div>

            
        </div>
        <div className=" mx-auto h-[.1px] max-w-[1500px] mt-[100px]  bg-slate-400/20"></div>

        <div className="w-full pt-5 gap-8 justify-between items-center  flex flex-col md:flex-row md:lg:sm:gap-0 mx-auto max-w-[1500px]  ">
            <p className='text-center'>Copyright © 2025 MEGASOFT corp. All rights reserved</p>
            <div className="flex gap-4 items-center ">
               {/* {socialLinks.map((item , index) => (<a href={item.link} key={index} className='text-white hover:text-[#FFC107] cursor-pointer text-[25px]'><item.icon /></a>))} */}

               {socialLinks.map((item , index) => (<a href={item.link} key={index} className='text-white  hover:text-orangee cursor-pointer text-[18px]'>{item.icon}</a>))}
            </div>
        </div>
    </div>
  )
}

export default Footer
