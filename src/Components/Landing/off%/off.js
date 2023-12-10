import React, { useContext } from "react";
import style from "./off.module.css";
import OffProduct from "./offProduct";
import { Data } from "../../../Api/Data";
import Image from "next/image";
import Product from "../../HomePanel/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Off = () => {
  const SliderCards = Data.getProducts().filter(product=> product.discount).map((cardData, index) => {
    return (
      <SwiperSlide className={style.slider_item} key={index}>
        <div className={style.store_product} key={cardData.id}>
          <Product key={cardData.id} productData={cardData} />
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className={` container-fluid  pb-5 mt-5  ${style.off_landing}`}>
      <div
        className="row m-0"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <div className={`col-12 col-md-2 ${style.off_side}`}>
          <Image
            src="/assets/off/boxgift.png"
            alt="gift"
            className={style.img_off}
            width={256}
            height={256}
          />
          <span className={style.text_off}>OFF% MARKET</span>
        </div>
        <div
          className={`col-md-10  ${style.off_resp}`}
          style={{ display: "flex " }}
        >
          <Swiper
            spaceBetween={20}
            // centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={style.swiper}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
              },
              992:{
                slidesPerView: 4,
              },
              2500: {
                slidesPerView: 5,
              },
            }}
          >
            {SliderCards}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Off;
