"use client";

import React from "react";

import {
  ANIMATEDTEXT1,
  ANIMATEDTEXT2,
  ANIMATEDTEXT3,
  ANIMATEDTEXT4,
  ANIMATEDTEXT5,
  ANIMATEDTEXT6,
  ANIMATEDTEXT7,
  ANIMATEDTEXT8,
  GALLERY,
  MARQUEEMOTION,
  STATS,
  TIMER,
  TITLEIMAGE,
  TYPINGTEXT,
  VIDEOBLOCK,
} from "@/clientComponents/motionDiv";

import MAJOREVENTS from "@/clientComponents/majorCard";
import CELEBRITYCARD from "@/clientComponents/celebrityCard";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import PRIORSPONSORS from "@/clientComponents/priorSponsor";
import TITLETEXTANIMATION from "@/clientComponents/titleTextAnimation";
import TRIGGER from "@/clientComponents/trigger";
import TRIGGERTWO from "@/clientComponents/triggerTwo";
import TAG_PARA from "@/clientComponents/tagParagraph";
import TIMERCOUNT from "@/clientComponents/countdown";
import DATES from "@/clientComponents/dates";
import EVENT_STATUS from "@/clientComponents/eventStatus";
import CELEBRITY from "@/components/celebrity";
import DAY_WISE_SCHEDULE from "@/components/daywiseschedule";
import Link from "next/link";

const HOME_OBJECT = () => {
  return (
    <>
      <div className="w-full   flex relative justify-center">
        <div className="mt-[50px]">
          <TITLETEXTANIMATION />
          <DATES />
          {/* <EVENT_STATUS /> */}
        </div>
      </div>
      <MARQUEEMOTION />
      <div>
        {/* <DAY_WISE_SCHEDULE /> */}
        <CELEBRITY />
      </div>
      <div className="mt-[50px]">
        <div>
          <VIDEOBLOCK />
        </div>
      </div>
      <div className="mt-[50px]">
        <TYPINGTEXT title="Flashback" />
        <div className="block max-[450px]:hidden">
          <ANIMATEDTEXT3 />
        </div>
        <div className="hidden max-[450px]:block">
          <ANIMATEDTEXT6 />
        </div>
        <div className="hidden max-[450px]:block">
          <ANIMATEDTEXT7 />
        </div>
      </div>
      <div>
        <STATS />
      </div>
      <div className="mt-[50px]">
        {/* <TRIGGER /> */}
        <ANIMATEDTEXT2 />
        <GALLERY />
      </div>
      {/* <div className="m-[20px] mt-[50px]">
        <ANIMATEDTEXT8 />
        <PRIORSPONSORS />
      </div> */}
      <div className="px-[20px] mt-[30px]">
        <ANIMATEDTEXT5 />
        <MAJOREVENTS />
      </div>
      <div className="mt-[80px]">
        <TRIGGERTWO />
      </div>
    </>
  );
};

const TEMP_HOME_OBJ = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center px-4 text-center">
        <div>
          <div>
            <span className="text-[18px] sm:text-[24px] font-black">
              This site is no longer available
            </span>
          </div>
          <div>
            <span className="text-[14px] sm:text-[16px] font-medium">
              meanwhile checkout{" "}
              <Link
                href="https://code-prashant.vercel.app"
                target="_blank"
                className="text-blue-500 underline"
              >
                Code-Prashant
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const HOME = () => {
  return TRANSITION_WRAPPER(TEMP_HOME_OBJ);
};

export default HOME;
