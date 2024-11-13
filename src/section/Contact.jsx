import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import {animate, motion} from 'framer-motion'



const Contact = () => {


  return (

    
    <div className='contact h-screen pt-[30px] px-8 w-screen overflow-x-hidden overflow-y-scroll pb-10  mx-auto bg-black sm:pt-[120px] md:lg:pt-[60px] md:lg:px-[20px]  sm:px-8'>
        <div className='w-full mx-auto max-w-[1500px]'> 



        {/*Information section*/}
        <div className=' w-full  pb-1 flex text-wrap md:lg:pb-[70px] pt-[100px]'>
                {/* Head Title */}
                <h1  className='text-[12vw] pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[8.5vw] tracking-tight   lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Our Information</h1>               
        </div>

        <div className="grid text-wrap pb-20 w-full gap-2 lg:grid-cols-3 sm:grid-cols-2 lg:md:gap-9 md:grid-cols-3">
            <div className="flex text-wrap gap-1 flex-col lg:md:gap-7">
                <p className='text-white/90 pt-3   relative -top-[15px] text-nowrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px]'>Founders</p>
                <div className="flex gap-[2px] flex-col">
                    <p className='text-lightBlue/90 font-medium text-[16px] '>@Ait_Meryem_Said</p>
                    <p className='text-lightBlue/90 font-medium text-[16px] '>@El_Harti_Mohammed</p>
                    <p className='text-lightBlue/90 font-medium text-[16px] '>&Team</p>
                </div>
            </div>
            <div className="flex ] gap-1 flex-col lg:md:gap-7">
                <p className='text-white/90 pt-3  relative -top-[15px] text-nowrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px]'>Emails</p>
                <div className="flex gap-[2px] flex-col">
                    <a href='mailto:aitmeryem.s@gmail.com' className='text-lightBlue/90 font-medium text-[16px] '>aitmeryem.s@gmail.com</a>
                    <a href='mailto:mohamedharti1989@gmail.com' className='text-lightBlue/90 flex flex-wrap text-wrap font-medium text-[16px] '>mohamedharti1989@gmail.com</a>
                    
                </div>
            </div>
            <div className="flex gap-1 flex-col lg:md:gap-7">
                <p className='text-white/90 pt-3  relative -top-[15px] text-nowrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px]'>Numbers</p>
                <div className="flex gap-[2px] flex-col">
                    <a href='tel:+212642532896' className='text-lightBlue/90 font-medium text-[16px] '>AMS: +212 642-532-896 </a>
                    <a href='tel:+212697889032' className='text-lightBlue/90 font-medium text-[16px] '>EHM: +212 697-889-032</a>
                                                 
                </div>
            </div>
            <div className="flex gap-1 flex-col lg:md:gap-7">
                <p className='text-white/90 pt-3  relative -top-[15px] text-nowrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px]'>Social Links</p>
                <div className="flex gap-[2px] flex-col">
                    <a  className='text-lightBlue   flex flex-col gap-2  font-bold text-[16px] '>@aitmeryemsaid 
                        <span className='flex gap-4'>
                            <a target='_blank' href='https://wa.me/+212642532896' ><FaWhatsapp/></a>
                            <a href=""><FaLinkedinIn/></a>
                            <a href=""><FaInstagram/></a>
                            <a href=""><FaFacebook/></a>
                        </span> 
                    </a>                    
                </div>
                <div className="flex mt-4 lg:md:mt-0 gap-[2px] flex-col">
                    <a  className='text-lightBlue   flex flex-col gap-2 font-bold text-[16px] '>@Elhartimohammed
                        <span className='flex gap-4'>
                            <a target='_blank' href='https://wa.me/+212697889032' ><FaWhatsapp/></a>
                            <a href=""><FaLinkedinIn/></a>
                            <a href=""><FaInstagram/></a>
                            <a href=""><FaFacebook/></a>
                        </span> 
                    </a>                    
                </div>
            </div>
            <div className="flex gap-1 flex-col lg:md:gap-7">
                <p className='text-white/90 pt-3  relative -top-[15px] text-nowrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px]'>Location</p>
                <div className="flex gap-[2px] flex-col md:w-full sm:w-[90vw]">
                    <a href='https://maps.app.goo.gl/tMp2tLExtBCteUkE7' target='_blank' className='text-lightBlue/90 font-medium text-[16px] '>Rue  14 Amal 2 Imm 2 Etage 2  Bureau N°4  Sidi Bernousi, CASABLANCA </a>                                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.036840792911!2d-7.517588224302606!3d33.604348573329055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM2JzE1LjciTiA3wrAzMCc1NC4xIlc!5e0!3m2!1sen!2sma!4v1731536117218!5m2!1sen!2sma"  className='w-full h-[400px] mt-4 sm:w-[90vw] lg:w-[600px] md:w-[470px] lg:md:[450px]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
           
        </div>

        <div className="w-full h-[.1px] bg-slate-400/60 mb-20"></div>

            { /* Let's get to work Section*/}
            <div className=' w-full  pb-2 flex text-wrap md:lg:pb-[70px] '>
                {/* Head Title */}
                <h1  className='text-[12vw] pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[8.5vw] tracking-tight   lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Let's get to work</h1>               
            </div>


            <form className=' w-full flex flex-col gap-8' action='https://api.web3forms.com/submit' method='POST'>
                <input type="hidden" name="access_key" value="892b7e5a-ae68-4eaf-bf53-9395db43e459"></input>

                <div className="grid gap-6 lg:grid-cols-[.5fr_1fr] md:grid-cols-[.5fr_1fr]">

                    {/*Part1: About The Client*/}
                    <p className='text-white/90 pt-3  relative -top-[15px] text-nowrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px]'>About you</p>

                    <div className=" grid grid-col-1 gap-6 lg:grid-cols-2  md:grid-cols-1  md:pt-[50px] lg:gap-8 lg:row-gap-y-10 ">

                        <div className="flex flex-col">
                            <p className='text' for='prenom'>
                                First name
                                <span className='text-red-600'> *</span>
                            </p> 
                            <input id='prenom' type="text" name='first_name' className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" />

                        </div>
                        <div className="flex flex-col">
                            <p className='text-white/80'>
                                Last name
                                <span className='text-red-600'> *</span>
                            </p> 
                            <input type="text" className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" />

                        </div>
                        

                        <div className="flex flex-col">
                            <p>
                                Business email
                                <span className='text-red-600'> *</span>
                            </p> 
                            <input type="text" className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" />

                        </div>
                        <div className="flex flex-col">
                            <p>
                                Phone number
                                <span className='text-red-600'> *</span>
                            </p> 
                            <input type="text" className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" />

                        </div>
                        <div className="flex  flex-col   ">
                            <p>
                                How did you hear about us?
                                <span className='text-green-600'> (optional)</span>
                            </p> 
                            <input type="text" className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" />

                        </div>
                       
                        

                    </div>

                </div>


                <div className="grid gap-6 lg:grid-cols-[.5fr_1fr] md:grid-cols-[.5fr_1fr]">
                    {/*Part1: About The Project*/}
                    <p className='text-white/90 pt-3  relative -top-[15px] text-wrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:w-[300px] lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px]'>About The Project</p>

                    <div className=" grid grid-col-1 gap-6 lg:grid-cols-2  md:grid-cols-1 md:pt-[50px] lg:gap-8 lg:row-gap-y-10 ">

                        <div className="flex flex-col">
                            <p>
                                What can we help you with?
                                <span className='text-red-600'> *</span>
                            </p> 

                            {/* <input type="text" className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" /> */}
                            <select name="" className='bg-black cursor-pointer mt-1 marker:bg-black border-b border-white/40 outline-none py-2 flex text-white ' id="">
                                <option className='hidden' value=""></option>
                                <option value="Design A Website">Design A Website</option>
                                <option value="Logo">Logo</option>
                                <option value="Flayers">Flayers</option>
                                <option value="Business Card">Business Card</option>
                            </select>

                        </div>
                        <div className="flex flex-col">
                            <p>
                                Tell us about your project
                                <span className='text-red-600'> *</span>
                            </p> 
                            <input type="text" className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" />

                        </div>

                        <div className="submit flex mt-5 bg-orangee hover:bg-white/70 cursor-pointer  max-w-fit px-8 py-3 rounded-full gap-4 items-center justify-center">
                            <input className='text-white text-[16px] font-[900]' type="submit" value={"Submit"}/>
                            <FaArrowRight className='arrow text-white/80 text-[14px]'/>

                        </div>
                       
                       
                        

                    </div>

                </div>
            

            </form>  {/*The end of section 1*/}


            

            


        </div>

       
        


    </div>  

    

    
                





  )
}

export default Contact
