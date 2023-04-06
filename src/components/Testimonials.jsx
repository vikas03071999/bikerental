import React from 'react'
import TestimonialAvatar1 from '../assets/images/TestimonialAvatar1.png'
import TestimonialAvatar2 from '../assets/images/TestimonialAvatar2.png'


const Testimonials = () => {
  return (
    <div className='testimonialContainer mt-40'>
      <div className='testimonialWrapper px-28 flex flex-col gap-20 items-center'>
        <div className='testimonialHeader flex flex-col text-center'>
            <p className='text-2xl font-semibold'>Reviewed by our amazing customers</p>
            <h1 className='text-5xl font-bold mt-5'>Client's Testimonials</h1>
            <span className='text-[#706f7b] mt-8 px-24'>Discover the positive impact we've made on the our clients
                 by reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their positive 
                experiences with you.
            </span>
        </div>
        <div className='testimonialCards flex gap-12'>
            <div className='testimonialCard bg-white w-full px-16 py-6 b-white border-2 border-[#e2e2e6]'>
                <p className='testimonialDesc text-xl font-semibold'>"We rented a bike from this website
                 and had an amazing experience! The booking was easy and the 
                 rental rates were very affordable."</p>
                <div className='userInfo flex gap-4 items-center justify-between mt-5'>
                    <img src={TestimonialAvatar1} alt="user-image" className='w-24 h-24 object-contain'/>
                    <div className='userName&Loc flex flex-col gap-1'>
                        <h3 className='text-xl font-bold'>James Sharma</h3>
                        <p className='text-lg fonr-semibold'>Mumbai</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-[#646cff] text-5xl"></i>
                </div>
            </div>
            <div className='testimonialCard bg-white w-full px-16 py-6 b-white border-2 border-[#e2e2e6]'>
                <p className='testimonialDesc text-xl font-semibold'>"The bike was in amazing condition and made our 
                                                trip more adventuorous. Highly recommend for
                                                this bike rental website!"
                </p>
                <div className='userInfo flex gap-4 items-center justify-between mt-5'>
                    <img src={TestimonialAvatar2} alt="user-image" className='w-24 h-24 object-contain'/>
                    <div className='userName&Loc flex flex-col gap-1'>
                        <h3 className='text-xl font-bold'>Rohit Bond</h3>
                        <p className='text-lg fonr-semibold'>Delhi</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-[#646cff] text-5xl"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
