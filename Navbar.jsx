import { useState } from 'react'
import {logo,lock,hamburgerMenu,close} from '../assets'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)
  return (
    <div className="w-full h-20 bg-white sticky top-0 z-[1000]">
      <div className="md:max-w-[1480px] max-w-[680px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logo} className="h-6 cursor-pointer" />
        <div className="hidden md:flex items-center">
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Pricing</li>
            </ul>
        </div>

        <div className='hidden md:flex'>
            <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
                <img src={lock}  />
                Login
            </button>
            <button className='px-8 py-3 bg-[#208466]'>
                Sing Up For Free
            </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
            <img src={toggle ? close:hamburgerMenu} alt="" />
        </div>

        <div className={toggle ? 'absolute top-0 z-10 p-4 bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul className='flex flex-col items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Pricing</li>
                <div className='flex flex-col my-4 gap-4'>
                <button className='border border-[#208486] flex justify-center items-center bg-transparent px-6 gap-2 py-4'>
                <img src={lock}  />
                Login
            </button>
            <button className='px-8 py-5 rounded-md bg-[#208486] text-whitefont-bold'>
                Sing Up For Free
            </button>
                </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
