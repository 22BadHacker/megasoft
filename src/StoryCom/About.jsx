import React from 'react'
import img1 from '../Assets/Team.jpeg'
import img2 from '../Assets/Team2.jpg'
import img3 from '../Assets/Team3.webp'

const About = () => {
  return (
    <div className='w-full h-auto relative flex flex-col'>

        <div className="flex flex-col gap-1 pb-[80px] relative">
            <h1 className='text-[50px] text-white font-semibold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]'>A few things On Our Story</h1>
            <p className='text-[19px] tracking-[.2px] font-semibold text-white/90 bg-orangee w-fit px-1 '>Our Values are the center of everything we do</p>
        </div> 


        <div className="columns-4 h-auto w-full">
            <img src={img1} className='w-full h-[300px] object-cover' alt="" />
            <img src={img2} className='w-full h-full object-cover' alt="" />
            <img src={img3} className='w-full h-full object-cover' alt="" />
        </div>
    </div>
  )
}

export default About
