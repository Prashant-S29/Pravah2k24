"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { EventMenuLinks, priorEvents } from "@/constant";
import { eventMenuSlide, eventMenuLinkslide } from "@/utils/motion";
import TRANSITION_WRAPPER from "../../clientComponents/transition";
import Image from "next/image";
import { celebrityNight } from "@/assets";

const EVENTS_OBJECT = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      
      <div className="text-center">
        <span className="text-[30px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-black">
          Previous year events
        </span>
      </div>
      <div className="font-medium text-center my-[10px] mx-[20px]">
        <span>
          Event Page for Pravah 2024. <br />
          <Link href="/events/testEvent">
            <span className="underline font-bold">Click Here</span>
          </Link>
        </span>
      </div>
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
                className="object-cover object-top rounded-[17px] w-full sm:w-[250px] h-[200px]"
              />
            </div>
            <div className="mt-[10px]  text-center  ">
              <div>
                <span className="text-[24px] font-bold">
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
