import React from 'react'
import { motion } from 'framer-motion'

const Stack = ({children}) => {
  return (
<motion.div
      initial={{ x: 50 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring" }}
      whileHover={{
        scale: 1.1,
      }}
      className="m-4 flex items-center justify-center overflow-hidden rounded-md border border-primary p-5 text-center text-7xl opacity-95 shadow-lg"
    >
      {children}
    </motion.div>
  )
}

export default Stack
