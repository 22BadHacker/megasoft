import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaChevronLeft } from "react-icons/fa";
// import {} from 'react-icons'
import {animate, color, motion} from 'framer-motion'
import { option } from "framer-motion/client";
import { Link } from "react-router-dom";

import img2 from '../Assets/services/img2.png'
import img3 from '../Assets/services/img3.png'
import img4 from '../Assets/services/img4.png'
import img6 from '../Assets/services/img6.png'
import img5 from '../Assets/services/img888.png'
import img7 from '../Assets/services/img7.png'
import img8 from '../Assets/services/img8.webp'
import img10 from '../Assets/services/img10.png'
import { FaArrowLeftLong } from 'react-icons/fa6'



import ill from '../Icons/Illi.png'
import shop from '../Icons/shop.png'
import effect from '../Icons/Effefct.png'
import premier from '../Icons/Premier.png'
import indesign from '../Icons/indesign.png'
// Constants


import Analitics from "./Analitics";
import FAQ from "./FAQ";
import OurStory from "./OurStory";
import Report from "./Report";
import Drag from "./Drag";
import LatestWork from "./LatestWork";
import Services from "./Services";




import work from '../Assets/Work/Device-Mockup_6.jpg'
import work2 from '../Assets/Work/Free Business Cards on Chair Mockup.jpg'
import work3 from '../Assets/Work/Free-PSD-Modern-Brand-Business-Card-Mockup (1).webp'
import work4 from '../Assets/Work/small reusable bag mockup (1).webp'
import work5 from '../Assets/Work/Logo_on_the_Builiding_Mockup_2.jpg'
import work6 from '../Assets/Work/Mockup.jpg'
import sooft from '../Collection/Mockup-megaWeb.webp'

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaLaravel } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import mot from '../Icons/framer-motion.svg'
import figma from '../Icons/Figma-logo.svg'
import { MdOutlineHtml, MdCss } from "react-icons/md";
import { MdOutlinePhp } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

import { AiFillThunderbolt } from "react-icons/ai";

import { IoIosTrendingUp } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

import { BsStar } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { LuHexagon } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";


export {
    Analitics,
    FAQ,
    OurStory,
    Report,
    LatestWork,
    Drag,
    Services,

}


export const feaut = [
    {icon: <AiFillThunderbolt className='text-orangeLight size-10 p-2 bg-transparent backdrop-blur-[2px] rounded-full'/>, name: 'Fast Deleviry', desc: 'Why wait? Launch your business online with our quick and hassle-free web design solutions, tailored for speed and success '},
    {icon: <IoIosTrendingUp className='text-orangeLight size-10 p-2 bg-transparent backdrop-blur-[2px] rounded-full'/>, name: 'Performance Optimization', desc: 'Why settle for slow when you can soar? Unlock the full potential of your website with our expert performance optimization services.'},
    {icon: <GiTakeMyMoney className='text-orangeLight size-10 p-2 bg-transparent backdrop-blur-[2px] rounded-full'/>, name: 'Affordable Pricing', desc: 'Why pay more for less? With our affordable pricing, you get premium services and solutions that fit your budget perfectly.'},
    
    {icon: <MdOutlineSecurity className='text-orangeLight size-10 p-2 bg-transparent backdrop-blur-[2px] rounded-full'/>, name: 'Security Features', desc: 'Earn your users’ trust with state-of-the-art security features that ensure their data is safe and sound.'},
]


export const icoons3 = [
    
    {icon: <MdOutlineHtml className="text-[#ff2d20] text-[31px]  rounded-md "/>, name: 'JavaScript'},
    {icon: <MdCss className="text-[#254bdd] text-[31px]  rounded-md "/>, name: 'TailWind'},
    {icon: <MdOutlinePhp className="text-[#7377ad] text-[31px]  rounded-md "/>, name: 'BootStrap'},
    {icon: <GrMysql className="text-[#005d85] text-[28px]  rounded-md "/>, name: 'Laravel'},
    {icon: <SiMongodb className="text-[#006548] text-[28px]   "/>, name: 'Laravel'},
    
]

export const icoons4 = [
    {icon: figma, name: 'figma'},
]

