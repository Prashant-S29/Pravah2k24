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
              <div className="text-[28px]  font-bold tracking-tighter py-[20px]  ">
                <span>{event}</span>
              </div>
              <div className=" -rotate-45">
                <span className="text-[18px] p-[18px] bg-black rounded-full  font-semibold  leading-none text-white  ">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default EVENTMARQUEE;
