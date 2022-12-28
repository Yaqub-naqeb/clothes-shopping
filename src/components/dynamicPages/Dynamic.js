import React from 'react'
import { useParams } from 'react-router'
import NotFound from '../../components/ErrorPage/404'
const Dynamic = () => {
    const {id}=useParams();
  return (
    <>
    {Number(id)?<div className='h-[100vh]'>
      <h1 className='text-center text-3xl pt-[10rem]'>You are inside the first level with identity {id}</h1>
    </div>:<NotFound/>}
    </>
  )
}

export default Dynamic
