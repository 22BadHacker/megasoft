import React from 'react'
import GridLayout from "react-grid-layout";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
// import img from '../Assets/services/Device-Mockup_6.jpg'
import { workSlide } from '../Constants/main';


const Work = () => {

  const buttons = ['All', 'Digital Marketing', 'Web Sites', 'Logos', 'Branding', 'Graphic Design',  ];
  // const layouts = getLayoutsFromSomewhere();
  return (
    
    <div className='w-screen  bg-black pb-[200px] '>
          <div className="max-w-[1500px] px-4 md:lg:px-5 h-full mx-auto w-full">
            <div className=' w-full  pb-1 flex flex-col text-wrap md:lg:pb-[70px] pt-[100px]'>
                      {/* Head Title */}
                      <h1  className='text-[12vw] con2 max-w-[600px] px-2 pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[8.5vw] tracking-tight   lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Our Work</h1>  
                      <div className="flex gap-5 w-full">

                          {
                            buttons.map((item, i) => {
                              return <a className='buttons first: relative overflow-hidden z-[1] cursor-pointer  first:bg-orangee first font-medium  flex justify-center items-center max-w-content h-[39px] px-[26px]  rounded-full' key={i}>{item}</a>
                            })
                          }
                      </div>   

                      <div className="grid lg:grid-cols-3 md:lg:grid-cols-3 grid-cols-2 gap-x-2 lg:gap-4 lg:md:gap-y-7 gap-y-4 mt-12">
                          {
                            workSlide.map((item, i) => {
                              const {src, name, desc} = item
                              return <div key={i} className="relative flex flex-col gap-3 rounded-sm overflow-hidden">
                                <img src={src}  className='object-cover w-full h-full rounded-sm' alt="Flora Cosmitic" />
                                <h4 className='lg:md:sm:text-[12px] text-[10px] flex gap-2 items-center text-orangeLight '><FaLongArrowAltRight/> {desc}</h4>
                                <p className='lg:md:sm:text-[20px] text-[15px] relative -top-3 font-semibold tracking-[1px]'>{name}</p>

                              </div>
                            })
                          }
                          {/* <div  className="relative flex flex-col gap-3 rounded-sm overflow-hidden">
                            <img src={img}  className='object-cover w-full h-full rounded-sm' alt="Flora Cosmitic" />
                            <h4 className='text-[11px] flex gap-2 items-center text-orangeLight '><FaLongArrowAltRight/> UX Design/Web Devolopment</h4>
                            <p className='text-[20px] relative -top-3 font-semibold tracking-[1px]'>Floora Cosmitic</p>

                          </div> */}
                      </div>

                        


              </div>
          </div>

    </div>

  )
}

export default Work
