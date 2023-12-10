import React from "react";
import style from "./Landing.module.css";
import Off from "./off%/off";
import { Data } from "../../Api/Data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Landing = () => {
  const SliderCards = Data.getHomeSliders().map((cardData, index) => {
    return (
      <SwiperSlide className={style.slider_item} key={index}>
        <Image
          src={cardData.image}
          width={2000}
          height={410}
          className={`w-100 ${style.slider_iamge}`}
        />
      </SwiperSlide>
    );
  });
  
  return (
    <div>
      <div className={`container-fluid  my-3 ${style.landing_body} `}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-12 order-2 order-lg-1 col-lg-4 d-flex flex-column justify-content-between">
            <Image
              src="/assets/banner/samsungs23Ultra.jpg"
              className={style.image}
              alt="image"
              width={800}
              height={200}
            />
            <Image
              src="/assets/banner/GalaxyZFold4.webp"
              className={style.image}
              alt="image"
              width={800}
              height={200}
            />
          </div>
          <div className="col-12 col-lg-8 order-1">
            <Swiper
              spaceBetween={10}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className={style.swiper}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 1,
                },
                2500: {
                  slidesPerView: 3,
                },
              }}
            >
              {SliderCards}
            </Swiper>
          </div>
        </div>
          <div className={`row  my-5 ${style.service_card}`}>
            {Data.getService().map((service) => (
              <span key={service.id}>
                <Image
                  src={service.image}
                  alt="service"
                  width={48}
                  height={48}
                />
                <h6>{service.name}</h6>
              </span>
            ))}
          </div>
          <Off />
      </div>
    </div>
  );
};

export default Landing;
