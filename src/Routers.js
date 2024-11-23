import React from 'react'
import Contact from './section/Contact'
import App from './App'
import Nav from './component/Nav'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import Services from './section/Services'
import Work from './section/Work'
import Home from './section/Home'
import Transition from './Constants/Transition'

const Routers = () => {
  return (
    <>
      <Router>
      <div className='boxContain z-5 relative overflow-x-hidden bg-black'>
      {/* <Transition /> */}
          <Nav />
            <Routes>
                {/* <Route path='/' element={<App />} /> */}
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
