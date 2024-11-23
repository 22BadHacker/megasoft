import React from 'react'
import GridLayout from "react-grid-layout";
import { FaLongArrowAltRight, FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { Responsive as ResponsiveGridLayout , } from "react-grid-layout";
// import img from '../Assets/services/Device-Mockup_6.jpg'
import { workSlide } from '../Constants/main';
import { useGSAP } from '@gsap/react';

import gsap from 'gsap';

import { easeInOut } from 'framer-motion';
import { div } from 'framer-motion/client';
import Transition from '../Constants/Transition';

const Work = () => {

  const buttons = ['All', 'Digital Marketing', 'Web Sites', 'Logos', 'Branding', 'Graphic Design',  ];


  
  
  useGSAP(() => {

    let tl = gsap.timeline({});
    // gsap.registerPlugin(ScrollTrigger);
    // tl.from('.workSide', {
    //   scrollTrigger: {
    //     trigger: '.workSide',
    //     toggleActions: 'start none none none'
    //   },
    //   y:'100%',
    //   opacity: 0,
    //   delay: .8,
    //   ease: 'power1.inOut',
      
    //   stagger: {
    //     amount: .8
    //   }
    // })

    tl.from('.workSide', {
      scrollTrigger: {
        trigger: '.workSide',
        pin: true,
        start: 'center center',
        toggleActions: 'restart none none none',
        end: '+=1000',
        scrub: 1,
        snap: {
          snapTo: 'labels', // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        }
      },
      // y: '100%',
      
    })
    tl.addLabel('bottom')
    .from('#box4', {y: '100%', opacity: 0})
    .from('#box5', {y: '100%', opacity: 0})
    .from('#box6', {y: '100%', opacity: 0})

  })

  
  return (
    <>
      {/* <Transition /> */}
      
      <div className='w-screen  bg-black pb-[200px] '>
            <div className="max-w-[1500px] px-4 md:lg:px-5 h-full mx-auto w-full">
              <div className=' w-full  pb-1 flex flex-col text-wrap md:lg:pb-[70px] pt-[100px]'>
                        {/* Head Title */}
                        <h1  className='text-[12vw] con2 max-w-[600px] px-2 pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[8.5vw] tracking-tight   lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Our Work</h1>  
                        <div className="flex gap-5 w-full items-center max-w-[1000px] overflow-x-hidden">
                          {/* <FaArrowCircleLeft className='text-orangee text-[24px] font-bold' /> */}


                            {
                              buttons.map((item, i) => {

                                return <a className='buttons text-nowrap relative overflow-hidden z-[1] cursor-pointer  first:bg-orange-500 font-medium  flex justify-center items-center max-w-content h-[39px] px-[26px] inline-block  rounded-full' key={i}>{item}</a>
                                
                              })
                            }
                            {/* <FaArrowCircleRight className='text-orangee text-[24px] font-bold' /> */}
                        </div>   

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-x-2 lg:gap-4 lg:md:gap-y-7 gap-y-4 mt-12">
                            {
                              workSlide.map((item, i) => {
                                const {src, name, desc, id} = item
                                return(
                                  <div className='workSide flex'>

                                      <div id={id}   key={i} className="relative flex flex-col gap-3 rounded-md overflow-hidden">
                                        <img src={src}  className='object-cover w-full h-full rounded-md' alt="Flora Cosmitic" />
                                        <h4 className='lg:md:sm:text-[12px] text-[10px] flex gap-2 items-center text-orangeLight '><FaLongArrowAltRight/> {desc}</h4>
                                        <p className='lg:md:sm:text-[20px] text-[15px] relative -top-3 font-semibold tracking-[1px]'>{name}</p>

                                      </div>
                                  </div>

                                )
                              })
                            }
                            
                        </div>

                          


                </div>
            </div>

      </div>
    </>


  )
}

export default Work