export const icoons = [
    {icon: ill, name: 'Illustrator'},
    {icon: shop, name: 'Photoshop'},
    {icon: effect, name: 'After Effect'},
    {icon: premier, name: 'Premier Pro'}, 
    {icon: indesign, name: 'inDesign'}, 
]

export const icoons2 = [
    {icon: <FaReact className="text-[#01d8ff] size-[29px] bg-[rgb(255,255,255,.05)] p-1 rounded-md"/>, name: 'React'},
    {icon: <IoLogoJavascript className="text-[#efd81d] text-[28px]  rounded-md "/>, name: 'JavaScript'},
    {icon: <RiTailwindCssFill className="text-[#15b8c5] text-[28px]  rounded-md "/>, name: 'TailWind'},
    {icon: <FaBootstrap className="text-[#7710f1] text-[28px]  rounded-md "/>, name: 'BootStrap'},
    {icon: <FaLaravel className="text-[#ff2d20] text-[28px]  rounded-md "/>, name: 'Laravel'},
    {icon: <SiNextdotjs className="text-[#fff] text-[28px]   "/>, name: 'Laravel'},
    {img: mot, name: 'Laravel'},  
]





export const navLinks = [
    { href: "/", label: "Introduction" },
    // { href: "#", label: "Features" },
    { href: "/OurStory", label: "Our Story" },
    { href: "/ourWork/", label: "Our Work" },
    { href: "/services/", label: "Services"}, 
    // { href: "#", label: "Pricing" },
];


export const socialLinks = [
    { href: "#", icon: <FaFacebook className="icon" /> },
    { href: "#", icon: <FaInstagram className="icon" /> },
    { href: "#", icon: <FaLinkedinIn className="icon" /> },
    { href: "#", icon: <FaTwitter className="icon" /> },
    { href: "#", icon: <FaWhatsapp className="icon" /> },
];


export const options = [

    { value: '', label: <span className="none"></span> },
    { value: 'Web Design', label: 'Web Design' },
    { value: 'Branding & Graphic Design', label: 'Branding & Graphic Design' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'Logo', label: 'Logo' },
    { value: 'Posters', label: 'Posters' },
    { value: 'Flayers', label: 'Flayers' },
    { value: 'Business Card', label: 'Business Card' },
    { value: 'E-Commerce website', label: 'E-commerce website' },
    { value: 'Portfolio Design', label: 'Portfolio Design' },
    { value: 'Something else....', label: 'Something else....' },
  ];


  

// Services Drop Down

const services = [

    { number: '01',src: img6, name: 'UX Design'},
    { number: '02',src: img2, name: 'Web Development'},
    { number: '03',src: img8, name: 'Branding & Graphic Design'},
    { number: '04',src: img4, name: 'Digital Marketing'},
    { number: '05',src: img5, name: 'Web Maintenance and Support'},
    { number: '06',src: img3, name: 'Consulting and Strategy'},
    { number: '07',src: img7, name: 'Search Engine Optimization (SEO)'},
    { number: '08',src: img10, name: 'Mobile Application'},
]


// web design servises Details
const webDesign = [
    {src:null, title: "Custom Website Design", desc: 'Creating visually appealing and user-friendly websites tailored to client needs.'},
    {src:null, title: "UI/UX Design", desc: 'Focusing on user interface (UI) and user experience (UX) design to ensure the website is intuitive and engaging.'},
    {src:null, title: "Responsive Web Design", desc: 'Ensuring the website is mobile-friendly and adapts to different screen sizes'},
]

// web Development servises Details
const webDevelopment = [
    {src:null, title: "Front-end Development", desc: 'Building the visible aspects of a website (HTML, CSS, JavaScript, React, Vue, etc.).'},
    {src:null, title: "Back-end Development", desc: 'Developing server-side logic, databases, and application APIs using technologies like Node.js, Python, Ruby, PHP, etc.'},
    {src:null, title: "Full-stack Development", desc: 'Combining both front-end and back-end development skills to build a complete web application.'},
    {src:null, title: "E-commerce Development", desc: 'Building online stores with platforms like Shopify, WooCommerce, Magento, or custom solutions.'},
]

