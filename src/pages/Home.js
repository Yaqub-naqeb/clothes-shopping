import React from 'react'
import RightPart from '../components/home/RightPart'
import Slider from '../components/home/Slider'

const Home = () => {
  return (
    <div className=' h-[90vh]   bg-slate-400 flex flex-col   items-center justify-around'>  


          {/* the hole page  */}
<RightPart/>
<Slider/>
    </div>
  )
}

export default Home
