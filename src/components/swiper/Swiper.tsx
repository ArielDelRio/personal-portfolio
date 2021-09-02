import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";

import "swiper/swiper-bundle.min.css";
import { useEffect } from "react";
import { useState } from "react";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
]);

export const CustomSwiper = ({ children, initialSlide, autoplay }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    console.log(autoplay);
    autoplay
      ? swiperRef.current.swiper.autoplay.start()
      : swiperRef.current.swiper.autoplay.stop();
  }, [autoplay]);

  return (
    <Swiper
      ref={swiperRef}
      initialSlide={initialSlide || 0}
      style={{
        paddingTop: "10vh",
        paddingBottom: "10vh",
      }}
      speed={800}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      effect={"coverflow"}
      coverflowEffect={{
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      watchSlidesVisibility
      centeredSlides
      loop
    >
      {children.map((child) => (
        <SwiperSlide key={child.key}>
          {({ isActive, isVisible }) => (
            <div
              style={{
                filter: isActive ? "none" : "blur(4px) grayscale(1)",
                transition: "filter 400ms ease-in-out",
              }}
            >
              {child}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
