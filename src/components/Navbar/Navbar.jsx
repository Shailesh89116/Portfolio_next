import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, TwitterIcon } from '../Icons'
import {motion} from "framer-motion"

const CustomeLink = ({href, title, className=""})=>{

  const router = useRouter();

  return(
    <Link href={href} className={`${className} relative group`}>{title}
    <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomeLink href="/" title="Home" className='mr-4'/>
            <CustomeLink href="/about" title="About" className='mx-4'/>
            <CustomeLink href="/skills" title="Skills" className='ml-4'/>
            <CustomeLink href="/projects" title="Projects" className='mx-4'/>
            
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="/" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><TwitterIcon/></motion.a>
            <motion.a href="/" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon/></motion.a>
            <motion.a href="/" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedInIcon/></motion.a>
            <motion.a href="/" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><DribbbleIcon/></motion.a>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo/>
        </div>
    </header>
  )
}

export default Navbar









// const CustomLink = ({ href, title, className = "" }) => {
//   const pathname = usePathname();
//   return (
//     <Link
//       className={`${className} ${
//         pathname === href && "text-primary dark:text-primaryDark"
//       } group relative`}
//       href={href}
//     >
//       {title}

//       <span
//         className={`ease absolute -bottom-0.5 
//       left-0 inline-block h-[1px]
//       bg-dark transition-[width] duration-300 group-hover:w-full ${
//         pathname === href ? "w-full bg-primary dark:bg-primaryDark" : "w-0"
//       } dark:bg-light`}
//       >
//         &nbsp;
//       </span>
//     </Link>
//   );
// };

// const CustomMobileLink = ({
//   href,
//   title,
//   className = "",
//   toggle,
// }) => {
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(href);
//     toggle();
//   };
//   return (
//     <button
//       className={`${className} group relative my-2 text-light dark:text-dark`}
//       onClick={handleClick}
//     >
//       {title}

//       <span
//         className={`ease absolute -bottom-0.5 
//       left-0 inline-block h-[1px]
//       bg-light transition-[width] duration-300 group-hover:w-full ${
//         pathname === href ? "w-full" : "w-0"
//       } dark:bg-dark`}
//       >
//         &nbsp;
//       </span>
//     </button>
//   );
// };

// const Navbar = () => {
//   const [mode, setMode] = useThemeSwitcher();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="relative z-10 flex w-full items-center justify-between px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
//       <button
//         className="hidden flex-col items-center justify-center lg:flex"
//         onClick={handleClick}
//       >
//         <span
//           className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
//             isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
//           }`}
//         ></span>
//         <span
//           className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
//             isOpen ? "opacity-0" : "opacity-100"
//           }`}
//         ></span>
//         <span
//           className={`block h-0.5 w-6 translate-y-0.5 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
//             isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
//           }`}
//         ></span>
//       </button>
//       {isOpen && (
//         <div className="fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-dark/90 py-32 backdrop-blur-md dark:bg-light/75">
//           <nav className="flex flex-col items-center justify-center">
//             <CustomMobileLink
//               href="/"
//               title="Home"
//               className=""
//               toggle={handleClick}
//             />
//             <CustomMobileLink
//               href="/about"
//               title="About"
//               className=""
//               toggle={handleClick}
//             />
//             <CustomMobileLink
//               href="/skills"
//               title="Skill"
//               className=""
//               toggle={handleClick}
//             />
//             <CustomMobileLink
//               href="/projects"
//               title="Project"
//               className=""
//               toggle={handleClick}
//             />
//           </nav>

//           <nav className="flex flex-wrap items-center justify-center">
//             <motion.a
//               href="/"
//               target="_blank"
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.9 }}
//               className="mx-3 w-6"
//             >
//               <TwitterIcon className="" />
//             </motion.a>
//             <motion.a
//               href="/"
//               target="_blank"
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.9 }}
//               className="m-3 w-6"
//             >
//               <GithubIcon className="" />
//             </motion.a>
//             <motion.a
//               href="/"
//               target="_blank"
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.9 }}
//               className="ml-3 w-6"
//             >
//               <LinkedInIcon className="" />
//             </motion.a>

//             <button
//               onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               className={`ml-3 flex items-center justify-center rounded-full p-1 ${
//                 mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
//               }`}
//             >
//               {mode === "dark" ? (
//                 <SunIcon className="fill-dark" />
//               ) : (
//                 <MoonIcon className="fill-dark" />
//               )}
//             </button>
//           </nav>
//         </div>
//       )}

//       <div className="flex w-full items-center justify-between lg:hidden">
//         <nav>
//           <CustomLink href="/" title="Home" className="mr-4" />
//           <CustomLink href="/about" title="About" className="mx-4" />
//           <CustomLink href="/skills" title="Skill" className="mx-4" />
//           <CustomLink href="/projects" title="Project" className="mx-4" />
//         </nav>

//         <nav className="flex flex-wrap items-center justify-center">
//           <motion.a
//             href="/"
//             target="_blank"
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.9 }}
//             className="mx-3 w-6"
//           >
//             <TwitterIcon className="" />
//           </motion.a>
//           <motion.a
//             href="https://github.com/thetechnerdrohit"
//             target="_blank"
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.9 }}
//             className="m-3 w-6"
//           >
//             <GithubIcon className="" />
//           </motion.a>
//           <motion.a
//             href="https://www.linkedin.com/in/thetechnerdrohit"
//             target="_blank"
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.9 }}
//             className="ml-3 w-6"
//           >
//             <LinkedInIcon className="" />
//           </motion.a>

//           <button
//             onClick={() => setMode(mode === "light" ? "dark" : "light")}
//             className={`ml-5 flex w-7 items-center justify-center rounded-full p-1 ${
//               mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
//             }`}
//           >
//             {mode === "dark" ? (
//               <SunIcon className="fill-dark" />
//             ) : (
//               <MoonIcon className="fill-dark" />
//             )}
//           </button>
//         </nav>
//       </div>
//       <div className="absolute left-[50%] top-2 translate-x-[-50%]">
//         <Logo />
//       </div>
//     </header>
//   );
// };

// export default Navbar;