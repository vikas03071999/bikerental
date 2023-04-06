import React from 'react'
import FAQbackground from '../assets/images/FAQbackground.png'

const FAQ = () => {
  return (
    <div className='faqContainer mt-36 flex justify-center' style={{backgroundImage:`url(${FAQbackground})`,backgroundRepeat:"no-repeat",backgroundSize:"auto",backgroundPosition:"0 50%"}}>
        <div className='faqWrapper w-2/3 flex flex-col items-center gap-3'>
            <p className='text-2xl font-bold'>FAQ</p>
            <h2 className='text-5xl font-bold'>Frequently Asked Questions</h2>
            <span className='text-[#706f7b] text-center'>Frequently Asked Questions About the bike Rental Booking
                Process on Our Website: Answers to Common Concerns and Inquiries.
            </span>
            <div className='mt-4 px-4 py-4 w-full border border-[#8e8c8c] bg-white'>
                <h3 className='question flex justify-between cursor-pointer text-xl font-semibold border-b border-[#dedddd] px-4 py-3'>1. What is special about comparing rental bike deals? <i className="fa-solid fa-angle-down"></i></h3>
                <p className='faqAnswer hidden text-[#706f7b] px-8 py-3'>Comparing rental bike deals is important as it helps find the
                   best deal that fits your budget and requirements, ensuring 
                   you get the most value for your money. By comparing various options,
                   you can find deals that offer lower prices, additional services, or 
                   better bike models. You can find bike rental deals by researching online
                   and comparing prices from different rental companies.</p>
                <h3 className='question flex justify-between cursor-pointer text-xl font-semibold border-b border-[#dedddd] px-4 py-3'>2. How to find the bike rental deals? <i className="fa-solid fa-angle-down"></i></h3>
                <p className='faqAnswer hidden text-[#706f7b] px-8 py-3'>You can find bike rental deals by 
                   researching online and comparing prices from different rental companies. Websites 
                   such as Expedia, Kayak, and Travelocity allow you to compare prices and view 
                   available rental options. It is also recommended to sign up for email newsletters
                   and follow rental bike companies on social media to be informed of any special 
                   deals or promotions.</p>
                <h3 className='question bg-[#646cff] text-white flex justify-between cursor-pointer text-xl font-semibold border-b border-[#dedddd] px-4 py-3'>3. How do I find such low bike rental prices? <i className="fa-solid fa-angle-down"></i></h3>
                <p className='faqAnswer text-[#706f7b] px-8 py-3'>
                   Book in advance: Booking your rental bike ahead of time can often result
                   in lower prices. Compare prices from multiple companies: Use websites like
                   Kayak, Expedia, or Travelocity to compare prices from multiple rental bike 
                   companies. Look for discount codes and coupons: Search for discount codes 
                   and coupons that you can use to lower the rental price. Renting from an 
                   off-airport location can sometimes result in lower prices.
                </p>
            </div>
        </div>
    </div>
  )
}

export default FAQ
