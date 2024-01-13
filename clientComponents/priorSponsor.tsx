"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9 } from "@/public";

const priorSponsors = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9];

const PRIORSPONSORS = () => {
  return (
    <>
      <div className="whitespace-nowrap w-full overflow-x-scroll   flex justify-center ">
        <Marquee autoFill={true} speed={50} direction="right" >
          {priorSponsors.map((sponsorImage, index) => (
            <div
              key={index}
              className="flex  items-center  px-[20px] md:px-[30px] sm:px-[40px] lg:px-[50px]"
            >
              <Image
                src={sponsorImage}
                alt={index.toString()}
                className="w-[100px] md:w-[150px] grayscale hover:grayscale-0 duration-200 "
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default PRIORSPONSORS;
