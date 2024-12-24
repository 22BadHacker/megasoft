import {useState} from 'react'
import  {navLinks, navLinksPhone , socialLinks, scrollToTop} from '../Constants/main'
import logo2 from '../Assets/newColor.svg'
import {motion, AnimatePresence} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'




const Nav = () => {

    const [open, setOpen] = useState(false)
    
    
    
   
    
    const toggleMenu = () => {
        setOpen( !open)
        
    }

    let toggleClass = open ? "open" : '';

    
    
    useGSAP(
        () => {
            
            gsap.from('.li', { opacity: 0, ease: 'circ.inOut', y: 10, stagger: {amount: .4}, delay: .4 }); 
            
        },
        
    ); 

   

  return (

    <>

        <header id='navbar' className='lg:md:heaad w-[97.5vw] sm:head h-[68px] flex items-center bg-gradient-to-b from-[rgb(0,0,0, .1)] to-transparent backdrop-blur-sm  pb-[48px] lg:md:sm:mr-0 pt-6 z-10 fixed  top-0 left-0 inset-0 flex-center'>
            <nav className=' px-6 transition-all ease-in-out pt-8 w-full z-[22] h-full max-w-[1500px] mx-auto  flex-center-between    md:lg:px-4 md:lg:pt-10 lg:pb-2 sm:px-8'>
                {/* Logo */}
                <>
                    <Link onClick={() => {scrollToTop (); toggleMenu()}
                        
                    } to="/">

                        
                        
                        <img  className='logo size-[200px] flex-1 lg:size-[210px] ' src={logo2} alt="" />
                        
                    </Link>
                </>

                {/* Nav Links */}

                <>
                    <ul className="lg:flex-center-gap hidden">
                        {navLinks.map((link)=> {
                            const { href, label} = link
                            return (
                                <li className='li' onClick={scrollToTop}  key={label}>
        
                                    <Link onClick={scrollToTop}  to={href}  className={`linkss   relative max-w-content text-white/80 font-roboto font-semibold text-[18px] hover:text-orangee flex gap-2 items-center`}>{label}</Link>
        
                                </li>
                            )
                        })}

                    </ul>
                    
                   
                        
                </>
                    


                {/* Contact Btn */}

                <>
                    <div className='hidden lg:flex items-center  gap-3'>
                        <Link onClick={scrollToTop} className=' get hover:text-orangee lg:btn-flex '  to="/contact/">Get in Touch</Link>
                        
                    </div>
                </>
                {/*
                

                {/* Burger */}

                <>
                    <div className={`burger ${toggleClass} relative left-4 scale-[.78] flex rounded-full justify-center  flex-col gap-[6px] relative w-12 h-12  shadow-lg bg-[rgb(17,17,17,.6)] backdrop-blur-xl cursor-pointer items-center lg:hidden sm:scale-[.8]`}onClick={toggleMenu}>
                        <div className="bar absolute -translate-y-1 w-7 h-[1.5px] bg-white "></div>
                        <div className="bar2 absolute translate-y-1 w-7 h-[1.5px] bg-white"></div>
                        
                    </div>
                </>




            </nav>

            <AnimatePresence>
            
            
            {
                    toggleClass ? 


                        <>
                    
                            <motion.div  animate={{opacity: 1}} transition={{delay: .4, ease: 'anticipate', duration: .3}}   className=' overflow-x-hidden px-7 h-screen z-[20]   w-screen fixed top-0 left-0 bg-black flex-left flex-col gap-4 md:lg:hidden sm:px-8'>
                                
                                <div aria-hidden="true" className="absolute h-full w-auto overflow-hidden  left-0 -z-[1]  inset-0 grid grid-cols-2 -space-x-52 opacity-55">
                                    <div className="con6 overflow-hidden "></div>
                                    <div className="blur-[106px] rotate-[180deg] h-[80px] opacity-50 lg:md:sm:opacity-90 relative -left-[100px] top-[60px] bg-gradient-to-r from-cyan-400 to-sky-300"></div>
                                    
                                </div>
                                {navLinks.map((link, i) => {
                                    return (
                                        
                                        <div className="flex  flex-col relative  top-[120px] sm:top-[100px]">
                                            
                                            <motion.a initial={{ filter: 'blur(30px)', opacity: 0}} transition={{duration: .25,  ease: 'easeInOut', delay: i * .25,}}  animate={{ filter: 'blur(0px)', opacity: 1}} exit={{filter: 'blur(30px)', opacity: 0}}  key={i} href={link.href} className='links font-roboto font-bold cursor-pointer text-white/70 text-[55px]   hover:text-orangee '>{link.label}</motion.a>
                                        </div>
                                    )
                                })}

                                {/* Social Media */}

                                <motion.div initial={{  opacity: 0}} transition={{delay: 1.3, ease: 'easeInOut', type: 'tween'}} animate={{ opacity: 1}} className="flex   gap-[1px] absolute bottom-24 mb-12 scale-[.8] left-[50%] -translate-x-[50%]">
                                {socialLinks.map((link, i) => {
                                        return (
                                            <a  key={i} href={link.href} className='font-roboto  font-bold text-white/70 text-[55px] font-roboto font-medium text-md scale-[.5] hover:text-orangee '>{link.icon}</a>
                                        )
                                    })}
                                </motion.div>


                            {/* Contact Btn */}
                            <motion.div transition={{delay: 1.5}}   initial={{ filter: 'blur(30px)', opacity: 0}} animate={{ filter: 'blur(0px)', opacity: 1}}  className='submit absolute bottom-20 left-[50%] -translate-x-[50%]  overflow-hidden  text-white w-[70%] font-roboto font-bold text-[18px]  py-[6px] rounded-full  cursor-pointer hover:text-orangee  bg-orangee hover:bg-transparent hover:bg-white '  >
                                <Link onClick={() => setOpen(false)} to='/contact/' className=' w-full py-2 flex items-center justify-center'>Get in Touch</Link>
                            </motion.div>
                        </motion.div>

                    </>

                    : null
                    
            }
        </AnimatePresence>
            

        </header>

        


        
    </>
  )
}

export default Nav


