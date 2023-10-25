"use client";

import React, { useState } from "react";
import Image from "next/image";

import { dropdown } from "@/assets";

const DROPDOWNPAGE = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <div
        className="fixed left-[95%] -top-[20px] hover:top-0  duration-200 z-50"
        onClick={(e) => setDropDown(!dropDown)}
      >
        <Image src={dropdown} alt="dropdown" className="w-[40px]" />
      </div>
      <div
        className="fixed w-full h-[450px] bg-[#475151]  z-30 duration-200 "
        style={dropDown ? { top: "0px" } : { top: "-100vh" }}
      ></div>
    </>
  );
};

export default DROPDOWNPAGE;
