import React from 'react'
import ListCards from '../components/card/ListCards';
import { useFetch } from '../components/Hook/useFetch'

const ListOfProducts = () => {

const {data,isPending,error}=useFetch('https://fronttask.techeyeco.com/api/ClientSide/GetProducts')

console.log(data);







  return (
    <div className=''>
      <h1 className='text-center text-2xl font-medium pb-[8rem]'>List of products</h1>
      {isPending&& <h1 className='text-center text-3xl items-center '>Loding...</h1>}
      {error&& <h1>{error}</h1>}

      <div className='grid grid-cols-3 gap-x-[-10rem] gap-y-10'>
{data&&data.map((dt)=><ListCards dt={dt}/>)}
      </div>

         
    </div>
  )
}

export default ListOfProducts;
