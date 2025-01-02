import React from 'react'
import img1 from '../Assets/services/img3.png'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Effect from '../Constants/Effect'
import { services } from '../Constants/main'
import { FaSearch } from 'react-icons/fa'
import Lenis from '../Constants/Lenis'
// export {bgEffect} from '../Constants/main'
// import video from './vidio2.mp4'
// import video from './video.mp4'

const Services2 = () => {
  return (
    <Lenis>
    <div id='id' className='w-screen relative h-auto z-[2] md:pt-[40px]  bg-black pb-[200px] '>
        <div className="woo fixed -z-[1] h-[120vh] w-full inset-0"></div>


        <div aria-hidden="true" className="fixed  left-0 -z-[10]  inset-0 grid grid-cols-2 -space-x-52 opacity-65 lg:md:sm:opacity-45">
                    <div className="con6 w-screen "></div>
                    <div className="blur-[106px] rotate-[180deg] h-[80px] opacity-40 lg:md:sm:opacity-85 relative -left-[0px] top-[60px] bg-gradient-to-r from-cyan-400 to-sky-300"></div>
                
        </div>

      <div className="max-w-[1500px] px-4 md:lg:px-5 h-full mx-auto w-full">
        
        <div className=' w-full  pb-[60px] flex flex-col text-wrap md:lg:pb-[70px] pt-[100px]'>
                  {/* Head Title */}
                  <h1   className='con3 text-[12vw] pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[8.5vw] tracking-tight   lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Our Services</h1> 
                  <h1  className='lg:text-[2.5vw] font-medium text-[20px] sm:text-[28px] sm:-top-[15px] relative lg:md:-top-8 opacity-85'>What <span className='text-orangee'>Services</span> We're Offering</h1> 
                  {/* <h5 className='lg:md:max-w-[800px] text-white/75 pb-5 text-[16px] md:lg:text-[17px]'> our team of experts is here to bring your vision to life. With a passion for creativity and a focus on technology, we help businesses grow online, enhance user experiences, and achieve measurable results</h5>              */}
          </div>

         


          <div className="w-full place-content-center  mt-5 gap-4 mx-auto place-items-center lg:mt-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-2 lg:gap-4 lg:md:gap-y-7">
             

                {services.map((item, i) => {
                   const {src,  name, number} = item;
                 return (

                  <div key={i} className='box1  relative h-[32vw] w-full lg:h-[17vw] lg:w-full  rounded-[5px] overflow-hidden'>
                    <img  className='pics w-full  cursor-pointer transition delay-75  h-full object-cover filter brightness-[.8] ' loading='lazy'  src={src} alt="" />
                    <h5 className='absolute hover:text-orangee cursor-pointer transition delay-75 top-2 left-2 text-[12px] md:lg:top-4 md:lg:left-4 rounded-full md:lg:py-2 md:lg:px-[11px] flex items-center justify-center bg-[rgb(17,17,17,.2)] px-2 py-[5.5px] backdrop-blur-[10px] text-white font-bold lg:md:text-[1vw] '>{number}</h5>
                    
                    <p className='absolute bottom-2 text-[12px] md:text-[16px] right-2 bg-transparent backdrop-blur-[20px] w-fit p-[2px_8px] rounded-[4px] flex items-center justify-center cursor-pointer  text-white font-bold tracking-wide'>{name}</p> 
                    

                  </div>


                 )
                })}


          </div>


          {/* Approach */}
          <div className="bg-transparent w-full backdrop-blur-[0px] h-[500px] mt-20 py-4 px-5 flex flex-col gap-10">
            <h1  className='lg:text-[2.5vw] font-medium text-[20px] sm:text-[28px] '>Our Process</h1> 
           

           .w-full.flex

          </div>     











          
      </div>
      
    </div>
    </Lenis>
  )
}

export default Services2
