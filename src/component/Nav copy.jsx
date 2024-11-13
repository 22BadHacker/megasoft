import React, {useState, useEffect} from 'react'
import  {navLinks} from '../Constants/main'
import logo from '../Assets/logo.svg'
import logo2 from '../Assets/new.svg'
import {mix, motion, AnimatePresence} from 'framer-motion'
import Hamburger from 'hamburger-react'
import { text } from 'framer-motion/client'
import { hover } from '@testing-library/user-event/dist/hover'
import { svgPath } from '../Constants/main'

const Nav = () => {

    const [open, setOpen] = useState(false)
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [isHovered, setIsHovered] = useState("default");

    useEffect(() => {
        const handleMouseMove = (event) => {
          setMousePosition({ x: event.clientX, y: event.clientY });
        // console.log(event)
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    const variants = {
        default: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            opacity: .4
        },
        Hovered: {
           width: 150,
           height: 150,
           x: mousePosition.x - 80,
           y: mousePosition.y - 80,
            opacity: .4,
            backgroundColor: '#000',
            mixBlendMode: 'difference',
        }

    }

    const textEnter = () => {
        setIsHovered("Hovered");
      };
      const textLeave = () => {
        setIsHovered("default");
      };


  return (
    <header className='h-16 bg-transparent z-10 fixed top-0 left-0 inset-0 flex-center'>
        <nav className='w-full z-10 max-w-[1400px] mx-auto px-5 flex-center-between  py-3 '>
            <a href="#">
                
                <img className='size-[170px] lg:size-[180px] ' src={logo2} alt="" />
                
            </a>

            <ul className='lg:flex-center-gap hidden'>
                {
                    navLinks.map((link) => {
                        const { href, label } = link
                        return (
                            <li  key={label}>
                                <a onMouseEnter={textEnter} onMouseLeave={textLeave}  href={href} className='text-white/70 font-roboto font-semibold text-[18.5px] hover:text-[#fff]'>{label}</a>
                            </li>
                        )
                    })
                }
            </ul>
            
            <div className='flex items-center  gap-3'>
                
                <a className='hover:text-white sm:btn-flex2 hover:text-black lg:btn-flex '  href="#">Get in Touch</a>
                
                <div className='lg:hidden flex'>

                    <Hamburger size={23} color="white" toggled={open} toggle={setOpen} />
                </div>
            </div>

        </nav>
            {open && (
                <AnimatePresence >
                    <motion.div
                        
                        transition={{ duration: 0.2, delay: .2, ease: 'easeInOut' }}
                        initial= {{top: '-100vh'}}
                        animate={{top: '0%'}}
                        exit={{opacity: 0, transition: {duration: 4,delay: 4, ease: 'easeInOut'}}}
                        
                        
                        className='flex overflow-hidden flex-col justify-center items-center z-8 h-screen p-4  gap-6 fixed bg-slate-900 absolute top-0 left-0 w-screen lg:hidden'
                    >
                        {
                            navLinks.map((link, i) => {
                                const { href, label } = link
                                return (
                                    <AnimatePresence>
                                        <motion.a initial={{ opacity: 0, translateY: 20 }}
                                        animate={{ opacity: 1, translateY: 0 }}
                                        exit={{opacity: 0, transition: {delay:  i * 0.3, delay: 1}}}
                                        transition={{ duration: .3 , delay: i * 0.3,ease: 'easeInOut', stagger: 0.4, stiffness: 200, type: 'spring' }} key={i}  href={href} className='text-white/70 font-[roboto] font-semibold text-6xl hover:text-[#fff]'>{label}</motion.a>
                                    </AnimatePresence>
                                )
                            })
                        }
                    </motion.div>
                </AnimatePresence>
            )}

        <motion.div variants={variants} animate= {isHovered} className="pointer-events-none drop-shadow-md decoration-rose-100  cursor-none h-8 w-8 rounded-full bg-orangee fixed top-0 left-0"></motion.div>
      
    </header>
  )
}

export default Nav
