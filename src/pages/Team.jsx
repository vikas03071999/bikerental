import React from 'react'
import TeamImage from '../assets/images/TeamImage.png'

const Team = () => {
  return (
    <div className='teamContainer px-6'>
      <div className='teamWrapper flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold mt-8'>Meet our dynamic team</h1>
        <div className='peopleCardContainer mt-16'>
          <div className='peopleCardWrapper flex flex-wrap justify-center gap-10'>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage} alt="person-image" className='bg-#fff' />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-xl font-bold'>Mark Zuckerberg</h3>
                <p className='text-lg text-[#777]'>Business Owner</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage} alt="person-image" />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-xl font-bold'>Mark Zuckerberg</h3>
                <p className='text-lg text-[#777]'>Business Owner</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage} alt="person-image" />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-xl font-bold'>Mark Zuckerberg</h3>
                <p className='text-lg text-[#777]'>Business Owner</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage} alt="person-image" />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-xl font-bold'>Mark Zuckerberg</h3>
                <p className='text-lg text-[#777]'>Business Owner</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage} alt="person-image" />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-xl font-bold'>Mark Zuckerberg</h3>
                <p className='text-lg text-[#777]'>Business Owner</p>
              </div>
            </div>
            <div className='card flex flex-col shadow-[0px_20px_20px_10px_#00000024]'>
              <img src={TeamImage} alt="person-image" />
              <div className='peopleDetais flex flex-col mt-8 mb-8 items-center justify-center'>
                <h3 className='text-xl font-bold'>Mark Zuckerberg</h3>
                <p className='text-lg text-[#777]'>Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
