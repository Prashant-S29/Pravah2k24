"use client";

import EVENTLIST from "@/components/eventList";
import { committeeHeads } from "@/constant";
import React from "react";

const TECH_EVENTS = () => {
  return (
    <>
      <div>
        <EVENTLIST eventCategoryID="Technical Event" />
        {/* <span>HELLO</span> */}
      </div>
      <div className="mt-[50px] w-full">
        {committeeHeads.map((heads, index) => (
          <div key={index} className="w-full">
            {heads.category === "tech" && (
              <div>
                <div>
                  <div className="text-center font-black text-[24px] my-5">
                    <span>Faculty Coordinator</span>
                  </div>
                  <div className="flex justify-center  gap-[20px] flex-wrap px-5">
                    {heads.facultyCoorinators.map((coordinator, index) => (
                      <div
                        key={index}
                        className=" p-5 bg-white w-full sm:w-[280px] border text-center border-black rounded-[15px]"
                      >
                        <div className="leading-tight">
                          <span className="text-[16px] font-semibold">
                            {coordinator.coordinatorName}
                          </span>
                        </div>
                        <div>
                          <span className="text-[14px] text-gray-500">
                            {coordinator.coordinatorContact}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-center font-black text-[24px] my-5">
                    <span>Student Coordinator</span>
                  </div>
                  <div className="flex justify-center  gap-[20px] flex-wrap px-5">
                    {heads.studentCoorinators.map((coordinator, index) => (
                      <div
                        key={index}
                        className=" p-5 bg-white w-full sm:w-[280px] border text-center border-black rounded-[15px]"
                      >
                        <div className="leading-tight">
                          <span className="text-[16px] font-semibold">
                            {coordinator.coordinatorName}
                          </span>
                        </div>
                        <div>
                          <span className="text-[14px] text-gray-500">
                            {coordinator.coordinatorContact}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TECH_EVENTS;
