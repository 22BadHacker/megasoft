import {useState, useRef} from 'react'
import  {navLinks, navLinksPhone , socialLinks} from '../Constants/main'
// import logo2 from '../Assets/new.svg'
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

    // const ref = useRef(null)
    
    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.li', { opacity: 0, ease: 'circ.inOut', y: 10, stagger: {amount: .4}, delay: .4 }); 
            // gsap.from('.logo', { opacity: 0, ease: 'circ.inOut', y: 20, delay: .3 }); 
        },
        
    ); 

   

  return (
    <header id='navbar' className='h-[68px] flex items-center bg-black  pb-12 lg:md:sm:mr-0 pt-6 z-10 fixed top-0 left-0 inset-0 flex-center'>
        <nav className=' px-6 transition-all ease-in-out pt-8 w-full z-[22] h-full max-w-[1500px] mx-auto  flex-center-between    md:lg:px-4 md:lg:pt-10 lg:pb-2 sm:px-8'>
            {/* Logo */}
            <>
                <Link to="/">

                    
                    
                    <img  className='logo size-[200px] flex-1 lg:size-[210px] ' src={logo2} alt="" />
                    
                </Link>
            </>

            {/* Nav Links */}

            <>
                    
                <ul className='lg:flex-center-gap hidden'>
                    {
                        navLinks.map((link) => {
                            const { href, label, icon, classId} = link
                            return (
                                <li className='li'  key={label}>
                                    
                                    <Link  to={href} id={classId} className={`linkss  relative max-w-content text-white/80 font-roboto font-normal text-[18px] hover:text-orangee flex gap-2 items-center`}>{label} <span>{icon}</span></Link>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </>


            {/* Contact Btn */}

            <>
                <div className='hidden lg:flex items-center  gap-3'>
                    <Link className=' get hover:text-orangee lg:btn-flex '  to="/contact/">Get in Touch</Link>
                    
                </div>
            </>
            {/*
            

            {/* Burger */}

            <>
                <div className={`burger ${toggleClass} relative left-4 scale-[.78] flex rounded-full justify-center  flex-col gap-[6px] relative w-12 h-12  shadow-lg bg-[#111] cursor-pointer items-center lg:hidden sm:scale-[.8]`}onClick={toggleMenu}>
                    <div className="bar absolute -translate-y-1 w-7 h-[1.5px] bg-white"></div>
                    <div className="bar2 absolute translate-y-1 w-7 h-[1.5px] bg-white"></div>
                    
                </div>
            </>




        </nav>
        
           
           {
                toggleClass ? 


                    <>
                   
                        <motion.div initial= {{opacity: 0}} animate={{opacity: 1}} transition={{delay: .4, ease: 'anticipate', duration: .3}}   className='window px-7 h-screen  z-[20]   w-[100vw] absolute top-0 left-0 bg-black flex-left flex-col gap-4 md:lg:hidden sm:px-8'>
                            {navLinks.map((link, i) => {
                                return (
                                    
                                    <div className="flex  flex-col relative top-[120px] sm:top-[100px]">
                                        <motion.a initial={{ filter: 'blur(30px)', opacity: 0,translateY: 10}} transition={{duration: .3, delay: i * .3, ease: 'easeInOut', type: 'spring', stiffness: 100}}  animate={{ filter: 'blur(0px)', opacity: 1, translateY: 0}}  key={i} href={link.href} className='links font-roboto font-bold text-white/70 text-[55px] font-roboto font-medium text-[18px] hover:text-orangee '>{link.label}</motion.a>
                                    </div>
                                )
                            })}

                            {/* Social Media */}

                            <motion.div initial={{  opacity: 0}} transition={{delay: 1.3, ease: 'easeInOut', type: 'tween'}} animate={{ opacity: 1}} className="flex  gap-[1px] absolute bottom-24 mb-12 scale-[.8] left-[50%] -translate-x-[50%]">
                            {socialLinks.map((link, i) => {
                                    return (
                                        <a  key={i} href={link.href} className='font-roboto font-bold text-white/70 text-[55px] font-roboto font-medium text-md scale-[.5] hover:text-orangee '>{link.icon}</a>
                                    )
                                })}
                            </motion.div>


                         {/* Contact Btn */}
                         <motion.Link transition={{delay: 1.5}}  initial={{ filter: 'blur(30px)', opacity: 0}} animate={{ filter: 'blur(0px)', opacity: 1}} href="/contact/" className='submit absolute bottom-20 left-[50%] -translate-x-[50%]  bg-orangee  text-white w-[80%] font-roboto font-bold text-[18px] flex justify-center py-2 rounded-full fonr-bold font-roboto hover:text-orangee hover:bg-white/90  '  >
                         Get in Touch</motion.Link>
                     </motion.div>

                 </>

                : null
                   
           }

           


      
    </header>
  )
}

export default Nav
