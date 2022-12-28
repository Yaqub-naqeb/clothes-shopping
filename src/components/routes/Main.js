import React from 'react'
import Arrival from '../../pages/Arrival'
import Home from '../../pages/Home'
import { Routes, Route } from "react-router-dom"
import Discount from '../../pages/Discount'
 import ListOfProducts from '../../pages/ListOfProducts'
const Main = () => {
  return (
    <div className=' px-[5rem] py-[10rem] -z-10 bg-[#fca5a51c]'>
      {/* */}


<Routes>



        <Route path="/" element={ <Home/> } />
        <Route path="newarrival" element={ <Arrival/> } />
        <Route path='discount' element={<Discount/>}/>
        <Route path='listofproducts' element={<ListOfProducts/>}/>


</Routes>
    </div>
  )
}

export default Main
