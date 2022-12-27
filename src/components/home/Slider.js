import React from 'react'
import { useFetch } from '../Hook/useFetch'
const Slider = () => {

const {data}=useFetch('https://fronttask.techeyeco.com/api/ClientSide/GetGroup?GroupProductType=FrontPageSlider');
console.log(data);

  return (
    <div>
      {/* <p>{data&&data}</p> */}
      {data&&       <img src={data[8].attachment} alt="" />
}
      <p>{data&&data[0].id}kkk</p>

    </div>
  )
}

export default Slider
