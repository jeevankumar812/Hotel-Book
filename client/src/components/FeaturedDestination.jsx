import React from 'react'
import{roomsDummyData} from '../assets/assets'
const FeaturedDestination = () => {
  return (
    <div>
      <div>
        {roomsDummyData.slice(0,4).map((room,index)=>
        <HotelCard key={room.id}/>
        )}
      </div>
    </div>
  )
}

export default FeaturedDestination
