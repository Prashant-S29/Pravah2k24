"use client";

import { naac_logo, skit_logo, swamiji_logo, text3 } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { TITLEIMAGE } from "./motionDiv";

const INTROPAGE = () => {
  const [pageDisplay, setPageDisplay] = useState(false);

  return (
    <>
      <div
        className="w-full min-h-screen fixed flex justify-center items-center z-50 top-0 left-0 bg-white duration-500 "
        style={pageDisplay ? { top: "-150%" } : { display: "top-[0px]" }}
      >
        <div className="text-center my-[20px]">
          <div className="flex justify-center">
            <div className=" w-full sm:w-[400px]">
              <div className=" flex justify-center ">
                <div>
                  <Image src={skit_logo} alt="skitlogo" className="w-[80px]" />
                </div>
              </div>
              <div className="leading-tight sm:leading-normal">
                <span className="font-semibold text-[14px]   sm:text-[16px]">
                  Swami Keshvanad Institute of Technology, Management and
                  Gramothan, Jaipur
                </span>
              </div>
            </div>
          </div>
          <div className="text-[13px] sm:text-[16px] my-[20px]">
            <span>welcomes you to</span>
          </div>
          <div className="flex justify-center">
            <TITLEIMAGE />
          </div>
          <div className="flex justify-center my-[50px]">
            <button
              className="px-[20px] py-[12px] text-[13px] sm:text-[14px] rounded-full duration-200 shadow-[#787878] font-semibold bg-black
               text-white"
              onClick={() => {
                setPageDisplay(!pageDisplay);
              }}
            >
              <div className="flex items-center gap-2">
                <div>
                  <span>Explore</span>
                </div>
                <div className="text-[16px]">
                  <span> &rarr;</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default INTROPAGE;
