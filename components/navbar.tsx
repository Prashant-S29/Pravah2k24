"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

import { skit_logo, textOne } from "@/assets";
import DROPDOWNPAGE from "@/clientComponents/dropdownPage";
import NAVLINK from "@/clientComponents/navlinks";

const NAVBAR = () => {
  return (
    <>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="w-full  top-0   z-50"
      >
        <div className=" sticky top-0 flex justify-evenly items-center py-[20px] text-[14px]">
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
                href="aaveg"
                navlink="ABOUT"
                linkinfo="Know more about SKIT, Jaipur."
                linkColor="#000000"
                linkInfoColor="000000"
                lineColor="#000000"
              />
            </span>
          </div>
          {/* <div>
            <Link href="/" className="flex gap-3">
              <Image
                src={textOne}
                alt="textTwo"
                className="w-[130px] md:w-[180px]"
              />
            </Link>
          </div> */}
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
          <div className="hidden lg:block">
            <span>
              <NAVLINK
                href="team"
                navlink="OUR TEAM"
                linkinfo="Members behind the curtains."
                linkColor="#000000"
                linkInfoColor="000000"
                lineColor="#000000"
              />
            </span>
          </div>
        </div>
      </motion.div>
      <div className="block lg:hidden">
        <DROPDOWNPAGE />
      </div>
      {/* <DROPDOWNPAGE /> */}
    </>
  );
};

export default NAVBAR;
