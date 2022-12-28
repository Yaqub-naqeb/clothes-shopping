import React from 'react'
import Arrival from '../../pages/Arrival'
import Home from '../../pages/Home'
import { Routes, Route } from "react-router-dom"
import Discount from '../../pages/Discount'
 import ListOfProducts from '../../pages/ListOfProducts'
import Products from '../../pages/product/Products'
import Dynamic from '../dynamicPages/Dynamic'
import SecondDynamic from '../dynamicPages/SecondDynamic'
import ThirdDynamic from '../dynamicPages/ThirdDynamic'
import NotFound from '../ErrorPage/404'
const Main = () => {
  return (
    <div className=' px-[5rem] py-[10rem] -z-10 bg-[#fca5a51c] max-h-full'>
      {/* */}


<Routes>



        <Route path="/" element={ <Home/> } />
        <Route path="/newarrival" element={ <Arrival/> } />
        <Route path='/discount' element={<Discount/>}/>
        <Route path='/listofproducts' element={<ListOfProducts/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Dynamic/>}/>
        <Route path='/products/:id/:id_2' element={<SecondDynamic/>}/>
        <Route path='/products/:id/:id_2/:id_3' element={<ThirdDynamic/>}/>
<Route path='/products/:id/test' element={<NotFound/>}/>
<Route path='*' element={<NotFound/>}/>




</Routes>
    </div>
  )
}

export default Main
