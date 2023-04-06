import React from 'react'
import HomeMainSection from '../components/HomeMainSection'
import BookRide from '../components/BookRide'
import ThreeSteps from '../components/ThreeSteps'
import BikeModelShowcase from '../components/BikeModelShowcase'
import Ad from '../components/Ad'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className="homeWrapper flex flex-col">
        <HomeMainSection />
        <BookRide />
        <ThreeSteps />
        <BikeModelShowcase />
        <Ad />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </div>
    </div>
  )
}

export default Home
