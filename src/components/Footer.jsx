import React from 'react'

const Footer = () => {
  return (
    <div className='footerContainer bg-[#2d2d2d] mt-32 px-2 md:px-3 lg:px-10 py-10'>
      <div className='footerWrapper px-10 sm:px-0 flex flex-col items-center sm:flex-row sm:flex-wrap md:flex-nowrap gap-10'>
        <div className='branding flex flex-col basis-2/5 gap-3 md:gap-5 px-4 md:px-8'>
          <h1 className='text-lg md:text-xl lg:text-3xl font-bold text-white text-center sm:text-left'>BIKE <span className='text-[#646cff]'>RENTAL</span></h1>
          <p className='text-white text-center sm:text-left text-sm md:text-base'>Offers a wide range of motor bikes for all your needs.
             We have the perfect bikes to meet your needs.</p>
        </div>
        <div className='subscribe flex flex-col basis-2/5 gap-5 px-10 sm:px-4 md:px-8'>
          <p className='text-white text-center sm:text-left'>Subscribe to our newsletter for latest news and updates</p>
          <div className='userEmailAndSubmit flex flex-col items-center sm:items-start lg:flex-row md:items-center gap-2'>
            <input className='w-4/5 sm:w-auto px-3 md:py-2 outline-none' type="text" placeholer="Email.." />
            <button className='bg-[#646cff] hover:bg-[#747bff] text-white px-3 py-1 md:py-2'>Subscribe</button>
          </div>
        </div>
        <div className='contactDetails flex flex-row gap-6 basis-full md:px-8 md:basis-1/5 md:flex-col md:gap-4'>
          <div className='callUs flex flex-col gap-2'>
            <span className='text-white text-base md:text-lg font-bold'>Call us:</span>
            <span className='text-white text-base sm:text-lg md:text-xl'>(012) 345 568</span>
          </div>
          <div className='followUs flex flex-col gap-2'>
            <span className='text-white text-base md:text-lg font-bold'>Follow us:</span>
            <div className='icons flex items-center text-white gap-3'>
              <i className="fa-brands fa-instagram cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl hover:text-[#646cff]"></i>
              <i className="fa-brands fa-facebook cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl hover:text-[#646cff]"></i>
              <i className="fa-brands fa-twitter cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl hover:text-[#646cff]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer