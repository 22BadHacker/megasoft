import React from 'react'
// import img55 from '../Assets/image.webp'
// import img66 from '../Assets/Tux.avif'


const Effect = () => {
  return (
    <>
        <div className="w-3 h-3 absolute -top-1 -left-1 bg-orangee"></div>
        <div className="w-3 h-3 absolute -top-1 -right-1 bg-white"></div>
        <div className="w-3 h-3 absolute -bottom-1 -left-1 bg-white"></div>
        <div className="w-3 h-3 absolute -bottom-1 -right-1 bg-orangee"></div>
        {/* <img src={img55} alt="" /> */}
        {/* <img src={img66} className='absolute w-full h-full mix-blend-difference top-0 left-0' alt="" /> */}
        <div className="w-full h-full absolute top-0 left-0 backdrop-blur-[70px]"></div>
    </>
  )
}

export default Effect
