import React from 'react'
import ThreeSteps from '../components/ThreeSteps';
import BikeTypes from '../assets/images/BikeTypes.png';
import RentalOutlets from '../assets/images/RentalOutlets.png';
import RepairShop from '../assets/images/RepairShop.png';
import AboutCompany from '../assets/images/AboutCompany.jpg'

const About = () => {
  return (
    <div className='aboutContainer flex flex-col'>
      <div className='aboutWrapper flex flex-col px-24 py-24'>
        <div className='aboutCompany flex justify-center'>
           <div className='companyImg basis-1/2 flex items-center justify-center'>
              <img src={AboutCompany} alt="company"/>
           </div>
           <div className='companyDetails flex flex-col basis-1/2 px-5'>
              <p className='text-xl font-semibold'>About company</p>
              <h1 className='text-4xl font-bold mt-4'>Adventure in mind, call us and start your next
                bike trip right away
              </h1>
              <p className='mt-5 text-[#706f7b]'>We are the most reached out company for motor bike renting as we offer a wide
                range of collection at affordable pricing. Our 24x7 customer support has satisfied
                over 100k customers in past 1 year. What are you waiting for, book right away
                and we promise you won't regret it.
              </p>
              <div className='serviceDetails flex justify-between items-center mt-10'>
                <div className='serviceDetail flex flex-col justify-center'>
                  <img src={BikeTypes} alt="bike-types" className='w-20'/>
                  <div className='flex flex-col justify-center gap-1'>
                    <h1 className='text-xl font-bold mt-2'>30</h1>
                    <p>Bike types</p>
                  </div>
                </div>
                <div className='serviceDetail flex flex-col justify-center'>
                  <img src={RentalOutlets} alt="rental-outlets" className='w-16'/>
                  <div className='flex flex-col justify-center gap-1'>
                    <h1 className='text-xl font-bold mt-2'>79</h1>
                    <p>Rental outlets</p>
                  </div>
                </div>
                <div className='serviceDetail flex flex-col justify-center'>
                  <img src={RepairShop} alt="repair-shop" className='w-11'/>
                  <div className='flex flex-col justify-center gap-1'>
                    <h1 className='text-xl font-bold mt-2'>65</h1>
                    <p>Repair shop</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
      <ThreeSteps />
    </div>
  )
}

export default About
