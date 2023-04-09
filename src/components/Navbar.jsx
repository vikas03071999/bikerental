import React, { useState, useEffect } from 'react'
import BikeRentalLogo from "../assets/images/BikeRentalLogo.png"
import { useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeNavbarItemCss = "cursor-pointer text-[#646cff] ease-in duration-300";
  const inactiveNavbarItemCss = "cursor-pointer hover:text-[#646cff] ease-in duration-300";
  const [activeNavItem,setActiveNavItem] = useState("Home");
  useEffect(()=>{
    if(location.pathname.includes("about-bike-rental")){
      setActiveNavItem("About");
    }
    else if(location.pathname.includes("vehicle-models-available")){
      setActiveNavItem("Vehicle Models");
    }
    else if(location.pathname.includes("hear-from-our-customers")){
      setActiveNavItem("Testimonials");
    }
    else if(location.pathname.includes("meet-our-team")){
      setActiveNavItem("Our Team");
    }
    else if(location.pathname.includes("reach-out-to-us")){
      setActiveNavItem("Contact");
    }
    else{
      setActiveNavItem("Home");
    }
  },[location])
  
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
          <li className={activeNavItem === "Home" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={()=>navigate("/")}>Home</li>
          <li className={activeNavItem === "About" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={()=>navigate("/about-bike-rental")}>About</li>
          <li className={activeNavItem === "Vehicle Models" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={()=>navigate("/vehicle-models-available")}>Bike models</li>
          <li className={activeNavItem === "Testimonials" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={()=>navigate("/hear-from-our-customers")}>Testimonials</li>
          <li className={activeNavItem === "Our Team" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={()=>navigate("/meet-our-team")}>Our Team</li>
          <li className={activeNavItem === "Contact" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={()=>navigate("/reach-out-to-us")}>Contact</li>
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
