import React, { useEffect } from 'react'
import {motion} from 'framer-motion'

function Project(props) {
    let nProject = ["Project1", "Project2", "Project3", "Project4"];
  return (
    <div ref={props.refApp}>
    <div className='flex flex-row flex-wrap w-full gap-4 justify-center my-2'>
        {nProject.map((project, index) => {
        return (

            <div className={`${props.step ? 'translate-x-0 opacity-1' : ' -translate-x-96 opacity-0'}  transition-all delay-100 duration-1000 w-[45%] flex px-2 py-2 flex-col rounded-xl bg-gradient-to-bl from-secondary to-primarysm  text-secondary h-52`}>
                <div className='w-full bg-secondaryxl rounded-xl h-1/2'>

                </div>
                <div className='py-2'>
                    <div  className='font-bold'>
                        {project}
                    </div>
                    <div className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </div>
                </div>
            </div>

            )
        })}
        
    </div>
    <div className='bg-secondarylg px-4 py-2 rounded-lg w-40 mx-auto text-primary my-8'> Masih Banyak..</div>
    </div>
  )
}

export default Project