import React from 'react'
const Card = ({dt}) => {
  return (
    <div>
     
{/* img */}

{dt&&<><img src={`https://fronttask.techeyeco.com${dt.attachment}`} alt="" />
<div className='flex flex-col items-start'>
    <p className=''>{dt.productTypeName

}
</p>
<p className='text-[#F95A5B]'>{dt.price}</p>
</div></>}




    </div>
  )
}

export default Card
