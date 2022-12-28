import React from 'react'
import { useParams } from 'react-router'
import NotFound from '../ErrorPage/404'

const ThirdDynamic = () => {
    const {id,id_2,id_3}=useParams()



  return (
   <>
    
     <div className='h-[65vh]'>
      <h1 className='text-center text-2xl pt-[10rem]'>
     { id_2==0&&id_3==0?`You are inside the first level with identity ${id}` : Number(id_3)&& Number(id_2)&& Number(id) ?
     `You are inside the first level with identity ${id} and second level with identity ${id_2} and third level with identity ${id_3}`:<NotFound/>}
      </h1>
      </div>
    
   
   </>
  )
}

export default ThirdDynamic
