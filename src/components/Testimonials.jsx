import React from 'react'
import TestimonialAvatar1 from '../assets/images/TestimonialAvatar1.png'
import TestimonialAvatar2 from '../assets/images/TestimonialAvatar2.png'


const Testimonials = () => {
  return (
    <div className='testimonialContainer mt-40'>
      <div className='testimonialWrapper px-14 lg:px-28 flex flex-col gap-20 items-center'>
        <div className='testimonialHeader flex flex-col text-center'>
            <p className='text-xl md:2xl font-semibold'>Reviewed by our amazing customers</p>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold mt-5'>Client's Testimonials</h1>
            <span className='text-[#706f7b] mt-8 px-4 md:px-8 lg:px-24'>Discover the positive impact we've made on the our clients
                 by reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their positive 
                experiences with you.
            </span>
        </div>
        <div className='testimonialCards flex flex-col px-2 sm:px-20 md:px-0 lg:px-0 items-center md:items-start md:flex-row gap-12'>
            <div className='testimonialCard bg-white md:w-full px-10 md:px-5 lg:px-12 py-6 b-white border-2 border-[#e2e2e6]'>
                <p className='testimonialDesc text-base sm:text-lg md:text-xl font-semibold'>"We rented a bike from this website
                 and had an amazing experience! The booking was easy and the 
                 rental rates were very affordable."</p>
                <div className='userInfo flex gap-4 items-center mt-5'>
                    <img src={TestimonialAvatar1} alt="user-image" className='w-24 h-24 object-contain'/>
                    <div className='userName&Loc flex flex-col gap-1'>
                        <h3 className='text-base sm:text-lg md:text-xl font-bold'>James Sharma</h3>
                        <p className='text-sm sm:text-base md:text-lg font-semibold'>Mumbai</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-[#646cff] text:base sm:text-xl md:text-3xl lg:text-5xl"></i>
                </div>
            </div>
            <div className='testimonialCard bg-white md:w-full px-10 md:px-5 lg:px-12 py-6 b-white border-2 border-[#e2e2e6]'>
                <p className='testimonialDesc text-base sm:text-lg md:text-xl font-semibold'>"We rented a bike from this website
                 and had an amazing experience! The booking was easy and the 
                 rental rates were very affordable."
                </p>
                <div className='userInfo flex gap-4 items-center mt-5'>
                    <img src={TestimonialAvatar2} alt="user-image" className='w-24 h-24 object-contain'/>
                    <div className='userName&Loc flex flex-col gap-1'>
                        <h3 className='text-base sm:text-lg md:text-xl font-bold'>Rohit Bond</h3>
                        <p className='text-sm  sm:text-base md:text-lg font-semibold'>Delhi</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-[#646cff] text-base sm:text-xl md:text-3xl lg:text-5xl"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
