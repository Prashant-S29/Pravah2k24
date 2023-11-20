"use client";

import React from "react";
import Link from "next/link";

import { priorEvents } from "@/constant";
import TRANSITION_WRAPPER from "../../clientComponents/transition";
import Image from "next/image";

const EVENTS_OBJECT = () => {
  return (
    <>
      <div className="font-medium text-center my-[10px] mx-[20px] text-[14px] sm:text-[16px]">
        <span>Highlights</span>
      </div>
      <div className="text-center leading-none">
        <span className="text-[30px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-black">
          Prior Events
        </span>
      </div>
      {/* <div className="font-medium text-center my-[10px] mx-[20px]">
        <span>
          Event Page for Pravah 2024. <br />
          <Link href="/events/testEvent">
            <span className="underline font-bold">Click Here</span>
          </Link>
        </span>
      </div> */}
      <div className=" px-[20px] flex gap-5 flex-wrap justify-center my-[20px]">
        {priorEvents.map((eventDetail, index) => (
          <div
            key={index}
            className="w-full sm:w-fit h-fit block gap-5 bg-white rounded-[20px] border border-black p-[10px]"
          >
            <div className="flex justify-center">
              <Image
                src={eventDetail.eventPhoto}
                alt={eventDetail.eventName}
                blurDataURL={eventDetail.eventPhoto.src}
                placeholder="blur"
                className="object-cover object-top rounded-[17px] w-full sm:w-[250px] h-[200px]"
              />
            </div>
            <div className="mt-[10px]  text-center  ">
              <div>
                <span className="text-[20px] font-extrabold">
                  {eventDetail.eventName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const EVENTS = () => {
  return TRANSITION_WRAPPER(EVENTS_OBJECT);
};

export default EVENTS;
