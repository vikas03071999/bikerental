import React from 'react'
import BikeMainPoster from '../assets/images/BikeMainPoster.png'

const HomeMainSection = () => {
  return (
    <div id="homeMain" className='mainSection flex justify-center min-h-[calc(100vh-105px)] gap-2 bg-gradient-to-br from-slate-100 via-gray-200 to-gray-300'>
      <div className='contentSection text-center basis-full md:basis-1/2 md:text-left flex flex-col justify-center px-5 gap-4'>
        <span className='text-black text-2xl font-bold'>Next adventure awaits</span>
        <h1 className='text-5xl font-extrabold md:text-4xl lg:text-5xl'>Save <span className='text-[#646cff]'>Big </span>with our bike rental</h1>
        <p className='text-base text-[#6e6b6b] mt-3 lg:text-lg'>Rent the bike of your dreams for your next great trip at affordable prices, flexible pick up
            and much more
        </p>
        <div className='bts flex items-center justify-center md:justify-start gap-5'>
            <button className='px-5 py-4 text-white rounded font-bold text-base bg-[#646cff] hover:bg-[#747bff] mt-3 md:text-base md:px-3 md:py-2 lg:text-lg lg:px-5 lg:py-4'><a href="#bookRide">Book Ride</a> <i class="fa-solid fa-circle-check"></i></button>
            <button className='px-5 py-4 text-white rounded font-bold text-base bg-black hover:bg-white hover:text-black border-2 border-black mt-3 ease-in duration-300 md:text-base md:px-3 md:py-2 lg:text-lg lg:px-5 lg:py-4'>Learn more <i class="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
      <div className='poster min-h-full hidden basis-0 md:basis-1/2 md:flex md:items-center'>
        <img src={BikeMainPoster} className='object-cover'/>
      </div>
    </div>
  )
}

export default HomeMainSection
