"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2, 0.75)}
    className={`relative ${
      active === id ? "lg:-flex-[3.5] flex-[10]" : "lg-flex-[0.5] flex-[2]"
    }  items-center justify-center min-w-[150px] h-[500px] transition-[flex] duration-[0.7s] ease-out flex cursor-none`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover object-top rounded-[24px]  "
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[28px]  text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin[0, 0] ">
        {title}
      </h3>
    ) : (
      <div className="absolute descBoxAnimation     bottom-0 p-6 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] ">
        <span className="font-bold sm:text-[32px]  text-[18px] text-white">
          {title}
        </span>
        {/* <p className="font-medium text-[14px] leading-[20px] text-white">
          In publishing and graphic design, Lorem ipsum is
          a placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content.
        </p> */}
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
