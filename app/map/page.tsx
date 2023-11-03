
"use client";

import React from "react";
import Image from "next/image";
import { map } from "@/assets";
import { saveAs } from "file-saver";
import TRANSITION_WRAPPER from "../../clientComponents/transition";

const saveFile = () => {
  saveAs(map.src, "map.png");
};

const MAP_OBEJCT = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <div className="top-5 flex justify-center">
            <Image
              src={map}
              alt="map"
              className="w-full rounded-[20px]"
              data-cursor-text="Download"
              data-cursor-size="100px"
              onClick={saveFile}
            />
          </div>
          <div className="mt-[20px] flex justify-center px-[20px]">
            <button
              className="w-full md:w-fit px-[15px] py-[8px] rounded-full bg-black text-white text-[14xp] font-medium"
              onClick={saveFile}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const MAP = () => {
  return TRANSITION_WRAPPER(MAP_OBEJCT);
};

export default MAP;
