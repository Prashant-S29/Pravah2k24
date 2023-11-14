"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  EventMenuLinks,
  eventCategoryDesc,
  testEventDetails,
} from "@/constant";
import { eventMenuSlide, eventMenuLinkslide } from "@/utils/motion";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import Image from "next/image";

import EVENT_REG_CARDS from "@/clientComponents/eventRegCard";

const TESTEVENTS_OBJECT = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  // const handleLinkClick =

  const handleActiveLink = (index: number) => {
    setIsActive(false);
    setActiveLink(index);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 m-[20px] mt-[50px] w-[60px] aspect-square rounded-full flex justify-start gap-3 items-center duration-300
         bg-[#000000] z-[15]  "
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <motion.div
              variants={eventMenuSlide}
              animate="enter"
              exit="exit"
              initial="initial"
              className="w-full sm:w-[300px] p-[10px] fixed top-0 z-10"
              style={{ height: window.innerHeight }}
            >
              <div className="w-full h-full bg-[#ffffff] border border-black  backdrop-blur-sm rounded-[20px] flex justify-center items-center right-0 ">
                <div className=" text-black w-full">
                  <div className="p-[20px]">
                    <span className="font-black text-[32px]">Events List</span>
                  </div>
                  <div>
                    {EventMenuLinks.map((menuLinks, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={eventMenuLinkslide} 
                        animate="enter"
                        exit="exit"
                        initial="initial"
                      >
                        <div
                          onClick={() => handleActiveLink(index)}
                          className={`py-[7px] p-[20px] ${activeLink===index?"":"hover:bg-slate-300"} `}
                          style={
                            activeLink === index
                              ? { backgroundColor: "#000000", color:"white" }
                              : {}
                          }
                        >
                          <span className="text-[18px] font-bold">
                            {menuLinks.navLinkInfo}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {eventCategoryDesc.map((categoryDetail, index) => (
        <div
          key={index}
          className={`${activeLink === index ? "block" : "hidden"}`}
        >
          <div className="text-center mx-[20px] leading-tight">
            <span className="text-[26px] sm:text-[24px] md:text-[32px] lg:text-[48px] font-black">
              {categoryDetail.eventCategoryName}
            </span>
          </div>
          <div className=" px-[20px] flex gap-5 flex-wrap justify-center my-[20px]">
            {testEventDetails.map((eventDetail, index) =>
              eventDetail.eventCategoryID === categoryDetail.eventCategoryID ? (
                <EVENT_REG_CARDS
                  key={index}
                  index={index}
                  eventDetail={eventDetail}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      ))}
    </>
  );
};

const TESTEVENTS = () => {
  return TRANSITION_WRAPPER(TESTEVENTS_OBJECT);
};

export default TESTEVENTS;
