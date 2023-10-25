// "use client";

import React from "react";
// import { useTime } from "react-timer-hook";

const COUNTDOWN = () => {
  // const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  return (
    // <div style={{ textAlign: "center" }}>
    //   <div style={{ fontSize: "100px" }}>
    //     <span>
    //       {hours}:{minutes}
    //     </span>
    //   </div>
    // </div>
    <>
      <div className="flex justify-center gap-x-5 w-full items-center">
        <div className="text-center" >
          <div className="leading-tight">
            <span className="text-[32px] font-black">05</span>
          </div>
          <div>
            <span className="text-[14px]">WEEKS</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-[20px]">{":"}</span>
        </div>
        <div>
          <div className="leading-tight">
            <span className="text-[32px] font-black">03</span>
          </div>
          <div>
            <span className="text-[14px]">DAYS</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-[20px]">{":"}</span>
        </div>

        <div>
          <div className="leading-tight">
            <span className="text-[32px] font-black">19</span>
          </div>
          <div>
            <span className="text-[14px]">HOURS</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-[20px]">{":"}</span>
        </div>

        <div>
          <div className="leading-tight">
            <span className="text-[32px] font-black">29</span>
          </div>
          <div>
            <span className="text-[14px]">MINUTES</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default COUNTDOWN;
