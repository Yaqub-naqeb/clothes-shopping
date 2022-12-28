import React from 'react'
import DiscountCard from '../components/card/DiscountCard';
import { useFetch } from '../components/Hook/useFetch'

const Discount = () => {
    const {data,isPending,error}=useFetch('https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=Discount')
    console.log(data);

  return (
    <div>
<h1 className='text-center'>Dicount</h1>

<div className='grid grid-cols-3 gap-x-5 gap-y-10'>
{isPending&&<h1>Loading...</h1>}
{data&&data.map((dt)=><DiscountCard dt={dt}/>)}


</div>





    </div>
  )
}

export default Discount
