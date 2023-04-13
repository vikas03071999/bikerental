import React from 'react'

const Contact = () => {
  return (
    <div className='contactContainer px-8 py-10'>
      <div className='contactWrapper flex flex-col items-center justify-center gap-20'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>Our contact details</h1>
        <div className='details flex flex-col sm:flex-row gap-14'>
          <div className='address flex flex-col basis-1/2 gap-7'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Additional Information</h1>
            <p className='text-[#777]'>We are there 24x7 to assist you. Feel free to reach out to us
              any time and seal your deal
            </p>
            <span className='text-lg flex items-center font-bold gap-1 cursor-pointer hover:text-[#646cff]'><i className="fa-solid fa-phone"></i>  (789) 354-4653</span>
            <span className='text-lg font-bold flex items-center gap-1 cursor-pointer hover:text-[#646cff]'><i className="fa-solid fa-envelope"></i>bikerental@gmail.com</span>
            <span className='text-lg font-bold flex items-center gap-1 cursor-pointer hover:text-[#646cff]'><i className="fa-solid fa-location-dot"></i>New Delhi, India</span>
          </div>
          <div className='writeToUs flex flex-col basis-1/2 gap-6'>
            <div className='userInput flex flex-col gap-4'>
              <label htmlFor="name">Full Name <span className='text-[#646cff]'>*</span></label>
              <input type="text" name="name" placeholder='John Doe' className='px-4 py-2 md:py-5 outline-none'/>
            </div>
            <div className='userInput flex flex-col gap-4'>
              <label htmlFor="name">Email <span className='text-[#646cff]'>*</span></label>
              <input type="email" name="name" placeholder='johnDoe@email.com' className='px-4 py-2 md:py-5 outline-none'/>
            </div>
            <div className='userInput flex flex-col gap-4'>
              <label htmlFor="name">Your query <span className='text-[#646cff]'>*</span></label>
              <textarea type="text" name="name" placeholder='Your query here...' className='px-4 py-2 md:py-5 outline-none'/>
            </div>
            <button className='text-white text-lg font-semibold bg-[#646cff] py-3'>Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
