import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import axios from "axios";
import CONFIG from "../../Utils/Config";
import ReactLoading from 'react-loading';





export default function ReklamaSwiper() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getBanner = async ()=>{
    try{
      // const id = localStorage.getItem('CityId')
      const response = await axios.get(`/promotions/all`)
      setData(response?.data)
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }


  useEffect(()=>{
    getBanner()
  },[])

  if (loading) {
    return (
        <div className='flex items-center justify-center my-[30px] w-full'>
            <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
        </div>
    );
}

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
          {data.map((promo) => (
            <SwiperSlide key={promo.id} className="relative">
              <div className="relative">
                <img
                  src={CONFIG.API_URL +`/uploads/` + promo.banner}
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
