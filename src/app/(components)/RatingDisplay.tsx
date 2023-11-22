import React from 'react'
import { FaStar } from 'react-icons/fa'

function RatingDisplay() {
  return (
    <div className='flex justify-start align-baseline text-yellow-400'>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
    </div>
  )
}

export default RatingDisplay