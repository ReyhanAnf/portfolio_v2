import React from 'react'
import IG from '../assets/instagram.png'
import FB from '../assets/facebook.png'
import Git from '../assets/github.png'
import Email from '../assets/email.png'
import Rec from "../assets/react.svg"
import Tailw from "../assets/tailwind.png"
import Motion from "../assets/motion.png"
import Chart from "../assets/chartjs.png"

function About(props) {

  return (
    <div>
        <div className='text-primarysm font-bold text-lg'>About</div>
        <div className='text-sm my-2 p-2 text-ctext'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore et repudiandae culpa, voluptatem praesentium corporis ea, incidunt, asperiores a dolorum nulla nostrum quas. Delectus ut ea fugit laboriosam libero sint modi quasi dignissimos neque earum perspiciatis, eligendi dolore a corrupti facere sunt explicabo unde ex debitis alias accusantium saepe!
        </div>
        <div>
            <div>
                <div className='text-primarysm font-bold text-lg'>
                    Find Me On
                </div>
            </div>
            <div className='flex justify-between my-4 py-2 px-3'>
                <div className='w-[8%]'>
                    <img src={IG} alt="" srcset={IG} />
                </div>
                <div className='w-[8%]'>
                    <img src={FB} alt="" srcset={FB} />
                </div>
                <div className='w-[8%]'>
                    <img src={Git} alt="" srcset={Git} />
                </div>
                <div className='w-[8%]'>
                    <img src={Email} alt="" srcset={Email} />
                </div>
                <div className='w-[8%]text-center flex items-center text-[#87DEE7] text-xl'>
                    Kaggle
                </div>
            </div>
        </div>
        <div>
            <div className='text-primarysm font-bold text-lg'>
                Web Technology
            </div>
            <div className='flex justify-between items-center my-4 py-2 px-3'>
                <div className='w-[12%]'>
                    <img src={Rec} alt="" srcset={Rec} />
                </div>
                <div className='w-[12%]'>
                    <img src={Tailw} alt="" srcset={Tailw} />
                </div>
                <div className='w-[12%]'>
                    <img src={Motion} alt="" srcset={Motion} />
                </div>
                <div className='w-[12%]'>
                    <img src={Chart} alt="" srcset={Chart} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About