"use client";

import React, { useState } from "react";
import { ANIMATEDTEXT19 } from "@/clientComponents/motionDiv";
import { dayWiseEvents } from "@/constant";

const DAY_WISE_SCHEDULE = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <>
      <div>
        <ANIMATEDTEXT19 />
      </div>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {Array(3)
          .fill(" ")
          .map((value, index) => (
            <button
              key={index}
              className={`flex items-center justify-center gap-4 border border-black whitespace-nowrap px-5 py-2 ${
                index === activeDay
                  ? "bg-black text-white font-medium"
                  : "bg-gray-200 text-black font-semibold "
              }  rounded-full text-[14px]  text-center`}
              onClick={() => {
                setActiveDay(index);
              }}
            >
              Day {index + 1}
              {index === activeDay && (
                <div>
                  <span>{13 + index}th March, 2024</span>
                </div>
              )}
            </button>
          ))}
      </div>
      {activeDay === 0 && (
        <div className="mt-5">
          {dayWiseEvents.map((eventDetails, index) => (
            <div key={index}>
              {eventDetails.day === "1" && (
                <div className="flex justify-center flex-wrap px-5 gap-5">
                  {eventDetails.events.map((eventDetail, index) => (
                    <div key={index} className="w-full sm:w-[250px] p-5 rounded-[20px] bg-white border border-black ">
                      <div className="leading-tight">
                        <span className="text-[16px] font-bold">
                          {eventDetail.eventName}
                        </span>
                      </div>
                      <div className="leading-tight">
                        <span className="text-[14px] text-gray-600">
                          {eventDetail.eventTime}
                        </span>
                      </div>
                      <div className="leading-tight">
                        <span className="text-[14px] text-gray-600">
                          {eventDetail.eventVenue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {activeDay === 1 && (
        <div className="mt-5">
          {dayWiseEvents.map((eventDetails, index) => (
            <div key={index}>
              {eventDetails.day === "2" && (
                <div className="flex justify-center flex-wrap px-5 gap-5">
                  {eventDetails.events.map((eventDetail, index) => (
                    <div key={index} className="w-full sm:w-[250px] p-5 rounded-[20px] bg-white border border-black ">
                      <div className="leading-tight">
                        <span className="text-[16px] font-bold">
                          {eventDetail.eventName}
                        </span>
                      </div>
                      <div className="leading-tight">
                        <span className="text-[14px] text-gray-600">
                          {eventDetail.eventTime}
                        </span>
                      </div>
                      <div className="leading-tight">
                        <span className="text-[14px] text-gray-600">
                          {eventDetail.eventVenue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {activeDay === 2 && (
        <div className="mt-5">
          {dayWiseEvents.map((eventDetails, index) => (
            <div key={index}>
              {eventDetails.day === "3" && (
                <div className="flex justify-center flex-wrap px-5 gap-5">
                  {eventDetails.events.map((eventDetail, index) => (
                    <div key={index} className="w-full sm:w-[250px] p-5 rounded-[20px] bg-white border border-black ">
                      <div className="leading-tight">
                        <span className="text-[16px] font-bold">
                          {eventDetail.eventName}
                        </span>
                      </div>
                      <div className="leading-tight">
                        <span className="text-[14px] text-gray-600">
                          {eventDetail.eventTime}
                        </span>
                      </div>
                      <div className="leading-tight">
                        <span className="text-[14px] text-gray-600">
                          {eventDetail.eventVenue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DAY_WISE_SCHEDULE;
