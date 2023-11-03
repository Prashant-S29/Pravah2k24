"use client";

import React from "react";
import TRANSITION_WRAPPER from "../../clientComponents/transition";

const ABOUT_OBJECT = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="leading-tight">
            <span className="font-black text-[38px] sm:text-[48px] md:text-[64px]">
              RTU #1 for 6 consicutive yrs.
            </span>
          </div>
          <div>
            <span className="text-[18px] sm:text-[24px] md:text-[32px] font-black">
              More Coming Soon!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const ABOUT = () => {
  return TRANSITION_WRAPPER(ABOUT_OBJECT);
};

export default ABOUT;
