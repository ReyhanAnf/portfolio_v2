import React from 'react'
import {motion} from 'framer-motion'

function Kidding() {
  return (
    <div>
        <div className='text-primarysm font-bold my-2 '>
            Just Kidding
        </div>
        <div className='flex flex-row flex-wrap w-full gap-4 justify-center my-2'>
            <motion.div className='w-[45%] flex px-2 py-2 flex-col rounded-xl bg-gradient-to-br from-primarysm to-secondary  text-secondary h-52'
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                delay: 2,
                damping: 50
             }}
            >
                <div className='w-full bg-secondaryxl rounded-xl h-1/2'>

                </div>
                <div className='py-2'>
                    <div  className='font-bold'>
                        Judul Project
                    </div>
                    <div className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </div>
                </div>
            </motion.div>
            <div className='w-[45%] flex px-2 py-2 flex-col rounded-xl bg-gradient-to-br from-primarysm to-secondary text-secondary h-52'>
                <div className='w-full bg-secondaryxl rounded-xl h-1/2'>

                </div>
                <div className='py-2'>
                    <div  className='font-bold'>
                        Judul Project
                    </div>
                    <div className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </div>
                </div>
            </div>
            <div className='w-[45%] flex px-2 py-2 flex-col rounded-xl bg-gradient-to-br from-primarysm to-secondary text-secondary h-52'>
                <div className='w-full bg-secondaryxl rounded-xl h-1/2'>

                </div>
                <div className='py-2'>
                    <div  className='font-bold'>
                        Judul Project
                    </div>
                    <div className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </div>
                </div>
            </div>
            <div className='w-[45%] flex px-2 py-2 flex-col rounded-xl bg-gradient-to-br from-primarysm to-secondary text-secondary h-52'>
                <div className='w-full bg-secondaryxl rounded-xl h-1/2'>

                </div>
                <div className='py-2'>
                    <div className='font-bold'>
                        Judul Project
                    </div>
                    <div className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-secondarylg px-4 py-2 rounded-lg w-40 mx-auto text-primary my-8'>
            Masih Banyak..
        </div>
    </div>
  )
}

export default Kidding