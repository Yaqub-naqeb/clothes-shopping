import React from 'react'
import { useParams } from 'react-router'

const Dynamic = () => {
    const {id}=useParams();
  return (
    <div className='h-[100vh]'>
      <h1>the number is {id}</h1>
    </div>
  )
}

export default Dynamic
