import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-around items-center  py-8 
     px-[2rem] bg-red-300 fixed w-[100vw] z-50'>
      
      {/* name of website */}
      <div className='font-bold text-3xl price'>shopify</div>
{/*  pages name */}
      <nav className=' ' > 
       <ul className='flex gap-8'>
        <li> <Link to={`/`}>Home</Link></li>
        <li>        <Link to={'/newarrival'}>NewArrivals</Link></li>

<li><Link to={'/discount'}>Discount</Link></li>
<li> <Link to={'/Listofproducts'}>List of Products</Link></li>

<li><Link to={'/products'}>Products <span className='text-[.7rem]'>(Task_B)</span></Link></li>
       </ul>
      </nav>
      {/* icons */}
      <div className='flex gap-5'>

        {/* profile icon */}
       <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
</p>
{/* search icon */}
       <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</p>
       {/* shop icon */}
       <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</p>

      </div>







    </nav>
  )
}

export default Nav
