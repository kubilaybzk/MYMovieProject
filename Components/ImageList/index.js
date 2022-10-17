import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App({ MoviesImages }) {
  return (
    <div className="triple-slider w-full hidden lg:block">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={"3"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {MoviesImages.posters.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <img
                className="shrink-0 w-50 h-30 rounded-lg shadow-xl bg-white"
                src={
                  item.file_path != null || item.file_path != undefined
                    ? `https://image.tmdb.org/t/p/w220_and_h330_face/${item.file_path}`
                    : `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png`
                }
                alt={`${item.file_path}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

/*

     {MoviesImages.posters.map((item, key) => {
                return (
                  <div key={key} className="snap-center shrink-0">
                    <img
                      className="shrink-0 w-50 h-30 rounded-lg shadow-xl bg-white"
                      src={
                        item.file_path!=null || item.file_path!=undefined
                          ? `https://image.tmdb.org/t/p/w220_and_h330_face/${item.file_path}`
                          : `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png`
                      }
                      alt={`${item.file_path}`}
                    />
                  </div>
                );
              })}
*/
