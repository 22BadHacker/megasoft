import React from 'react'
import team from '../Assets/Team.jpeg'
import team2 from '../Assets/Team2.jpg'
import team3 from '../Assets/Team3.webp'
import Avatar4 from '../Assets/Avatar4.webp'
import Avatar3 from '../Assets/Avatar3.webp'
import Drag4 from './Drag4'
import Drag5 from './Drag5'

const OurStory = () => {
  return (
    <div className='story z-[2] py-6 pt-7 mt-[100px] px-4 md:lg:px-5 mx-auto w-full'>

        <div className="w-full z-[4]  flex flex-col">
            <p className='text-white flex items-center gap-1 text-[35px] w-fit duration-300 ease-in-out cursor-pointer hover:text-orangee font-bold pb-4 hover'><span className='bg-orangee w-8 h-[2px]'> </span>A Bit About Our Story</p>
            <div className="grid w-full gap-8 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 place-items-center">
              <div className="flex flex-col gap-2 w-full items-center justify-center">

                  <div className="flex items-center relative px-2 text-center w-[100%] opacity-40">
                      <div className="w-[9px] h-[9px] border-[.5px] border-orangeLight rounded-full"></div>
                      <div className="h-[.5px] w-[50%]  bg-orangee"></div>
                      <div className="w-[9px] h-[9px] border-[.5px] border-orangeLight rounded-full"></div>
                      <div className="h-[.5px] w-[50%]  bg-orangee"></div>
                      <div className="w-[9px] h-[9px] border-[.5px] border-orangeLight rounded-full"></div>
                      
                  </div>
                <h2 className='stoo     text-[16.5px] md:text-[19.5px] font-medium'>It all began with a shared passion for creativity and technology. <span className='font-bold backdrop-blur-[10px] text-orangee p-[2px_10px] bg-orange-600/10 rounded-[15px]'>MEGASOFT</span> was founded by a group of visionary designers, developers and teachers  who believed that great design and seamless functionality should go hand in hand. From day one, our mission has been simple: to craft beautiful, effective digital experiences that drive results and help businesses connect with their audience in meaningful ways.</h2>
              </div>
                {/* <h2 className='text-white/80 text-center text-[19px] md:lg:text-[22px] font-medium'>What started as a small, <span className='px-3 py-1 bg-orange-500/50'>close-knit</span> team has grown into a thriving studio, yet our core values have remained unchanged: creativity, innovation, and collaboration. Over the years, we've had the privilege of working with businesses of all sizes, from local startups to established enterprises, helping them build unique brands and strong online presences.</h2> */}
                {/* <h2 className='text-white/80 text-center text-[19px] md:lg:text-[22px] font-medium'>As we continue to evolve, we remain committed to pushing the boundaries of design and development, blending cutting-edge technology with timeless creativity. Our story is one of growth, passion, and a relentless drive to make every project a success. We’re excited to be part of your journey and look forward to creating something exceptional together.</h2> */}
                <div className="w-full flex lg:flex-col lg:left-20 relative flex-col gap-7 md:items-start items-center justify-center">
                  <div className="w-full absolute -top-20 left-5  opacity-20">
                    <div className="h-[700px] -rotate-45 w-[180px] z-[-5]  absolute left-[120px] blur-[60px] top-0 bg-red-500 rounded-full"></div>
                    <div className="h-[600px] -rotate-45 w-[150px] z-[-5]  absolute left-[270px] blur-[50px] top-0 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-full absolute -top-20 left-20  opacity-20">
                    <div className="h-[700px] rotate-45 w-[180px] z-[-5]  absolute left-[120px] blur-[60px] top-0 bg-red-500 rounded-full"></div>
                    <div className="h-[600px] rotate-45 w-[150px] z-[-5]  absolute left-[270px] blur-[50px] top-0 bg-blue-500 rounded-full"></div>
                  </div>
                  <Drag4  name='El Harti Mohhammed' email='mohamedharti1989@gmail.com' img={Avatar4}/>
                  <Drag5  name='Ait Meryem Said' email='aitmeryem.s@gmail.com' img={Avatar3}/>

                </div>

            </div>
        </div>
        
    </div>
  )
}

export default OurStory




