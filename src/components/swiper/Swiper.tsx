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
  EffectCoverflow,
]);

export const CustomSwiper = ({ children, initialSlide }) => {
  return (
    <Swiper
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
      pagination={{ clickable: true }}
      // autoplay={{
      //   delay: 1000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // }}
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
