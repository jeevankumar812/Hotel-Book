import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white
     bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
      <p className=''>The Ultimate Hotel Experience</p>
      <h1> Discover Your Perfect Gateway Destination</h1>
      <p>
        Explore our curated selection of hotels, from luxury resorts to cozy retreats. 
        Book your dream stay today and create unforgettable memories.
      </p>
    </div>
  )
}

export default Hero
