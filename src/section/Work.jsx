import {useState, useEffect} from 'react'
import GridLayout from "react-grid-layout";
import { FaLongArrowAltRight, FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { Responsive as ResponsiveGridLayout , } from "react-grid-layout";
// import img from '../Assets/services/Device-Mockup_6.jpg'
import { workSlide } from '../Constants/main';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { easeInOut } from 'framer-motion';
import { div } from 'framer-motion/client';
import Lenis from '../Constants/Lenis';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

  const buttons = ['All', 'UX Design', 'Web Apps', 'Logos', 'business Card', 'Graphic Design',  ];
  const [selectedFilter, setSelectedFilter] = useState([]);
  // const [selectedButton, setSelectedButton] = useState(workSlide[0].desc);
  const [filterdItems, setFilteredItems] = useState(workSlide);

//   useGSAP(() => {
//     const tl = gsap.timeline({});
//     tl.from('.workSide', { scrollTrigger: { trigger: '.workSide',  start: 'top bottom',
//       end: 'bottom top', smooth: true, scrub: true }, opacity: 0,y: 60, ease: 'circ.inOut', stagger: {amount: 2}, delay: 1, duration: 1 });
// })
 

  
  
  useGSAP(() => {

    let tl = gsap.timeline({});
   
    tl.from('.workSide', {
     
      y:'100%',
      opacity: 0,
      delay: .8,
      ease: 'power1.inOut',
      
      stagger: {
        amount: .8
      }
    })

   
   

  })



  // const handleFilterButton = (filter) => {
  //   if (selectedFilter.includes(filter)) {
  //     setSelectedFilter(selectedFilter.filter((f) => f !== filter));
  //   } else {
  //     setSelectedFilter([...selectedFilter, filter]);
  //   }
  // };

  const handleFilterButton = (filter) => {
    if (selectedFilter.includes(filter)) {
      let filters = selectedFilter.filter((f) => f !== filter);
      setSelectedFilter(filters);
    } else {
      setSelectedFilter([...selectedFilter, filter]);
    }
  }

  useEffect(() => {
    filterItems();
  }, [selectedFilter]);


    const filterItems = () => {
      if (selectedFilter.length > 0) {
        let tempItems = workSlide.map((filter) => {
          let temp = workSlide.filter((item) => item.name === filter)
          return temp;
        })

        setFilteredItems(tempItems.flat());
      } else {
        setFilteredItems(...workSlide);
      }
    }


  
  return (
    <Lenis>
      {/* <Transition /> */}
      
      <div className='woork w-screen relative h-auto z-[1]  bg-black pb-[200px] '>
          <div className="woo fixed -z-[1] h-[120vh] w-full inset-0"></div>
      
          <div aria-hidden="true" className="fixed  left-0 -z-[1]  inset-0 grid grid-cols-2 -space-x-52 opacity-65 lg:md:sm:opacity-35">
                        <div className="con6 w-screen "></div>
                        <div className="blur-[106px] rotate-[180deg] h-[80px] opacity-40 lg:md:sm:opacity-85 relative -left-[0px] top-[60px] bg-gradient-to-r from-cyan-400 to-sky-300"></div>
                    
          </div>

          
            <div className="max-w-[1500px] px-4 md:lg:px-5 h-full mx-auto w-full">
              <div className=' w-full  pb-1 flex flex-col text-wrap md:lg:pb-[70px] pt-[100px]'>
                        {/* Head Title */}
                        <h1  className='text-[14.5vw] font-Poppins con2  px-2 pointer-events-none tracking-[1px]    relative font-[700] sm:text-[12.5vw]  lg:text-[8.5vw]    lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Our Work</h1>  

                        <div className="w-full absolute top-0 left-0 md:left-[120px] opacity-40">
                          <div className="h-[500px] -rotate-45 w-[180px] z-[-5]  absolute left-[100px] blur-[60px] top-0 bg-red-500 rounded-full"></div>
                          <div className="h-[500px] -rotate-45 w-[150px] z-[-5]  absolute left-[250px] blur-[50px] top-0 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="flex gap-3 sm:gap-5 w-full flex-wrap items-center max-w-[1000px]">
                          
                            {
                              buttons.map((item, i) => {

                                return (
                                  <p className='buttons text-nowrap relative uppercase text-[12.5px] sm:text-[15px]  z-[1] cursor-pointer overflow-hidden  first:bg-orange-500 font-medium   max-w-content h-fit py-2 px-[26px]   rounded-full' onClick={() => handleFilterButton(item)} key={i}>{item}</p>
                                )
                                
                              })
                            }
                        </div>   

                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-2 lg:gap-4 lg:md:gap-y-7 gap-y-4 mt-12">
                            {
                              workSlide.map((item, i) => {
                                const {src, name, desc, id} = item
                                return(
                                  <div className='workSide flex'>

                                      <div id={id}   key={i} className="hoov relative flex flex-col gap-3 rounded-md overflow-hidden">
                                        <img loading="lazy" src={src}  className='object-cover w-full h-full rounded-md' alt="Flora Cosmitic" />
                                        <h4 className='sm:text-[12px] border-[.5px] border-orange-600/40 w-max px-3 py-[3px] my-[1px] rounded-[20px] text-[13px] flex gap-2 items-center text-orangeLight '> {desc}</h4>
                                        <p className='sm:text-[20px]  text-[19px] relative -top-3 font-semibold text-white drop-shadow-[2px_2px_10px_rgb(255,255,255,.5)] tracking-[1px]'>{name}</p>

                                      </div>
                                  </div>

                                )
                              })
                            }
                            
                        </div>

                          


                </div>
            </div>

      </div>
    </Lenis>


  )
}

export default Work
