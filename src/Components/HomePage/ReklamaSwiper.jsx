import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import foto1 from '../../images/Group 7.png'
import foto2 from '../../images/Group 9.png'


const promotions = [
  {
    id: 4,
    banner: (foto1),
  },
  {
    id: 5,
    banner: (foto2),
  },
  {
    id: 6,
    banner:(foto1),
  }
];

export default function ReklamaSwiper() {
  return (
    <section className="container mx-auto flex flex-col mt-[15px] items-start px-2 py-1">
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={5}
          slidesPerView={1.10}
          className="w-full mx-auto"
        >
          {promotions.map((promo) => (
            <SwiperSlide key={promo.id} className="relative">
              <div className="relative">
                <img
                  src={promo.banner}
                  alt={promo.title}
                  className="w-full h-[260px] object-cover rounded-lg shadow-lg"
                />
                  <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl px-3 mb-2">
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
