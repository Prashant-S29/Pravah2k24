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
import { celebrityNight } from "@/assets";

const EVENTCARDS = ({ index, eventDetail }) => {
  const remainingSlots =
    eventDetail.eventMaxParicipationLimit -
    eventDetail.eventCurrentParticipation;

  const [detailDisplay, setDetailDisplay] = useState(false);
  return (
    <div
      key={index}
      className="w-full sm:w-fit h-fit block gap-5 bg-white rounded-[20px] border border-black p-[10px]"
    >
      <div className="flex justify-center overflow-hidden w-full sm:w-[300px]  h-[200px]">
        <div
          className="duration-300 rounded-[17px] w-full sm:w-[300px]"
          style={
            detailDisplay
              ? { transform: "translateY(-100%)" }
              : {
                  transform: "translateY(0)",
                }
          }
        >
          <div>
            <Image
              src={eventDetail.eventPhotoLink}
              alt="lol"
              className="object-cover object-top rounded-[17px] w-full sm:w-[300px] h-[200px]"
            />
          </div>
          <div className="text-center font-medium  w-full sm:w-[300px] h-[200px] bg-slate-200 flex justify-center items-center rounded-[17px]   py-[10px] ">
            <div className="px-[10px] text-[14px]  sm:text-[16px]">
              <div>
                <span>
                  Registration Fee: <b>₹{eventDetail.eventRegistrationFee}</b>/{" "}
                  {eventDetail.eventType}
                </span>
              </div>
              <div className="w-full h-[0.5px] bg-black rounded-full my-[5px]" />
              <div>
                <span>Date: {eventDetail.eventDate}</span>
              </div>
              <div className="w-full h-[0.5px] bg-black rounded-full my-[5px]" />

              <div>
                <span>Time: {eventDetail.eventTime}</span>
              </div>
              <div className="w-full h-[0.5px] bg-black rounded-full my-[5px]" />

              <div>
                <span>Venue: {eventDetail.eventVenue}</span>
              </div>
              {/* <div className="w-full h-[0.5px] bg-black rounded-full my-[5px]" /> */}
              <div className="w-full mt-[10px]">
                <Link href="/">
                  <button className="w-full px-[20px] py-[8px] text-[12px] sm:text-[14px] font-semibold text-white bg-black rounded-[8px]">
                    Download Brochure
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10px]  text-center  ">
        <div>
          <span className="text-[18px] sm:text-[22px] font-bold">
            {eventDetail.eventName}
          </span>
        </div>

        {remainingSlots <= 0 ? (
          <div>
            <span className="text-[14px] sm:text-[16px] font-medium">
              Registration Full
            </span>
          </div>
        ) : (
          <div>
            <span className="text-[14px] sm:text-[16px] font-medium">
              Slots Left: {remainingSlots}
              /80
            </span>
          </div>
        )}
      </div>
      <div className="text-center duration-300 "></div>

      <div className="w-full flex  justify-center gap-2 mt-[10px]">
        {remainingSlots > 0 ? (
          <div className="w-full">
            <Link href="/">
              <button className="w-full px-[20px] py-[8px] text-[12px] sm:text-[14px] font-semibold text-white bg-black rounded-[8px]">
                Register
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className="w-full">
          <button
            className="w-full px-[20px] py-[8px] text-[12px] sm:text-[14px] font-semibold text-white bg-black rounded-[8px]"
            onClick={(e) => {
              setDetailDisplay(!detailDisplay);
            }}
          >
            {detailDisplay ? "Hide Details" : "Show Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

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
         bg-[#000000] z-20  "
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
                              ? { backgroundColor: "rgb(148 163 184 )" }
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
                <EVENTCARDS
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
