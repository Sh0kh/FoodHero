import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import foto1 from '../../images/food1.png'
import foto2 from '../../images/food2.png'

export default function ResSwiper() {


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
        },
        {
            id: 7,
            banner: (foto1),
          },
      ];
    return (
        <div className="mt-[15px]">
            <div className="Container">
                <h2 className="font-bold text-[20px] mb-[10px]">
                    Gallery
                </h2>
                <Swiper
                    modules={[Autoplay,]}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={5}
                    slidesPerView={3}
                    className="w-full mx-auto"
                >
                    {promotions.map((promo) => (
                        <SwiperSlide key={promo.id} className="relative">
                            <div className="relative">
                                <img
                                    src={promo.banner}
                                    alt={promo.title}
                                    className="w-[140px] h-[96px] object-cover rounded-lg "
                                />
                                <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl px-3 mb-2">
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}