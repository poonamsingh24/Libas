import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import slide from "../../public/banner.png";
import slide2 from "../../public/banner2.png";
import slide3 from "../../public/banner3.png";
import slide4 from "../assets/desktop_2.webp";

export default function Banner() {
  return (
    <div className="px-0 mx-auto mt-14">
      <div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide} alt="" className="w-full h-full mx-auto" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide2} alt="" className="w-full h-full mx-auto" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide3} alt="" className="w-full h-full mx-auto" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide4} alt="" className="w-full h-full mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
