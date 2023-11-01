"use client";

import React from "react";
import Image from "next/image";
import { previousCelebrities } from "../constant";
import { testImage } from "@/assets";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CELEBRITYCARD = () => {
  return (
    <>
      <div className="w-full hidden md:flex justify-center items-center px-[20px] ">
        <Swiper
          slidesPerView={5}
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
          {previousCelebrities.map((celebrityDetails, index) => (
            <SwiperSlide key={index} className="pb-[30px]">
              <div className="w-full flex justify-center">
                <div>
                  <div>
                    <Image
                      src={celebrityDetails.celebrityPhoto}
                      alt={index.toString()}
                      className="w-[250px] aspect-square object-cover rounded-full "
                    />
                  </div>
                  <div className="text-center mt-[10px]">
                    <span>{celebrityDetails.celebrityName}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex md:hidden justify-center items-center px-[20px] ">
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
          className="mySwiper"
        >
          {previousCelebrities.map((celebrityDetails, index) => (
            <SwiperSlide key={index} className="pb-[30px]">
              <div className="w-full flex justify-center">
                <div>
                  <div>
                    <Image
                      src={celebrityDetails.celebrityPhoto}
                      alt={index.toString()}
                      className="w-[250px] aspect-square object-cover rounded-full "
                    />
                  </div>
                  <div className="text-center mt-[10px]">
                    <span>{celebrityDetails.celebrityName}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex md:hidden justify-center items-center px-[20px] ">
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
          className="mySwiper"
        >
          {previousCelebrities.map((celebrityDetails, index) => (
            <SwiperSlide key={index} className="pb-[30px]">
              <div className="w-full flex justify-center">
                <div>
                  <div>
                    <Image
                      src={celebrityDetails.celebrityPhoto}
                      alt={index.toString()}
                      className="w-[250px] aspect-square object-cover rounded-full "
                    />
                  </div>
                  <div className="text-center mt-[10px]">
                    <span>{celebrityDetails.celebrityName}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex md:hidden justify-center items-center px-[20px] ">
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
          className="mySwiper"
        >
          {previousCelebrities.map((celebrityDetails, index) => (
            <SwiperSlide key={index} className="pb-[30px]">
              <div className="w-full flex justify-center">
                <div>
                  <div>
                    <Image
                      src={celebrityDetails.celebrityPhoto}
                      alt={index.toString()}
                      className="w-[250px] aspect-square object-cover rounded-full "
                    />
                  </div>
                  <div className="text-center mt-[10px]">
                    <span>{celebrityDetails.celebrityName}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </>
  );
};

export default CELEBRITYCARD;
