import React from 'react'
import img from '../Assets/newColor.svg'
import {motion} from 'framer-motion'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const Head = () => {
  // const getBlocks = () => {
  //   const {innerWidth, innerHeight} = window;
  //   const blockSize = innerWidth * 0.05;
  //   const amountOfBlocks = Math.ceil(innerHeight / blockSize);
  //   return [...Array(amountOfBlocks)].map((_,i) => (<div key={i} className='bg-orangee h-[5vh] w-full'></div>))
  // }

  // const shuffle = (a)=>{
  //   var j, x,i;
  //   for(i=a.length - 1; i>0; i--){
  //     j = Math.floor(Math.random() * (i + 1));
  //     x = a[i];
  //     a[i]= a[j];
  //     a[j]=x;
  //   }

  //   return a;
  // }

  // const delays = shuffle([...Array(10)].map((_,i) => i))
  
  return (
    <div className='w-full h-auto grid grid-cols-1 place-items-center gap-1 pb-[100px] pt-[70px]'>
        <div className="w-full flex justify-center items-center">
            <div className="w-2 h-2 rounded-full  bg-transparent  border-[.5px] border-orangee"></div>
            <div className="w-20 h-[1px] bg-orangee"></div>
            <img src={img} className='w-[170px] backdrop-blur-[20px]  border-[.5px] border-orangeLight bg-transparent drop-shadow-[0_10px_10px_rgb(0,0,0,.8)] px-4 py-2 rounded-full' alt="MEGASOFT" />
            <div className="w-20 h-[1px]  bg-orangee"></div>
            <div className="w-2 h-2 rounded-full  bg-transparent  border-[.5px] border-orangee"></div>

        </div>
        <h1 className='num text-center w-full relative pt-2 leading-[1.1] text-[60px] sm:text-[80px] text-white font-bold'><span className='text-transparent drop-shadow-[0px_0_30px_rgb(255,255,255,.8)]'>It's our job to Light up your</span> Success </h1>
        
        

        <div className="grid w-full grid-cols-2 pt-[100px]">
          <p className='text-white h-fit font-medium flex items-center gap-2'>THE BACKSTORY <MdOutlineArrowRightAlt className='border-orange-500/40 text-orangee rounded-[10px] w-8 border-[.5px]'/></p>
          <h1 className='text-[20px] font-medium text-white relative'> Back in Early 2024, There was two childhood friends, Said and Mohammed. <br />  Said. ' Why don’t we start something together? " <br /> Mohammed raised an eyebrow. "Like what?" <br /> " A web design company," Said to Mohammed. "You can bring the creative vision, and I’ll handle the Client." <br /> Mohammed hesitated, then smiled. "Why not? Let’s do it." and the rest is history.</h1>

        </div>

    </div>


// There was two childhood friends, Mohammed and Said. <br /> Said, Who spent his days inspiring students to think beyond textbooks. Mohammed, the problem-solver a Brilliant software developer. 

        // <div className="mt-10 w-full flex  h-[400px] overflow-hidden">
        //   {
        //     [...Array(25)].map((_,i) => (<div key={i} className=' w-[5vw] grid grid-cols-1  h-full'>{delays.map((_,i)=> (<motion.div   key={i} className='bg-orangee  w-f}ull'></motion.div>))}
        //     </div>))
        //   }

        // </div>
    // <div className='w-full h-auto grid grid-cols-2 pb-[100px] pt-[70px] gap-10'>
    //     <p className='text-[110px] font-bold flex flex-col leading-[.95]'>build<span className=' text-[35px] tracking-wide text-white/90 w-max bg-orangee px-2'>we are</span>  <span className='text-white font-novea drop-shadow-[1px_1px_1px_orange]'>MEGASOFT</span></p>
    //     <p className='text-[110px] relative top-[90px] font-bold flex flex-col leading-[.95]'><span className=' text-[35px] tracking-wide text-white/90 w-max bg-orangee px-2'>we are</span>  <span className=' num font-novea   relative drop-shadow-[1px_1px_0px_orange]'>MOROCCAN</span></p>
    // </div>
  )
}

export default Head
