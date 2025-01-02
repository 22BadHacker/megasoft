import React from 'react'
import logo from './Asset/Logo.svg'
import business2 from '../Assets/Work/Free Business Cards on Chair Mockup.jpg'
import business from '../Assets/services/Mockup-megaWeb.png'
import img1 from '../Assets/Work/Device-Mockup_6.jpg'
import img2 from '../Assets/Work/Mockup.jpg'
import img3 from './Asset/Business_Card_on_Paper_Mockup.webp'


const BigText = () => {
  return (
    <div className='w-full grid grid-cols-1 gap-20'>
        <h1 className='text-[110px] leading-[1.05] max-w-[1100px] font-medium text-white drop-shadow-[2px_2px_20px_rgb(255,255,255,.3)] font-[Poppins] '>Of all the projects we've done, this is our favorites</h1>
        <div className="full grid-cols-2 grid gap-2">
            <div className="grid grid-cols-1 w-full gap-2 ">
                {/* <p className='text-[30px] font-medium text-white  drop-shadow-[2px_2px_20px_rgb(255,255,255,.3)] font-Poppins '>Building Our Own Brand</p> */}
                <div className=' z-[1] overflow-hidden backdrop-blur-[20px]  w-full relative  bg-gradient-to-br from-[rgb(0,0,0,.1)] to-[rgb(0,0,0,.35)]  p-[10px_12px]  '>
                    <img src={logo} className='size-full object-cover saturate-150' alt="MEGASOFT" />
                    <div className="w-[200px] opacity-70 h-[100px] z-[-5]  absolute right-[0px] blur-[120px] -top-0 bg-red-600 rounded-full"></div>
                    <div className="w-[200px] opacity-70 h-[100px] z-[-5]  absolute left-[0px] blur-[140px] -bottom-0 bg-blue-500 rounded-full"></div>
                </div>
                <div className='grid h-full grid-cols-2 w-full gap-2 '>
                    {/* <div className='w-full  border-[.5px] opacity-70 '>

                    </div>
                    <div className='w-full h-full border-orangee border-[.5px] opacity-70'>

                    </div> */}
                        <img src={business} className='w-full h-full object-cover' alt="Business Card" />
                        <img src={business2} className='w-full h-full object-cover' alt="Business Card" />

                </div>
            </div>



            <div className="grid w-full h-auto grid-cols-2 gap-2">

                <div className='w-full h-full grid grid-cols-1 gap-2 '>
                    <img src={img2} alt='Web Site' className="size-full object-cover " />
                    <img src={img3} alt="Intelligence Industry" className=" object-cover size-full" />
                </div>
                <img src={img1} alt="FLOORA" className="w-full h-full object-cover flex" />
            </div>
        </div>

    </div>
  )
}

export default BigText
