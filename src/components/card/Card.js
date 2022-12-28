import React from 'react'
import '../../App.css'
const Card = ({dt}) => {
  return (
    <div className='card'>
     
{/* img */}

{dt&&<>

<div className='overflow-hidden'>
<img className='image shadow-md' src={`https://fronttask.techeyeco.com${dt.attachment}`} alt="" />
</div>

<div className='flex flex-col items-start'>
    <p className=''>{dt.productTypeName

}
</p>
<p className='text-[#c8102e] text-[20px] '>{dt.price}</p>
</div></>}




    </div>
  )
}

export default Card
