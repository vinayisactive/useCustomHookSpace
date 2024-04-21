"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const HomeNav = () => {
    const route = usePathname();
    const findRoute = route.split("/").at(1);

  return (
    <Link 
        href="/" 
        className={`${findRoute === "" ? "active" : ""}`}
        >
            Home
    </Link>
  )
}

export default HomeNav
