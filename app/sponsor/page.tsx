"use client";

import React from "react";
import TRANSITION_WRAPPER from "../../clientComponents/transition";

const SPONSOR_OBJECT = () => {
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

const SPONSOR = () => {
  return TRANSITION_WRAPPER(SPONSOR_OBJECT);
};

export default SPONSOR;
