import React, { lazy } from 'react'
import Lenis from '../Constants/Lenis'
import Stack from '../StoryCom/Stack'
import Expert from '../StoryCom/Expert'
import WhyUs from '../StoryCom/WhyUs'
import Sigma from '../StoryCom/Sigma'
import Process from '../StoryCom/Process'
import BigText from '../StoryCom/BigText'
// import About from '../StoryCom/about'
// import Head from '../StoryCom/Head'

const First = lazy(() => import('../StoryCom/First'))
const Head = lazy(() => import('../StoryCom/Head'))
const About = lazy(() => import('../StoryCom/About'))
const Serv = lazy(() => import('../StoryCom/Serv'))


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
            
            <div className="w-full  pb-1 flex flex-col text-wrap md:lg:pb-[70px] pt-[70px]">
              <section>
                  <Head />
              </section>

              <section>
                  {/* <About /> */}
              </section>

              {/* <section>
                  <First />
              </section> */}
              <div className="w-full h-[.2px] bg-white opacity-30 my-20"></div>
              {/* <div className="w-full flex  my-[100px]  items-center opacity-30 ">
                  <div className="h-3 w-3 border-orangeLight border-[.5px]"></div>
                  <div className="w-1/2 h-[.5px] bg-orangeLight"></div>
                  <div className="h-3 w-3 border-orangeLight border-[.5px]"></div>
                  <div className="w-1/2 h-[.5px] bg-orangeLight"></div>
                  <div className="h-3 w-3 border-orangeLight border-[.5px]"></div>
              </div> */}
              <section className=' relative'>
                  {/* <h1 className='text-white sm:text-[70px] leading-[1] max-w-[400px] pb-20  cursor-pointer text-[30px]  h-fit font-semibold'>Web app development</h1> */}
 
                  {/* <Expert /> */}
                  <Serv />
              </section>

              <section className=' relative pt-10'>
                  <Stack />
              </section>

              {/* <div className="w-full h-[.2px] bg-white opacity-30 my-20"></div> */}

              <section className=' relative pt-10'>
                  <Process />
              </section>

              <section className=' relative pt-[180px]'>
                  <BigText />
              </section>

              <section className=' relative pt-[140px]'>
                  <Sigma />
              </section>

              <section className=' relative pt-[100px]'>
                  <First />
              </section >

              <section className=' relative pt-[120px]'>
                  <WhyUs />
              </section>


            </div>

          </div>




        
        
      </div>
    </Lenis>
  )
}

export default Story
