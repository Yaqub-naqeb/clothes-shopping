import React from 'react'
import DiscountCard from '../components/card/DiscountCard';
import { useFetch } from '../components/Hook/useFetch'

const Discount = () => {
    const {data,isPending,error}=useFetch('https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=Discount')
    console.log(data);

  return (
    <div>
<h1 className='text-center text-2xl font-medium pb-[8rem]'>Discount</h1>
<div className='grid grid-cols-3 gap-x-5 gap-y-10'>

{data&&data.map((dt)=><DiscountCard dt={dt}/>)}
</div>
{isPending&&<h1 className='text-center text-3xl items-center'>Loading...</h1>}
{error&&<h1 className='text-center text-3xl items-center'>{error}</h1>}
    </div>
  )
}

export default Discount
