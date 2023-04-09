import React from 'react'

const Footer = () => {
  return (
    <div className='footerContainer bg-[#2d2d2d] mt-32 px-10 py-10'>
      <div className='footerWrapper flex gap-5'>
        <div className='branding flex flex-col basis-2/5 gap-5 px-8'>
          <h1 className='text-3xl font-bold text-white'>BIKE <span className='text-[#646cff]'>RENTAL</span></h1>
          <p className='text-white'>Offers a wide range of motor bikes for all your needs.
             We have the perfect bikes to meet your needs.</p>
        </div>
        <div className='subscribe flex flex-col basis-2/5 gap-5 px-8'>
          <p className='text-white'>Subscribe to our newsletter for latest news and updates</p>
          <div className='userEmailAndSubmit flex items-center gap-2'>
            <input className='px-3 py-2 outline-none' type="text" placeholed="Email.." />
            <button className='bg-[#646cff] hover:bg-[#747bff] text-white px-3 py-2'>Subscribe</button>
          </div>
        </div>
        <div className='contactDetails flex flex-col basis-1/5'>
          <span className='text-white text-lg font-bold'>Call us:</span>
          <span className='mt-2 text-white text-xl'>(012) 345 568</span>
          <span className='text-white text-lg font-bold'>Follow us:</span>
          <div className='icons flex mt-2 text-white gap-3'>
            <i className="fa-brands fa-instagram cursor-pointer text-2xl hover:text-[#646cff]"></i>
            <i className="fa-brands fa-facebook cursor-pointer text-2xl hover:text-[#646cff]"></i>
            <i className="fa-brands fa-twitter cursor-pointer text-2xl hover:text-[#646cff]"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer