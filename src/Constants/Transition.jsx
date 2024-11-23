import React, {useEffect} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { div } from 'framer-motion/client'

const Transition = () => {
    // useEffect (() => {
    //         document.addEventListener('DOMContentLoaded', () => {
    //             setInterval(() => {
    //             })
                
                
    //         })
    //     })
        
        useGSAP(() => {
            let tl = gsap.timeline({});
            
            // tl.to('.row-1', {
            //     y: '-500%',
            //     duration: .5,
            //     ease: 'power1.inOut',
            //     delay: .5,
            //     stagger: {
            //         amount: .5
            //     }
            // })  
            // tl.to('.row-2', {
            //     y: '500%',
            //     duration: .5,
            //     ease: 'power1.inOut',
            //     delay: .5,
            //     stagger: {
            //         amount: .5
            //     }
            // })  

            // gsap.set('.block', {
            //     scaleY: 1
            // });
            // gsap.to('.block', {
            //     scaleY: 0,
            //     duration: 1,
               
            //     stagger: {
            //         each: .1,
            //         from: 'start',
            //         grid: [2, 5],
            //         axis: 'x'
            //     },
            //     ease: 'ease'
            // })
        })

  return (
    <div className='block-container'> 
        {/* <div className="transition fixed top-0 left-0 w-screen h-screen flex flex-col z-50 pointer-events-none">
                {
                  [...Array(5)].map((item, i) => {
                    
                    return (
                        <div className="transition-row row-1 flex-1 flex">

                            <div className='block origin-top flex-1 bg-orange-500 scale-y-100 will-change-transform' key={i}>{item}</div>
                        </div>
                    )
                  })
                }
                {
                  [...Array(5)].map((item, i) => {

                    return (
                        <div className="transition-row row-2 flex-1 flex">

                            <div className='block origin-bottom flex-1 bg-orange-500 scale-y-100 will-change-transform ' key={i}>{item}</div>
                        </div>
                    )
                  })
                }
            
        </div> */}

        {
            [...Array(4)].map((item, i) => {
                return (
                    <div className='blocks-container top absolute w-screen h-screen top-0'>
                        <div className='block-row w-full h-full overflow-hidden flex ' key={i}>{item}</div>

                    </div>
                )
            })
        }
        {
            [...Array(4)].map((item, i) => {
                return (
                    <div className='blocks-container bottom absolute w-screen h-screen bottom-0'>
                        <div className='block-row w-full h-full overflow-hidden flex' key={i}>{item}</div>

                    </div>
                )
            })
        }




    </div>
  )
}

export default Transition
