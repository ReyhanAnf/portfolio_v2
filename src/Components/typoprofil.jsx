import React from 'react'
import {motion} from 'framer-motion'

function Typoprofil() {
  return (
    <motion.div
    initial={{ opacity: 0, translateX: -100 }}
    animate={{ opacity: 1, translateX: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 50
    }}
    >
        <div className='text-center my-3'>
            I like for all about data and data science, i'm enjoy as develope actificial intelegent, and also i like implement its to website with web development.
        </div>
    </ motion.div>
  )
}

export default Typoprofil