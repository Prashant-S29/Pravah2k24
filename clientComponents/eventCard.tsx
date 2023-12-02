"use client";

import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";
import { downarrow } from "@/public";
import Link from "next/link";

const MajorEventCard = ({
  id,
  imgUrl,
  title,
  eventLink,
  index,
  active,
  handleClick,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        className={`relative ${
          active === id ? "lg:-flex-[3.5] flex-[10]  cursor-default" : "lg-flex-[0.5] flex-[2] cursor-pointer  "
        }  items-center justify-center min-w-[150px] h-[500px] transition-[flex] duration-[0.7s] ease-out flex `}
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
          <div
            className="absolute leading-tight  bottom-0 p-4  lg:p-6 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] "
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            <span className="font-bold items-center  sm:text-[32px] flex gap-2  text-[18px] text-white">
              {title}
            </span>
            <Link href={eventLink}>
              <p
                className={`font-medium pt-[5px] lg:pt-0 text-[13px] sm:text-[14px] leading-tight text-white overflow-scroll
               duration-200 lg:h-fit`}
              >
                Explore More &rarr;
              </p>
            </Link>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default MajorEventCard;
