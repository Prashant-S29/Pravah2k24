"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { sp1, sp2, sp3, sp4, sp5, sp6, sp7 } from "@/assets";

const priorSponsors = [sp1, sp2, sp3, sp4, sp5, sp6, sp7];

const PRIORSPONSORS = () => {
  return (
    <>
      <div className="whitespace-nowrap w-full  flex justify-center   ">
        <Marquee autoFill={true} speed={50}      >
          {priorSponsors.map((sponsorImage, index) => (
            <div key={index} className="flex gap-5 items-center mr-[20px] px-[40px]">
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
