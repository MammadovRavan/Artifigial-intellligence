import React from 'react'
import Award from './Award'
import './AwardsContainer.css'
import maplenecekMelumatlar from '../AwardsCard.json'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from "swiper";

const AwardsContainer = () => {
  return (
    <div className='awards-container'>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576:{
                slidesPerView: 1,
                spaceBetween: 20,
            },
            830: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1230: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        className="mySwiper"
      
      >
        {
            maplenecekMelumatlar.map(birmelumat=>(
                <SwiperSlide> <Award 
                meqaleninBasligi={birmelumat.basliq} 
                meqaleninIconu={birmelumat.ikon} 
                meqaleninMetni={birmelumat.paraqraf} 
                /></SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  )
}

export default AwardsContainer