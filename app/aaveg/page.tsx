"use client";

import AAVEG_EVENT_REG_CARDS from "@/clientComponents/aavegEventCard";
import { ANIMATEDTEXT12, TYPINGTEXT } from "@/clientComponents/motionDiv";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import { aavegEventDetails } from "@/constant";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { download } from "@/assets";

const AAVEG_OBJECT = () => {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <div className=" w-full min-h-[80vh]  rounded-[20px] flex justify-center mt-[30px] text-center ">
        <div>
          <div>
            <TYPINGTEXT title="Sports Event" />
            <ANIMATEDTEXT12 />
            {/* <div>
              <span className="font-bold">17th - 19th April, 2023</span>
            </div> */}
          </div>
          <div className="mx-[20px]  lg:mx-[200px]   text-[14px] sm:text-[16px] mt-[10px]">
            <span>
              One of the biggest fests in Jaipur, {'"'}AAVEG{'"'}, is back with
              its glamour this April. The annual sports event of SKIT Jaipur,
              since its inception, has been a stage for teams to showcase their
              talent by competing against the region{"'"}s best players.
              <span className="hidden sm:flex">
                The event is all set to witness excitement and competitiveness,
                being an addition and no doubt a browsing success; the first
                will be fenced with a lot of glory. So get ready to feel the
                adrenaline rush in this thrilling face, prepare, and train
                yourself to prove your mettle at the sports extravaganza.
              </span>
              <div
                className={`flex sm:hidden overflow-hidden duration-200 ${
                  showText ? "max-[350px]:h-[170px] h-[130px]" : "h-0"
                }`}
              >
                The event is all set to witness excitement and competitiveness,
                being an addition and no doubt a browsing success; the first
                will be fenced with a lot of glory. So get ready to feel the
                adrenaline rush in this thrilling face, prepare, and train
                yourself to prove your mettle at the sports extravaganza.
              </div>
            </span>
          </div>
          <div className="block sm:hidden">
            <span
              className="font-semibold text-[15px] duration-300"
              onClick={() => {
                setShowText(!showText);
              }}
            >
              ...read {showText ? "less" : "more"}
            </span>
          </div>
          {/* <div className=" my-[20px] flex justify-center">
            <Link href="/">
              <button className=" px-[20px] flex items-center gap-1  py-[8px] text-[12px] sm:text-[14px] font-semibold text-white bg-black rounded-[8px]">
                AAVEG Schedule
                <Image
                  src={download}
                  alt="download"
                  className="w-[20px] sm:w-[25px] aspect-square"
                />
              </button>
            </Link>
          </div> */}
          {/* <div className="mt-[10px] text-[28px] md:text-[36px] lg:text-[42px] font-black px-[20px] leading-tight ">
            <span>GAMES & ACTIVITIES</span>
          </div> */}
          <div>
            <div className=" px-[20px] flex gap-5 flex-wrap justify-center my-[20px]">
              {aavegEventDetails.map((eventDetail, index) => (
                <AAVEG_EVENT_REG_CARDS
                  key={index}
                  index={index}
                  eventDetail={eventDetail}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AAVEG = () => {
  return TRANSITION_WRAPPER(AAVEG_OBJECT);
};

export default AAVEG;
