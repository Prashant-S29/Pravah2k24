"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { cursor } from "@/public";
import Link from "next/link";

const eventName = [
  "Technical Events",
  "Non-Technical Events",
  "Cultural Events",
  "Literary Events",
  "Social Events",
  "E-Sports",
];

const eventsCategory = [
  {
    eventName:"Technical Events",
    eventLink:"tech"
  },
  {
    eventName:"Non-Technical Events",
    eventLink:"non-tech"
  },
  {
    eventName:"Cultural Events",
    eventLink:"cultural"
  },
  {
    eventName:"Literary Events",
    eventLink:"literary"
  },
  {
    eventName:"Social Events",
    eventLink:"social"
  },
  {
    eventName:"E-Sports",
    eventLink:"esports"
  }
]

const EVENTMARQUEE = () => {
  return (
    <>
      <div className="whitespace-nowrap w-full my-[20px]  flex justify-center  ">
        <Marquee autoFill={true} speed={70}>
          {eventsCategory.map((event, index) => (
            <Link key={index} href={`/events/${event.eventLink}`}>
              <div className="flex gap-5 items-center mr-[20px]">
                <div className="text-[22px] md:text-[28px]  font-bold tracking-tighter py-[20px]  ">
                  <span>{event.eventName}</span>
                </div>
                <div>
                  <Image
                    src={cursor}
                    alt="cursor"
                    className="w-[40px] md:w-[60px] aspect-square"
                  />
                </div>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default EVENTMARQUEE;
