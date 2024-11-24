
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6'
import { services,text } from '../Constants/main'
import design from '../Assets/design.jpg'
import brand from '../Assets/brand.png'
import { motion } from 'framer-motion'

import video from './video.mp4'

const Services = () => {
  return (
    <div id='id' className='w-screen h-auto z-[2] pt-[120px] bg-black pb-[200px] '>

      <div className="max-w-[1500px]  relative px-4 md:lg:px-5 h-full mx-auto w-full">
      <div aria-hidden="true" className="absolute opacity-55 left-0  inset-0 grid grid-cols-2 -space-x-52  lg:md:sm:opacity-35">
                    <div className="con6"></div>
                    <div className="blur-[106px] rounded-full rotate-[180deg] h-[80px] opacity-85 relative -left-[0px] top-[50px] bg-gradient-to-r from-cyan-400 to-sky-300"></div>
                    
          </div>
        
        
        {/* Head Title */}
        <div className="w-full conns place-content-between lg:place-items-center sm:gap-8 grid lg:md:grid-cols-[1fr_1fr] grid-cols-1 ">
          <div className=' w-full relative  pb-[60px] flex flex-col text-wrap md:lg:pb-[70px] '>
                    <h1   className='con3 text-[12vw] lg:md:pl-1 pl-1 pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[6vw] tracking-tight    md:text-[14vw] '>Our Services</h1> 
                    <h1  className='lg:text-[2vw] pl-2 text-[5vw] lg:md:sm:pl-3 font-medium text-[20px] sm:text-[28px] sm:-top-[15px] relative lg:md:-top-2 opacity-85'>What <span className='text-orangee'>Services</span> We're Offering</h1> 
            </div>

            <p className='w-full lg:md:pr-3 lg:pl-0 px-2 lg:top-[20px] lg:pt-[1vh] relative -top-10  md:-top-[75px] sm:-top-[60px] text-white/70 text-[15px] lg:md:sm:text-[16.5px] max-w-[650px] font-medium flex'><span className='text-orangee pr-1'>* </span> {text}</p>

        </div>



        {/* Services */}

        <div className="w-full grid grid-cols-1">

          <div className="grid grid-cols-1 gap-3 lg:md:mt-[70px] px-2">

              <div   className="div1 w-full relative lg:md:sm:py-5 py-3 border-b-[1.1px] border-white/70 flex justify-between items-center">
                  
                  <p style={{transition: '.3s ease-in-out'}} className='brandText lg:md:text-[4.8vw] flex gap-2 relative text-[30px] sm:text-[5.5vw] font-novea '>Branding <img className='brand object-cover w-[140px] rotate-[10deg] h-[140px] absolute -right-[180px] -top-10' src={brand} alt="" /></p>
                  <p style={{transition: '.3s ease-in-out'}} className='lg:md:desc sm:text-[12px]  text-[14px] max-w-[600px] hidden  relative top-4 opacity-95'><span className='text-orangee pr-2 '>*</span>Effective branding builds trust, fosters loyalty, and shapes how customers perceive a company or product. It helps communicate the values, personality, and mission, making it easier for people to connect with and remember the brand.</p>
                  <FaArrowRight className='text-white size-[30px] p-[5.5px] sm:size-[32px] sm:p-[5.5px] lg:md:size-[48px]   lg:md:p-[11px] rounded-full border-[1.1px]  border-white/80 bg-black'/>
                  

              </div>

              <div className="flex flex-col gap-5">
                <p className='lg:md:hidden  text-[14px] max-w-[600px]   relative top-4 opacity-95'><span className='text-orangee pr-2 '>*</span>Effective branding builds trust, fosters loyalty, and shapes how customers perceive a company or product. It helps communicate the values, personality, and mission, making it easier for people to connect with and remember the brand.</p>
                <div className="grid pt-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-[10px] lg:md:mt-[10px]">
                  <div className="flex flex-col gap-2">
                        <p className='num text-center text-[55px] lg:md:text-[80px]  font-[800] relative top-2'>1</p>
                      <div className="flex flex-col lg:md:text-left text-center g">
                        <img className='object-cover w-full h-full' src={design} alt="" />
                          <p className='text-[22px] pt-1  text-orangee font-semibold'>Logo Design</p>
                          <h6 className='opacity-90 text-[14px]'>Creating unique and memorable logos for brand identity.</h6>
                      </div>

                  </div>
                  
                </div>
              </div>
            
          </div>
        </div>



         

          
          
          
      </div>
      
    </div>
  )
}

export default Services