// Branding & Graphic Design servises Details
const branding= [
    {src:null, title: "Logo Design", desc: 'Creating unique and memorable logos for brand identity.'},
    {src:null, title: "Brand Identity", desc: 'Developing a cohesive brand identity, including colors, typography, and visual elements.'},  
    {src:null, title: "Marketing Materials", desc: 'Designing brochures, flyers, banners, and other print/digital marketing assets.'},  
    {src:null, title: "Social Media Graphics", desc: 'Creating engaging visuals for social media platforms.'},  
]

// Web Maintenance and Support servises Details

const webMaintance = [
    {src:null, title: "Website Updates", desc: 'Regular updates to content, plugins, and software.'},
    {src:null, title: "Security Monitoring:", desc: 'Ensuring the website is protected against threats, malware, and cyberattacks.'},
    {src:null, title: "Bug Fixes and Troubleshooting", desc: 'Resolving issues and improving website functionality.'},
    {src:null, title: "Performance Optimization", desc: ' Enhancing website load times and performance (e.g., image optimization, server tuning).'},
]

// Search Engine Optimization (SEO) servises Details
const search = [
    {src: null, title: "Search Engine Optimization (SEO)", desc: 'Optimizing website content and structure to improve search engine rankings and visibility.'},
    {src: null, title: "On-Page SEO", desc: 'Optimizing website content, meta tags, headings, and images for better search engine visibility.'},
]

// Digital Marketing servises Details
const Media = [
    {src: null, title: "Social Media Marketing", desc: 'Managing social media campaigns to build brand awareness and engagement.'},
    {src: null, title: "Email Marketing", desc: 'Designing and executing email campaigns to engage users and drive conversions.'},
]


// Consulting and Strategy servises Details
const consulting = [
    {src: null, title: "Brand Strategy", desc: "Developing a comprehensive brand strategy that aligns with the client's goals and objectives."},    
    {src: null, title: "Digital Strategy", desc: "Helping businesses create a comprehensive digital strategy for growth."},    
    {src: null, title: "Market Research", desc: "Analyzing trends, competitors, and audience behavior to inform design and marketing decisions."},    
    {src: null, title: "User Research", desc: " Conducting surveys, interviews, and usability tests to improve the website’s user experience."},    
]




export {
    consulting,
    services,
    webDesign,
    webDevelopment,
    branding,
    webMaintance,
    search,
    Media
}



// Story 

export const story = [
    {icon: <BsStar className='text-[22px] text-orangee'/>, title: 'Excellence', desc: 'We are lifelong learners and are guided by extreme quality. Pushing ourselves to go beyond the boundaries of the norm is what makes us special.'},
    {icon: <LuHexagon className='text-[22px] text-orangee'/>, title: 'Transparency', desc: 'We see being open and vulnerable as a strength, and the key to being genuine. Being transparent allows us to understand the why behind what we say.'},
    {icon: <LuHeartHandshake className='text-[22px] text-orangee'/>, title: 'Humanity', desc: 'We are a company that strives to honor the human side of software development and technology.'},
    {icon: <IoDiamondOutline className='text-[22px] text-orangee'/>, title: 'Integrity', desc: 'Trust is built on integrity. It’s about being honest and forthright in whatever we do, even when no one is watching.'},
    {icon: <FiUserPlus className='text-[22px] text-orangee'/>, title: 'Collaboration', desc: 'Bonds are built in the trenches. We can all learn something from each other by communicating and collaborating as a team'},
]





export const servicesSlider = [
    'UX design', 
    'Web Development',
    'Graphic Design',
    'E-Commerce website',
    'Web Maintenance',
    'Mobile Application',
    'Full Stack Application',
    'Digital Marketing',
    'SEO',
] 

export const sliderIcons =[
    {src: '', name: 'React'},
    {src: '', name: 'Tailwind css'},
]



