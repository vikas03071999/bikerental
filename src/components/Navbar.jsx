import React from 'react'
import BikeRentalLogo from "../assets/images/BikeRentalLogo.png"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navBarContainer w-full px-4 py-6 bg-[#2d2d2d]'>
      <div className='navbarWrapper flex items-center text-white'>
        <div className='leftnav flex basis-3/12 items-center'>
          <img src={BikeRentalLogo} className='cursor-pointer w-24 rounded-full object-contain' onClick={()=>navigate("/")}/>
          <div className='cursor-pointer brandName flex flex-col ml-2 justify-center' onClick={()=>navigate("/")}>
            <span className=" text-white text-2xl leading-6 font-bold">BIKE</span>
            <span className='text-white text-2xl leading-6 font-semibold'>rental</span>
          </div>
        </div>
        <ul className='midnav text-white text-lg font-semibold basis-6/12 flex gap-5 items-center list-none'>
          <li className='cursor-pointer hover:text-[#646cff] ease-in duration-300' onClick={()=>navigate("/")}>Home</li>
          <li className='cursor-pointer hover:text-[#646cff] ease-in duration-300' onClick={()=>navigate("/about-bike-rental")}>About</li>
          <li className='cursor-pointer hover:text-[#646cff] ease-in duration-300' onClick={()=>navigate("/vehicle-models-available")}>Vehicle models</li>
          <li className='cursor-pointer hover:text-[#646cff] ease-in duration-300' onClick={()=>navigate("/hear-from-our-customers")}>Testimonials</li>
          <li className='cursor-pointer hover:text-[#646cff] ease-in duration-300' onClick={()=>navigate("/meet-our-team")}>Our Team</li>
          <li className='cursor-pointer hover:text-[#646cff] ease-in duration-300' onClick={()=>navigate("/reach-out-to-us")}>Contact</li>
        </ul>
        <div className='rightnav basis-3/12 flex justify-end gap-6 items-center'>
        <span className='text-lg font-semibold cursor-pointer hover:text-[#646cff] ease-in duration-300'>Sign in</span>
        <button type="button" className=' px-5 py-2 text-white text-lg bg-[#646cff] rounded-sm cursor-pointer hover:bg-[#747bff] ease-in duration-300'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
