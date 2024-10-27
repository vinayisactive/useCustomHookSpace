import React from 'react'
import ListDot from './list-dot';
import { IoIosArrowForward } from "react-icons/io";
import { instructions } from '@/utils/static/index';
import Link from 'next/link'


const HeaderText = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-8 text-white p-2' >
           
            <p className='text-xl sm:text-[25px] md:text-2xl lg:text-3xl xl:text-4xl text-center'>
                Craft your code with our 
                    <span className='text-theme-green'> customhooks</span>
                , turning complexity into simplicity!
            </p>
            
            <ul className=' flex justify-center items-center gap-4 sm:gap-6'>
               {instructions.map((instruction : string) => {
                 return <li key={instruction} className='flex justify-center items-center gap-2 text-sm lg:text-lg'><ListDot /> {instruction}</li>})}
            </ul>

            <Link href={"/customhooks"}>
                 <button className="py-2  pl-6 pr-4 flex justify-center items-center gap-2 sm:text-xl border border-desc-gray rounded-[30px] bg-btn-dark hover:border-white hover:scale-110">Browse Customhooks <IoIosArrowForward/> </button>
            </Link>
        </div>
    )
}

export default HeaderText
