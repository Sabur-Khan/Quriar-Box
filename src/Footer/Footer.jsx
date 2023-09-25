import React from 'react'
import logo from '../assets/Logo.png'
const Footer = () => {
  return (
    <div className='bg-[#222132]'>
        <div className='max-w-container mx-auto py-20'>
            <div className='grid md:grid-cols-2 justify-center items-center gap-5 md:gap-5 lg:gap-28'>
                <div>
                    <h1 className=' font-Raleway font-extrabold text-[39px] text-white'>Get an update every week</h1>
                    <p className='text-base font-normal font-Raleway text-[#C5C5D2]'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                </div>
                <div>
                    <h1 className='text-[#F95C19] text-lg font-Oxanium font-bold mb-3'>SUBSCRIBE TO NEWSLETTER</h1>
                    <div className='flex gap-4 items-center'>
                        <input className='font-Oxanium py-3 px-5 rounded-sm bg-transparent border text-white border-[#C5C5D2] outline-none' type="email" placeholder='Enter your mail' />
                        <button className='bg-[#F95C19] text-white rounded-sm font-Oxanium py-3 px-5'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#2F2E41] py-14'>
            <div className=' max-w-container mx-auto'>
                <div className='grid md:grid-cols-2 items-center'>
                    <div className=' md:w-2/4'>
                        <img src={logo} alt="logo"/>
                        <p className='md:w-[200px] mt-5 text-base text-[#9291A1] font-Raleway font-semibold'>The most trusted Courier company in your area.</p>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-2 md:grid-cols-2 items-center'>
                        <div>
                            <ul>
                                <h1 className='text-5 font-Oxanium text-white font-bold mb-6'>Other links</h1>
                                <li className='text-base font-Raleway font-semibold text-[#9291A1] pb-3'><a href="#">Blogs</a></li>
                                <li className='text-base font-Raleway font-semibold text-[#9291A1] pb-3'><a href="#">Movers website</a></li>
                                <li className='text-base font-Raleway font-semibold text-[#9291A1] pb-3'><a href="#">Traffic Update</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h1 className='text-5 font-Oxanium text-white font-bold mb-6'>Services</h1>
                                <li className='text-base font-Raleway font-semibold text-[#9291A1] pb-3'><a href="#">Corporate goods</a></li>
                                <li className='text-base font-Raleway font-semibold text-[#9291A1] pb-3'><a href="#">Artworks</a></li>
                                <li className='text-base font-Raleway font-semibold text-[#9291A1] pb-3'><a href="#">Documents  </a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h1 className='text-5 font-Oxanium text-white font-bold mb-6'>Customer Care</h1>
                                <li className='text-base font-Raleway font-semibold text-[#9291A1] pb-3'><a href="#">About Us</a></li>
                                <li className='text-base font-Raleway font-semibold text-[#9291A1] pb-3'><a href="#">Contact US</a></li>
                                <li className='text-base font-Raleway font-semibold text-[#9291A1] pb-3'><a href="#">Get Update</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#222132] py-[30px]'>
            <div className='flex justify-between items-center max-w-container mx-auto'>
                <div>
                    <p className=' font-Raleway text-base font-medium text-white'>All rights Reserved © Sabur Kan, 2023</p>
                </div>
                <div>
                    <p className=' font-Raleway text-base font-medium text-white'>Made with heart by <span className='text-[#F95C19]'>ThemeWagon</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer