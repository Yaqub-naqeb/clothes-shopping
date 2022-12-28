import React from 'react'
import { Link } from 'react-router-dom'
const RightPart = () => {
  return (
    <div className=" text-center  flex flex-col gap-14 ">

<div className='flex flex-col gap-5'>
<h1 className='font-medium text-xl '>
   Welcome to the fastest growing Fashion Community
   </h1>
   <h1  className='text-xl  '>let us choose for your kid</h1>
  
</div>
  <div> <Link to={'/listofproducts'} className='border cursor-pointer border-[#FCA5A5] hover:bg-[#FCA5A5] px-[2rem] transition ease-in-out delay-90 py-[.8rem]'>Shop now</Link></div>

    </div>
    
  )
}

export default RightPart
