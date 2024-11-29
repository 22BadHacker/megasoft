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




