"use client";

import AAVEG_EVENT_REG_CARDS from "@/clientComponents/aavegEventCard";
import { ANIMATEDTEXT12, TYPINGTEXT } from "@/clientComponents/motionDiv";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import EVENT_COORDINATOR_CARD from "@/components/eventCoordinatorCard";
import { aavegEventDetails } from "@/constant";
import { aavegLoadingAnimation } from "@/public";
import Image from "next/image";
import React, { useState } from "react";

const AAVEG_OBJECT = () => {
  const [showText, setShowText] = useState(false);
  const [showLoadingAniamtion, setShowLoadingAniamtion] = useState(true);

  setTimeout(() => {
    setShowLoadingAniamtion(false);
  }, 2000);

  return (
    <>
      {showLoadingAniamtion && (
        <div className="w-full min-h-[70vh] flex justify-center items-center">
          {/* <video
            playsInline
            autoPlay
            muted
            // className="w-[100px]"
          >
            <source
              src="https://lottie.host/embed/cba9348e-a3bf-49bf-9cfb-2eacfce858fd/KsPC4f9j5h.json"
              type="video/mp4"
            />
          </video> */}
          <Image
            src={aavegLoadingAnimation}
            alt="aavegLoadingAnimation"
            className="w-[100px]"
          />
        </div>
      )}
      {showLoadingAniamtion === false && (
        <div className=" w-full min-h-[80vh]   rounded-[20px]  justify-center mt-[30px] text-center ">
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
                Welcome to AAVEG {"'"}24 !! one of the largest sports event in
                Jaipur is back with its 24th edition this march, that unites the
                vibrant spirit of the students through the thrill of sports. The
                annual sports fest of SKIT signifies a platform which encourage
                its participants to face challenges with courage, unwavering
                determination, perseverance and showcasing their sportsmanship.
                With an addition of celebrating the triumphs over setbacks. So
                get ready to feel the adrenaline rush over the thrilling faces
                and to prove yourself mettle at the sports extravaganza
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
      )}

      <div className="flex justify-center flex-wrap gap-[20px] px-[20px]">

      </div>
    </>
  );
};

const AAVEG = () => {
  return TRANSITION_WRAPPER(AAVEG_OBJECT);
};

export default AAVEG;
