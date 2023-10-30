"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { pravahmap } from "@/assets";
import { saveAs } from "file-saver";

const saveFile = () => {
  saveAs(pravahmap.src, "map.png");
};

const MAP = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <div className="top-5 flex justify-center">
            <Image
              src={pravahmap}
              alt="pravahmap"
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

export default MAP;
