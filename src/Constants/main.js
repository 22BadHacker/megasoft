import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaChevronLeft } from "react-icons/fa";
import {animate, motion} from 'framer-motion'

export const navLinks = [
    { href: "#", label: "Features" },
    { href: "#", label: "Our Story" },
    { href: "#", label: "Our Work" },
    { href: "#", label: "Services",  icon: <FaChevronLeft className="icon transition-all transition-[.4s] -rotate-90 text-[12px]" />, classId: 'link'}, 
    { href: "#", label: "Pricing" },
];


export const socialLinks = [
    { href: "#", icon: <FaFacebook className="icon" /> },
    { href: "#", icon: <FaInstagram className="icon" /> },
    { href: "#", icon: <FaLinkedinIn className="icon" /> },
    { href: "#", icon: <FaTwitter className="icon" /> },
    { href: "#", icon: <FaWhatsapp className="icon" /> },
];







// Services Drop Down

const services = [
    { href: '#', name: 'Web Design'},
    { href: '#', name: 'Web Development'},
    { href: '#', name: 'Branding & Graphic Design'},
    { href: '#', name: 'Digital Marketing'},
    { href: '#', name: 'Web Maintenance and Support'},
    { href: '#', name: 'Consulting and Strategy'},
    { href: '#', name: 'Search Engine Optimization (SEO)'},
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