import React, { useState } from 'react'
import { bikesInformation } from '../data/data'

const BikeModelShowcase = () => {
  const [viewBike,setViewBike] = useState(bikesInformation[0])
  const activeButtonCss = "w-9/12 px-5 py-3 bg-[#646cff] text-white text-2xl text-left  font-bold";
  const inactiveButtonCss = "w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200";

  return (
    <div className='bikeModelShowContainer mt-28 px-10'>
      <div className='bikeModelShowWrapper flex flex-col items-center justify-center'>
        <div className='bikeModelShowHeader flex flex-col text-center gap-5'>
            <p className='text-xl md:text-2xl lg:text-3xl font-semibold'>Bike Models</p>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Our rental fleet</h1>
            <p className='text-[#6e6b6b]'>Choose from a wide variety of our amazing bikes to rent for your next adventure.</p>
        </div>
        <div className='bikeModelImgPrice mt-10 flex flex-wrap lg:flex-nowrap w-full'>
            <div className='bikeModel mb-12 flex flex-col basis-full items-center lg:basis-4/12 gap-3'>
              {
                bikesInformation.map(bike => {
                  return (
                    <button className={bike === viewBike ? activeButtonCss : inactiveButtonCss} onClick={()=>setViewBike(bike)}>{bike.bikeName}</button>
                  )
                })
              }
                {/* <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(RoyalEnfield1)}>Royal Enfield</button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(Kawasaki1)}>Kawasaki</button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(Bajaj1)}>Bajaj</button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(KTM1)}>K T M </button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(Yamaha1)}>Yamaha</button>
                <button className=' w-9/12 px-5 py-3 bg-[#f7f5f5] text-black text-2xl text-left  font-bold hover:bg-[#646cff] hover:text-white ease-in duration-200' onClick={()=>setViewBike(Honda1)}>Honda</button> */}
            </div>
            <div className='bikeImg flex mb-12 items-center justify-center basis-full md:basis-3/5 md:items-start lg:basis-6/12'>
                <img className='object-contain' src={viewBike.image} alt="bike-image"/>
            </div>
            <div className='bikePriceAndSpecs mb-12 flex items-center flex-col basis-full w-4/5 md:basis-2/5 md:items-end lg:basis-4/12'>
                <div className='price w-4/5 text-xl font-semibold py-2 bg-[#646cff] text-white flex items-center justify-center'>
                  <span className='text-2xl font-bold'>{viewBike.bikeRent}</span> / rent per day
                </div>
                <div className='specifications flex flex-col w-4/5 px-2 py-2 border-2 border-[#706f7b]'>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Model</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>{viewBike.bikeModel}</span>
                  </div>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Engine</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>{viewBike.bikeEngine}</span>
                  </div>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center w-full'>Cylinders</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>{viewBike.cylinders}</span>
                  </div>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Torque</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>{viewBike.torque}</span>
                  </div>
                  <div className='spec flex items-center py-2 border-b border-b-[#706f7b]'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Fuel</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-2/5 items-center'>{viewBike.fuel}</span>
                  </div>
                  <div className='spec flex items-center py-2'>
                    <span className='text-center border-r text-base flex basis-2/5 items-center'>Mileage</span>
                    <span className='text-[#706f7b] text-xl flex basis-1/5 items-center justify-center'>|</span>
                    <span className='text-center text-base flex basis-1/5 items-center'>{viewBike.mileage}</span>
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
