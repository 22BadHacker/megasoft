import React from 'react'
import Contact from './section/Contact'
import App from './App'
import Nav from './component/Nav'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import Services from './section/Services'

const Routers = () => {
  return (
    <div className='boxContain relative overflow-x-hidden'>
    <Nav />
      <Router>
          <Routes>
              {/* <Route path='/' element={<App />} /> */}
              <Route path='/' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>

      </Router>
      <Footer />
      
    </div>
  )
}

export default Routers
