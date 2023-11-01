"use client";

import TRANSITION_WRAPPER from "@/clientComponents/transition";
import React from "react";

const TEAM_OBJECT = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center  ">
        <div className="text-center">
          <div className="leading-tight">
            <span className="font-black text-[64px]">Coming Soon.</span>
          </div>
          <div>
            <span className="text-[32px] font-black">Stay Tuned!!</span>
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
