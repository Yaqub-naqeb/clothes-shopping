import React from 'react'
import Arrival from '../../pages/Arrival'
import Home from '../../pages/Home'
import { Routes, Route } from "react-router-dom"
import Nav from '../navbar/Nav'
import Discount from '../../pages/Discount'

const Main = () => {
  return (
    <div className='px-[5rem]'>


<Routes>


{/* <div className='px-[1rem] '> */}

        <Route path="/" element={ <Home/> } />
        <Route path="newarrival" element={ <Arrival/> } />
        <Route path='discount' element={<Discount/>}/>


</Routes>
    </div>
  )
}

export default Main
