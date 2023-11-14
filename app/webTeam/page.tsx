"use client";

import { celebrityNight, dj } from "@/assets";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import Image from "next/image";
import React from "react";

const WEBTEAM_OBJECT = () => {
  return (
    <>
      <div className="w-full flex min-h-[80vh] justify-center">
        <div className="w-full text-center">
          <div>
            <span className="font-black text-[38px] sm:text-[48px] md:text-[64px]">
              Web Team Pravah
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const WEBTEAM = () => {
  return TRANSITION_WRAPPER(WEBTEAM_OBJECT);
};

export default WEBTEAM;
