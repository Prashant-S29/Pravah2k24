

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { EventMenuLinks, priorEvents } from "@/constant";
import { eventMenuSlide, eventMenuLinkslide } from "@/utils/motion";
import TRANSITION_WRAPPER from "../../clientComponents/transition";
import Image from "next/image";
import { celebrityNight } from "@/assets";
import "./style.css"


const EVENTS_OBJECT = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const Cultural = [
    {
      Event: {
        1: "Event-1",
      },
      Timing: "100",
    },
    {
      Event: {
        1: "Event-1",
      },
      Timing: "11:00 am - 01:00 pm",
    },
    {
      Event: {
        1: "Event-1",
      },
      Timing: "11:30 am - 01:00 pm",
    },
    {
      Event: {
        1: "Event-1",
      },
      Timing: "11:30 am - 01:30 pm",
    },
    {
      Event: {
        1: "Event-1",
      },
      Timing: "11:30 am - 12:30 pm",
    },
    {
      Event: {
        1: "Event-1",
      },
      Timing: "01:00 pm - 03:00 pm",
    },
    {
      Event: {
        1: "Event-1",
      },
      Timing: "01:00 pm - 02:00 pm",
    },
    {
      Event: {
        1: "Event-1",
      },
      Timing: "01:00 pm - 02:00 pm",
    },
    {
      Event: {
        1: "The Mudventure",
      },
      Timing: "01:00 pm - 02:00 pm",
    },
    {
      Event: {
        1: "Engineers Day Celebration",
      },
      Timing: "02:00 pm - 03:30 pm",
    },
    {
      Event: {
        1: "Rejoice",
      },
      Timing: "03:30 pm onwards",
    },
  ];

  const Social = [
    {
      Event: {
        1: "Joist Kwik (Round 2)",
      },
      Timing: "08:15 am - 11:00 pm",
    },
    {
      Event: {
        1: "Quake Proof (Round 2)",
      },
      Timing: "08:15 am - 11:00 am",
    },
    {
      Event: {
        1: "Bowling Alley (Round 2)",
      },
      Timing: "08:15 am - 11:00 am",
    },
    {
      Event: {
        1: "Brick-O-Brick",
      },
      Timing: "09:00 am - 11:00 am",
    },
    {
      Event: {
        1: "Mix & Mould (Round 2)",
      },
      Timing: "09:00 am - 11:00 am",
    },
    {
      Event: {
        1: "Let the Brush Talk",
      },
      Timing: "09:00 am - 11:00 am",
    },
    {
      Event: {
        1: "Tower Craft",
      },
      Timing: "12:30 pm - 02:00 pm",
    },
    {
      Event: {
        1: "Kabad se Jugaad!",
      },
      Timing: "12:30 pm - 02:00 pm",
    },
    {
      Event: {
        1: "Workshop",
      },
      Timing: "01:00 pm - 02:00 pm",
    },
    {
      Event: {
        1: "Validatory",
      },
      Timing: "02:00 pm onwards",
    },
  ];

  const Technical = [
    {
      Event: {
        1: "Walkathon",
      },
      Timing: "07:00 am - 09:00 am",
    },
    {
      Event: {
        1: "Scavenger Hunt",
      },
      Timing: "09:00 am - 10:30 am",
    },
    {
      Event: {
        1: "Sports Battle",
      },
      Timing: "09:00 am Onwards",
    },
  ];

  return (
    <>
      <div
        className="fixed top-0 left-0 m-[20px] w-[60px] aspect-square rounded-full flex justify-start gap-3 items-center duration-300
         bg-[#000000] z-10"
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
              className="w-full sm:w-[300px] p-[10px] fixed top-0"
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
                        {/* <Link
                  href={`/event`}
                  className="my-[10px]"
                > */}
                        <div
                          onClick={() => setIsActive(false)}
                          className="hover:bg-slate-300 py-[7px] p-[20px]"
                        >
                          <span className="text-[20px] font-bold">
                            {menuLinks.navLinkInfo}
                          </span>
                        </div>
                        {/* <div className="w-full h-[1px] my-[5px] " /> */}
                        {/* </Link> */}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="text-center">
        <span className="text-[30px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-black">
          Previous year events
        </span>
      </div>
      <div className=" px-[20px] flex gap-5 flex-wrap justify-center my-[20px]">
        {priorEvents.map((eventDetail, index) => (
          <div
            key={index}
            className="w-full sm:w-[600px] shadow-md h-fit block sm:flex gap-5 bg-white rounded-[20px] border border-black p-[10px]"
          >
            <div className="flex justify-center">
              <Image
                src={eventDetail.eventPhoto}
                alt={eventDetail.eventName}
                className="object-cover object-top rounded-[17px] w-full sm:w-[250px] h-[200px]"
              />
            </div>
            <div className="mt-[10px]  text-center sm:text-left">
              <div>
                <span className="text-[24px] font-bold">
                  {eventDetail.eventName}
                </span>
              </div>
              <div className="mt-[20px] leading-none">
                <span className="text-[14px] font-medium">
                  Last Year Registrations
                </span>
              </div>
              <div className="leading-tight">
                <span className="text-[32px] sm:text-[42px]  font-black">
                  {eventDetail.eventRegistration}+
                </span>
              </div>
              {/* <button className="w-full text-[14px] bg-black text-white rounded-full py-[10px]">
                Register
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const EVENTS = () => {
  return TRANSITION_WRAPPER(EVENTS_OBJECT);
};

export default EVENTS;

