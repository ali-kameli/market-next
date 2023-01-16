import React from "react";
import style from "./Landing.module.css";
import Off from "./off%/off";
import { Data } from "../../Api/Data";
import Image from "next/image";

const Landing = () => {
  return (
    <div>
      <div className={`container-fluid  my-3 ${style.landing_body} `}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-12">
            <div
              className="carousel slide"
              id="mycarousel"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="mycarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="mycarousel" data-slide-to="1"></li>
                <li data-target="mycarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className={`carousel-item ${style.carousel_item} active`}>
                  <Image layout="fill"
                    src='/assets/banner/samsung-banner.webp'
                    alt="banner"
                    className="d-block w-100"
                  />
                </div>
                <div className={`carousel-item ${style.carousel_item}`}>
                  <Image layout="fill" src='/assets/banner/home.jpg' alt="img3" className="d-block w-100" />
                </div>
                <div className={`carousel-item ${style.carousel_item} `}>
                  <Image layout="fill" src='/assets/banner/b2.jpg' alt="img2" className="d-block w-100" />
                </div>
                <a
                  class="carousel-control-prev"
                  href="#mycarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#mycarousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className={`row  my-5 ${style.service_card}`}>
            {
              Data.getService().map(service => (
                <span key={service.id}>
                  <Image src={service.image}  alt='service' width={48} height={48} />
                  <h6>{service.name}</h6>
                </span>
              ))
            }
          </div>
          <Off />
        </div>
      </div>
    </div>
  );
};

export default Landing;
