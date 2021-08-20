import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
  EffectCoverflow,
} from "swiper";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
  EffectCoverflow,
]);

export const CustomSwiper = ({ children }) => {
  return (
    <Swiper
      style={{
        paddingBottom: "20px",
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
      parallax
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      watchSlidesVisibility
      centeredSlides
      grabCursor
      loop
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children.map((child) => (
        <SwiperSlide key={child.props.id}>
          {({ isActive, isVisible }) => (
            <div style={{ transform: isActive ? "scale(1.1)" : "scale(1)" }}>
              {child}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
