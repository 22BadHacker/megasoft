import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { RiThunderstormsLine } from "react-icons/ri";
import { PiStrategyLight } from "react-icons/pi";
import { SiCodeblocks } from "react-icons/si";
import { GoGitBranch } from "react-icons/go";
import { LiaBarcodeSolid } from "react-icons/lia";
import { VscVscodeInsiders } from "react-icons/vsc";

const Process = () => {
  return (
    <div className='w-full grid grid-cols-[.5fr_1fr] gap-1 pt-[100px]'>
         <p className='text-white text-[18px]  cursor-pointer sm:text-[16px] drop-shadow-[2px_2px_10px_rgb(255,255,255,.6)] h-fit font-medium flex items-center gap-2'>OUR APPROCHE <MdOutlineArrowRightAlt className='border-orange-500/40 text-orangee rounded-[10px] w-8 border-[.5px]'/></p>
         
         <div className="grid grid-cols-3 gap-x-6 gap-y-20" >

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <div className='text-white text-[27px]  bg-orangee justify-center  size-[45px] rounded-full flex items-center gap-2'>
                      <SiCodeblocks />
                    </div>
                    <p><span className='text-white font-semibold'>01</span> UNDERSTAND</p>
                </div>

                <h1 className='text-white text-[23px] tracking-wide  drop-shadow-[1px_1px_8px_rgb(255,255,255,.4)]'>Setting the direction and roadmap</h1>

            </div>


            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <div className='text-white text-[32px] bg-orangee justify-center  size-[45px] rounded-full flex items-center gap-2'>
                      <PiStrategyLight />
                    </div>
                    <p><span className='text-white font-semibold'>02</span> SCOPE</p>
                </div>

                <h1 className='text-white text-[23px] tracking-wide  drop-shadow-[1px_1px_8px_rgb(255,255,255,.4)]'>Deciding about the solution stack</h1>

            </div>


            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <div className='text-white text-[32px] bg-orangee justify-center  size-[45px] rounded-full flex items-center gap-2'>
                      <VscVscodeInsiders />
                    </div>
                    <p><span className='text-white font-semibold'>03</span> BUILD</p>
                </div>

                <h1 className='text-white text-[23px] tracking-wide  drop-shadow-[1px_1px_8px_rgb(255,255,255,.4)]'>Building and breaking the app</h1>

            </div>

          <div></div>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <div className='text-white text-[32px] bg-orangee justify-center  size-[45px] rounded-full flex items-center gap-2'>
                      <GoGitBranch />
                    </div>
                    <p><span className='text-white font-semibold'>04</span> DEPLOY</p>
                </div>

                <h1 className='text-white text-[23px] tracking-wide  drop-shadow-[1px_1px_8px_rgb(255,255,255,.4)]'>Getting the app launch-ready</h1>

            </div>


            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <div className='text-white text-[32px] bg-orangee justify-center  size-[45px] rounded-full flex items-center gap-2'>
                      <LiaBarcodeSolid />
                    </div>
                    <p><span className='text-white font-semibold'>05</span> DELEVERY</p>
                </div>

                <h1 className='text-white text-[23px] tracking-wide  drop-shadow-[1px_1px_8px_rgb(255,255,255,.4)]'>Hand over to the client</h1>

            </div>

         </div>
    </div>
  )
}

export default Process
