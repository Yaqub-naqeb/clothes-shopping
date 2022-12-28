import React from 'react'
import Card from '../components/card/Card';
import { useFetch } from '../components/Hook/useFetch'

const Arrival = () => {
    const {data,isPending,error}=useFetch('https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=NewArrivals');
    console.log(data);
  return (
  <div className='  '>
    <h1 className='text-center text-2xl font-medium pb-[8rem]'>sale</h1>
      <div className='h-full  grid grid-cols-3 gap-x-5 gap-y-10'>

       

      
{isPending&&<h1>Loading...</h1>}
{
    data
    &&data.map((dt)=>dt.attachment
    &&<Card dt={dt} key={dt.id}/>)
}
{error&&<h1>data couldn't fetch</h1>}


    </div>
  </div>
  )
}

export default Arrival
