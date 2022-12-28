import React from 'react'
import Img from '../images/images.png'
import '..//../App.css'
const ListCards = ({dt}) => {
  return (
    <div className='card '>
      
      <div className='  shadow-md overflow-hidden w-fit  '>
     {/*  <img className='image h-[28rem] w-[27rem]' src={`https://fronttask.techeyeco.com${dt.attachment}`} alt="" /> */}

{
    dt.attachment?<img className='image  h-[28rem] w-[30rem]' src={`https://fronttask.techeyeco.com${dt.attachment}`} alt="" />:<img className='image h-[28rem] w-[27rem]' src={Img} alt="" />
}
      </div>

      <div className='pt-3  '>
        {/* width of  */}
        <p className='w-[87.1%] '>{dt.name}</p>
<p>{dt.price} $</p>
      </div>
     



    </div>
  )
}

export default ListCards
