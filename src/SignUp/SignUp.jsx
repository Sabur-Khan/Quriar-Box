import signup from '../assets/regVactor.png'
import {BsSendFill} from 'react-icons/bs'
const SignUp = () => {

    const handleClick = (event) => {
        event.preventDefault();
    };
  return (
    <div className="max-w-container mx-auto py-24">
        <div className="grid md:grid-cols-2 items-center">
            <div className=''>
                <img className='md:w-[70%]' src={signup} alt="signupvactor" />
                <h2 className='text-[#F95C19]  md:text-2xl font-Oxanium md:font-normal lg:font-bold'>REQUEST A CALLBACK</h2>
                <h1 className='text-[#222132] md:text-[39px] font-extrabold font-Raleway'>We will contact in the shortest time.</h1>
                <h3 className='text-[#9291A1] font-Raleway md:text-2xl font-semibold'>Monday to Friday, 9am-5pm.</h3>
            </div>
            <div className='w-full md:w-full lg:w-full p-4'>
                
                <form action="" method="get">
                    
                    <input  className='block bg-transparent border mt-4 px-3 py-5 w-full sm:w-full md:w-full lg:w-[423px] border-[#C5C5D2] rounded font-Raleway text-base' type="text" placeholder='Name' />
                    <input className='block bg-transparent border mt-4 px-3 py-5 w-full md:w-full lg:w-[423px] border-[#C5C5D2] rounded font-Raleway text-base' type="email" placeholder='Email' />
                    <textarea  className= ' px-3 py-5 bg-transparent border mt-4 border-[#C5C5D2] rounded w-full md:w-full lg:w-[423px] font-Raleway text-base' name="" id="" cols="30" placeholder='Message' rows="20"></textarea>
                    <button onClick={handleClick} className='flex justify-center items-center gap-4 mt-14 rounded text-center w-full md:w-full lg:w-[423px] bg-[#F95C19] hover:bg-transparent hover:transition-all hover:border hover:border-[#C5C5D2] hover:text-black font-Oxanium font-extrabold text-base border text-white px-5 py-3'>Send Message <BsSendFill></BsSendFill></button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default SignUp