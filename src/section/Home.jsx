import React, {useState, lazy, Suspense} from 'react'
import logo from '../Assets/newColor.svg'
import { Link } from 'react-router-dom'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import { servicesSlider } from '../Constants/main'
import {motion} from 'framer-motion'
import {OurStory, FAQ, Drag, Analitics, Report, LatestWork, Services} from '../Constants/main'
import Drag2 from '../Constants/Drag2'
import Drag3 from '../Constants/Drag3'
import Lenis from '../Constants/Lenis'
import Features from '../Constants/Features'
const Fin = lazy(() => import('../Constants/Fin'))
const Tools= lazy(() => import('../Constants/Tools'))
const Ads= lazy(() => import('../Constants/Ads'))





const Home = () => {

 
  return (

    <Lenis>

      <div className='w-screen h-auto relative z-[1] bg-black pb-[200px] lg:md:pt-[180px] pt-[120px]'>
          
          <div className="woo fixed -z-[1] h-[120vh] w-full inset-0"></div>
          <div aria-hidden="true" className="fixed  left-0 -z-[1]  inset-0 grid grid-cols-2 opacity-55 -space-x-52 lg:md:sm:opacity-40">
                      <div className="con6 w-screen "></div>
                      <div className="blur-[106px] rotate-[180deg] h-[80px] opacity-90 lg:md:sm:opacity-90 relative   lg:md:sm:left-0 top-[60px] bg-gradient-to-r from-cyan-400 to-sky-300"></div>
                      
            </div>


        <div className=' max-w-[1500px] px-4 md:lg:px-5 h-full mx-auto w-full md:px-9'>
          

            {/* Part 1 */}
            <div className="grid  sm:grid-cols-1 lg:md:grid-cols-2 w-full">
              
                <div className=" flex  flex-col gap-4 z-[1] lg:md:gap-7 w-full lg:max-w-[720px]">
                  
          
                  
                  <p className='text-orangee text-[18px] font-semibold relative top-1'>Empower Your Business with Exceptional Web Design</p>                
                  <p className='con4 lg:md:text-[68px] sm:text-[60px]  text-[40px] font-bold sm:leading-[-10px] lg:md:sm:leading-tight lg:md:sm:-tracking-[2px]'>Where Innovation Meets Design, Build Your Dream Project Today</p>
                
                  <p className='text-gray-300 font-semibold py-5 sm:w-[600px]'>Our team of talented designers and developers work collaboratively to bring your vision to life, ensuring every website we create is tailored to meet the unique needs of your brand and your users.</p>

                  <div className="flex lg:md:gap-[70px] sm:justify-around mt-[40px] items-center lg:md:justify-start justify-between">
                      <Link to={'/contact/'} className='work px-[18px] py-2 lg:md:py-[10px] text-white lg:md:px-9 bg-orangee rounded-full font-bold lg:text-[17px] '>Get in Touch</Link>
                      <Link to={'/ourWork/'} style={{transition: '.3s ease'}} className='  lg:md:hover:gap-6 px-[20px] gap-4 border-[.5px] border-orangeLight py-2  hover:text-white lg:md:py-3 lg:md:px-8 text-orangee rounded-full font-bold lg:md:text-[17px] flex items-center lg:md:gap-5  '>Explore our Portfolio <FaArrowRight className='lg:md:text-base text-[14px] text-orangeLight'/></Link>
                      {/* <Link to={'/ourWork/'} className='buttons first: relative overflow-hidden z-[1] cursor-pointer  first:bg-orangee first font-medium  flex justify-center items-center max-w-content h-[39px] px-[26px]  rounded-full'>Explore our Portfolio <FaArrowRight className='text-base text-orangeLight'/></Link> */}
                  </div>
                  <div className="flex justify-between w-full sm:justify-around   lg:md:gap-[50px] mt-5 items-center lg:md:justify-start">
                      <div style={{transition: '.1.5s ease'}} className='flex items-center gap-2 font-medium font-novea text-[18px]  hover:text-white cursor-pointer'><FaCheck className='text-orange-500/80 '/>24h/7j Support</div>
                      <div style={{transition: '.1.5s ease'}} className='flex items-center gap-2 font-medium font-novea text-[18px]  hover:text-white cursor-pointer'><FaCheck className='text-orange-500/80 '/>Unique Design</div>
                      <div style={{transition: '.1.5s ease'}} className='flex items-center gap-2 font-medium font-novea text-[18px]  hover:text-white cursor-pointer'><FaCheck className='text-orange-500/80 '/>Fast Delivery</div>
                  </div>

                </div>
                <section className="relative">
                    <Drag />
                    <Drag2 />
                    <Drag3 />
                    
                </section>
          </div>


            {/* Part 2 */}
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



            {/* Part 3 About */}
            <section className='z-[2]'>
              {/* <img className='w-[600px]' src={megaa} alt="" /> */}

            </section>

            <section className='z-[2]'>
              <OurStory />
            </section>

            <section className=''>
              <Features />

            </section>
            {/* Part 3 Latest Work */}
            <section className='z-[2]'>
              <LatestWork />

            </section>

            {/* Part 4 analytics */}
            <section className='mt-20 z-[2]'>
                  <Analitics />
            </section>

            <section className='mt-20 z-[2]'>
                  <Services />
            </section>
            <section className='mt-20 z-[2]'>
                  <Ads />
            </section>

            {/* Part 5 Report */}
            <section className='mt-20 z-[2]'>
                  <Report />
            </section>

            {/* Part 6 FAQ */}
            <section className='mt-20  z-[2]'>
                  <FAQ />
            </section>
              
              {/* Part 7 FAQ */}
              <section className='mt-20  z-[2]'>
                    <Fin />
              </section>
              <section className='mt-20  z-[2]'>
                    <Tools />
              </section>
            
            {/* <div className="w-full gap-20 absolute bottom-10 flex justify-center items-center">
              <div className="w-[140px] h-[140px]  bg-transparent rounded-full absolute -top-[40px]"><span className='w-full blur-[10px] -bottom-[90px] h-full bg-[#d4352e] absolute rounded-full  left-0 '></span></div>
              <div className="w-[140px] opacity-70 h-[140px] left-[35%] bg-transparent rounded-full absolute -top-[40px]"><span className='w-full h-full bg-[#11e1e8] absolute rounded-full opacity-75 blur-[10px] -bottom-[90px] left-0 '></span></div>
            </div> */}


        </div>

      </div>
    </Lenis>
  )
}

export default Home
