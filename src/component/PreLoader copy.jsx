import React, {useEffect} from 'react'
import Logo from '../Assets/newColor.svg'
import {motion, AnimatePresence} from 'framer-motion'

const PreLoader = () => {

    useEffect(()=> {
        setInterval(() => {
            const varient = [
                {exit: {opacity: 0}},
            ]
        }, 4000)
    })
  return (

    <AnimatePresence>
        <motion.div animate={{height: 0}}  transition={{duration: 1, delay: 6}}  className='h-screen w-screen flex items-center justify-center fixed top-0 left-0 overflow-hidden bg-black z-50' >
            <motion.div animate={{height:0}} transition={{duration: .6, delay: .6, ease: 'easeInOut'}} className="w-full h-1/2 bg-black z-[5] absolute top-0 left-0"></motion.div>
            <motion.div animate={{height:0}} transition={{duration: .6, delay: .6, ease: 'easeInOut'}} className="w-full h-1/2 bg-black z-[5] absolute bottom-0 left-0"></motion.div>
            
            
                <motion.img id='img' initial={{ scale: 1.5,rotate: '180deg', filter: 'blur(20px)'}} exit={{ filter: 'blur(20px)', opacity: 0, transition: {duration: 1}}} animate={{scale: 1,rotate:0, filter: 'blur(0)'}} transition={{duration: 1, delay: 1, ease: 'easeInOut'}} src={Logo} className='w-[500px]' alt="" />

            
            

        </motion.div>
</AnimatePresence>
  )
}

export default PreLoader
