import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import {animate, motion} from 'framer-motion'
import { options, customStyles } from '../Constants/main';
// import Select from 'react-select';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import logo from '../Assets/newColor.svg'
// import { Audio, BallTriangle , DNA } from 'react-loader-spinner'




const Contact = () => {

    
    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        setValue,
        formState: { errors, isSubmitSuccessful, isSubmitting },
      } = useForm({
        mode: "onTouched",
      });
      const [isSuccess, setIsSuccess] = useState(false);
      const [message, setMessage] = useState(false);
    
      // Please update the Access Key in the .env
      const apiKey = process.env.PUBLIC_ACCESS_KEY || "6d80584c-6352-4e19-8bbb-0437d67139f9";
    //   const apiKey = process.env.PUBLIC_ACCESS_KEY || "7ec0ed99-bf8d-4b70-a7bd-1e051220b827";
    
      const { submit: onSubmit } = useWeb3Forms({
        access_key: apiKey,
        settings: {
          from_name: "MegaSoft Form",
          subject: "New Contact Message from your Website",
            
        },
        onSuccess: (msg, data) => {
          setIsSuccess(true);
          setMessage(msg);
          reset();
        },
        onError: (msg, data) => {
          setIsSuccess(false);
          setMessage(msg);
        },
      });
    


  return (

    
    <div className='contact z-1 h-full pb-[200px] pt-[30px] px-8 w-screen overflow-x-hidden  lg:md:pb-[210px]  mx-auto bg-[black] sm:py-[120px] md:lg:pt-[60px] md:lg:px-[20px]  sm:px-8'>
        <div className='w-full mx-auto max-w-[1500px]'> 



        {/*Information section*/}
        <div className=' w-full  pb-1 flex text-wrap md:lg:pb-[70px] pt-[60px]'>
                {/* Head Title */}
                <h1  className='text-[12vw] flex gap-4 px-2 con2 pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[8.5vw] tracking-tight   lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Our Information</h1>               
        </div>

        <div className="infoo grid pb-10 gap-8 lg:grid-cols-[1fr_.5fr] md:grid-cols-[.5fr_1fr]">

                

            <div className=" grid lg:w- text-wrap  w-full gap-2 lg:grid-cols-2 sm:grid-cols-2 lg:md:gap-0 md:grid-cols-1 md:gap-0">
                <div className="flex text-wrap gap-0 flex-col lg:md:gap-6">
                    <p className='text-white/90 pt-3   relative -top-[15px] text-nowrap font-bold text-[31px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[] sm:text-[35px]  lg:md:text-[45px]'>Founders</p>
                    <div className="flex relative -top-2 lg:md:top-0 gap-[2px] flex-col">
                        <p className='text-lightBlue/90 font-medium text-[16px] '>@Ait_Meryem_Said</p>
                        <p className='text-lightBlue/90 font-medium text-[16px] '>@El_Harti_Mohammed</p>
                        <p className='text-lightBlue/90 font-medium text-[16px] '>&Team</p>
                    </div>
                </div>
                <div className="flex ] gap-0 flex-col lg:md:gap-6">
                    <p className='text-white/90 pt-3  relative -top-[15px] text-nowrap font-bold text-[31px] sm:text-[35px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[45px]  '>Emails</p>
                    <div className="flex relative -top-2 md:lg:top-0 gap-[2px] flex-col">
                        <a href='mailto:aitmeryem.s@gmail.com' className='text-lightBlue/90 font-medium text-[16px] '>aitmeryem.s@gmail.com</a>
                        <a href='mailto:mohamedharti1989@gmail.com' className='text-lightBlue/90 flex flex-wrap text-wrap font-medium text-[16px] '>mohamedharti1989@gmail.com</a>
                        
                    </div>
                </div>
                <div className="flex gap-0 flex-col  lg:md:gap-6">
                    <p className='text-white/90 pt-3  relative -top-[15px] text-nowrap font-bold text-[31px] sm:text-[35px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[45px]'>Numbers</p>
                    <div className="flex relative -top-2 lg:md:top-0 gap-[2px] flex-col">
                        <a href='tel:+212642532896' className='text-lightBlue/90 font-medium text-[16px] '>AMS: +212 642-532-896 </a>
                        <a href='tel:+212697889032' className='text-lightBlue/90 font-medium text-[16px] '>EHM: +212 697-889-032</a>
                                                    
                    </div>
                </div>
                <div className="flex gap-0 flex-col lg:md:gap-6">
                    <p className='text-white/90 pt-3  relative -top-[15px] text-nowrap font-bold text-[31px] sm:text-[35px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[45px]'>Social Links</p>
                    <div className="flex gap-[2px] flex-col">
                        <a  className='text-lightBlue relative -top-2 lg:md:top-0   flex flex-col gap-2  font-bold text-[16px] '>@aitmeryemsaid 
                            <span className='flex gap-4'>
                                <a target='_blank' href='https://wa.me/+212642532896' ><FaWhatsapp/></a>
                                <a href=""><FaLinkedinIn/></a>
                                <a href=""><FaInstagram/></a>
                                <a href=""><FaFacebook/></a>
                            </span> 
                        </a>                    
                    </div>
                    <div className="flex mt-4 lg:md:mt-0 gap-[2px] flex-col">
                        <a  className='text-lightBlue relative -top-2 lg:md:top-0  flex flex-col gap-2 font-bold text-[16px] '>@Elhartimohammed
                            <span className='flex gap-4'>
                                <a target='_blank' href='https://wa.me/+212697889032' ><FaWhatsapp/></a>
                                <a href=""><FaLinkedinIn/></a>
                                <a href=""><FaInstagram/></a>
                                <a href=""><FaFacebook/></a>
                            </span> 
                        </a>                    
                    </div>
                </div>
                
            </div>
            <div className="flex gap-0 flex-col lg:md:gap-6 ">
                    <p className='text-white/90 pt-3  relative -top-[15px] text-nowrap font-bold text-[31px] sm:text-[35px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[45px]'>Location</p>
                    <div className="flex gap-[2px] flex-col md:w-full sm:w-[90vw] relative -top-2 lg:md:top-0">
                        <a href='https://maps.app.goo.gl/tMp2tLExtBCteUkE7' target='_blank' className='text-lightBlue/90 font-medium text-[16px] '>Rue  14 Amal 2 Imm 2 Etage 2  Bureau N°4  Sidi Bernousi, CASABLANCA </a>                                    
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.036840792911!2d-7.517588224302606!3d33.604348573329055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM2JzE1LjciTiA3wrAzMCc1NC4xIlc!5e0!3m2!1sen!2sma!4v1731536117218!5m2!1sen!2sma"  className='w-full h-[400px] mt-4 sm:w-[90vw] lg:w-[600px] md:w-[470px] lg:md:[450px]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            
        </div>

        <div className="w-full h-[.1px] bg-slate-400/60 mb-20 mt-10"></div>

            { /* Let's get to work Section*/}
            <div className=' w-full  pb-2 flex text-wrap md:lg:pb-[70px] '>
                {/* Head Title */}
                <h1  className='text-[12vw] con2 pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[8.5vw] tracking-tight px-2   lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Let's get to work</h1>               
            </div>

            {/* action='https://api.web3forms.com/submit' */}

            <form className=' w-full flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)} >
                {/* <input type="hidden" name="access_key" value="6d80584c-6352-4e19-8bbb-0437d67139f9"></input> */}

                <div className="grid gap-6 lg:grid-cols-[.5fr_1fr] md:grid-cols-[.5fr_1fr]">

                    {/*Part1: About The Client*/}
                    <p className='text-white/90 pt-3 lg:w-[300px] relative -top-[15px] text-wrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px] '>About you</p>

                    <div className=" grid grid-col-1 gap-6 lg:grid-cols-2  md:grid-cols-1  md:pt-[50px] lg:gap-8 lg:row-gap-y-10 ">

                        <div className="flex flex-col">
                            <p className='text' for='prenom'>
                                First name
                                <span className='text-red-600'> *</span>
                            </p> 
                            <input id='prenom' type="text" {...register("First Name", { required: true })} className='bg-transparent  outline-none py-2 flex text-white  font-roboto font-semibold'  />
                            
                            <div className="line h-[.1px] w-full  bg-white/40 relative"></div>

                        </div>
                        <div className="flex flex-col">
                            <p className='text-white/80'>
                                Last name
                                <span className='text-red-600'> *</span>
                            </p> 
                            <input type="text" className='bg-transparent  outline-none py-2 flex text-white  font-roboto font-semibold' {...register("Last Name", { required: true })} id="" />
                            <div className="line h-[.1px] w-full  bg-white/40 relative"></div>

                        </div>
                        

                        <div className="flex flex-col">
                            <p>
                                Business email
                                <span className='text-red-600'> *</span>
                            </p> 
                            <input type="text" className='bg-transparent  outline-none py-2 flex text-white  font-roboto font-semibold' {...register("Email", { required: true })} id="" />
                            <div className="line h-[.1px] w-full  bg-white/40 relative"></div>

                        </div>
                        <div className="flex flex-col">
                            <p>
                                Phone number
                                <span className='text-red-600'> *</span>
                            </p> 
                            <input type="text" className='bg-transparent  outline-none py-2 flex text-white  font-roboto font-semibold' {...register("Phone Number", { required: true })} id="" />
                            <div className="line h-[.1px] w-full  bg-white/40 relative"></div>

                        </div>
                        <div className="flex relative flex-col   ">
                            <p>
                                How did you hear about us?
                                <span className='text-green-600'> (optional)</span>
                            </p> 
                            <input type="text" className='inner bg-transparent outline-none py-2 flex text-white  font-roboto font-semibold' {...register("How we get to them", { required: true })} id="" />
                            <div className="line h-[.1px] w-full  bg-white/40 relative"></div>

                        </div>
                       
                        

                    </div>

                </div>

                <div className="grid gap-6 lg:grid-cols-[.5fr_1fr] md:grid-cols-[.5fr_1fr]">
                    {/*Part1: About The Project*/}
                    <p className='text-white/90 pt-3  relative -top-[15px] text-wrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:w-[300px] lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px]'>About Your Project</p>

                    <div className="grid grid-cols-1 gap-5">

                        <div className=" grid grid-col-1 gap-6 lg:grid-cols-2  md:grid-cols-1 md:pt-[50px] lg:gap-8 lg:row-gap-y-10 ">

                            <div className="flex flex-col">
                                <p>
                                    What can we help you with?
                                    <span className='text-red-600'> *</span>
                                </p> 

                                {/* <input type="text" className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" /> */}
                                <select {...register("Category", { required: true })} className='select bg-black cursor-pointer mt-1 shadow-none font-roboto font-semibold  outline-none py-2 flex text-white ' id="">
                                    {options.map((option, index) => (
                                        <option key={index} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                {/* <Select isMulti className='select bg-black cursor-pointer placeholder:text-white text-white   outline-none py-[1.3px] value:text-white ' options={options} styles={customStyles}/> */}
                                <div className="line h-[.1px] w-full  bg-white/40 relative"></div>

                            </div>
                            <div className="flex flex-col">
                                <p>
                                    Your Enterprise/Business name
                                    <span className='text-red-600'> *</span>
                                </p> 
                                <input type="text" className='bg-transparent font-roboto font-semibold outline-none py-2 flex text-white ' {...register("Enterprise/Business name", { required: true })} id="" />
                                <div className="line h-[.1px] w-full  bg-white/40 relative"></div>

                            </div>                            
                            <div className="flex flex-col">
                                <p>
                                    Tell us about your project
                                    <span className='text-red-600'> *</span>
                                </p> 
                                <input type="text" className='bg-transparent font-roboto font-semibold outline-none py-2 flex text-white ' {...register("Brief about the project", { required: true })} id="" />
                                <div className="line h-[.1px] w-full  bg-white/40 relative"></div>

                            </div>                            

                        </div>

                        <div className="flex gap-4 pt-5">
                            <input type="checkbox" className='check w-[16px]' {...register("Checks for updates", { required: true })} id="" />
                            <p className='text-[12px]'>I Want To receive news and updates in my email</p>
                        </div>

                        <div className="submit flex mt-8 bg-orangee overflow-hidden hover:bg-white/70 cursor-pointer  max-w-fit px-8 py-3 rounded-full gap-4 items-center justify-center">
                            {/* <input className='text-white text-[16px] font-[900]' type="submit" value={"Submit"}/> */}
                                    <button>
                                    {isSubmitting ? (
                                            <svg
                                                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24">
                                                <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"></circle>
                                                <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            // <DNA
                                            // visible={true}
                                            // height="80"
                                            // width="80"
                                            // ariaLabel="dna-loading"
                                            // wrapperStyle={{}}
                                            // wrapperClass="dna-wrapper"
                                            // />
                                            ) : (
                                                <div className='hov z-1 items-center w-full h-full justify-center flex gap-4'>
                                                    <span className='text-white text-[16px] font-[900] hover:text-orangee'>Send Message</span>
                                                    <FaArrowRight className='arrow text-white/80 text-[14px]'/>
                                                </div>
                                            )}
                                    </button>
                            {/* <FaArrowRight className='arrow text-white/80 text-[14px]'/> */}

                        </div>

                        {isSubmitSuccessful && isSuccess && (
                        <div className="mt-3 text-sm font-semibold text-green-500">
                        {message || prompt("Success. Message sent successfully")}
                        </div>
                        )}
                        {isSubmitSuccessful && !isSuccess && (
                            <div className="mt-3 text-sm text-center text-red-500">
                            {message || "Something went wrong. Please try later."}
                            </div>
                        )}
                    </div>

                </div>
            

            </form>  {/*The end of section 1*/}


            

            


        </div>

       
        


    </div>  

    

    
                





  )
}

export default Contact
