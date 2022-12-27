import React from 'react'
import RightPart from '../components/home/RightPart'
import Slider from '../components/home/Slider'

const Home = () => {
  return (
    <div className=' h-[100vh] bg-slate-400'>  


          {/* the hole page  */}
<div className='flex justify-around align-middle'>
<RightPart/>
<Slider/>
</div>
    </div>
  )
}

export default Home