export const workSlide = [
    {id: 'box1', src: work, name: 'Floora Cosmitic', desc: 'Web Devolepment'},
    {id: 'box2', src: work6, name: 'Intelligence Industry.', desc: 'UX Design/Web Devolepment'},
    {id: "box3", src: work2, name: 'MEGASOFT', desc: 'Graphic Design/Business Card'},
    {id: "box4", src: work3, name: 'HMS Proprete', desc: 'Graphic Design/Business Card'},
    {id: "box5", src: work4, name: 'Omeniya Event', desc: 'Branding/Logo Design'},
    {id: "box6", src: work5, name: 'Coopérative ITRANE', desc: 'Branding/Logo Design'},
    {id: "box6", src: sooft, name: 'MEGASOFT Corp', desc: 'Web Design'},
    
]



export const Latest = [
    {date: '15 nov, 2024',src: work6, name: 'Intelligence Industry.', desc: 'Web Devolepment'},
    {date: '5 nov, 2024',src: work3, name: 'HMS Proprete', desc: 'Graphic Design'},
    {date: '25 oct, 2024',src: work, name: 'Floora Cosmitic', desc: 'UX Design'},
    {date: '2 oct, 2024',src: work2, name: 'MEGASOFT', desc: 'Business Card'},
]




export const Questions = [
    {title: 'How long does it take to develop a website?', desc: 'The timeline of developing a website depends on the complexity and scope of the project. Simple websites may take a few weeks, while more complex, custom-built websites may take several months.'},
    {title: 'Do I need a domain name and hosting for my website?', desc: 'Yes, a domain name is your website’s address on the internet, and hosting is where your website’s files are stored and accessed. Both are essential to make your website live.'},
    {title: 'What is SEO and why is it important for web design?', desc: 'SEO (Search Engine Optimization) is the practice of improving a website’s visibility in search engine results. Good web design incorporates SEO practices, ensuring the site is easily discoverable by search engines.'},
    {title: 'What is the services that we offer?', desc: ' we offer Services that can help your Businesses improve their visibility and your reputation online. we Offer Graphic design, Web Development, UI/UX Design, E-Commerce websites, SEO, Branding & Visual Identity And More ....', link: <Link onClick={() => window.scrollTo(0, 0)} className="text-orangee underline" to='/services/#id'>On Our Explore Section</Link>},
    {title: 'What do I need to provide for the designer to start?', desc: <div >
        <p>To start, you'll typically need to provide:</p>
        <ul className="pt-1">
            <li className="list-disc">Your Business Name</li>
            <li className="list-disc">A brief outlining your project goals, target audience, and any preferences or inspirations.</li>
            <li className="list-disc">Any existing branding materials, such as logos or color schemes.</li>
            <li className="list-disc">Content like text or images (if needed for the project).</li>
        </ul>
    </div>},
    {title: 'Do I need to have a clear idea of what I want before contacting Your Society?', desc: 'While having an idea helps, you don’t need to have everything figured out. Designers can help you clarify your vision, provide suggestions, and guide you through the creative process.'},
    {title: 'What is the process of working on My Project in graphic design?', desc: <div >
        <p>The process typically includes:</p>
        <ul className="pt-1">
            <li className="list-disc">Initial consultation to understand your needs</li>
            <li className="list-disc">Research and concept development.</li>
            <li className="list-disc">Design drafts and feedback.</li>
            <li className="list-disc">Revisions based on feedback.</li>
            <li className="list-disc">Final delivery of the design files.</li>
        </ul>
    </div>},
    
]


export const scrollToTop = () => {
    window.scrollTo(0, 0)
}

export const text = [' we offre services that can help business improve their visibility and business reputation online, expand market reach, and increase turnover through effective digital strategies. Following are the services we provide.']

// What is the process of building a website?


// export const bgEffect = () => (
    
//     <>
//             <div className="w-3 h-3 absolute -top-1 -left-1 bg-orangee"></div>
//             <div className="w-3 h-3 absolute -top-1 -right-1 bg-white"></div>
//             <div className="w-3 h-3 absolute -bottom-1 -left-1 bg-white"></div>
//             <div className="w-3 h-3 absolute -bottom-1 -right-1 bg-orangee"></div>
//             <img src={img55} alt="" />
//             <img src={img66} className='absolute w-full h-full mix-blend-difference top-0 left-0' alt="" />
//             <div className="w-full h-full absolute top-0 left-0 backdrop-blur-[70px]"></div>
//     </>

// )