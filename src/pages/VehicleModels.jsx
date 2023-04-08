import React from 'react'
import SampleVehicleCard from '../assets/images/SampleVehicleCard.png'

const VehicleModels = () => {
  return (
    <>
    <div className='vehicleModelsContainer px-20 py-20 items-center justify-center'>
      <div className='vehicleModelsWrapper flex flex-wrap w-full'>
          <div className='basis-1/3 px-2 mt-5'><div className='vehicleModelCard flex flex-col border border-black'>
            <img src={SampleVehicleCard} alt="bike-image" />
            <div className='bikeDetails flex flex-col gap-2 px-2 py-2'>
              <div className='detailRow flex justify-between'>
                <span className='text-xl font-bold'>Himalayan</span>
                <span className='text-xl font-bold'>$45</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='flex'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className='text-lg font-semibold'>per day</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Royal</span>
                <span className='text-lg text-[#777]'>4/5</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Manual</span>
                <span className='text-lg text-[#777]'>Petrol</span>
              </div>
              <hr className='w-4/5 text-[#000]'/>
              <button className='text-white text-2xl font-bold bg-[#646cff] hover:bg-[#747bff] mt-2 px-3 py-3'>Book Ride</button>
            </div>
          </div></div>
          <div className='basis-1/3 px-2 mt-5'><div className='vehicleModelCard flex flex-col border border-black'>
            <img src={SampleVehicleCard} alt="bike-image" />
            <div className='bikeDetails flex flex-col gap-2 px-2 py-2'>
              <div className='detailRow flex justify-between'>
                <span className='text-xl font-bold'>Himalayan</span>
                <span className='text-xl font-bold'>$45</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='detailRow flex'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className='text-lg font-semibold'>per day</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Royal</span>
                <span className='text-lg text-[#777]'>4/5</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Manual</span>
                <span className='text-lg text-[#777]'>Petrol</span>
              </div>
              <hr className='w-4/5 text-[#000]'/>
              <button className='text-white text-2xl font-bold bg-[#646cff] hover:bg-[#747bff] mt-2 px-3 py-3'>Book Ride</button>
            </div>
          </div></div>
          <div className='basis-1/3 px-2 mt-5'><div className='vehicleModelCard flex flex-col border border-black'>
            <img src={SampleVehicleCard} alt="bike-image" />
            <div className='bikeDetails flex flex-col gap-2 px-2 py-2'>
              <div className='detailRow flex justify-between'>
                <span className='text-xl font-bold'>Himalayan</span>
                <span className='text-xl font-bold'>$45</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='detailRow flex'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className='text-lg font-semibold'>per day</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Royal</span>
                <span className='text-lg text-[#777]'>4/5</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Manual</span>
                <span className='text-lg text-[#777]'>Petrol</span>
              </div>
              <hr className='w-4/5 text-[#000]'/>
              <button className='text-white text-2xl font-bold bg-[#646cff] hover:bg-[#747bff] mt-2 px-3 py-3'>Book Ride</button>
            </div>
          </div></div>
          <div className='basis-1/3 px-2 mt-5'><div className='vehicleModelCard flex flex-col border border-black'>
            <img src={SampleVehicleCard} alt="bike-image" />
            <div className='bikeDetails flex flex-col gap-2 px-2 py-2'>
              <div className='detailRow flex justify-between'>
                <span className='text-xl font-bold'>Himalayan</span>
                <span className='text-xl font-bold'>$45</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='detailRow flex'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className='text-lg font-semibold'>per day</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Royal</span>
                <span className='text-lg text-[#777]'>4/5</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Manual</span>
                <span className='text-lg text-[#777]'>Petrol</span>
              </div>
              <hr className='w-4/5 text-[#000]'/>
              <button className='text-white text-2xl font-bold bg-[#646cff] hover:bg-[#747bff] mt-2 px-3 py-3'>Book Ride</button>
            </div>
          </div></div>
          <div className='basis-1/3 px-2 mt-5'><div className='vehicleModelCard flex flex-col border border-black'>
            <img src={SampleVehicleCard} alt="bike-image" />
            <div className='bikeDetails flex flex-col gap-2 px-2 py-2'>
              <div className='detailRow flex justify-between'>
                <span className='text-xl font-bold'>Himalayan</span>
                <span className='text-xl font-bold'>$45</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='detailRow flex'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className='text-lg font-semibold'>per day</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Royal</span>
                <span className='text-lg text-[#777]'>4/5</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Manual</span>
                <span className='text-lg text-[#777]'>Petrol</span>
              </div>
              <hr className='w-4/5 text-[#000]'/>
              <button className='text-white text-2xl font-bold bg-[#646cff] hover:bg-[#747bff] mt-2 px-3 py-3'>Book Ride</button>
            </div>
          </div></div>
          <div className='basis-1/3 px-2 mt-5'><div className='vehicleModelCard flex flex-col border border-black'>
            <img src={SampleVehicleCard} alt="bike-image" />
            <div className='bikeDetails flex flex-col gap-2 px-2 py-2'>
              <div className='detailRow flex justify-between'>
                <span className='text-xl font-bold'>Himalayan</span>
                <span className='text-xl font-bold'>$45</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='detailRow flex'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <span className='text-lg font-semibold'>per day</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Royal</span>
                <span className='text-lg text-[#777]'>4/5</span>
              </div>
              <div className='detailRow flex justify-between'>
                <span className='text-lg text-[#777]'>Manual</span>
                <span className='text-lg text-[#777]'>Petrol</span>
              </div>
              <hr className='w-4/5 text-[#000]'/>
              <button className='text-white text-2xl font-bold bg-[#646cff] hover:bg-[#747bff] mt-2 px-3 py-3'>Book Ride</button>
            </div>
          </div></div>
      </div>
    </div>
    <div className='bookBikeAd py-16 flex items-center justify-center bg-white gap-3'>
      <h1 className='text-4xl font-bold'>Book a bike by getting in touch with us </h1> <span className='text-4xl font-bold'><i class="fa-solid fa-phone text-[#646cff]"></i> (789) 456-342</span>
    </div>
    </>
  )
}

export default VehicleModels
