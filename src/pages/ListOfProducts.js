import React from 'react'
import ListCards from '../components/card/ListCards';
import { useFetch } from '../components/Hook/useFetch'
import Paginagtion from '../components/pagination/Paginagtion';

const ListOfProducts = () => {

// const {data,isPending,error}=useFetch('https://fronttask.techeyeco.com/api/ClientSide/GetProducts')

// console.log(data);







  return (
    <div className=''>
      <h1 className='text-center text-2xl font-medium pb-[8rem]'>List of products</h1>

         <div>
          <Paginagtion />
         </div>
    </div>
  )
}

export default ListOfProducts;
