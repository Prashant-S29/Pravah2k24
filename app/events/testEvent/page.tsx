"use client";

import React from "react";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import EVENT_CATEGORY_CRAD from "@/clientComponents/eventCategoryCard";
import { eventCategoryDesc } from "@/constant";

const TESTEVENTS_OBJECT = () => {
  return (
    <>
      <div className="w-full min-h-[80vh] ">
        <div className="text-center  text-[28px] md:text-[42px] lg:text-[58px] font-black ">
          <span>Pravah 24 Events</span>
        </div>
        <div className="flex flex-wrap gap-[20px] justify-center mt-[50px] sm:mt-0 px-[10px]">
          {eventCategoryDesc.map((eventCategory, index) => (
            <EVENT_CATEGORY_CRAD
              key={index}
              eventCategory={eventCategory}
              imageState={index === 0 ? false : true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const TESTEVENTS = () => {
  return TRANSITION_WRAPPER(TESTEVENTS_OBJECT);
};

export default TESTEVENTS;
