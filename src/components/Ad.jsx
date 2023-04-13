import React from 'react'

const Ad = () => {
  return (
    <div className='adContainer mt-32 w-full bg-[#2d2d2d] px-6 py-10 lg:py-20'>
      <div className="adWrapper flex items-center justify-center flex-col gap-3">
        <h1 className='text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold'>Save big with our affordable bike rental!</h1>
        <p className='text-white font-semibold text-center text-xl md:text-2xl lg:text-3xl'>Top Airports. Local Suppliers. <span className='text-[#646cff]'>24/7</span> support.</p>
      </div>
    </div>
  )
}

export default Ad
