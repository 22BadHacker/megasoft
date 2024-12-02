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
    <>
    <motion.div animate={{height:0}} transition={{duration: .6, delay: .6, ease: 'easeInOut'}} className="w-full z-[50] h-1/2 bg-black  absolute top-0 left-0"></motion.div>
    <motion.div animate={{height:0}} transition={{duration: .6, delay: .6, ease: 'easeInOut'}} className="w-full z-[50] h-1/2 bg-black  absolute bottom-0 left-0"></motion.div>
            
    </>

  )
}

export default PreLoader
