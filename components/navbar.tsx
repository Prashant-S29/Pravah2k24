"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

import { textOne, paperbg } from "@/assets";
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
        <div className="  flex justify-evenly items-center py-[20px] text-[14px]">
          <div>
            <span>
              <NAVLINK
                href="events"
                navlink="EVENTS"
                linkinfo="Variety of events from endless domains."
              />
            </span>
          </div>
          <div>
            <span>
              <NAVLINK
                href="aaveg"
                navlink="AAVEG"
                linkinfo="Real games on live ground."
              />
            </span>
          </div>
          <div>
            <Link href="/">
              <Image src={textOne} alt="textTwo" className="w-[180px]" />
            </Link>
          </div>
          <div>
            <span>
              <NAVLINK
                href="sponsor"
                navlink="SPONSORS"
                linkinfo="Supporters of Pravah'24."
              />
            </span>
          </div>
          <div>
            <span>
              <NAVLINK
                href="team"
                navlink="OUR TEAM"
                linkinfo="Members behind the curtains."
              />
            </span>
          </div>
        </div>
      </motion.div>
      <DROPDOWNPAGE />
    </>
  );
};

export default NAVBAR;
