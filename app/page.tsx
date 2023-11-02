"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ANIMATEDTEXT1,
  ANIMATEDTEXT2,
  ANIMATEDTEXT3,
  ANIMATEDTEXT4,
  ANIMATEDTEXT5,
  ANIMATEDTEXT6,
  ANIMATEDTEXT7,
  GALLERY,
  MARQUEEMOTION,
  STATS,
  TIMER,
  TITLEIMAGE,
  TYPINGTEXT,
  VIDEOBLOCK,
} from "@/clientComponents/motionDiv";

import { map, pravahmap, sponsorOne, testImage } from "@/assets";
import MAJOREVENTS from "@/clientComponents/majorCard";
import MAP from "@/app/map/page";
import CELEBRITYCARD from "@/clientComponents/celebrityCard";

import TRANSITION_WRAPPER from "@/clientComponents/transition";
import PRIORSPONSORS from "@/clientComponents/priorSponsor";

const HOME_OBJECT = () => {
  return (
    <>
      <div className="hidden md:block fixed bottom-5 right-5 z-50">
        <Link href="/map">
          <Image src={map} alt="map" className="w-[100px]" />
        </Link>
      </div>
      <div className="w-full h-fit flex justify-center pt-[50px]   ">
        <div className="text-center w-full  ">
          <div>
            <TITLEIMAGE />
          </div>
          <div className="my-[50px]">
            <TIMER />
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
          <TYPINGTEXT title="| Pravah'24 Trailer" />
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
          <TYPINGTEXT title="| Flashback" />
          <div className="block max-[450px]:hidden">
            <ANIMATEDTEXT3 />
          </div>
          <div className="hidden max-[450px]:block">
            <ANIMATEDTEXT6 />
            <ANIMATEDTEXT7 />
          </div>
        </div>
        <div>
          <STATS />
        </div>
        <div className="m-[20px] mt-[50px]">
          {/* <GALLERY /> */}
          <PRIORSPONSORS/>
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
