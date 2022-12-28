import React from 'react'
import RightPart from '../components/home/RightPart'
import Slider from '../components/home/Slider'

const Home = () => {
  return (
    <div className=' right h-[90vh]    flex flex-col   items-center justify-around'>  


          {/* the hole page  */}
<RightPart/>
<Slider/>
    </div>
  )
}

export default Home
