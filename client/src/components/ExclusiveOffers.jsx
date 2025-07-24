import React from 'react'
import { assets } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title />
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
            View All Offers
            <img src={assets.arrowIcon} alt="arrow-icon" 
            className='group-hover:translate-x-1 transition-all'/>
        </button>
      </div>
    </div>
  )
}

export default ExclusiveOffers
