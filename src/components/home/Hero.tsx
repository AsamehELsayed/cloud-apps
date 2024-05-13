import React from 'react'
import { TiTick } from "react-icons/ti";
import homeImage from "@/image/pngegg (5).png"
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='grid lg:grid-cols-3 lg:h-screen gap-2 mx-20 '>
      <div className="col-span-1  lg:h-fit pt-52">
        <h1 className='text-5xl font-black'>Cloud Hosting</h1>
        <p className='text-lg font-semibold'>The best web hosting solution for your online success
</p>
        <ul className='mt-5 text-lg'>
            <li className='flex text-center'><TiTick/> Easy To Use Control Panel </li>
            <li className='flex text-center'><TiTick/> Secure Hosting </li>
            <li className='flex text-center'><TiTick/> Website Maintenance </li>
        </ul>
      </div>
      <div className="col-span-2  lg:h-4/6"><Image className='size-full' src={homeImage}  alt='s'/></div>

    </div>
  )
}

export default Hero
