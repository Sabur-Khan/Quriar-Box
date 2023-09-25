import maps from '../assets/map.png'
import {TiLocation} from 'react-icons/ti'
import {MdOutlineWatchLater} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import {BiLogoFacebookSquare} from 'react-icons/bi'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {FaTwitterSquare} from 'react-icons/fa'
import {IoIosCall} from 'react-icons/io'
const FindUS = () => {
  return (
    <div className='max-w-container mx-auto py-24'>
        <div className='text-center mb-5'>
            <h1 className='text-[#F95C19] font-Oxanium font-bold text-[32px]'>FIND US</h1>
            <h2 className=' text-[39px] font-Raleway font-extrabold text-[#222132]'>Access us easily</h2>
        </div>
        <div className='grid md:grid-cols-2 items-center gap-4'>
            <div>
                <img src={maps} alt="maps" />
            </div>
            <div className='bg-white'>
                <div className='w-full md:w-full lg:w-[536px] p-4 md:p-[20px] lg:p-[88px] '>
                    <h1>Contact with us</h1>
                    <ul>
                       <small className='flex items-center gap-[13px] text-base font-normal font-Raleway text-[#5C5B6C]'><TiLocation className='text-[#FFAF0F] font-bold text-2xl'></TiLocation> - 2277 Lorem Ave, San Diego, CA 22553</small>   
                       <small className='flex items-center gap-[13px] text-base font-normal font-Raleway text-[#5C5B6C]'><MdOutlineWatchLater className='text-[#FFAF0F] font-bold text-2xl'></MdOutlineWatchLater> - Monday - Friday: 10am - 10pm <br /> Sunday: 11 am - 9pm</small>   
                       <small className='flex items-center gap-[13px] text-base font-normal font-Raleway text-[#5C5B6C]'><AiOutlineMail className='text-[#FFAF0F] font-bold text-2xl'></AiOutlineMail> - info@quriarbox.com</small>   
                    </ul>
                    <ul className='mt-3 md:mt-[10px] lg:mt-[68px] flex items-center gap-4'>
                        <li>
                            <a href="#"><BiLogoFacebookSquare className=' font-extrabold text-3xl hover:text-[#F95C19] transition'></BiLogoFacebookSquare></a>
                        </li>
                        <li>
                            <a href="#"><BiLogoInstagramAlt className=' font-extrabold text-3xl hover:text-[#F95C19] transition'></BiLogoInstagramAlt></a>
                        </li>
                        <li>
                            <a href="#"><FaTwitterSquare className=' font-extrabold text-3xl hover:text-[#F95C19] transition'></FaTwitterSquare></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div >
            <ul className='mt-10 w-full md:w-full lg:w-[560px] mx-auto'>
                <small className='flex items-center p-4 md:p-[20px] justify-center w-full gap-3 py-[25px] font-Oxanium font-bold md:text-xl text-white bg-[#F95C19] rounded hover:bg-transparent hover:border hover:border-[#C5C5D2] transition-all hover:text-black'><IoIosCall className='text-[30px] md:text-[50px] lg:text-[50px] font-extrabold'></IoIosCall> Call us to delivery  123-456789</small>
            </ul>
        </div>
    </div>
  )
}

export default FindUS