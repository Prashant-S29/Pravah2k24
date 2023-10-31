"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { cursor } from "@/assets/index";

const eventName = [
  "Technical Events",
  "Non Technical Events",
  "Cultural Events",
  "Literary Events",
  "Social Events",
  "E Sports",
];

const EVENTMARQUEE = () => {
  return (
    <>
      <div className="whitespace-nowrap w-full  flex justify-center  ">
        <Marquee autoFill={true} speed={70}>
          {eventName.map((event, index) => (
            <div key={index} className="flex gap-5 items-center mr-[20px]">
              <div className="text-[22px] md:text-[28px]  font-bold tracking-tighter py-[20px]  ">
                <span>{event}</span>
              </div>
              <div>
                <Image
                  src={cursor}
                  alt="cursor"
                  className="w-[40px] md:w-[60px] aspect-square"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default EVENTMARQUEE;
