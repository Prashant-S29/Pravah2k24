"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import {
  aavegOne,
  aavegTwo,
  aavegThree,
  aavegFour,
  aavegFive,
  aavegSix,
  dj,
} from "@/assets";

const aavegImages = [
  aavegOne,
  aavegTwo,
  aavegThree,
  aavegFour,
  aavegFive,
  aavegSix,
];

const AAVEGMARQUEE = () => {
  return (
    <>
      <div className="whitespace-nowrap w-full  flex justify-center   ">
        {/* <div className="absolute top-0 w-full min-h-screen -z-10">
          <Image src={dj} alt="dj" className="object-cover w-full min-h-screen"/>
        </div> */}
        <Marquee autoFill={true} speed={60} direction="left">
          {aavegImages.map((aavegImage, index) => (
            <div
              key={index}
              className="flex w-[300px] md:w-[450px] h-[350px] rounded-3xl overflow-hidden items-center  mx-[10px]  sm:mx-[20px]"
              data-cursor-text="click"
              data-cursor-size="60px"
            >
              <Image
                src={aavegImage}
                alt={index.toString()}
                className="w-[300px] md:w-[450px] h-[350px]  object-cover object-top grayscale rounded-3xl   duration-200 "
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default AAVEGMARQUEE;
