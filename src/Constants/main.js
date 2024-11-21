import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaChevronLeft } from "react-icons/fa";
import {FaReact} from 'react-icons'
import {animate, color, motion} from 'framer-motion'
import { option } from "framer-motion/client";
// import img1 from '../Assets/services/img1.png'
import img2 from '../Assets/services/img2.png'
import img3 from '../Assets/services/img3.png'
import img4 from '../Assets/services/img4.png'
import img5 from '../Assets/services/img5.png'
import img6 from '../Assets/services/img6.png'
import img7 from '../Assets/services/img7.png'
import img8 from '../Assets/services/img8.webp'
import img10 from '../Assets/services/img10.png'
import { FaArrowLeftLong } from 'react-icons/fa6'
import work from '../Assets/Work/Device-Mockup_6.jpg'
import work2 from '../Assets/Work/Free Business Cards on Chair Mockup.jpg'
import work3 from '../Assets/Work/Free-PSD-Modern-Brand-Business-Card-Mockup.jpg'
import work4 from '../Assets/Work/small reusable bag mockup.jpg'
import work5 from '../Assets/Work/Logo_on_the_Builiding_Mockup_2.jpg'
import work6 from '../Assets/Work/Mockup.jpg'
import work7 from '../Assets/Work/MorocAffiche.jpg'



// import {img1, img2, img3, img4, img5, img6} from '../Assets/Services'

export const navLinks = [
    { href: "#", label: "Features" },
    { href: "#", label: "Our Story" },
    { href: "/ourWork/", label: "Our Work" },
    { href: "/services/", label: "Services",  icon: <FaChevronLeft className="icon transition-all transition-[.4s] -rotate-90 text-[12px]" />, classId: 'link'}, 
    { href: "#", label: "Pricing" },
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


  
export const customStyles = {
    control: (provided) => ({
        ...provided,

        color: '#fff',
        width: '100%',
        height: '100%',
        border: 'none',
        backgroundColor: 'none',
        boxShadow: 'none',

    }),
    option: (provided, state) => ({
        ...provided,
        color: 'white',
        backgroundColor: state.isSelected ? 'lightGray' : 'black',
        boxShadow: 'none',
        fontFamily: 'roboto',
        fontWeight: '700',
        scrollBar: {
            width: '2px',
        }
    })
}

// Services Drop Down

const services = [

    { number: '01',src: img6,icone: <FaArrowLeftLong className='absolute top-3 right-3   hover:text-orangee cursor-pointer transition delay-75 ease-in-out   lg:top-5 lg:right-5    -rotate-[230deg] lg:text-[24px] text-[16px] text-white '/>, href: '#', name: 'Web Design'},
    { number: '02',src: img2,icone: <FaArrowLeftLong className='absolute top-3 right-3   hover:text-orangee cursor-pointer transition delay-75 ease-in-out   lg:top-5 lg:right-5    -rotate-[230deg] lg:text-[24px] text-[16px] text-white '/>, href: '#', name: 'Web Development'},
    { number: '03',src: img8,icone: <FaArrowLeftLong className='absolute top-3 right-3   hover:text-orangee cursor-pointer transition delay-75 ease-in-out   lg:top-5 lg:right-5    -rotate-[230deg] lg:text-[24px] text-[16px] text-white '/>, href: '#', name: 'Branding & Graphic Design'},
    { number: '04',src: img4,icone: <FaArrowLeftLong className='absolute top-3 right-3   hover:text-orangee cursor-pointer transition delay-75 ease-in-out   lg:top-5 lg:right-5    -rotate-[230deg] lg:text-[24px] text-[16px] text-white '/>, href: '#', name: 'Digital Marketing'},
    { number: '05',src: img5,icone: <FaArrowLeftLong className='absolute top-3 right-3   hover:text-orangee cursor-pointer transition delay-75 ease-in-out   lg:top-5 lg:right-5    -rotate-[230deg] lg:text-[24px] text-[16px] text-white '/>, href: '#', name: 'Web Maintenance and Support'},
    { number: '06',src: img3,icone: <FaArrowLeftLong className='absolute top-3 right-3   hover:text-orangee cursor-pointer transition delay-75 ease-in-out   lg:top-5 lg:right-5    -rotate-[230deg] lg:text-[24px] text-[16px] text-white '/>, href: '#', name: 'Consulting and Strategy'},
    { number: '07',src: img7,icone: <FaArrowLeftLong className='absolute top-3 right-3   hover:text-orangee cursor-pointer transition delay-75 ease-in-out   lg:top-5 lg:right-5    -rotate-[230deg] lg:text-[24px] text-[16px] text-white '/>, href: '#', name: 'Search Engine Optimization (SEO)'},
    { number: '07',src: img10,icone: <FaArrowLeftLong className='absolute top-3 right-3   hover:text-orangee cursor-pointer transition delay-75 ease-in-out   lg:top-5 lg:right-5    -rotate-[230deg] lg:text-[24px] text-[16px] text-white '/>, href: '#', name: 'Mobile Application'},
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





// export const varient = {
//     initial:{x: -100, filter: 'blur(10px)', opacity: 0},
//     transition:{duration: .5, delay: i * .5, ease: 'easeInOut'},
//     animate:{x: 0, filter: 'blur(0px)', opacity: 1},

// }
// initial={{x: -100, filter: 'blur(10px)', opacity: 0}} ,
// transition={{duration: .5, delay: i * .5, ease: 'easeInOut'}},
//  animate={{x: 0, filter: 'blur(0px)', opacity: 1}},





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
    {src: work, name: 'Floora Cosmitic', desc: 'UX Design/Web Devolepment'},
    {src: work6, name: 'Intelligence Industry.', desc: 'UX Design/Web Devolepment'},
    {src: work2, name: 'MEGASOFT', desc: 'Graphic Design/Business Card'},
    {src: work3, name: 'HMS Proprete', desc: 'Graphic Design/Business Card'},
    {src: work4, name: 'Omeniya Event', desc: 'Branding/Logo Design'},
    {src: work5, name: 'Coopérative ITRANE', desc: 'Branding/Logo Design'},
    // {src: work7, name: 'Morocco vs Leshoto', desc: 'Graphic Design/Poster'},
]