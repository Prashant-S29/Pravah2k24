"use client";

import { getEventDetails } from "@/fetchData";
import { downarrow } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FutureDateTimer from "./remainingDays";

const EVENT_STATUS = () => {
  const [showLiveEventList, setShowLiveEventList] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [activeDay, setActiveDay] = useState(0);

  return (
    <>
      <div
        className={`fixed  duration-300 shadow-xl
        ${
          showLiveEventList ? "w-[280px] sm:w-[300px]" : "w-[120px] -mr-[88px]"
        }  bottom-0 right-0 z-[30] m-[10px] bg-white border border-black  rounded-[10px]`}
      >
        <div className="relative">
          <div
            className={`flex justify-between items-center bg-white text-black   cursor-pointer gap-[50px] px-[10px] duration-300 py-2
            ${showLiveEventList ? "rounded-t-[9px] " : "rounded-[9px]"}
            `}
            onClick={() => {
              setShowLiveEventList(!showLiveEventList);
            }}
          >
            <div className="flex items-center">
              <div className="min-w-[15px] aspect-square rounded-full bg-black mr-2" />
              <div className="leading-none whitespace-nowrap">
                <span className="text-[13px]  font-semibold ">Insider</span>
              </div>
              <div
                className={`${
                  showLiveEventList ? "w-[100%]" : "w-0"
                } duration-300 whitespace-nowrap overflow-hidden`}
              >
                <span className="text-[13px]  font-semibold">
                  &nbsp;- Event Bot
                </span>
              </div>
            </div>
            <div>
              <Image
                src={downarrow}
                alt="downarrow"
                className={`w-[13px] duration-300 brightness-0 ${
                  showLiveEventList ? "rotate-0 block" : "rotate-180 hidden"
                }`}
              />
            </div>
          </div>
          {showLiveEventList && (
            <div className="w-full h-[0.5px] bg-gray-500 " />
          )}
          <div
            className={`px-2 text-[14px]  font-medium max-h-[350px]  ${
              showLiveEventList
                ? "h-[350px] overflow-y-scroll pb-[50px]"
                : "h-0 overflow-hidden"
            } duration-300`}
          >
            <div className="pt-2">
              <span className="font-semibold">
                Hello 👋 I am Insider, an event bot designed by Pravah Web Team
                to provide you the latest updates of all events
              </span>
            </div>

            <div className="w-full flex">
              {Array(3)
                .fill(" ")
                .map((value, index) => (
                  <div
                    key={index}
                    className={`${
                      activeDay === index
                        ? "w-[80%] "
                        : "w-[10%] "
                    }  duration-300 overflow-hidden rounded-full text-[12px]`}
                    onClick={() => {
                      setActiveDay(index);
                    }}
                  >
                    <div
                      className={`flex justify-center items-center gap-2 whitespace-nowrap px-3 py-2 
                    ${
                      activeDay === index
                        ? " bg-black text-white"
                        : " bg-gray-300 text-black"
                    } 
                    `}
                    >
                      <div>
                        <span>Day 1</span>
                      </div>
                      <div>
                        <span>13th March, 2023</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div>
              <span>{13 + activeDay}th March, 2024</span>
            </div>
            <div className="relative w-full h-full flex justify-center items-start">
              <div
                className={`w-full absolute h-[150px] bg-gray-200 duration-300 rounded-[20px] ${
                  activeDay === 0 ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`w-full absolute h-[150px] bg-gray-300 duration-300 rounded-[20px] ${
                  activeDay === 1 ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`w-full absolute h-[150px] bg-gray-400 duration-300 rounded-[20px] ${
                  activeDay === 2 ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>

          <div
            className={`absolute overflow-hidden px-4 ${
              showLiveEventList ? "h-[30px] py-1" : "h-0"
            } duration-300  ${
              isLoading ? "bg-gray-400" : "bg-black"
            } text-white w-full rounded-b-[9px] text-center  text-[12px] flex items-center font-medium
            z-[20] bottom-0 left-0`}
          >
            {/* See live events */}
            Pravah 2024
            <span className="w-[3px] mx-2 aspect-square bg-white rounded-full" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default EVENT_STATUS;
