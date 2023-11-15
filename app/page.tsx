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

const HOME_OBJECT = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-center pt-[50px]   ">
        <div className="text-center w-full  ">
          <div>
            <TITLEIMAGE />
          </div>
          <div className="my-[50px]">
            {/* <TIMER /> */}
            <div className="text-center flex justify-center mt-[30px]">
              <div>
                <div>
                  <span className="font-bold">Scroll Down</span>
                </div>
                <div className="animate-bounce mt-[10px]">
                  <div className="rotate-90 ">
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center wx-full "
            data-cursor-exclusion
            data-cursor-size="80px"
          >
            <MARQUEEMOTION />
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <div>
          <TYPINGTEXT title="Pravah'24 Trailer" />
        </div>
        <div className="text-center">
          <ANIMATEDTEXT1 />
        </div>
        <div>
          <VIDEOBLOCK />
        </div>
      </div>
      <div className="mt-[50px]">
        <div>
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
        <div className="m-[20px] mt-[50px]">
          <ANIMATEDTEXT2 />
        </div>
        <GALLERY />
        <div className="m-[20px] mt-[50px]">
          <ANIMATEDTEXT8 />
          <PRIORSPONSORS />
        </div>
        <div className="px-[20px]">
          <ANIMATEDTEXT5 />
          <MAJOREVENTS />
        </div>
        <div className="mt-[50px]">
          <ANIMATEDTEXT4 />
        </div>
        <div>
          <CELEBRITYCARD />
        </div>
      </div>
    </>
  );
};

const HOME = () => {
  return TRANSITION_WRAPPER(HOME_OBJECT);
};

export default HOME;
