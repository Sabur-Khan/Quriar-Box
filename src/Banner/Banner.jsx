import React from 'react'
import {HiArrowRight} from 'react-icons/hi'
import BannerImage from '../assets/banner image.png'
const Banner = () => {
  return (
    <div className="max-w-container mx-auto md:flex justify-between items-center py-[200px]">
        <div className='w-full md:w-full lg:w-[50%]'>
            <h1 className='text-[40px] md:text-[40px] lg:text-[49px] font-extrabold text-[#261134] font-Raleway'> <span className='text-[49px] text-[#261134] font-normal font-Raleway'>A trusted provider of</span> courier services.</h1>
            <p className='font-normal font-Raleway w-[280px] text-[#4D4D4D]'>We deliver your products safely to your home in a reasonable time.</p>
            <button className=' font-black bg-[#F95C19] py-[12px] px-[20px] text-[20px] flex items-center gap-3 mt-6 text-white'>Get started <HiArrowRight className='font-black text-[20px]'/> </button>
        </div>
        <div className='md:w-1/2 lg:w-[50%]'>
            <img src={BannerImage} alt=""/>
        </div>
    </div>
  )
}

export default Banner