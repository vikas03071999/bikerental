import React from 'react'
import WCUPoster from '../assets/images/WCUPoster.png'
import CCD from '../assets/images/CCD.png'
import AIP from '../assets/images/AIP.png'
import NHC from '../assets/images/NHC.png'

const WhyChooseUs = () => {
  return (
    <div className='wcuContainer mt-28'>
      <div className='wcuWrapper flex flex-col'>
        <div className='posterSection'>
            <img className='object-contain' src={WCUPoster} />
        </div>
        <div className='infoSection flex flex-col items-center px-3 md:px-20 gap-5 justify-center lg:flex-row'>
            <div className='wcuDetails flex flex-col items-center lg:items-start basis-1/2 gap-3 px-6 py-2'>
                <p className='text-xl md:text-2xl text-center lg:text-left font-semibold'>Why choose us</p>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-bold'>Best value deals you will ever find</h1>
                <span className='text-[#6e6b6b] text-center lg:text-left mt-2'>Discover the best deals you'll ever find 
                      with our unbeatable offers. We're dedicated
                      to providing you with the best value for your 
                      money, so you can enjoy top-quality services and
                      products without breaking the bank. Our deals are 
                      designed to give you the ultimate renting
                      experience, so don't miss out on your chance to save big.
                </span>
                <button className='w-2/5 text-base md:text-lg font-semibold text-white bg-[#646cff] py-3 mt-3'><a href="#homeMain">Find Details </a>
                  <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
            <div className='ourFeatures w-9/12 flex flex-col items-center basis-1/2 gap-16 px-8 py-10 lg:py-2 lg:gap-8 lg:w-full'>
                <div className='feature flex flex-col md:flex-row gap-5 items-center'>
                    <img src={CCD} alt="feature-image" className='object-cover' />
                    <div className='featureDetails flex flex-col items-center md:items-start gap-2'>
                       <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>Cross Country Drive</h3>
                       <p className='text-[#6e6b6b] text-center md:text-left'>Take your driving experience to the next level with our 
                        top-notch vehicles for your cross-country adventures.</p>
                    </div>
                </div>
                <div className='feature flex flex-col md:flex-row gap-5 items-center'>
                    <img src={AIP} alt="feature-image" className='object-cover'/>
                    <div className='featureDetails flex flex-col items-center md:items-start gap-2'>
                       <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>All Inclusive Pricing</h3>
                       <p className='text-[#6e6b6b] text-center md:text-left'>Get everything you need in one convenient, 
                        transparent price with our all-inclusive pricing policy.</p>
                    </div>
                </div>
                <div className='feature flex flex-col md:flex-row gap-5 items-center'>
                    <img src={NHC} alt="feature-image" className='object-cover'/>
                    <div className='featureDetails flex flex-col items-center md:items-start gap-2'>
                       <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>No Hidden Charges</h3>
                       <p className='text-[#6e6b6b] text-center md:text-left'>Enjoy peace of mind with our no hidden charges policy.
                         We believe in transparent and honest pricing.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
