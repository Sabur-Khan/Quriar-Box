
import quote from '../assets/Quote icon.png'
import {AiFillStar} from 'react-icons/ai'
import users from '../assets/userss.png'

const Testimonial = () => {
  return (
    <div className='max-w-container mx-auto'>
        <div className='flex items-center justify-center w-full pt-16'>
            <div className='flex items-center gap-[30px] h-[100px]'>
                <div className='flex justify-center'>
                    <img src={quote} alt=""/>
                </div>
                <div className='text-center mb-0'>
                    <h1 className='text-[#F95C19] md:text-[20px] lg:text-[32px] font-bold font-Oxanium'>TESTIMONIAL</h1>
                    <h2 className=' font-Raleway font-extrabold md:text-[20px] lg:text-[39px] text-[#11111D   ]'>Our Awesome Clients</h2>
                </div>
            </div>
        </div>
        <div className='py-16'>
            <div className='px-[39px] py-[40px] md:w-[70%] mx-auto bg-white'>
                <h1 className='text-[#F95C19]'>Fantastic service!</h1>
                <p>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                <div className='flex justify-between items-center mt-3'>
                    <div className='flex gap-3'>
                        <span className=' cursor-pointer md:text-lg font-extrabold text-[#F95C19]'><AiFillStar></AiFillStar></span>
                        <span className=' cursor-pointer md:text-lg font-extrabold text-[#F95C19]'><AiFillStar></AiFillStar></span>
                        <span className=' cursor-pointer md:text-lg font-extrabold text-[#F95C19]'><AiFillStar></AiFillStar></span>
                        <span className=' cursor-pointer md:text-lg font-extrabold text-[#F95C19]'><AiFillStar></AiFillStar></span>
                        <span className=' cursor-pointer md:text-lg font-extrabold text-[#F95C19]'><AiFillStar></AiFillStar></span>
                    </div>
                    <div className='flex text-right gap-1 md:gap-3 lg:gap-4 items-center'>
                        <div>
                            <h1 className=' font-bold text-[12px] md:text-[13px] lg:text-base font-Raleway text-[#222132]'>Yves Tanguy</h1>
                            <p className='font-normal text-[10px] md:text-[13px] lg:text-base font-Raleway text-[#464558]'>Chief Executive, DLF</p>
                        </div>
                        <div>
                            <img className=' rounded-full w-[40px] md:w-28 lg:w-full' src={users} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial