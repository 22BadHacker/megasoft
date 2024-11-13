import Nav from "./component/Nav";
import Contact from "./section/Contact";
import Hero from "./section/Hero";
import Main from "./section/Main";
import {motion, useMotionTemplate} from 'framer-motion'

export default function App() {

  


  return (
    <main className="relative">
      <Nav />

      {/* <section style={backgroundImage} className="aurora h-screen relative w-screen bg-[#000] overflow-hidden">
        
          <Hero />
      </section> */}

      <section className=" relative">
        <Contact />
      </section>
    </main>
  )
}