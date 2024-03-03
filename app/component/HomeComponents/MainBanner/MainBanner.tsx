import React from 'react'
import Banner from './Banner/Banner'

const MainBanner = () => {
  return (
    <div className="w-screen h-[92vh] overflow-hidden relative">
        <div className="z-10 ">
        <Banner/>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>
  )
}

export default MainBanner
