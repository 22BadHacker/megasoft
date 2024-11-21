import React from 'react'
import img1 from '../Assets/services/img3.png'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { services } from '../Constants/main'
// import  '../Assets/services/'
// import VideoJS from './VideoJS'
// import video from './vidio2.mp4'
import video from './video.mp4'

const Services = () => {
  return (
    <div className='w-screen  bg-black pb-[200px] '>

      <div className="max-w-[1500px] px-4 md:lg:px-5 h-full mx-auto w-full">
        <div className=' w-full  pb-1 flex flex-col text-wrap md:lg:pb-[70px] pt-[100px]'>
                  {/* Head Title */}
                  <h1  className='text-[12vw] pointer-events-none tracking-[2px]   font-roboto relative font-[900] sm:text-[12.5vw]  lg:text-[8.5vw] tracking-tight   lg:even:-top-[65px] md:text-[11vw] md:even:-top-[50px]'>Our Services</h1>  
                  <h5 className='lg:md:max-w-[800px] text-white/75 pb-5 text-[16px] md:lg:text-[17px]'> our team of experts is here to bring your vision to life. With a passion for creativity and a focus on technology, we help businesses grow online, enhance user experiences, and achieve measurable results</h5>             
          </div>

          {/* <div className="w-full mb-10  h-full grid grid-cols-1">
            <video controls='false' className='w-full h-full' autoPlay muted  loop='true' src={video}></video>
          </div> */}


          {/* <div className="w-full place-content-center  mt-5 gap-4 mx-auto place-items-center lg:mt-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-2 lg:gap-4 lg:md:gap-y-7">
             

                {services.map((item) => {
                   const {src, icone, href, name, number} = item;
                 return (

                  <div className='box  relative h-[32vw] w-full lg:h-[17vw] lg:w-full  rounded-[5px] overflow-hidden'>
                    <img className='pics w-full  cursor-pointer transition delay-75  h-full object-cover filter brightness-[.8] ' loading='lazy'  src={src} alt="" />
                    <h5 className='absolute hover:text-orangee cursor-pointer transition delay-75 top-2 left-2 text-[12px] md:lg:top-4 md:lg:left-4 rounded-full md:lg:py-2 md:lg:px-[11px] flex items-center justify-center bg-[rgb(17,17,17,.2)] px-2 py-[5.5px] backdrop-blur-[10px] text-white font-bold lg:md:text-[1vw] '>{number}</h5>
                    <p className='absolute cursor-pointer  lg:md:bottom-3 left-2 text-wrap leading-tight   text-white lg:md:leading-[1.5vw] font-bold text-[14px] lg:text-[1.5vw] '>{name}</p> 
                    <a href={href} className='rita'>{icone}</a>

                  </div>


                 )
                })}


               
          </div> */}

          <div className="grid grid-cols-2">
              <img className='max-w-[600px] w-full h-full object-cover' loading='lazy]' src={img1} alt="img1" />
              <div className="flex flex-col w-full justify-center items-center lg:md:leading-[180px]">

                  <h1 className='number lg:md:text-[21vw] font-novea font-[900]'>1</h1>
                  <h2 className='text-[8vw] font- font-[900] uppercase'>Branding</h2>
                  <p>& Graphic Design</p>
              </div>
          </div>
          
          {/* <div className=' w-full  pb-1 flex flex-col text-wrap md:lg:pb-[70px] pt-[100px]'>
                 
                  <h5 className='lg:md:max-w-[800px] text-white/75 pb-5 text-[16px] md:lg:text-[18px]'>Our rich design and technology expertise delivers top brands and digital experiences.</h5>             
          </div>

          <div className="grid grid-cols-2">
                <div className="flex flex-col">
                  
                </div>
          </div> */}

          {/* A full-service digital
          innovation partner
          Our rich design and technology expertise delivers top brands and digital experiences.

          Services list */}



            {/* <a href="" style={{transition: 'all .3s ease-in-out'}} className=' text-white/90 flex justify-center items-center gap-3 text-[14px] lg:md:text-[20px] lg:text-[18px] hover:bg-[#222] font-semibold hover:scale-95 px-4 py-1  rounded-full lg:md:px-10 lg:md:py-3 bg-orangee'>See More 
            <FaArrowLeftLong className='  cursor-pointer -rotate-[230deg] text-[14.5px]  text-white '/>
            </a> */}
      </div>
      
    </div>
  )
}

export default Services
