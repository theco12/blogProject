import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "../swiper-char/char.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slide() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./image/char1.png" alt="char1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/char2.png" alt="char2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/char3.png" alt="char3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/char4.png" alt="char4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/char5.png" alt="char5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/char1.png" alt="char1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/char2.png" alt="char2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/char3.png" alt="char3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/char4.png" alt="char4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/char5.png" alt="char5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
