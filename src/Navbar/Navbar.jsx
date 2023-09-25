import logo from '../assets/Logo.png'
import {HiSearch} from 'react-icons/hi'
const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFFFFF26] to-[#FFFFFF26]'>
        <div className="max-w-container mx-auto">
            <div className='p-5 flex justify-between items-center'>
                <div className=" md:w-[20%]">
                    <a href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="w-full md:w-full lg:w-[80%] lg:flex justify-end items-center p-5 lg:p-0 text-center gap-[47px]">
                        <ul className='lg:flex  justify-end gap-[47px] md:text-center text-center'>
                            <li>
                                <a className='transition-all hover:text-[#F95C19] text-[#817382] font-Raleway text-[16px] font-bold' href="#">Home</a>
                            </li>
                            <li>
                                <a className='transition-all hover:text-[#F95C19] text-[#817382] font-Raleway text-[16px] font-bold' href="#">About</a>
                            </li>
                            <li>
                                <a className='transition-all hover:text-[#F95C19] text-[#817382] font-Raleway text-[16px] font-bold' href="#">Services</a>
                            </li>
                            <li>
                                <a className='transition-all hover:text-[#F95C19] text-[#817382] font-Raleway text-[16px] font-bold' href="#">Gallery</a>
                            </li>
                            <li>
                                <a className='transition-all hover:text-[#F95C19] text-[#817382] font-Raleway text-[16px] font-bold' href="#">Blog</a>
                            </li>
                        </ul>
                        <div className='flex gap-3'>
                            <button className='bg-[#FFEDC9] rounded px-6 py-3 text-[#FFAF0F] text-2xl font-extrabold'>
                                <HiSearch/>
                            </button>
                            <button className='text-[#F95C19] rounded font-Raleway text-[20px] font-bold bg-[#FFE4D9] px-5 py-3'>Contact US</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
