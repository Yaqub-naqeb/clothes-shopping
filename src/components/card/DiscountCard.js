import React from 'react'
import Img from '../images/images.jfif'
const DiscountCard = ({dt}) => {
  return (
    <div>
      
      <img src={`https://fronttask.techeyeco.com${dt.attachment}`} alt="" />
      <div>
        <p>name</p>
      </div>
      <div className='flex gap-5'>
        <p className='text-red-400'>66$</p>
        <p className=''> <del>177$</del> </p>
      </div>



    </div>
  )
}

export default DiscountCard
