import React from 'react'
import icon1 from '../assets/iCON1.png'
import icon2 from '../assets/Icon2.png'
import Icon3 from '../assets/Icon3.png'
import LINE1 from '../assets/LINE1.png'
import LINE2 from '../assets/LINE2.png'
import LINE3 from '../assets/LINE3.png'
import LINE4 from '../assets/LINE4.png'
import LINE5 from '../assets/LINE5.png'
const Services = () => {
  return (
    <div>
        <div className="max-w-container mx-auto">
            <div>
                <h1 className='text-center font-Oxanium font-bold text-[32px] text-[#F95C19]'>SERVICES</h1>
                <h2 className='text-center font-Raleway font-extrabold text-[39px] text-[#11111D]'>Our services for you</h2>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 py-14 gap-10'>
                <div className=' px-[49px] py-[39px] bg-white'>
                    <div className='flex justify-center'>
                        <img src={icon1} alt="" />
                    </div>
                    <h1 className='text-center py-5 text-[#464558] text-[25px] font-extrabold font-Raleway'>Business Services</h1>
                    <p className='text-[14px] mb-2 font-normal font-Raleway text-[#7B7A8B]'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                    <li className='text-[#7B7A8B] text-[16px] marker:text-[#F95C19] font-normal'>Corporate goods</li>
                    <li className='text-[#7B7A8B] text-[16px] marker:text-[#F95C19] font-normal'>Shipment</li>
                    <li className='text-[#7B7A8B] text-[16px] marker:text-[#F95C19] font-normal'>Accesories</li>
                    <button className=' mt-5 w-full border-2 py-3 hover:bg-[#F95C19] transition-all font-Oxanium hover:text-white font-bold rounded'>Learn more</button>
                </div>
                <div className=' px-[49px] py-[39px] bg-white'>
                    <div className='flex justify-center'>
                        <img src={icon2} alt="" />
                    </div>
                    <h1 className='text-center py-5 text-[#464558] text-[25px] font-extrabold font-Raleway'>Statewide Services</h1>
                    <p className='text-[14px] mb-2 font-normal font-Raleway text-[#7B7A8B]'>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
                    <li className='text-[#7B7A8B] text-[16px] marker:text-[#F95C19] font-normal'>Personal items</li>
                    <li className='text-[#7B7A8B] text-[16px] marker:text-[#F95C19] font-normal'>Percels</li>
                    <li className='text-[#7B7A8B] text-[16px] marker:text-[#F95C19] font-normal'>Documents</li>
                    <button className=' mt-5 w-full border-2 py-3 hover:bg-[#F95C19] transition-all font-Oxanium hover:text-white font-bold rounded'>Learn more</button>
                </div>
                <div className=' px-[49px] py-[39px] bg-white'>
                    <div className='flex justify-center'>
                        <img src={Icon3} alt="" />
                    </div>
                    <h1 className='text-center py-5 text-[#464558] text-[25px] font-extrabold font-Raleway'>Personal Services</h1>
                    <p className='text-[14px] mb-2 font-normal font-Raleway text-[#7B7A8B]'>You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>
                    <li className='text-[#7B7A8B] text-[16px] marker:text-[#F95C19] font-normal'>Gifts</li>
                    <li className='text-[#7B7A8B] text-[16px] marker:text-[#F95C19] font-normal'>Package</li>
                    <li className='text-[#7B7A8B] text-[16px] marker:text-[#F95C19] font-normal'>Documents</li>
                    <button className=' mt-5 w-full border-2 py-3 hover:bg-[#F95C19] transition-all font-Oxanium hover:text-white font-bold rounded'>Learn more</button>
                </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4 py-9'>
                <div className='text-center p-5  h-[200px]'>
                    <div className="flex justify-center ">
                        <img src={LINE1} alt="Awards" />
                    </div>
                    <small className=' font-Raleway text-[39px] font-extrabold text-[#F95C19]'>26+</small>
                    <h2 className='text-[20px] font-Raleway font-bold text-[#464558] '>Awards won</h2>
                </div>
                <div className='text-center p-5  h-[200px]'>
                    <div className="flex justify-center ">
                        <img src={LINE2} alt="Awards" />
                    </div>
                    <small className=' font-Raleway text-[39px] font-extrabold text-[#F95C19]'>65+</small>
                    <h2 className='text-[20px] font-Raleway font-bold text-[#464558] '>States covered</h2>
                </div>
                <div className='text-center p-5  h-[200px]'>
                    <div className="flex justify-center ">
                        <img src={LINE3} alt="Awards" />
                    </div>
                    <small className=' font-Raleway text-[39px] font-extrabold text-[#F95C19]'>689K+</small>
                    <h2 className='text-[20px] font-Raleway font-bold text-[#464558] '>Happy clients</h2>
                </div>
                <div className='text-center p-5  h-[200px]'>
                    <div className="flex justify-center ">
                        <img src={LINE4} alt="Awards" />
                    </div>
                    <small className=' font-Raleway text-[39px] font-extrabold text-[#F95C19]'>130M+</small>
                    <h2 className='text-[20px] font-Raleway font-bold text-[#464558] '>Goods delivered</h2>
                </div>
                <div className='text-center p-5  h-[200px]'>
                    <div className="flex justify-center ">
                        <img src={LINE5} alt="Awards" />
                    </div>
                    <small className=' font-Raleway text-[39px] font-extrabold text-[#F95C19]'>130M+</small>
                    <h2 className='text-[20px] font-Raleway font-bold text-[#464558] '>Business hours</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services