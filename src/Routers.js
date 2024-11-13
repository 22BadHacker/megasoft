import React from 'react'
import Contact from './section/Contact'
import App from './App'
import Nav from './component/Nav'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <>
   <Nav />
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

    </Router>
      
    </>
  )
}

export default Routers
