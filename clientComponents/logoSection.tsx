"use client";

import React, { useState } from "react";

const LOGOSECTION = () => {
  const [sliderViwe, setSliderViwe] = useState(false);

  return (
    <>
      <div className=" w-full overflow-hidden">
        <div
          className=" absolute w-[300px] h-[100px] right-0 rounded-l-full bg-[#000000] duration-300 ease-in-out"
          onClick={() => {
            setSliderViwe(!sliderViwe);
          }}
          style={
            sliderViwe ? { marginRight: "0px" } : { marginRight: "-250px" }
          }
        />
      </div>
    </>
  );
};

export default LOGOSECTION;
