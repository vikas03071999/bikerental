import React, { useState } from 'react'
import RoyalEnfield1 from '../assets/images/RoyalEnfield1.png'
import Bajaj1 from '../assets/images/Bajaj1.png'
import Kawasaki1 from '../assets/images/Kawasaki1.png'
import Honda1 from '../assets/images/Honda1.png'
import Yamaha1 from '../assets/images/Yamaha1.png'
import KTM1 from '../assets/images/KTM1.png'

const BikeModelShowcase = () => {
  const [viewBike,setViewBike] = useState(RoyalEnfield1)

  return (
    <div className='bikeModelShowContainer mt-28 px-10'>
      <div className='bikeModelShowWrapper flex flex-col items-center justify-center'>
        <div className='bikeModelShowHeader flex flex-col text-center gap-5'>
            <p className='text-3xl font-semibold'>Bike Models</p>
            <h1 className='text-5xl font-bold'>Our rental fleet</h1>
            <p className='text-[#6e6b6b]'>Choose from a wide variety of our amazing bikes to rent for your next adventure.</p>
        </div>
        <div className='bikeModelImgPrice mt-10 flex w-full gap-4'>
            <div className='bikeModel flex flex-col basis-3/12 gap-3'>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(RoyalEnfield1)}>Royal Enfield</button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(Kawasaki1)}>Kawasaki</button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(Bajaj1)}>Bajaj</button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(KTM1)}>K T M </button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(Yamaha1)}>Yamaha</button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(Honda1)}>Honda</button>
            </div>
            <div className='bikeImg flex items-center justify-center basis-6/12'>
                <img className='object-contain' src={viewBike} alt="bike-image"/>
            </div>
            <div className='bikePriceAndSpecs flex items-center flex-col basis-3/12'>
                <div className='price w-4/5 text-xl font-semibold py-2 bg-[#646cff] text-white flex items-center justify-center'>
                  <span className='text-2xl font-bold'>$25</span> / rent per day
                </div>
                <div className='specifications flex flex-col w-4/5 px-2 py-2 border-2 border-[#706f7b]'>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Model</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>Yamaha</span>
                  </div>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Engine</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>350cc</span>
                  </div>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center w-full'>Cylinders</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>1</span>
                  </div>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Torque</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>28 Nm</span>
                  </div>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Fuel</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>22L</span>
                  </div>
                  <div className='spec flex items-center py-2'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Mileage</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-1/5 items-center'>33kmpl</span>
                  </div>
                </div>
                <button className='w-4/5 mt-3 bg-[#646cff] text-white px-2 py-2 text-xl hover:bg-[#747bff]'><a href="#bookRide">RESERVE NOW</a></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BikeModelShowcase
