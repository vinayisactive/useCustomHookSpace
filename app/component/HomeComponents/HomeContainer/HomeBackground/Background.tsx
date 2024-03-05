import React from 'react'
import BannerButton from './BannerButtons/BannerButton'

const renderButtons = (btnArr: any) => {
    return btnArr.map((thing : any, i : any) => (
      <BannerButton key={i} text={thing} />
    ))
 }

const Background = ({ButtonArr, ButtonArrTwo} : any) => {
    return (
        <div className=" h-full w-full flex flex-col gap-1 bg-black -rotate-[25deg] scale-[1.5] overflow-hidden z-10">
          {Array.from({ length: 80 }).map((_ : any, index:any) => (
            <div key={index} className="flex items-center gap-3 overflow-hidden">
              {index % 2 === 0 ? renderButtons(ButtonArr) : renderButtons(ButtonArrTwo)}
            </div>
          ))}
        </div>
      );
}

export default Background;
