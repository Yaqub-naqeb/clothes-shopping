import React from 'react'
const DiscountCard = ({dt}) => {
  return (
    <div className='card'>
      
     <div className='overflow-hidden shadow-md'>
     <img className='image  ' src={`https://fronttask.techeyeco.com${dt.attachment}`} alt="" />
     </div>

      <div className='pt-3'>
        <p>{dt.productTypeName}</p>
      </div>

      <div className='flex gap-8 items-center'>
        <p className='text-[#c8102e] text-[19px] price'>${dt.price}</p>
        <p className='opacity-70 text-[16px]'> <del>${dt.discount} </del> </p>
      </div>



    </div>
  )
}

export default DiscountCard
