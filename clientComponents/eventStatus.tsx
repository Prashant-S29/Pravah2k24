"use client";

import React from "react";

const EVENT_STATUS = () => {
  return (
    <>
      <div className="fixed bottom-0 right-0 z-[30] m-[20px] bg-gray-700 px-[10px] py-[5px] rounded-[10px]">
        <div>
          <div>
            <span className="text-[12px] text-white font-semibold">
              Pravah Bot
            </span>
          </div>
          <div>
            <span className="text-[12px] font-semibold text-gray-400">
              Event Update
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default EVENT_STATUS;
