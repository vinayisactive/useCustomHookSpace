import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={"/"} className="flex justify-center items-center gap-2">
    <Image
      src={"https://res.cloudinary.com/dbs9ulw2r/image/upload/v1709561122/n5kdrlwz1bmavs2n2ajh.png"}
      alt="uchslogo"
      width={40}
      height={40}
    />
    <h1 className=" hidden md:flex text-md md:text-lg lg:text-xl">
      u<span className="text-theme-green">C</span>HS
    </h1>
  </Link>
  )
}

export default Logo
