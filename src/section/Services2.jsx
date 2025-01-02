import React from 'react'
import img1 from '../Assets/services/img3.png'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Effect from '../Constants/Effect'
import { services } from '../Constants/main'
import { FaSearch } from 'react-icons/fa'
import Lenis from '../Constants/Lenis'
import Head from '../ServicesSection/Head'
// export {bgEffect} from '../Constants/main'
// import video from './vidio2.mp4'
// import video from './video.mp4'

const Services2 = () => {
  return (
    <Lenis>
    <div id='id' className='w-screen relative h-auto z-[2] md:pt-[5px]  bg-black pb-[200px] '>
        <div className="woo fixed -z-[1] h-[120vh] w-full inset-0"></div>

        <div aria-hidden="true" className="fixed  left-0 -z-[10]  inset-0 grid grid-cols-2 -space-x-52 opacity-65 lg:md:sm:opacity-45">
                    <div className="con6 w-screen "></div>
                    <div className="blur-[106px] rotate-[180deg] h-[80px] opacity-40 lg:md:sm:opacity-85 relative -left-[0px] top-[60px] bg-gradient-to-r from-cyan-400 to-sky-300"></div>
                
        </div>

        




      <div className="max-w-[1500px] px-4 md:lg:px-5 h-full mx-auto w-full">
        
        <div className=' w-full  pb-[70px] flex flex-col text-wrap md:lg:pb-[70px] pt-[100px]'>
                  {/* Head Title */}
                  <h1   className='con3 text-[12vw] pointer-events-none tracking-[1px]    relative font-[700] sm:text-[12.5vw]  lg:text-[8.5vw] font-Poppins   lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Our Services</h1> 

                  <div className="w-full absolute top-0 left-[120px] opacity-40">
                    <div className="h-[500px] -rotate-45 w-[180px] z-[-5]  absolute left-[100px] blur-[60px] top-0 bg-red-500 rounded-full"></div>
                    <div className="h-[500px] -rotate-45 w-[150px] z-[-5]  absolute left-[250px] blur-[50px] top-0 bg-blue-500 rounded-full"></div>
                  </div>
                 
          </div>

          {/* <div className="bg-white w-full h-10 relative -top-10"></div> */}

        <section>
            <Head />
        </section>
          
      </div>
      
    </div>
    </Lenis>
  )
}

export default Services2
