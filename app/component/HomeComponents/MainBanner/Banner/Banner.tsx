import React from 'react'
import BannerButton from '../BannerButtons/BannerButton'
import { ButtonArr, ButtonArrTwo } from '../data'


const renderButtons = (btnArr: any) => {
    return btnArr.map((thing : any, i : any) => (
      <BannerButton key={i} text={thing} />
    ))
 }

const Banner = () => {
    
    return (
        <div className="bg-black -rotate-[25deg] scale-[1.5] overflow-hidden -mt-24 flex flex-col gap-1">
          {Array.from({ length: 20 }).map((_ : any, index:any) => (
            <div key={index} className="flex items-center gap-3 overflow-hidden">
              {index % 2 === 0 ? renderButtons(ButtonArr) : renderButtons(ButtonArrTwo)}
            </div>
          ))}
        </div>
      );
}

export default Banner;
