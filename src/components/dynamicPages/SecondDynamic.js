import React from 'react'
import { useParams } from 'react-router'

const SecondDynamic = () => {
    const {id,id_2}=useParams();
  return (
    <div className='h-[65%]'>
     <h1>
       { id_2==0? `You are inside the first level with identity ${id}`:`You are inside the first level with identity ${id} and second level with identity ${id_2}`}
        </h1> 
    </div>
  )
}

export default SecondDynamic
