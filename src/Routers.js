import React from 'react'
import Contact from './section/Contact'
import App from './App'
import Nav from './component/Nav'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import Services from './section/Services'
import Work from './section/Work'
import Home from './section/Home'

const Routers = () => {
  return (
    <>
    
      <Router>
        <Nav />
        
      
      <div className='boxContain  w-auto h-auto z-5 relative  overflow-x-hidden bg-black'>
          
            <Routes>
                
                <Route path='/' element={<Home />} />
                <Route path='/ourWork' element={<Work />} />
                <Route path='/services/' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
          
            <Footer />
        </div>
        </Router>
        
    </>
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