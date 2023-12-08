"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

import { navbarText, dropdown } from "@/public";
import DROPDOWNPAGE from "@/clientComponents/dropdownPage";

import NAVLINK from "@/clientComponents/navlinks";
import LATESTNEWS from "@/components/latestNews";

const NAVBAR = () => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <LATESTNEWS />
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="w-full  top-0   z-50"
      >
        {/* <INTROPAGE /> */}
        <div className=" sticky top-0 flex justify-evenly items-center py-[20px] text-[14px]">
          <div className="hidden lg:block">
            <span>
              <NAVLINK
                href="about"
                navlink="ABOUT"
                linkinfo="Know more about SKIT M&G, Jaipur."
                linkColor="#000000"
                linkInfoColor="000000"
                lineColor="#000000"
              />
            </span>
          </div>
          <div className="hidden lg:block">
            <span>
              <NAVLINK
                href="aaveg"
                navlink="AAVEG"
                linkinfo="Sports Battle on real ground."
                linkColor="#000000"
                linkInfoColor="000000"
                lineColor="#000000"
              />
            </span>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div>
              <Link href="/" className="flex gap-3">
                <Image
                  src={navbarText}
                  alt="navbarText"
                  className="w-[130px] md:w-[180px]"
                />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <span>
              <NAVLINK
                href="events"
                navlink="EVENTS"
                linkinfo="Variety of events from endless domains."
                linkColor="#000000"
                linkInfoColor="000000"
                lineColor="#000000"
              />
            </span>
          </div>
          <div className="hidden lg:block">
            <span>
              <NAVLINK
                href="sponsor"
                navlink="SPONSORS"
                linkinfo="Supporters of Pravah'24."
                linkColor="#000000"
                linkInfoColor="000000"
                lineColor="#000000"
              />
            </span>
          </div>
        </div>
      </motion.div>
      {/* <DROPDOWNPAGE /> */}
      {/* dropdown */}
      <div
        className="fixed right-[20px]   duration-200 z-30"
        // onClick={handleDropDown}
        onMouseEnter={handleDropDown}
        style={dropDown === false ? { top: "10px" } : { top: "30px" }}
      >
        <Image src={dropdown} alt="dropdown" className="w-[30px] md:w-[40px]" />
        {/* <span>HELLO WORLD</span> */}
      </div>
      <div
        className="fixed w-full h-fit bg-[#405656]  z-20 duration-200 p-[20px] rounded-b-[20px] shadow-lg  "
        style={dropDown ? { top: "30px" } : { top: "-100vh" }}
      >
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="/"
              navlink="HOME"
              linkinfo="Pravah'24 Home."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="events"
              navlink="EVENTS"
              linkinfo="Variety of events from endless domains."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="aaveg"
              navlink="AAVEG"
              linkinfo="Sports Battle on real ground."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="about"
              navlink="ABOUT"
              linkinfo="Know more about SKIT, Jaipur."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="sponsor"
              navlink="SPONSORS"
              linkinfo="Supporters of Pravah'24."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="team"
              navlink="OUR TEAM"
              linkinfo="Members behind the curtains."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default NAVBAR;
