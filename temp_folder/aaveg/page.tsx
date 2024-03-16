"use client";

import AAVEG_EVENT_REG_CARDS from "@/clientComponents/aavegEventCard";
import { ANIMATEDTEXT12, TYPINGTEXT } from "@/clientComponents/motionDiv";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import EVENT_COORDINATOR_CARD from "@/components/eventCoordinatorCard";
import { aavegEventDetails, committeeHeads } from "@/constant";
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

      <div className="mt-[50px] w-full">
        {committeeHeads.map((heads, index) => (
          <div key={index} className="w-full">
            {heads.category === "aaveg" && (
              <div>
                <div>
                  <div className="text-center font-black text-[24px] my-5">
                    <span>Faculty Coordinator</span>
                  </div>
                  <div className="flex justify-center  gap-[20px] flex-wrap px-5">
                    {heads.facultyCoorinators.map((coordinator, index) => (
                      <div
                        key={index}
                        className=" p-5 bg-white w-full sm:w-[280px] border text-center border-black rounded-[15px]"
                      >
                        <div className="leading-tight">
                          <span className="text-[16px] font-semibold">
                            {coordinator.coordinatorName}
                          </span>
                        </div>
                        <div>
                          <span className="text-[14px] text-gray-500">
                            {coordinator.coordinatorContact}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-center font-black text-[24px] my-5">
                    <span>Student Coordinator</span>
                  </div>
                  <div className="flex justify-center  gap-[20px] flex-wrap px-5">
                    {heads.studentCoorinators.map((coordinator, index) => (
                      <div
                        key={index}
                        className=" p-5 bg-white w-full sm:w-[280px] border text-center border-black rounded-[15px]"
                      >
                        <div className="leading-tight">
                          <span className="text-[16px] font-semibold">
                            {coordinator.coordinatorName}
                          </span>
                        </div>
                        <div>
                          <span className="text-[14px] text-gray-500">
                            {coordinator.coordinatorContact}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const AAVEG = () => {
  return TRANSITION_WRAPPER(AAVEG_OBJECT);
};

export default AAVEG;
