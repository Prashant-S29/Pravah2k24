"use client";

import EVENTLIST from "@/components/eventList";
import React from "react";

const NON_TECH_EVENTS = () => {
  return (
    <>
      <div>
        <EVENTLIST eventCategoryID="Non Technical Event" />
        {/* <span>HELLO</span> */}
      </div>
    </>
  );
};

export default NON_TECH_EVENTS;
