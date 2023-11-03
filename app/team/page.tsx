"use client";

import TRANSITION_WRAPPER from "@/clientComponents/transition";
import React from "react";

const TEAM_OBJECT = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center  ">
        <div className="text-center">
          <div className="leading-tight">
            <span className="font-black text-[38px] sm:text-[48px] md:text-[64px]">
              Team behind the curtains  
            </span>
          </div>
          <div>
            <span className="text-[18px] sm:text-[24px] md:text-[32px] font-black">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const TEAM = () => {
  return TRANSITION_WRAPPER(TEAM_OBJECT);
};

export default TEAM;
