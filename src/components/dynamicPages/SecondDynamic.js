import React from 'react'
import { useParams } from 'react-router'
import NotFound from './../ErrorPage/404'
const SecondDynamic = () => {
    const {id,id_2}=useParams();


  return (
  <>
    <div className='h-[60vh]'>
     <h1 className='text-center text-3xl pt-[10rem]'>
       { id_2==0? `You are inside the first level with identity ${id}`:
        Number(id_2)&& Number(id)? `You are inside the first level with identity ${id} and second level with identity ${id_2}` :<NotFound/>}
        </h1> 
    </div>
   
    </>
  )
}

export default SecondDynamic
