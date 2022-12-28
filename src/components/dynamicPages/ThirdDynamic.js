import React from 'react'
import { useParams } from 'react-router'

const ThirdDynamic = () => {
    const {id,id_2,id_3}=useParams()
  return (
    <div className='h-[65vh]'>
    <h1>
   { id_2==0&&id_3==0?`You are inside the first level with identity ${id}` :`You are inside the first level with identity ${id} and second level with identity ${id_2} and third level with identity ${id_3}`}
    </h1>
    </div>
  )
}

export default ThirdDynamic
