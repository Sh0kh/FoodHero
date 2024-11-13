import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CONFIG from "../../Utils/Config";

export default function ResSwiper() {

    const { ID } = useParams()
    const [data, setData] = useState('')

    useEffect(() => {
        const getRestBanner = async () => {
            try {
                const response = await axios.get(`/establishment-detail/by-food-establishment/${ID}`)
                setData(response?.data)
            } catch (error) {
                console.log(error)
            }
        }
        getRestBanner()
    }, [ID])

    console.log(data)

    return (
        <div className="mt-[15px]">
            <div className="Container">
                <h2 className="font-bold text-[20px] mb-[10px]">
                    Gallery
                </h2>
                {data && data?.length > 0 ? (
                    <Swiper
                        modules={[Autoplay,]}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={5}
                        slidesPerView={3}
                        className="w-full mx-auto"
                    >
                        {data.map((promo) => (
                            <SwiperSlide key={promo.id} className="relative">
                                <div className="relative">
                                    <img
                                        src={CONFIG.API_URL+'/' + promo.image}
                                        alt={promo.title}
                                        className="w-[140px] h-[96px] object-cover rounded-lg "
                                    />
                                    <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl px-3 mb-2">
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="py-[15px] flex items-center justify-center">
                        <h2>
                            Bo`sh
                        </h2>
                    </div>
                )}
            </div>
        </div>
    )
}