import React from 'react'
import TeamImage1 from '../assets/images/TeamImage1.png'
import TeamImage2 from '../assets/images/TeamImage2.jpg'
import TeamImage3 from '../assets/images/TeamImage3.jpg'
import TeamImage4 from '../assets/images/TeamImage4.jpg'
import TeamImage5 from '../assets/images/TeamImage5.jpg'
import TeamImage6 from '../assets/images/TeamImage6.jpg'

const Team = () => {
  return (
    <div className='teamContainer px-6'>
      <div className='teamWrapper flex flex-col items-center justify-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-8'>Meet our dynamic team</h1>
        <div className='peopleCardContainer mt-16'>
          <div className='peopleCardWrapper flex flex-wrap justify-center gap-10'>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage1}  alt="person-image" className='w-[300px] h-[345px]'/>
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-lg md:text-xl font-bold'>Mark Tuckerberg</h3>
                <p className='text-base sm:text-lg text-[#777]'>Business Owner</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage2} alt="person-image" className='w-[300px] h-[345px]' />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-lg md:text-xl font-bold'>Christina Gabriel</h3>
                <p className='text-base sm:text-lg text-[#777]'>Cusomer support</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage3} alt="person-image" className='w-[300px] h-[345px]' />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-lg md:text-xl font-bold'>Christopher August</h3>
                <p className='text-base sm:text-lg text-[#777]'>Team Lead</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage4} alt="person-image" className='w-[300px] h-[345px]' />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-lg md:text-xl font-bold'>Jane Miller</h3>
                <p className='text-base sm:text-lg text-[#777]'>Business Consultant</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage5} alt="person-image" className='w-[300px] h-[345px]' />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-lg md:text-xl font-bold'>Chrisna Ronaldo</h3>
                <p className='text-base sm:text-lg text-[#777]'>Marketing manager</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage6} alt="person-image" className='w-[300px] h-[345px]' />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-lg md:text-xl font-bold'>Sam Karan</h3>
                <p className='text-base sm:text-lg text-[#777]'>Data Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
