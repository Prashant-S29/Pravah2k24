"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
} from "@/assets";
import Image from "next/image";

const allImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

const IMAGEGALLERY = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {allImages.map((images, index) => (
            <SwiperSlide key={index} className="  ">
              <Image
                src={images}
                alt={index.toString()}
                className="w-full h-[300px] object-cover mb-[50px] object-top rounded-[20px] "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          {allImages.map((images, index) => (
            <SwiperSlide key={index} className="  ">
              <Image
                src={images}
                alt={index.toString()}
                className="w-full h-[250px] object-cover mb-[50px] object-top rounded-[20px] "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          {allImages.map((images, index) => (
            <SwiperSlide key={index} className="  ">
              <Image
                src={images}
                alt={index.toString()}
                className="w-full h-[220px] object-cover mb-[50px] object-top rounded-[20px] "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default IMAGEGALLERY;
