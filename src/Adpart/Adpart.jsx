import React from 'react'
import imageforad from '../assets/Adimagepart.jpg'
import playIcon from '../assets/playIcon.png'
const Adpart = () => {
  return (
   <div className=' py-24'>
        <div className='max-w-container mx-auto'>
            <div className='relative'>
                <div className=' absolute top-0 left-0 w-full h-full bg-black/60'>
                    <div className=' flex justify-center items-center h-full'>
                        <div className='p-5'>
                            <div className=' flex items-center justify-center'>
                                <img className='w-[50px] md:w-[50px] lg:w-1/4' src={playIcon} alt="playIcon"/>
                            </div>
                            <h1 className='text-[#F95C19] font-Oxanium text-[32px] font-bold text-center'>FASTEST DELIVERY</h1>
                            <p className='text-center text-white font-Raleway md:text-[25px] font-normal md:w-[560px] mt-3'>You can get your valuable item in the fastest period of time with safety. Because your emergency is our first priority.</p>
                        </div>
                    </div>
                </div>
                <img src={imageforad} alt="imageforad" />
            </div>
        </div>
   </div>
  )
}

export default Adpart