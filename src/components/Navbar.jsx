import React, { useState, useEffect } from 'react'
import BikeRentalLogo from "../assets/images/BikeRentalLogo.png"
import { useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeNavbarItemCss = "cursor-pointer text-[#646cff] ease-in duration-300";
  const inactiveNavbarItemCss = "cursor-pointer hover:text-[#646cff] ease-in duration-300";
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [showMenuBar, setShowMenuBar] = useState(false);
  // const [showCloseIcon, setShowCloseIcon] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("about-bike-rental")) {
      setActiveNavItem("About");
    }
    else if (location.pathname.includes("vehicle-models-available")) {
      setActiveNavItem("Vehicle Models");
    }
    else if (location.pathname.includes("hear-from-our-customers")) {
      setActiveNavItem("Testimonials");
    }
    else if (location.pathname.includes("meet-our-team")) {
      setActiveNavItem("Our Team");
    }
    else if (location.pathname.includes("reach-out-to-us")) {
      setActiveNavItem("Contact");
    }
    else {
      setActiveNavItem("Home");
    }
  }, [location])

  return (
    <>
      <div className='navBarContainer w-full px-4 py-6 bg-[#2d2d2d]'>
        <div className='navbarWrapper flex items-center text-white justify-between'>
          <div className='leftnav flex lg:basis-1/5 items-center md:basis-1/2 sm:basis-1/2'>
            <img src={BikeRentalLogo} className='cursor-pointer w-24 rounded-full object-contain' onClick={() => navigate("/")} />
            <div className='cursor-pointer brandName flex flex-col ml-1 justify-center' onClick={() => navigate("/")}>
              <span className=" text-white text-2xl leading-6 font-bold">BIKE</span>
              <span className='text-white text-2xl leading-6 font-semibold'>rental</span>
            </div>
          </div>
          <ul className='midnav hidden lg:inline-flex text-white text-lg font-semibold basis-3/5 gap-5 items-center justify-center list-none'>
            <li className={activeNavItem === "Home" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={() => navigate("/")}>Home</li>
            <li className={activeNavItem === "About" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={() => navigate("/about-bike-rental")}>About</li>
            <li className={activeNavItem === "Vehicle Models" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={() => navigate("/vehicle-models-available")}>Models</li>
            <li className={activeNavItem === "Testimonials" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={() => navigate("/hear-from-our-customers")}>Testimonials</li>
            <li className={activeNavItem === "Our Team" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={() => navigate("/meet-our-team")}>Our Team</li>
            <li className={activeNavItem === "Contact" ? activeNavbarItemCss : inactiveNavbarItemCss} onClick={() => navigate("/reach-out-to-us")}>Contact</li>
          </ul>
          {!showMenuBar && <div className='menu flex basis-1/2 justify-end lg:hidden'>
            <i className="fa-solid fa-bars text-2xl font-bold hover:text-[#646cff] cursor-pointer" onClick={() => {setShowMenuBar(!showMenuBar)}}></i>
          </div>}
          {showMenuBar && <div className='menu flex basis-1/2 justify-end lg:hidden'>
          <i class="fa-regular fa-xmark text-2xl font-bold hover:text-[#646cff] cursor-pointer" onClick={() => {setShowMenuBar(!showMenuBar)}}></i>
          </div>}
          <div className='rightnav hidden lg:inline-flex basis-1/5 justify-end gap-6 items-center'>
            <span className='text-lg font-semibold cursor-pointer hover:text-[#646cff] ease-in duration-300'>Sign in</span>
            <button type="button" className=' px-5 py-2 text-white text-lg bg-[#646cff] rounded-sm cursor-pointer hover:bg-[#747bff] ease-in duration-300'>Register</button>
          </div>
        </div>
      </div>
      { showMenuBar && 
        <div className='menuBar w-full bg-[#2c2b2b] flex items-center absolute top-calc(100vh-107.5px) left-0 z-10 px-4 py-4 ease-in-out duration-300'>
          <ul className='w-full text-xl font-semibold list-none flex flex-col gap-4'>
            <li className="cursor-pointer text-white hover:text-[#646cff] ease-in duration-300 border-b border-[rgb(116,111,111)] py-1" onClick={() => {setShowMenuBar(!showMenuBar); navigate("/")}}>Home</li>
            <li className="cursor-pointer text-white hover:text-[#646cff] ease-in duration-300 border-b border-[rgb(116,111,111)] py-1" onClick={() => {setShowMenuBar(!showMenuBar); navigate("/about-bike-rental")}}>About</li>
            <li className="cursor-pointer text-white hover:text-[#646cff] ease-in duration-300 border-b border-[rgb(116,111,111)] py-1" onClick={() => {setShowMenuBar(!showMenuBar); navigate("/vehicle-models-available")}}>Models</li>
            <li className="cursor-pointer text-white hover:text-[#646cff] ease-in duration-300 border-b border-[rgb(116,111,111)] py-1" onClick={() => {setShowMenuBar(!showMenuBar); navigate("/hear-from-our-customers")}}>Testimonials</li>
            <li className="cursor-pointer text-white hover:text-[#646cff] ease-in duration-300 border-b border-[rgb(116,111,111)] py-1" onClick={() => {setShowMenuBar(!showMenuBar); navigate("/meet-our-team")}}>Our Team</li>
            <li className="cursor-pointer text-white hover:text-[#646cff] ease-in duration-300 py-1" onClick={() => {setShowMenuBar(!showMenuBar); navigate("/reach-out-to-us")}}>Contact</li>
          </ul>
        </div>
      }
    </>
  )
}

export default Navbar
