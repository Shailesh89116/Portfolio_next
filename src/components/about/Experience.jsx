import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({position, companyName, comapnyLink, time, address, work }) => {
  const ref = useRef(null);
    
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg dark:text-light">
          {position} &nbsp;{" "}
          <span
            
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{companyName}
          </span>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm dark:text-light">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-36">
    <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl dark:text-light">
      Experience
    </h2>
    <div className="relative mx-auto w-[75%] lg:w-[90%] md:w-full" ref={ref}>
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-[30px] md:w-[2px] xs:left-[20px]"
      />
      <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
        <Details
          position="Full Stack Developer (MERN)"
          companyName="Ovonts Technologies Pvt. Ltd."
          address="Mumbai, India"
          time="Mar 2022 - May 2023"
          work="I am the part of the SAAS product development team and played a key role in developing multiple features that improved the overall user experience.
          Actively involved in the development of new modules in existing mobile
and web applications."
        />
      </ul>
    </div>
  </div>
  )
}


export default Experience
