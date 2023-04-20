import React from 'react'

function Navbar() {
    function link(x, y=false){
        if(y == true){
        window.location.href = x;
        }
    }

  return (
    <div className='flex flex-row gap-3 justify-between items-center my-5 px-3'>
        <div className='w-[20%] font-semibold h-11 text-center py-2 bg-secondarysm rounded-xl cursor-pointer hover:text-primary active:text-primary hover:scale-105' onClick={()=>{link('https://google.com', true)}}>
            Skills
        </div>
        <div className='w-[20%] font-semibold h-11 text-center py-2 bg-secondarysm rounded-xl cursor-pointer hover:text-primary active:text-primary hover:scale-105'>
            Project
        </div>
        <div className='w-[20%] font-semibold h-11 text-center py-2 bg-secondarysm rounded-xl cursor-pointer hover:text-primary active:text-primary hover:scale-105'>
            Studied
        </div>
        <div className='w-[20%] font-semibold h-11 text-center py-2 bg-secondarysm rounded-xl cursor-pointer hover:text-primary active:text-primary hover:scale-105'>
            About
        </div>
    </div>
  )
}

export default Navbar