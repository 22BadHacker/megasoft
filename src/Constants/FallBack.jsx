import React from 'react'

const FallBack = () => {
  return (
    <div className='w-full relative z-[1] h-screen flex justify-center items-center'>
        <div className="woo fixed -z-[1] h-[120vh] w-full inset-0"></div>
        <div aria-hidden="true" className="fixed  left-0 -z-[10]  inset-0 grid grid-cols-2 -space-x-52 opacity-65 lg:md:sm:opacity-35">
                    <div className="con6 w-screen "></div>
                    <div className="blur-[106px] rotate-[180deg] h-[80px] opacity-40 lg:md:sm:opacity-85 relative -left-[0px] top-[60px] bg-gradient-to-r from-cyan-400 to-sky-300"></div>
                
        </div>
        {/* <svg width="84" className='text-white' fill='white' height="84" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="0"><animate id="spinner_0Nme" begin="0;spinner_ITag.begin+0.4s" attributeName="r" calcMode="spline" dur="1.2s" values="0;11" keySplines=".52,.6,.25,.99" fill="freeze"/><animate begin="0;spinner_ITag.begin+0.4s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0" keySplines=".52,.6,.25,.99" fill="freeze"/></circle><circle cx="12" cy="12" r="0"><animate id="spinner_f83A" begin="spinner_0Nme.begin+0.4s" attributeName="r" calcMode="spline" dur="1.2s" values="0;11" keySplines=".52,.6,.25,.99" fill="freeze"/><animate begin="spinner_0Nme.begin+0.4s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0" keySplines=".52,.6,.25,.99" fill="freeze"/></circle><circle cx="12" cy="12" r="0"><animate id="spinner_ITag" begin="spinner_0Nme.begin+0.8s" attributeName="r" calcMode="spline" dur="1.2s" values="0;11" keySplines=".52,.6,.25,.99" fill="freeze"/><animate begin="spinner_0Nme.begin+0.8s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0" keySplines=".52,.6,.25,.99" fill="freeze"/></circle></svg> */}
        <svg width="54" className='text-white' fill='white' height="54" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><rect x="11" y="1" width="2" height="5" opacity=".14"/><rect x="11" y="1" width="2" height="5" transform="rotate(30 12 12)" opacity=".29"/><rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43"/><rect x="11" y="1" width="2" height="5" transform="rotate(90 12 12)" opacity=".57"/><rect x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" opacity=".71"/><rect x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" opacity=".86"/><rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)"/><animateTransform attributeName="transform" type="rotate" calcMode="discrete" dur="0.75s" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12" repeatCount="indefinite"/></g></svg>
    </div>
  )
}

export default FallBack
