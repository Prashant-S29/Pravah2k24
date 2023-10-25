import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ANIMATEDTEXT1,
  ANIMATEDTEXT2,
  MARQUEEMOTION,
  TIMER,
  TITLEIMAGE,
  TYPINGTEXT,
  VIDEOBLOCK,
} from "@/clientComponents/motionDiv";
import IMAGEGALLERY from "@/clientComponents/imageGallery";

const HOME = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-center pt-[50px]">
        <div className="text-center w-full ">
          <div>
            <TITLEIMAGE />
          </div>
          <div className="my-[50px]">
            <TIMER />
          </div>
          <div
            className="flex justify-center wx-full "
            data-cursor-exclusion
            data-cursor-size="80px"
          >
            <MARQUEEMOTION />
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <div>
          <TYPINGTEXT title="| Pravah'24 Teaser" />
        </div>
        <div className="text-center">
          <ANIMATEDTEXT1 />
        </div>
        <div>
          <VIDEOBLOCK />
        </div>
      </div>
      <div className="mt-[50px]">
        <div>
          <IMAGEGALLERY />
        </div>
      </div>

      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default HOME;

{
  /* <div className=" absolute flex justify-between w-full -z-50">
          <motion.div
            variants={fadeUp("tween", 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
          >
            <Image src={wingOne} alt="wingOne" className="w-[350px]" />
          </motion.div>
          <motion.div
            variants={fadeUp("tween", 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
          >
            <Image src={wingTwo} alt="wingTwo" className="w-[350px]" />
          </motion.div>
        </div> */
}
