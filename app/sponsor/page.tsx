"use client";

import React from "react";
import Link from "next/link";

import TRANSITION_WRAPPER from "../../clientComponents/transition";

const SPONSOR_OBJECT = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center  ">
        <div className="text-center">
          <div className="leading-tight">
            <span className="font-black text-[38px] sm:text-[48px] md:text-[64px]">
              Pravah 2024 Sponsors
            </span>
          </div>
          <div>
            <span className="text-[18px] sm:text-[24px] md:text-[32px] font-black">
              Coming Soon
            </span>
          </div>
          <div className="px-[20px] mt-[20px]">
            <span className="font-medium">
              Donate some money to Pravah.{" "}
              <Link href={"/sponsor/sponsorForm"}>
                <span className="underline font-bold">Click Here</span>
              </Link>{" "}
              Your donation is valuable to us.
              <br /> Every rupees counts
            </span>
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
