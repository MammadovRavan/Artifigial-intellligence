import React from 'react'
import sirketMelumati from '../SirketlerHaqqinda.json'
import PartnerCompany from './PartnerCompany'
import './PartnerContainer.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const PartnerContainer = () => {
  return (
    <div className="sirketlerHissesi">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
          sirketMelumati.map(birSirketMelumati => (
            <SwiperSlide><PartnerCompany sirketinLogosu={birSirketMelumati.logo} sirketinAdi={birSirketMelumati.ad} /></SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default PartnerContainer