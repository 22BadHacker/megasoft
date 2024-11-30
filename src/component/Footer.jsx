import React from 'react'
import logo from '../Assets/newColor.svg'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { socialLinks } from '../Constants/main';


const Footer = () => {
  return (
    <div className='footer z-[2] relative h-auto bg-[rgb(17,17,17,.01)] backdrop-blur-[50px]   pt-[30px] px-8 w-screen overflow-hidden py-10  mx-auto  sm:py-[60px]  md:lg:py-[60px] md:lg:px-[20px]  sm:px-8'>
        {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_100%_at_80%_-20%,rgba(255,255,255,0),rgba(120,119,198,0.3))]"></div> */}
        <div className='w-full gap-[60px] mx-auto max-w-[1500px] grid grid-cols-1 lg:md:gap-[150px] md:lg:grid-cols-[1fr,1fr]'>

            <div className="flex sm:max-w-[800px]  sm:lg:md:max-w-[500px] gap-4 flex-col">
                <a href="">

                    <img className='w-[280px] ' src={logo} alt="logo" />
                </a>
                <p className='pb-[10px]  relative -top-[8px] text-[20px] font-medium'>Designing Your Digital Future, that Drive Success.</p>
                <h5 className='text-[15.5px] text-white/70 font-medium'>" We are a community of passionate designers and developers dedicated to crafting innovative, user-centered digital experiences "</h5>

                {/* <div className="flex flex-col">
                    <input id='prenom' type="text" placeholder='Your email *' name='first_name' className='bg-transparent  outline-none placeholder:font-medium placeholder:text-white/60 py-4 flex text-white  font-roboto font-semibold'  />
                    <div className="line h-[.1px] w-full  bg-white/40 relative"></div>                
                </div> */}

            <div className="grid grid-cols-2 gap-5 relative top-4 lg:md:top-10">
                <p className='siign lg:md:text-[35px] text-[30px]  sm:text-[30px] text-white/90 font-sign font-medium'>El Harti Mohammed</p>
                <p className='siign lg:md:text-[35px] text-[30px] sm:text-[30px] text-white/90 font-sign font-medium'>Ait Meryem Said</p>
            </div>

            </div>

            <div className="grid relative gap-8 md:lg:gap-8 grid-cols-2 sm:grid-cols-3 md:lg:grid-cols-3">
                <div className="foot flex flex-col gap-1">
                    <h1 className='pb-2 hover:text-white cursor-pointer text-[24px]  font-bold'>Explore</h1>
                    
                    {
                        ['Features', 'Our Story', 'Our Story', 'Services', 'Contact'].map((item)=> {
                            return (
                                <p className=' text-[17px] text-white/70 font-medium'>{item}</p>
                            )
                        })
                    }
                    
                </div>
                <div className="flex flex-col gap-1 foot">
                    <h1 className='hover:text-white cursor-pointer pb-2 text-[24px]  font-bold'>Services</h1>
                    {
                        ['Services', 'Web Design', 'Graphic Design', 'Digital Marketing', 'Web Maintenance', 'More ...'].map((item)=> {
                            return (
                                <p className=' text-[17px] text-white/70 font-medium'>{item}</p>
                            )
                        })
                    }
                </div>


                <div className="flex flex-col gap-1 foot">
                    <h1 className='hover:text-white cursor-pointer pb-2 text-[24px]  font-bold'>Society </h1>
                    {
                        ['About', 'Support', 'Privacy policy', 'Contact'].map((item)=> {
                            return (
                                <p className=' text-[17px] text-white/70 font-medium'>{item}</p>
                            )
                        })
                    }
                
                </div>
                
            </div>

            
        </div>
        <div className=" mx-auto h-[.1px] max-w-[1500px] mt-[100px]  bg-slate-400/20"></div>

        <div className="w-full pt-5 gap-8 justify-between items-center  flex flex-col md:flex-row md:lg:sm:gap-0 mx-auto max-w-[1500px]  ">
            <p className='text-center'>Copyright © 2025 MEGASOFT corp. All rights reserved</p>
           
            <div className="flex gap-4 items-center ">
               {socialLinks.map((item , index) => (<a href={item.link} key={index} className='text-white  hover:text-orangee cursor-pointer text-[18px]'>{item.icon}</a>))}
            </div>
        </div>
    </div>
  )
}

export default Footer
