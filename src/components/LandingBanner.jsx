import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import banner1 from "../assets/Banner1.png";
import banner2 from "../assets/banner2.jpg";

export default function Banner() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
      
        <SwiperSlide className="h-full">
          <img src={banner2} alt="banner2" className="w-full h-full object-cover block" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
