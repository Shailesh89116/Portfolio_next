import React from 'react'
import { motion } from 'framer-motion'

const ContactIcon = ({children}) => {
  return (
<motion.div
      initial={{ x: 50 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring" }}
      whileHover={{
        scale: 1.1,
      }}
      className="m-4 flex items-center justify-center overflow-hidden rounded-md border border-primary p-5 text-center text-7xl xs:text-2xl sm:5xl opacity-95 shadow-lg dark:shadow-white/50 dark:border-primaryDark/60 dark:text-light"
    >
      {children}
    </motion.div>
  )
}

export default ContactIcon