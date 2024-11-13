import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='pt-[0px] sm:flex pt-10 flex-col gap-7 px-5 md:flex-opacity2 lg:flex-opacity '>
          <div className="leading-[100px]  sm: relative top-3 md:flex leading-[250px]  lg:flex items-center justify-around ">
            <p className=' text-white text-[30vw] relative top-4  sm:top-0  md:lg:text-[18vw]'>brand</p>
            <p className='text-white leading-6 text-[18px] relative -top-12  sm:top-0 lg:md:text-[16px] flex w-full'>We are specialized in setting up the foundation of your business and setting you up for success.</p>
          </div>
          <p className='text-white text-[20vw] relative -top-7 sm:top-0 md:lg:text-position2'>experince</p>
          <div className="leading-[100px] md:flex leading-[250px]  lg:flex items-center justify-around">
            {/* <p className='text-white pt-6 leading-6 text-[16px] flex w-[280px]'>Our team of experienced developers and innovative designers work together to craft tailor-made web solutions that not only look amazing but perform seamlessly across all devices.</p> */}
            <p className='text-white leading-6 text-[18px] relative top-4  sm:top-0 lg:md:text-[16px] flex w-full'>Transform Your Digital Presence with Our Web Development & Design Expertise.</p>
            <p className='text-white text-[26vw] relative -top-14 sm:-top-0  md:lg:text-[18vw]'>societe</p>
            
          </div>
      </div>
      
      
    </>
  )
}

export default Hero
