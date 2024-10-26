import React from 'react'
import BannerButton from '../buttons/background-btns'
import { HomeBackgroundInterface as HomeBackgroundProps } from '@/interfaces/ts-interfaces';

const renderButtons = (btnArr: string[]) => {
    return btnArr.map((thing : string, i : number) => (
      <BannerButton key={i} text={thing} />
    ))
 }

const HomeBackground: React.FC<HomeBackgroundProps> = ({ButtonArr, ButtonArrTwo} : any) => {
    return (
      <div>
        <div className=" h-full w-full flex flex-col gap-1 bg-black -rotate-[25deg] scale-[1.3] overflow-hidden z-10">
          {Array.from({ length: 80 }).map((_ : any, index:any) => (
            <div key={index} className="flex items-center gap-3 overflow-hidden">
              {index % 2 === 0 ? renderButtons(ButtonArr) : renderButtons(ButtonArrTwo)}
            </div>
          ))}
        </div> 
      </div>
      );
}

export default HomeBackground;
