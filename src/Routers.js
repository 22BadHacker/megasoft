import React,{lazy, Suspense} from 'react'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'

import Lenis from './Constants/Lenis'
const Nav = lazy(() => import('./component/Nav'))
const Services2 = lazy(() => import('./section/Services2'))
const Contact = lazy(() => import('./section/Contact'))
const Home = lazy(() => import('./section/Home'))
const Work = lazy(() => import('./section/Work'))
const Footer = lazy(() => import('./component/Footer'))
const FallBack = lazy(() => import('./Constants/FallBack'))
const Story = lazy(()=> import('./section/Story'))


const Routers = () => {
  return (
    <Lenis>
    <div className='w-screen h-auto relative overflow-x-hidden'>
        {/* <div className="body w-screen h-screen bg-black  relative overflow-y-scroll"> */}
            
              {/* <PreLoader /> */}

                <Router>
                  <Nav />
                  
                
                  <div className='boxContain  w-auto h-auto z-5 relative  overflow-x-hidden bg-black'>

                  <Suspense fallback={<FallBack />}>

                      <Routes>
                          
                          <Route path='/' element={<Home />} />
                          <Route path='/ourWork' element={<Work />} />
                          <Route path='/contact' element={<Contact />} />
                          <Route path='/services/' element={<Services2 />} />
                          <Route path='/OurStory' element={<Story />} />
                          {/* <Route path='Load' element={<FallBack />} /> */}
                          
                      </Routes>
                    
                  </Suspense>
                    
                      <Footer />
                  </div>
                  </Router>
          {/* </div> */}
    
        
    </div>
    </Lenis>
  )
}

export default Routers


//  {/* <div style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}} className='w-full h-[470px] relative'>
//             <Footer />
//           </div> */}

// <div style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}} className='w-full h-[470px] relative'>
//             <div className="relative h-[calc(100vh-470px)] -top-[100vh]">
//               <div className="sticky top-[calc(100vh-470px)] h-[470px]">

//                 <Footer />
//               </div>

//             </div>
//           </div>