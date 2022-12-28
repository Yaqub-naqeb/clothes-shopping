import React from 'react'
import NotFound from '../images/images.png'
import { useFetch } from '../Hook/useFetch'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider = () => {

const {data}=useFetch('https://fronttask.techeyeco.com/api/ClientSide/GetGroup?GroupProductType=FrontPageSlider');
// console.log(data[8].attachment);

  return (
    <div className='w-[50%] justify-self-center align-middle self-center items-center'>
 
 
 <Swiper className=''
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    


      
        {data&&data.map((dt)=> <SwiperSlide>{dt.attachment?<img className='w-[15rem] cursor-pointer h-[15rem]' src={`https://fronttask.techeyeco.com${dt.attachment}`} alt="" />:<img className='w-[15rem] h-[15rem]' src={NotFound} alt="" />}</SwiperSlide>)}
 
      
     
     
    </Swiper>

   

    </div>
  )
}

export default Slider
// {data&&<img className='w-[15rem] h-[15rem]' src={`https://fronttask.techeyeco.com${data[8].attachment}`} alt="" />
// }