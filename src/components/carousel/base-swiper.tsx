import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

type BaseSwiperProps = {
  children: React.ReactNode | React.ReactNode[]
  slidesPerView?: number
  spaceBetween?: number
}

function BaseSwiper({
  children,
  // slidesPerView = 3,
  spaceBetween = 16
}: BaseSwiperProps) {
  const childrenArray = React.Children.toArray(children)

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={spaceBetween}
        effect="fade"
        speed={800}
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 3000, // 3 giây đổi slide
          disableOnInteraction: false // không dừng khi user swipe tay
        }}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
        className="custom-swiper"
      >
        {
          // Tự động wrap children bằng SwiperSlide để tránh lỗi
          childrenArray.map((child, index) => (
            <SwiperSlide className="" key={index}>
              {child}
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default BaseSwiper
