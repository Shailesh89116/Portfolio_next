import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({degree, collegeName, time, address }) => {
  const ref = useRef(null);
    
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg dark:text-light">
          {degree} &nbsp;{" "}
          <span
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{collegeName}
          </span>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
      </motion.div>
    </li>
  );
};

const Qualifications = () => {

    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
    <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl dark:text-light">
      Qualifications
    </h2>
    <div className="relative mx-auto w-[75%] lg:w-[90%] md:w-full" ref={ref}>
    <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-[30px] md:w-[2px] xs:left-[20px]"
      />
      <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
        <Details
          degree="Master of Business Administration"
          collegeName="Rohidas Patil Institute of Management Studies"
          address="Mumbai, India"
          time="Sept 2019 - Jun 2021"
        />
        <Details
          degree="Bachelors of Science (Information Technology)"
          collegeName="Shankar Narayan College of Arts & Commerce"
          address="Mumbai, India"
          time="July 2016 - Jun 2019"
        />
        <Details
          degree="HSC (Science)"
          collegeName="Shankar Narayan College of Arts & Commerce"
          address="Mumbai, India"
          time="June 2014 - Mar 2016"
        />
      </ul>
    </div>
  </div>
  )
}


export default Qualifications
