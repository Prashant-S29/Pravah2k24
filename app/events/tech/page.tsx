"use client";

import EVENTLIST from "@/components/eventList";
import React from "react";

const TECH_EVENTS = () => {
  return (
    <>
      <div>
        <EVENTLIST eventCategoryID="Technical Event" />
        {/* <span>HELLO</span> */}
      </div>
    </>
  );
};

export default TECH_EVENTS;