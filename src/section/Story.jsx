import React, { lazy } from 'react'
import Lenis from '../Constants/Lenis'

const First = lazy(() => import('../StoryCom/First'))

const Story = () => {
  return (
    <Lenis>
      <div className='w-screen relative  h-auto z-[1]  bg-black pb-[200px]'>


        <div className="woo fixed -z-[1] h-[120vh] w-full inset-0"></div>
          <div aria-hidden="true" className="fixed  left-0 -z-[1]  inset-0 grid grid-cols-2 -space-x-52 opacity-65 lg:md:sm:opacity-35">
                        <div className="con6 w-screen "></div>
                        <div className="blur-[106px] rotate-[180deg] h-[80px] opacity-40 lg:md:sm:opacity-85 relative -left-[0px] top-[60px] bg-gradient-to-r from-cyan-400 to-sky-300"></div>
                    
          </div>
        
          <div className="max-w-[1500px] px-4 md:lg:px-5 h-full mx-auto w-full">
            <div className="w-full  pb-1 flex flex-col text-wrap md:lg:pb-[70px] pt-[100px]">
              <section>
                  <First />
              </section>

            </div>

          </div>




        
        
      </div>
    </Lenis>
  )
}

export default Story
