"use client";

import { getEventDetails } from "@/fetchData";
import { downarrow } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import FutureDateTimer from "./remainingDays";

const EVENT_STATUS = () => {
  const [showLiveEventList, setShowLiveEventList] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<any>({});
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [liveEventsNumber, setLiveEventsNumber] = useState(0);
  const [isAnyEventLive, setIsAnyEventLive] = useState(false);

  useEffect(() => {
    const ineterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 3600000);

    return () => {
      clearInterval(ineterval);
    };
  }, []);

  const month = [
    "Januar",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleLiveEvent = (eventDate: string, eventTime: string) => {
    const date = currentDate.getDate(); // number
    let time = currentDate.getHours(); // number
    if (time > 12) {
      time = time - 12; // number
    }

    const liveEventDate = parseInt(eventDate.slice(0, 2)); // number
    const liveEventStartTime = parseInt(eventTime.split(":")[0]); // number
    const liveEventEndTime = parseInt(eventTime.split(":")[1].split("-")[1]); // number

    if (
      date === liveEventDate &&
      liveEventEndTime > time &&
      liveEventStartTime <= time
    ) {
      setIsAnyEventLive(true);
      return true;
    } else {
      // console.log("event is not live");
      return false;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getEventDetails();
      if (data["pravahEventsList"]) {
        setIsLoading(false);
      }
      setEvents(data);
    };

    fetchData();
  }, []);

  const pravahStartingDate = new Date("2024-03-11T00:00:00");

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
            {isLoading ? (
              <div className="w-full h-[80px] bg-gray-200 rounded-[10px]  p-2 my-1 ">
                <div className="w-full h-[20px] loaderCard_animation_two rounded-md" />
                <div className="w-full h-[40px] mt-1 loaderCard_animation_two rounded-md" />
              </div>
            ) : (
              <>
                {events["pravahEventsList"] ? (
                  events["pravahEventsList"].length === 0 ? (
                    <div className="text-center leading-tight mt-4 bg-gray-200 py-4 rounded-[10px]">
                      <div>
                        <span className="text-[20px] font-bold">
                          Pravah 2024
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">
                          No events availables
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {events["pravahEventsList"].map(
                        (eventDetail: any, index: number) => (
                          <div key={index}>
                            {handleLiveEvent(
                              eventDetail.eventDate,
                              eventDetail.eventTime
                            ) && (
                              <Link href="">
                                <div className="px-3 py-2 my-2 bg-gray-200 rounded-md">
                                  <div className="w-full flex justify-between items-center">
                                    <div>
                                      <span className="font-bold">
                                        {eventDetail.eventName}
                                      </span>
                                    </div>
                                    <div className="px-[8px] py-[3px] flex items-center gap-1 bg-white rounded-full  text-[10px]">
                                      <div className="w-[7px] h-[7px] bg-red-500 rounded-full" />
                                      <span className="font-semibold">
                                        LIVE
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <span>Time: {eventDetail.eventTime}</span>
                                  </div>
                                  <div>
                                    <span>Venue: {eventDetail.eventVenue}</span>
                                  </div>
                                </div>
                              </Link>
                            )}
                          </div>
                        )
                      )}
                      {!isAnyEventLive && (
                        <div className="text-center leading-tight mt-4 bg-gray-200 py-4 rounded-[10px]">
                          <div>
                            <span className="font-bold">Pravah 2024 is about it hit</span>
                          </div>
                          <FutureDateTimer futureDate={pravahStartingDate} />
                        </div>
                      )}
                      {events["pravahEventsList"].map(
                        (eventDetail: any, index: number) => (
                          <div key={index}>
                            {handleLiveEvent(
                              eventDetail.eventDate,
                              eventDetail.eventTime
                            ) === false && (
                              <Link href="">
                                <div className="px-3 py-2 my-2 bg-gray-200 rounded-md">
                                  <div className="w-full flex justify-between items-center">
                                    <div>
                                      <span className="font-bold">
                                        {eventDetail.eventName}
                                      </span>
                                    </div>
                                    <div className="px-[8px] py-[3px] flex items-center gap-1 bg-white rounded-full  text-[10px]">
                                      <div className="w-[7px] h-[7px] bg-green-500 rounded-full" />
                                      <span className="font-semibold">
                                        SOON
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <span>Time: {eventDetail.eventTime}</span>
                                  </div>
                                  <div>
                                    <span>Venue: {eventDetail.eventVenue}</span>
                                  </div>
                                </div>
                              </Link>
                            )}
                          </div>
                        )
                      )}
                    </>
                  )
                ) : (
                  ""
                )}
              </>
            )}
          </div>
          <div
            // disabled={isLoading}
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
            {currentDate.getDate()} {month[currentDate.getMonth()]},{" "}
            {currentDate.getFullYear()}{" "}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default EVENT_STATUS;
