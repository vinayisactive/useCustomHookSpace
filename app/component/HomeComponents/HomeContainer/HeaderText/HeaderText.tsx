import React from 'react'
import ListDot from '../ListDot/ListDot'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link'

const instructions = ["Copy-Paste", "Import", "Use hook in code"]

const HeaderText = () => {
    return (
        <div className=' w-full h-full flex flex-col justify-center items-center gap-8 text-white px-2' >
            <p className='text-xl sm:text-[25px] md:text-2xl lg:text-3xl xl:text-4xl text-center'>
                Craft your code with our 
                    <span className='text-theme-green'> customhooks</span>
                , turning complexity into simplicity!</p>
            
                <ul className=' flex justify-center items-center gap-4 sm:gap-6'>
                    {instructions.map((instruction) => {
                         return <li key={instruction} className='flex justify-center items-center gap-2 text-sm lg:text-lg'><ListDot /> {instruction}</li>})}
                </ul>

            <Link href={"/customhooks"}>
                 <button className="px-4 -pl-1 py-2 lg:px-6 lg:py-2 flex justify-center items-center gap-2 text-lg sm:text-xl border border-desc-gray rounded-[30px] bg-btn-dark hover:border-white hover:scale-110">Browse Customhooks <IoIosArrowForward/> </button>
            </Link>
        </div>
    )
}

export default HeaderText
