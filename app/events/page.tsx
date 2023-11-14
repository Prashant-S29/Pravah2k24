

"use client";

import React, { useState } from "react";
import Link from "next/link";

import {  priorEvents } from "@/constant";
import TRANSITION_WRAPPER from "../../clientComponents/transition";
import Image from "next/image";

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
      
      <div className="text-center">
        <span className="text-[30px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-black">
          Previous year events
        </span>
      </div>
      <div className="text-center text-[30px] md:text-[36px] font-extrabold mt-[20px]">
        <span>
          {" "}
        Previous Year Events<span className="text-[#ff583e]"></span>
        </span>
      </div>

      <div className="flex justify-center mt-[20px]">
        <div
          className={`${
            activeButton === 0 ? "active-div" : "deactive-div"
          } text-[18px] `}
        >
          {Cultural.map((item, index) => (
            <div className="flex justify-center" key={index}>
              <div
                className="block md:flex justify-center items-center border-2 px-[30px] py-[20px] md:px-[40px] md:py-[20px] rounded-[20px] gap-[50px]
              border-[#ff583e] mb-[10px]"
              >
                <div className="max-[320px]:w-[210px] w-[250px] md:w-[250px]">
                  {Object.keys(item.Event).map((key, index) => (
                    <div key={index}>
                      <span className="font-bold">{item.Event[key]}</span>
                    </div>
                  ))}
                </div>
                <div className="max-[320px]:w-[210px] w-[250px] md:w-[200px]">
                  <span className="">{item.Timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${
            activeButton === 1 ? "active-div" : "deactive-div"
          } text-[18px] `}
        >
          {Social.map((item, index) => (
            <div className="flex justify-center" key={index}>
              <div
                className="block md:flex justify-center items-center border-2 px-[40px] py-[20px] rounded-[20px] gap-[50px]
              border-[#ff583e] mb-[10px]"
              >
                <div className="max-[320px]:w-[210px] w-[250px] md:w-[250px]">
                  {Object.keys(item.Event).map((key, index) => (
                    <div key={index}>
                      <span className="font-bold">{item.Event[key]}</span>
                    </div>
                  ))}
                </div>
                <div className="max-[320px]:w-[210px] w-[250px] md:w-[200px]">
                  <span className="">{item.Timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${
            activeButton === 2 ? "active-div" : "deactive-div"
          } text-[18px] `}
        >
          {Technical.map((item, index) => (
            <div className="flex justify-center" key={index}>
              <div
                className="block md:flex justify-center items-center border-2 px-[40px] py-[20px] rounded-[20px] gap-[50px]
              border-[#ff583e] mb-[10px]"
              >
                <div className="max-[320px]:w-[210px] w-[250px] md:w-[250px]">
                  {Object.keys(item.Event).map((key, index) => (
                    <div key={index}>
                      <span className="font-bold">{item.Event[key]}</span>
                    </div>
                  ))}
                </div>
                <div className="max-[320px]:w-[210px] w-[250px] md:w-[200px]">
                  <span className="">{item.Timing}</span>
                </div>
              </div>
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

