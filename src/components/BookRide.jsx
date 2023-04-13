import React from 'react'

const BookRide = () => {
    return (
        <div className='bookrideContainer px-10' id="bookRide">
            <div className='bookrideWrapper flex items-center px-8 py-8 border bg-gradient-to-t from-white via-slate-200 to-white'>
                <div className='form flex flex-col gap-10'>
                    <h2 className=' text-3xl font-bold'>Book a bike</h2>
                    <div className='confirmation w-full bg-[#c3fabe] hidden'>We sent a confirmation email, please click on the link to confirm the order</div>
                    <div className='validation w-full bg-[#f8d7da] hidden'>All fields are required</div>
                    <div className='inputSection flex gap-5 items-center flex-wrap md:gap-10 lg:gap-14 w-full'>
                        <div className='singleInput flex basis-full  w-4/5 md:basis-2/5 lg:basis-1/4 flex-col gap-3'>
                            <label htmlFor='bikeType' className='text-lg font-semibold'><i className="fa-solid fa-motorcycle text-[#646cff]"></i> Select bike brand <span className='text-[#646cff]'>*</span></label>
                            <select name='bikeType' className='text-[#a5a3a3] outline-none px-3 py-2'>
                                <option value="selectABike" selected>Select your bike</option>
                                <option value="royalEnfield">Royal Enfield</option>
                                <option value="ktm">K T M</option>
                                <option value="yamaha">Yamaha</option>
                                <option value="bajaj">Bajaj</option>
                                <option value="kawasaki">Kawasaki</option>
                                <option value="honda">Honda</option>
                            </select>
                        </div>
                        <div className='singleInput flex basis-full  w-4/5 md:basis-2/5 lg:basis-1/4 flex-col gap-3'>
                            <label htmlFor='pickup' className='text-lg font-semibold'><i className="fa-solid fa-location-dot text-[#646cff]"></i> Pick up <span className='text-[#646cff]'>*</span></label>
                            <select name='pickup' className='text-[#a5a3a3] outline-none px-3 py-2'>
                                <option value="selectABike" selected>Select pick up location</option>
                                <option value="royalEnfield">Manali</option>
                                <option value="ktm">Nainital</option>
                                <option value="yamaha">Ladakh</option>
                                <option value="bajaj">Mussoorie</option>
                                <option value="kawasaki">Haridwar</option>
                            </select>
                        </div>
                        <div className='singleInput flex basis-full  w-4/5 md:basis-2/5 lg:basis-1/4 flex-col gap-3'>
                            <label htmlFor='dropoff' className='text-lg font-semibold'><i className="fa-solid fa-motorcycle text-[#646cff]"></i> Drop off <span className='text-[#646cff]'>*</span></label>
                            <select name='dropoff' className='text-[#a5a3a3] outline-none px-3 py-2'>
                                <option value="selectABike" selected>Select drop off location</option>
                                <option value="royalEnfield">Haridwar</option>
                                <option value="ktm">Mussorrie</option>
                                <option value="yamaha">Nainital</option>
                                <option value="bajaj">Ladakh</option>
                                <option value="kawasaki">Manali</option>
                            </select>
                        </div>
                        <div className='singleInput flex basis-full  w-4/5 md:basis-2/5 lg:basis-1/4 flex-col gap-3'>
                            <label htmlFor='pickupdate' className='text-lg font-semibold'><i class="fa-regular fa-calendar-days text-[#646cff]"></i> Pick up date <span className='text-[#646cff]'>*</span></label>
                            <input type='date' className='text-[#a5a3a3] outline-none px-3 py-2'/>
                        </div>
                        <div className='singleInput flex basis-full  w-4/5 md:basis-2/5 lg:basis-1/4 flex-col gap-3'>
                            <label htmlFor='pickupdate' className='text-lg font-semibold'><i class="fa-regular fa-calendar-days text-[#646cff]"></i> Drop off date <span className='text-[#646cff]'>*</span></label>
                            <input type='date' className='text-[#a5a3a3] outline-none px-3 py-2'/>
                        </div>
                        <div className='flex basis-1/4 items-end'>
                            <button className='w-full px-6 bg-[#646cff] text-white text-xl font-semibold py-2 hover:bg-[#747bff]'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookRide
