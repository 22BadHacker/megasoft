import React from 'react'
import {FaArrowRight} from 'react-icons/fa'



const Contact = () => {


  return (
    <div className='contact h-screen pt-[130px] px-8 w-screen overflow-x-hidden overflow-y-scroll pb-10  mx-auto bg-black sm:pt-[120px] md:lg:pt-[130px] md:lg:px-[20px]  sm:px-8'>
        <div className='w-full mx-auto max-w-[1500px]'>

            <div className=' w-full gap-4 pb-2 flex text-nowrap md:lg:flex-col md:lg:pb-[70px] '>
                <h1  className='text-[12vw] pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[8.5vw] tracking-tight  lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Let's get to work</h1>               
            </div>


            <form className=' w-full flex flex-col gap-8' action='https://api.web3forms.com/submit' method='POST'>
                <input type="hidden" name="access_key" value="892b7e5a-ae68-4eaf-bf53-9395db43e459"></input>

                <div className="grid gap-6 lg:grid-cols-[.5fr_1fr] md:grid-cols-[.5fr_1fr]">

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
                            <p>
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
                        <div className="flex flex-col">
                            <p>
                                How did you hear about us?
                                <span className='text-green-600'> (optional)</span>
                            </p> 
                            <input type="text" className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" />

                        </div>
                       
                        

                    </div>

                </div>
                <div className="grid gap-6 lg:grid-cols-[.5fr_1fr] md:grid-cols-[.5fr_1fr]">

                    <p className='text-white/90 pt-3  relative -top-[15px] text-wrap font-bold text-[38px] mt-10 md:lg:mt-0 lg:w-[300px] lg:md:sm:top-4 lg:md:sm:-top-[]  lg:md:text-[55px]'>About The Project</p>

                    <div className=" grid grid-col-1 gap-6 lg:grid-cols-2  md:grid-cols-1 md:pt-[50px] lg:gap-8 lg:row-gap-y-10 ">

                        <div className="flex flex-col">
                            <p>
                                What can we help you with?
                                <span className='text-red-600'> *</span>
                            </p> 

                            {/* <input type="text" className='bg-transparent border-b border-white/40 outline-none py-2 flex text-white ' name="" id="" /> */}
                            <select name="" className='bg-black cursor-pointer mt-4 marker:bg-black border-b border-white/40 outline-none py-2 flex text-white ' id="">
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

                        <div className="submit flex mt-5 bg-[#fff] hover:bg-white/80 cursor-pointer  max-w-fit px-8 py-3 rounded-full gap-4 items-center justify-center">
                            <input className='text-[#000] text-[16px] font-[900]' type="submit" value={"Submit"}/>
                            <FaArrowRight className='arrow text-[#111]'/>

                        </div>
                       
                       
                        

                    </div>

                </div>
            


                

            </form>

        </div>
    </div>
  )
}

export default Contact
