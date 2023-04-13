import React from 'react'
import Select from '../assets/images/select.png'
import CO from '../assets/images/co.png'
import Ride from '../assets/images/ride.png'

const ThreeSteps = () => {
  return (
    <div className="threeEasyStepsContainer mt-32 px-10">
      <div className='threeEasyStepsWrapper flex flex-col gap-5 items-center justify-center px-10 lg:px-16'>
         <p className='text-xl md:text-2xl lg:text-3xl font-semibold'>Plan your trip now</p>
         <h2 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold'>Quick & easy bike rental</h2>
         <div className='steps flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap mt-10 justify-center gap-5'>
            <div className='stepOne flex flex-col md:basis-2/5 text-center items-center gap-3'>
                <img width="174px" height="174px" src={Select} alt="selectbike"/>
                <h3 className='text-2xl font-bold'>Select a bike</h3>
                <p className='w-2/3 text-[#6e6b6b]'>We offer a wide range of bikes for all your adventurous needs. We have the perfect bike to meet your needs</p>
            </div>
            <div className='stepTwo flex flex-col md:basis-2/5 text-center items-center gap-3'>
                <img width="174px" height="174px" src={CO} alt="contactoperator"/>
                    <h3 className='text-2xl font-bold'>Contact Operator</h3>
                    <p className='w-2/3 text-[#6e6b6b]'>Our knowledgeable and friendly operators are always there to help you with any questions or concerns</p>
                </div>
            <div className='stepThree flex flex-col md:basis-2/5 text-center items-center gap-3'>
                <img width="174px" height="174px" src={Ride} alt="letsride"/>
                    <h3 className='text-2xl font-bold'>Let's ride</h3>
                    <p className='w-2/3 text-[#6e6b6b]'>Whether you're hitting the open road, we've got you covered with our wide range of bikes</p>
                </div>
         </div>
      </div>
    </div>
  )
}

export default ThreeSteps
